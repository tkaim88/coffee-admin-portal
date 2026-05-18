/* eslint-env jest */

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

addProduct:jest.fn()

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