"use client";

import useAuth from "@/hook/useAuth";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";

// Fetch chat history
const fetchChatHistory = async (userEmail) => {
  try {
    const response = await fetch(`/api/chat-history?userEmail=${userEmail}`);
    if (!response.ok) throw new Error("Failed to fetch chat history");
    return await response.json(); // This returns the full data array
  } catch (error) {
    console.error("Error fetching chat history:", error);
    return []; // Return an empty array if there's an error
  }
};

const ChatHistoryPage = () => {
  const [user] = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const [history, setHistory] = useState([]); // Now history is an array
  const [loading, setLoading] = useState(true);

  // Memoize fetching the chat history
  const getChatHistory = useCallback(async () => {
    if (!user?.email) return;

    setLoading(true);
    const data = await fetchChatHistory(user.email);
    console.log(data); // Log the full response for debugging
    setHistory(data); // Set the full response directly to history
    setLoading(false);
  }, [user?.email]);

  // Fetch chat history on user change or component mount
  useEffect(() => {
    if (user?.email) {
      getChatHistory();
    }
  }, [user?.email, getChatHistory]);

  // Filtered history based on search query
  const filteredHistory = [];

  console.log(history.length);
  // Handle deletion (simulated in this example, modify it for backend deletion)
  const handleDelete = (id) => {
    // setHistory(history.filter((item) => item._id !== id)); // Remove chat from UI (backend deletion not implemented)
  };

  return (
    <div className="space-y-4 max-w-5xl mx-auto mt-20">
      {/* Search Bar */}
      <div className="flex justify-between items-center p-4 bg-white rounded-lg">
        <input
          type="text"
          placeholder="Search chats..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-600 transition-all"
        />
      </div>

      {/* Loading Indicator */}
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {/* Chat History Cards */}
      {filteredHistory.length === 0 && !loading ? (
        <p className="text-center text-gray-500">No chat history found.</p>
      ) : (
        filteredHistory.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
          >
            <Link href={`/chat/${item._id}`}>
              {/* Left Side - Logo and Title */}
              <div className="flex items-center space-x-4">
                <img
                  src="https://www.codester.com/static/uploads/items/000/026/26069/icon.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-semibold text-gray-700">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.timestamp}</p>
                </div>
              </div>
            </Link>

            {/* Right Side - Delete Button */}
            <button
              onClick={() => handleDelete(item._id)}
              className="text-red-500 cursor-pointer hover:text-red-700 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ChatHistoryPage;
