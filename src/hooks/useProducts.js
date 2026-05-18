import { useState, useEffect } from "react";

// Custom React hook
// Central location for all product logic and API requests
// This hook handles CRUD operations:
// Create
// Read
// Update
// Delete

function useProducts() {

  // Stores all coffee products in state
  const [products, setProducts] = useState([]);


  // READ REQUEST
  // useEffect runs once when component loads
  // Empty dependency array [] means:
  // run only once during initial render

  useEffect(() => {

    fetch("http://localhost:3000/coffee")

      // Converts response into JSON
      .then((response) => response.json())

      // Stores fetched products in state
      .then((data) => setProducts(data));

  }, []);



  // CREATE REQUEST
  // Adds a new product into database

  function addProduct(newProduct) {

    fetch(

      "http://localhost:3000/coffee",

      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        // Converts JavaScript object into JSON
        body: JSON.stringify(newProduct)
      }

    )

      .then((response) => response.json())

      .then((data) => {

        // Add newly created product to existing state
        setProducts([...products, data]);

      });

  }



  // UPDATE REQUEST
  // Updates product price only

  function updatePrice(id, newPrice) {

    fetch(

      `http://localhost:3000/coffee/${id}`,

      {

        method: "PATCH",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          price: newPrice

        })

      }

    )

      .then((response) => response.json())

      .then((updatedProduct) => {

        // map loops through products
        // Replace updated product only
        // Keep all others unchanged

        setProducts(

          products.map((product) =>

            product.id === id
              ? updatedProduct
              : product

          )

        );

      });

  }



  // DELETE REQUEST
  // Removes product from database

  function deleteProduct(id) {

    fetch(

      `http://localhost:3000/coffee/${id}`,

      {

        method: "DELETE"

      }

    )

      .then(() => {

        // filter creates a new array
        // Excludes deleted item

        setProducts(

          products.filter(

            (product) => product.id !== id

          )

        );

      });

  }


  // Makes values available to components
  return {

    products,
    addProduct,
    updatePrice,
    deleteProduct

  };

}

export default useProducts;