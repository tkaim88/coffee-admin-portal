// SearchBar component
// Receives search state and setter function
// Used for filtering coffee products dynamically

function SearchBar({

  search,
  setSearch

}) {

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "35px"
      }}
    >

      {/* Search input */}

      <input

        type="text"

        placeholder="Search coffee..."

        value={search}

        onChange={(e) =>

          setSearch(
            e.target.value
          )

        }

        className="search-input"

      />

    </div>

  );

}

export default SearchBar;