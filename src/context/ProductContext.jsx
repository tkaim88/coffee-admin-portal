import { createContext } from "react";

/* eslint-disable react-refresh/only-export-components */

import useProducts from "../hooks/useProducts";

// Create global product context
export const ProductContext = createContext();

// ProductProvider component
// Makes product data available globally

function ProductProvider({ children }) {

  // Custom hook containing product logic
  const productData = useProducts();

  return (

    // Provider shares data with child components
    <ProductContext.Provider value={productData}>

      {children}

    </ProductContext.Provider>

  );

}

export default ProductProvider;