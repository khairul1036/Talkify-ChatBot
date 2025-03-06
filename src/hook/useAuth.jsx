import React, { useEffect, useState } from "react";

const useAuth = () => {
  const [user, setUser] = useState(null);

  // Fetch user data when the component mounts
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/getUser"); // Correct API route
        if (response.ok) {
          const userData = await response.json();
          setUser(userData); // Set the user data in state
        } else {
          console.error("Failed to fetch user", response.status);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return [user];
};

export default useAuth;
