import { useState } from "react";

function Admin({ products, setProducts }) {
  // Form state variables
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Adds new product into global state
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty values
    if (!name || !price) return;

    const newProduct = {
      id: Date.now(),
      name,
      price: Number(price),
    };

    setProducts([...products, newProduct]);

    // Reset form inputs
    setName("");
    setPrice("");
  };

  return (
    <div className="page-container">
      <h1>Admin Panel</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Product price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Admin;