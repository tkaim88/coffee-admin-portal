import { useState } from "react";

// Admin component
// Allows administrator to add new products

function Admin({ products, setProducts }) {

  // Stores coffee name input
  const [name, setName] = useState("");

  // Stores coffee price input
  const [price, setPrice] = useState("");

  // Runs when form is submitted
  const handleSubmit = (e) => {

    // Prevents page refresh
    e.preventDefault();

    // Validation check
    // Prevent empty fields
    if (!name || !price) {

      alert("Please fill all fields");

      return;
    }

    // Create new product object
    const newProduct = {

      // Date.now generates unique id
      id: Date.now(),

      name: name,

      // Convert price into number
      price: Number(price),
    };

    // Add new product into existing array
    // Spread operator copies old products
    setProducts([...products, newProduct]);

    // Clear input fields after submission
    setName("");
    setPrice("");

    alert("Product Added Successfully");
  };

  return (

    <div className="page-container">

      <h1>Add New Product</h1>

      {/* Product form */}
      <form
        className="product-form"
        onSubmit={handleSubmit}
      >

        {/* Coffee name input */}
        <input
          type="text"
          placeholder="Coffee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        {/* Coffee price input */}
        <input
          type="number"
          placeholder="Coffee price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        {/* Submit button */}
        <button type="submit">
          Add Product
        </button>

      </form>
    </div>
  );
}

export default Admin;