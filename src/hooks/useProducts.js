import { useState, useEffect } from "react";

// Custom React hook
// Central location for all product logic and API requests
// Handles CRUD operations:
// Create
// Read
// Update
// Delete

function useProducts() {

  // Stores all coffee products
  const [products, setProducts] = useState([]);


  // READ REQUEST
  // Runs once when component loads
  // Fetches all coffee products from json-server

  useEffect(() => {

    fetch('/coffees')

      // Convert response into JSON
      .then((response) => response.json())

      // Save fetched data into state
      .then((data) => setProducts(data))

      .catch((error) => {

        console.log(
          "Error fetching products:",
          error
        );

      });

  }, []);



  // CREATE REQUEST
  // Adds a new coffee product

  function addProduct(newProduct) {

     fetch(

       fetch('/coffees'),
      {

        method: "POST",

        headers: {

          "Content-Type": "application/json"

        },

        // Converts JS object into JSON
        body: JSON.stringify(newProduct)

      }

    )

      .then((response) => response.json())

      .then((data) => {

        // Add newly created product
        // prevProducts guarantees latest state

        setProducts(

          (prevProducts) => [

            ...prevProducts,
            data

          ]

        );

      })

      .catch((error) => {

        console.log(
          "Error adding product:",
          error
        );

      });

  }



  // UPDATE REQUEST
  // Updates product price

  function updatePrice(id, newPrice) {

    fetch(

       `/coffees/${id}`,

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

        // Replace updated product
        // Keep remaining products unchanged

        setProducts(

          (prevProducts) =>

            prevProducts.map(

              (product) =>

                product.id === id
                  ? updatedProduct
                  : product

            )

        );

      })

      .catch((error) => {

        console.log(
          "Error updating product:",
          error
        );

      });

  }



  // DELETE REQUEST
  // Removes product from database

  function deleteProduct(id) {

    fetch(

      `/coffees/${id}`,

      {

        method: "DELETE"

      }

    )

      .then(() => {

        // Remove deleted product
        // filter returns new array

        setProducts(

          (prevProducts) =>

            prevProducts.filter(

              (product) =>

                product.id !== id

            )

        );

      })

      .catch((error) => {

        console.log(
          "Error deleting product:",
          error
        );

      });

  }


  // Makes data and functions
  // available globally

  return {

    products,
    addProduct,
    updatePrice,
    deleteProduct

  };

}

export default useProducts;