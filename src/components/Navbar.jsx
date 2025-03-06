"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import useAuth from "@/hook/useAuth";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const [user] = useAuth();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
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
        {user ? (
          <div
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-indigo-600 cursor-pointer"
            ref={profileRef} // Assign the ref to the profile icon
          >
            <img
              src={user?.picture}
              className="w-full h-full object-cover"
              alt="Profile"
            />
          </div>
        ) : (
          <Link
            href="/api/auth/login"
            className="text-sm md:text-base text-white hover:bg-blue-600 bg-blue-500 rounded-lg px-4 py-2"
          >
            Login
          </Link>
        )}

        {/* Profile Info Dropdown */}
        {isProfileOpen && user && (
          <div className="absolute top-14 right-10 mt-2 w-48 bg-white border-2 border-indigo-600 rounded-lg shadow-lg p-4 z-50">
            <div className="text-center mb-4">
              <p className="font-semibold text-indigo-600">
                {user?.given_name + " " + user?.family_name || "dev mode"}
              </p>
              <p className="text-sm text-gray-600">
                {user?.email || "dev@example.com"}
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
