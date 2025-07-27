import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  // Initial recipe list
  recipes: [],

  // Search term for filtering
  searchTerm: '',

  // Filtered recipes (calculated when searchTerm changes)
  filteredRecipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
      };
    }),

  // Delete a recipe
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
      };
    }),

  // Update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((recipe) =>
          recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
        ),
      };
    }),

  // Set all recipes (e.g., on initialization)
  setRecipes: (recipes) =>
    set(() => ({
      recipes,
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(get().searchTerm.toLowerCase())
      ),
    })),

  // Set search term and filter
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  // Filter recipes based on current searchTerm
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));