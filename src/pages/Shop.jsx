// Shop component
// Displays all products
// Filters products using search
// Adds plantation background image

import {

  useContext,
  useState

}

from "react";

import {

  ProductContext

}

from "../context/ProductContext";

import SearchBar
from "../components/SearchBar";

import ProductCard
from "../components/ProductCard";

/* Import local background image */

import coffeeFarm
from "../assets/coffee-farm.png";


function Shop() {

  /* Access global product data */

  const {

    products,
    updatePrice,
    deleteProduct

  }

  = useContext(ProductContext);


  /* Search state */

  const [

    search,
    setSearch

  ]

  = useState("");


  /* Filter coffees */

  const filteredProducts =

    products.filter(

      (coffee)=>

      coffee.name
      .toLowerCase()
      .includes(

        search.toLowerCase()

      )

    );


  return(

    /* Main shop background */

    <div

      className="shop-hero"

      style={{

        backgroundImage:

        `linear-gradient(

          rgba(0,0,0,0.55),

          rgba(0,0,0,0.55)

        ),

        url(${coffeeFarm})`

      }}

    >

      {/* Overlay */}

      <div className="shop-overlay">

        {/* Content container */}

        <div className="shop-content">

          {/* Heading */}

          <h1>

            Coffee Shop

          </h1>


          {/* Description */}

          <p>

            Discover premium coffee
            selections from around
            the world.

          </p>


          {/* Search */}

          <SearchBar

            search={search}

            setSearch={setSearch}

          />


          {/* Products */}

          <div className="product-grid">

            {

              filteredProducts.map(

                (coffee)=>(

                  <ProductCard

                    key={coffee.id}

                    coffee={coffee}

                    updatePrice={updatePrice}

                    deleteProduct={deleteProduct}

                  />

                )

              )

            }

          </div>

        </div>

      </div>

    </div>

  );

}

export default Shop;