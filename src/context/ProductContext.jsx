import { createContext } from "react";
/* eslint-disable react-refresh/only-export-components */
import useProducts from "../hooks/useProducts";

export const ProductContext = createContext();

function ProductProvider({ children }) {

  const productData = useProducts();

  return (

    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>

  );

}

export default ProductProvider;