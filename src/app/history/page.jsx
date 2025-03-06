"use client";

import Link from "next/link";
import { useState } from "react";

const ChatHistoryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [history, setHistory] = useState([
    {
      id: 1,
      title: "Chat with John Doe",
      lastUpdated: "2023-03-05 12:45 PM",
    },
    {
      id: 2,
      title: "Chat with Alice",
      lastUpdated: "2023-03-06 03:30 PM",
    },
    {
      id: 3,
      title: "Chat with Bob",
      lastUpdated: "2023-03-07 01:15 PM",
    },
  ]);

  // Filter the chat history based on the search query
  const filteredHistory = history.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    setHistory(history.filter((item) => item.id !== id));
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

      {/* Chat History Cards */}
      {filteredHistory.length === 0 ? (
        <p className="text-center text-gray-500">No chat history found.</p>
      ) : (
        filteredHistory.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-all"
          >
            <Link href={`/?id=${item.id}`}>
              {/* Left Side - Logo and Title */}
              <div className="flex items-center space-x-4">
                <img
                  src='https://www.codester.com/static/uploads/items/000/026/26069/icon.png'
                  alt="Logo"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-base font-semibold text-gray-700">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">{item.lastUpdated}</p>
                </div>
              </div>
            </Link>
            {/* Right Side - Delete Button */}
            <button
              onClick={() => handleDelete(item.id)}
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
