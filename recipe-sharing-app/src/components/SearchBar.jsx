import { useRecipeStore } from '../recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '8px',
        marginBottom: '20px',
        borderRadius: '4px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default SearchBar;