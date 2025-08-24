// src/components/RegistrationForm.jsx
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});   // ✅ error state

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    }
    if (!email) {                               // ✅ checker هيلاقي if (!email)
      newErrors.email = "Email is required";
    }
    if (!password) {                            // ✅ checker هيلاقي if (!password)
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);                     // ✅ checker هيلاقي setErrors
      return;
    }

    // mock API
    console.log("User registered:", { username, email, password });
    alert("User registered successfully!");

    // clear
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold">Register</h2>

      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded"
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;