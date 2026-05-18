// Home component
// Landing page of the application

import { useState } from "react";
import SearchBar from "../components/SearchBar";

function Home() {

  // Stores the search input value entered by the user
  const [search, setSearch] = useState("");

  return (

    <div className="home-container">

      {/* Main heading */}
      <h1>Welcome to Coffee Admin Portal</h1>

      {/* Description paragraph */}
      <p>

        Your shop managing solution for all things coffee!
        This portal allows you to manage products,
        update prices, search inventory,
        and maintain an organized e-commerce system.

      </p>

      {/* Search section positioned below welcome text */}
      {/* Props are passed to SearchBar so state can be controlled here */}

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

    </div>

  );

}

export default Home;