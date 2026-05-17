import { useState } from "react";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Shop({ products, setProducts }) {
  // Search state for dynamic filtering
  const [search, setSearch] = useState("");

  // Filters products based on search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // Updates product price
  const handleEditPrice = (id) => {
    const newPrice = prompt("Enter new product price:");

    if (!newPrice) return;

    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, price: Number(newPrice) }
        : product
    );

    setProducts(updatedProducts);
  };

  return (
    <div className="page-container">
      <h1>Shop Products</h1>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onEditPrice={handleEditPrice}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;