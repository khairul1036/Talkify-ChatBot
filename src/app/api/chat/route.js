
import clientPromise from "../../../lib/mongodb";
import axios from "axios"; // Import axios

// Handle POST request
export async function POST(req) {
  const client = await clientPromise;
  const db = client.db();
  const chatCollection = db.collection("chats");

  const { message, userEmail } = await req.json();

  // Check if the message is provided
  if (!message) {
    return new Response(
      JSON.stringify({ error: "Message cannot be empty" }),
      {
        status: 400,
      }
    );
  }

  try {
    // Step 1: Make the API request to EchoGPT
    const apiResponse = await axios.post(
      "https://api.echogpt.live/v1/chat/completions",
      {
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: message },
        ],
        model: "EchoGPT",
      },
      {
        headers: {
          "x-api-key": `${process.env.ECHOGPT_API_KEY}`, // Replace with your actual API key
        },
      }
    );

    const assistantResponse = apiResponse.data.choices[0].message.content;
    console.log("assistantResponse--------------->", assistantResponse);

    // Step 2: Check if the user already has a chat session
    const existingSession = await chatCollection.findOne({
      userEmail: userEmail,
    });

    const timestamp = new Date();

    let updatedChat;

    if (existingSession) {
      // User has an existing session, update the chat history
      updatedChat = await chatCollection.updateOne(
        { _id: existingSession._id },
        {
          $push: {
            chat: {
              userMessage: message,
              assistantResponse: assistantResponse,
            },
          },
          $set: { timestamp: timestamp },
        }
      );

      console.log("Session updated:", existingSession._id);
    } else {
      // User doesn't have an existing session, create a new one
      const result = await chatCollection.insertOne({
        userEmail: userEmail,
        userMessage: message,
        timestamp: timestamp,
        chat: [
          {
            userMessage: message,
            assistantResponse: assistantResponse,
          },
        ],
      });

      console.log("New session created:", result.insertedId);
    }

    // Step 3: Fetch the updated chat history for the user
    const chatHistory = await chatCollection.findOne({
      userEmail: userEmail,
    });

    // Step 4: Send the full chat history back to the client, including the _id and userEmail
    return new Response(
      JSON.stringify({
        _id: chatHistory._id,
        timestamp: chatHistory.timestamp,
        chat: chatHistory.chat,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error with external API or database operation:", error);
    return new Response(
      JSON.stringify({ error: "Failed to process your message" }),
      {
        status: 500,
      }
    );
  }
}
