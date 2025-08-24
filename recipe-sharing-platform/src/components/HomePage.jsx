import React from "react";
import recipes from "../data.json"; // استيراد ملف JSON

function HomePage() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Recipe List</h1>
      <ul className="space-y-4">
        {recipes.map((recipe) => (
          <li
            key={recipe.id}
            className="p-4 border rounded-lg shadow bg-white hover:shadow-md"
          >
            <h2 className="text-xl font-semibold">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;