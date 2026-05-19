import {
  test,
  expect
} from "vitest";

import {

render,
screen

} from "@testing-library/react";


import ProductCard
from "../components/ProductCard";


test(

"renders coffee product",

()=>{

const coffee={

id:1,
name:"Espresso",
description:"Strong coffee",
origin:"Italy",
price:8

};


render(

<ProductCard

coffee={coffee}

updatePrice={()=>{}}

deleteProduct={()=>{}}

/>

);


expect(

screen.getByText(

/Espresso/i

)

)

.toBeInTheDocument();

}

);
