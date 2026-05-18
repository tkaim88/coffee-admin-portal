import { useState } from "react";

import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Shop({ products, setProducts }) {

  const [search, setSearch] = useState("");

  // =========================
  // SEARCH FILTER
  // =========================

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  // =========================
  // EDIT PRICE
  // =========================

  const handleEditPrice = (id) => {

    const newPrice = prompt("Enter new price:");

    if (!newPrice) return;

    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, price: Number(newPrice) }
        : product
    );

    setProducts(updatedProducts);
  };

  // =========================
  // EDIT NAME
  // =========================

  const handleEditName = (id) => {

    const newName = prompt("Enter new product name:");

    if (!newName) return;

    const updatedProducts = products.map((product) =>
      product.id === id
        ? { ...product, name: newName }
        : product
    );

    setProducts(updatedProducts);
  };

  // =========================
  // DELETE PRODUCT
  // =========================

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  return (
    <div className="page-container">

      <h1>Coffee Shop</h1>

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
            onEditName={handleEditName}
            onDelete={handleDelete}
          />

        ))}

      </div>
    </div>
  );
}

export default Shop;