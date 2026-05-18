import { useState, useEffect } from "react";

// Custom React hook
// Handles product fetching and state management

function useProducts() {

  // Stores product array
  const [products, setProducts] = useState([]);

  // useEffect runs once when component loads
  // Used to fetch coffee data from server

  useEffect(() => {

    fetch("http://localhost:3000/coffee")

      // Convert response into JSON
      .then((response) => response.json())

      // Save fetched data into state
      .then((data) => setProducts(data));

  }, []);

  // Return products and update function
  return {
    products,
    setProducts
  };
}

export default useProducts;