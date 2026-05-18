import { useState, useEffect } from "react";

function useProducts() {

  const [products, setProducts] = useState([]);

  // Load coffee data when page opens
  useEffect(() => {

    fetch("http://localhost:3000/coffee")
      .then((response) => response.json())
      .then((data) => setProducts(data));

  }, []);

  return {
    products,
    setProducts
  };
}

export default useProducts;