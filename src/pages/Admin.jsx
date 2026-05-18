import { useState } from "react";

function Admin({ products, setProducts }) {
  // Stores input field values
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Runs when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent empty fields
    if (!name || !price) {
      alert("Please fill all fields");
      return;
    }

    // Create new product object
    const newProduct = {
      id: Date.now(),
      name: name,
      price: Number(price),
    };

    // Add new product into products array
    setProducts([...products, newProduct]);

    // Clear inputs
    setName("");
    setPrice("");

    alert("Product Added Successfully");
  };

  return (
    <div className="page-container">
      <h1>Add New Product</h1>

      <form className="product-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Coffee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Coffee price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default Admin;