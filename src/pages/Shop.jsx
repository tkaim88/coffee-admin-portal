// Shop component
// Displays all products
// Filters products using search

import {

useContext,
useState

}

from "react";

import {

ProductContext

}

from "../context/ProductContext";

import SearchBar
from "../components/SearchBar";

import ProductCard
from "../components/ProductCard";

function Shop() {

const {

products,
updatePrice,
deleteProduct

}

=

useContext(ProductContext);


const [search,setSearch]=
useState("");


// Filter products dynamically

const filteredProducts=

products.filter(

(coffee)=>

coffee.name
.toLowerCase()
.includes(

search.toLowerCase()

)

);


return(

<div className="page-container">

<h1>

Coffee Shop

</h1>


<SearchBar

search={search}
setSearch={setSearch}

/>


<div className="product-grid">

{

filteredProducts.map(

(coffee)=>(

<ProductCard

key={coffee.id}

coffee={coffee}

updatePrice={updatePrice}

deleteProduct={deleteProduct}

/>

)

)

}

</div>

</div>

);

}

export default Shop;