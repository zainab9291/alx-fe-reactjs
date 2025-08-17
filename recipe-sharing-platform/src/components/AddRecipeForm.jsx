import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    // Check at least 2 ingredients
    const ingredientsList = ingredients.split(",").map((item) => item.trim());
    if (ingredientsList.length < 2) {
      setError("Please include at least 2 ingredients.");
      return;
    }

    setError("");
    console.log({
      title,
      ingredients: ingredientsList,
      steps,
    });

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-2xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Recipe</h2>
      {error && (
        <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-medium">Ingredients (comma separated)</label>
          <textarea
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g. Flour, Sugar, Butter"
          ></textarea>
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-1 font-medium">Preparation Steps</label>
          <textarea
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-300"
            rows="4"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="Write preparation steps here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;