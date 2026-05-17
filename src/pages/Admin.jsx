import { useState } from "react";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Added: ${name} - $${price}`);

    setName("");
    setPrice("");
  };

  return (
    <div>
      <h1>Admin Panel</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Coffee name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default Admin;