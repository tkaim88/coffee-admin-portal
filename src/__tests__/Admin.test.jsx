import {

  test,
  expect,
  vi

} from "vitest";

import { render, screen }
from "@testing-library/react";

import Admin
from "../pages/Admin";

import { ProductContext }
from "../context/ProductContext";


// Test admin form rendering

test(

"renders add product form",

()=>{

render(

<ProductContext.Provider

value={

{

addProduct:vi.fn()

}

}

>

<Admin/>

</ProductContext.Provider>

);


expect(

screen.getByText(

/Add New Product/i

)

)

.toBeInTheDocument();

}

);