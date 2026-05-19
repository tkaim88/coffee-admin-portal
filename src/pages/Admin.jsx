// Admin page component
// Fullscreen coffee plantation admin dashboard

import { useState, useContext } from "react";

import { ProductContext }
from "../context/ProductContext";


function Admin() {

  // Access addProduct function

  const { addProduct } =
  useContext(ProductContext);


  // Form state

  const [name, setName] =
  useState("");

  const [price, setPrice] =
  useState("");

  const [description, setDescription] =
  useState("");

  const [origin, setOrigin] =
  useState("");


  // Handle form submission

  function handleSubmit(e) {

    e.preventDefault();


    // Prevent empty submissions

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

      price: Number(price),

      description,

      origin

    };


    // Add product globally

    addProduct(newProduct);


    // Reset form

    setName("");

    setPrice("");

    setDescription("");

    setOrigin("");

  }


  return (

    // Fullscreen admin hero

    <div className="admin-hero">


      {/* Dark overlay */}

      <div className="admin-overlay">


        {/* Glassmorphism admin card */}

        <div className="admin-card">


          {/* Admin heading */}

          <h1>

            Coffee Control Center

          </h1>


          {/* Subtitle */}

          <p className="admin-subtitle">

            Manage your mountain-grown artisan coffee collection.

          </p>


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


            {/* Description */}

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


            {/* Origin */}

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


            {/* Price */}

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

      </div>

    </div>

  );

}

export default Admin;