"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Reference for the profile icon and dropdown menu
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    // Add event listener for detecting clicks outside
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg p-4 fixed top-0 left-0 right-0 z-10">
      <div className="mx-5 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-indigo-600 ml-4 text-2xl font-bold">
          <Link href="/" className="text-indigo-600">
            Talkify
          </Link>
        </div>

        {/* Profile */}
        <div
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-600 cursor-pointer"
          ref={profileRef} // Assign the ref to the profile icon
        >
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            className="w-full h-full object-cover"
            alt="Profile"
          />
        </div>

        {/* Profile Info Dropdown */}
        {isProfileOpen && (
          <div className="absolute top-14 right-10 mt-2 w-48 bg-white border-2 border-indigo-600 rounded-lg shadow-lg p-4 z-50">
            <div className="text-center mb-4">
              <p className="font-semibold text-indigo-600">John Doe</p>
              <p className="text-sm text-gray-600">john.doe@example.com</p>
            </div>

            {/* Logout Button */}
            <button
              className="w-full py-2 mt-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              onClick={() => {
                // Handle logout action here
                console.log("Logged out!");
                setIsProfileOpen(false);
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
