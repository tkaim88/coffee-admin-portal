// SearchBar component
// Allows users to search products dynamically

function SearchBar({ search, setSearch }) {

  return (

    <input
      type="text"

      // Placeholder text inside input
      placeholder="Search coffee product..."

      // Controlled input value
      value={search}

      // Updates search state whenever user types
      onChange={(e) => setSearch(e.target.value)}

      className="search-input"
    />
  );
}

export default SearchBar;