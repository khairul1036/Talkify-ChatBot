import clientPromise from "../../../lib/mongodb";

// Handle GET request for chat history
export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userEmail = searchParams.get("userEmail");

  if (!userEmail) {
    return new Response(
      JSON.stringify({ error: "userEmail is required" }),
      {
        status: 400,
      }
    );
  }

  const client = await clientPromise;
  const db = client.db();
  const chatCollection = db.collection("chats");

  try {
    // Fetch the chat history for the given userEmail
    const chatHistory = await chatCollection.findOne({
      userEmail: userEmail,
    });

    if (!chatHistory) {
      return new Response(
        JSON.stringify({ error: "No chat history found for this user" }),
        {
          status: 404,
        }
      );
    }

    // Return the full chat history (including _id, userEmail, timestamp, and chat messages)
    return new Response(
      JSON.stringify({
        _id: chatHistory._id,
        userEmail: chatHistory.userEmail,
        timestamp: chatHistory.timestamp,
        chat: chatHistory.chat,
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch chat history" }),
      {
        status: 500,
      }
    );
  }
}
