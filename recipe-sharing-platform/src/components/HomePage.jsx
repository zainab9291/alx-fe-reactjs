import React, { useState, useEffect } from "react";

function HomePage() {
  // useState: عشان نحتفظ برسالة
  const [message, setMessage] = useState("Loading...");

  // useEffect: عشان نغير الرسالة بعد ما الصفحة تفتح
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Welcome to the Recipe App! 🍲");
    }, 1500);

    // cleanup
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-100">
      <h1 className="text-3xl font-bold text-gray-800">{message}</h1>
    </div>
  );
}

export default HomePage;