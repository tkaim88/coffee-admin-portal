import { useState, useContext } from "react";

import { ProductContext }
from "../context/ProductContext";


// Admin component
// Allows administrators to add products

function Admin() {

  // Access addProduct function
  // from global context

  const { addProduct } =
  useContext(ProductContext);


  // Store form inputs

  const [name, setName] =
  useState("");

  const [price, setPrice] =
  useState("");

  const [description, setDescription] =
  useState("");

  const [origin, setOrigin] =
  useState("");


  // Runs when form is submitted

  function handleSubmit(e) {

    // Prevent page refresh

    e.preventDefault();


    // Prevent empty fields

    if (
      !name ||
      !price ||
      !description ||
      !origin
    ) {

      alert(
        "Please fill all fields"
      );

      return;

    }


    // Create new product object

    const newProduct = {

      name,

      // Converts string into number
      price: Number(price),

      description,

      origin

    };


    // Send new product
    // to custom hook

    addProduct(newProduct);


    // Reset form fields

    setName("");

    setPrice("");

    setDescription("");

    setOrigin("");

  }


  return (

    <div className="page-container">

      {/* Page heading */}

      <h1>

        Add New Product

      </h1>


      {/* Product form */}

      <form
      className="product-form"
      onSubmit={handleSubmit}
      >

        {/* Coffee name */}

        <input
        type="text"
        placeholder="Coffee name"
        value={name}
        onChange={
          (e)=>
          setName(
            e.target.value
          )
        }
        />


        {/* Coffee description */}

        <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={
          (e)=>
          setDescription(
            e.target.value
          )
        }
        />


        {/* Coffee origin */}

        <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={
          (e)=>
          setOrigin(
            e.target.value
          )
        }
        />


        {/* Coffee price */}

        <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={
          (e)=>
          setPrice(
            e.target.value
          )
        }
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