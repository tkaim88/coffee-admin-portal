import { useState, useEffect } from "react";
import API_URL from "../config/api";

// Custom React hook
// Handles all product state + API requests

function useProducts() {

  // Stores all coffee products
  const [products, setProducts] = useState([]);

  // READ REQUEST
  // Fetch all products when app loads

  useEffect(() => {

    fetch(`${API_URL}/coffees`)

      .then((response) => {

        if (!response.ok) {

          throw new Error("Failed to fetch products");

        }

        return response.json();

      })

      .then((data) => {

        console.log("Fetched products:", data);

        setProducts(data);

      })

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

    fetch(`${API_URL}/coffees`, {

      method: "POST",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify(newProduct)

    })

      .then((response) => {

        if (!response.ok) {

          throw new Error("Failed to add product");

        }

        return response.json();

      })

      .then((data) => {

        setProducts((prevProducts) => [

          ...prevProducts,
          data

        ]);

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

    fetch(`${API_URL}/coffees/${id}`, {

      method: "PATCH",

      headers: {

        "Content-Type": "application/json"

      },

      body: JSON.stringify({

        price: newPrice

      })

    })

      .then((response) => {

        if (!response.ok) {

          throw new Error("Failed to update product");

        }

        return response.json();

      })

      .then((updatedProduct) => {

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

    fetch(`${API_URL}/coffees/${id}`, {

      method: "DELETE"

    })

      .then(() => {

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



  // Export globally available values/functions

  return {

    products,
    addProduct,
    updatePrice,
    deleteProduct

  };

}

export default useProducts;