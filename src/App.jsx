import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";

function App() {
  // Global product state
  // localStorage helps preserve data after refresh
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : [
          { id: 1, name: "Espresso", price: 3 },
          { id: 2, name: "Latte", price: 5 },
          { id: 3, name: "Cappuccino", price: 4 },
        ];
  });

  // Save products whenever state changes
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={
            <Shop
              products={products}
              setProducts={setProducts}
            />
          }
        />

        <Route
          path="/admin"
          element={
            <Admin
              products={products}
              setProducts={setProducts}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;