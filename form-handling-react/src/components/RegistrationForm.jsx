import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!username) {
      formErrors.username = "Username is required";
    }
    if (!email) {
      formErrors.email = "Email is required";
    }
    if (!password) {
      formErrors.password = "Password is required";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log("Form submitted:", { username, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-96 mx-auto mt-10">
      <h2 className="text-xl mb-4">Controlled Registration Form</h2>

      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.username && <p className="text-red-500">{errors.username}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}
      </div>

      <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;