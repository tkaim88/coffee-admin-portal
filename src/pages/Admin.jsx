import { useState, useContext } from "react";

import { ProductContext }
from "../context/ProductContext";


// Admin component
// Adds new products

function Admin() {

const { addProduct } =
useContext(ProductContext);

const [name,setName]=useState("");

const [price,setPrice]=useState("");

const [description,setDescription]=
useState("");

const [origin,setOrigin]=
useState("");


function handleSubmit(e){

e.preventDefault();

const newProduct={

name,
price:Number(price),
description,
origin

};

addProduct(newProduct);


setName("");
setPrice("");
setDescription("");
setOrigin("");

}


return(

<div className="page-container">

<h1>Add New Product</h1>

<form
className="product-form"
onSubmit={handleSubmit}
>

<input
type="text"
placeholder="Coffee name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="text"
placeholder="Description"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<input
type="text"
placeholder="Origin"
value={origin}
onChange={(e)=>setOrigin(e.target.value)}
/>

<input
type="number"
placeholder="Price"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<button type="submit">

Add Product

</button>

</form>

</div>

);

}

export default Admin;