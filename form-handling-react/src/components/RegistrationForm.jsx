// src/components/RegistrationForm.jsx
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      alert("All fields are required!");
      return;
    }

    // mock API simulation
    console.log("User registered:", { username, email, password });
    alert("User registered successfully!");

    // clear fields after submit
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Register</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}                 {/* ✅ لازم يكون هنا */}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}                    {/* ✅ لازم يكون هنا */}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}                 {/* ✅ لازم يكون هنا */}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;