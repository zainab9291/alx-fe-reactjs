import { useState } from "react";
import Search from "./components/Search";
import UserCard from "./components/UserCard";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub User Search</h1>
      <Search onResult={setUser} />
      {user && <UserCard user={user} />}
    </div>
  );
}