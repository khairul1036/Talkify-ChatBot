"use client";

import React, { useState } from "react";
import Image from "next/image";
import useAuth from "@/hook/useAuth";

const Chat = ({ logo }) => {
  const [message, setMessage] = useState("");
  const [user] = useAuth();
  const [responseAI, setResponseAI] = useState({});

  // Handle change in textarea
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Make sure the message is not empty
    if (!message.trim()) {
      console.error("Message cannot be empty.");
      return;
    }

    // Ensure the user email exists
    if (!user?.email) {
      console.error("User email is missing.");
      return;
    }

    const formData = {
      message: message,
      userEmail: user.email,
    };

    console.log("Message Submitted:", formData);

    try {
      // Send the POST request
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response) {
        // If the response is successful, process the data
        const data = await response.json();
        console.log("Response Data:", data);
        setResponseAI(data);
      } else {
        // If the response is not okay, handle the error
        const errorData = await response.json();
        console.error("Error Response:", errorData);
      }
    } catch (error) {
      // Catch any other errors (e.g., network issues)
      console.error("Failed to submit message:", error);
    }

    // Clear input field after submission
    setMessage("");
  };

  return (
    <>
      <div className="flex flex-col space-y-4 md:p-4 md:max-w-4xl mx-auto mt-20 mb-36">
        {Array.isArray(responseAI?.chat) && responseAI?.chat?.length > 0 ? (
          responseAI?.chat?.map((singleResponseAI, index) => (
            <div key={index}>
              {/* User Chat */}
              <div className="flex justify-end">
                <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-3xl rounded-bl-none">
                  <p className="text-sm">{singleResponseAI?.userMessage}</p>
                </div>
              </div>

              {/* Assistant Chat */}
              <div className="flex justify-start">
                <div className="text-gray-800 p-3 rounded-lg rounded-br-none max-w-3xl flex items-start space-x-3">
                  <Image
                    src={logo}
                    alt="Assistant"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <p className="text-sm">
                    {singleResponseAI?.assistantResponse}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center">
            {/* Welcome Card */}
            <div className="rounded-lg p-8 text-center max-w-md w-full">
              <Image
                src={logo}
                alt="Talkify Logo"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h1 className="text-3xl font-semibold text-indigo-600 mb-2">
                Welcome to Talkify!
              </h1>
              <p className="text-lg text-gray-700">
                Your personal assistant is here to help you. Start a
                conversation now!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* user Prompt Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-30">
        <div className="max-w-5xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-center md:ml-64 lg:ml-60"
          >
            {/* Textarea Input */}
            <textarea
              value={message}
              onChange={handleChange}
              name="message"
              rows="3"
              placeholder="Ask anything..."
              className="w-full px-4 py-2 pr-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-600 transition-all resize-none"
            />

            {/* Send Button with Icon */}
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
