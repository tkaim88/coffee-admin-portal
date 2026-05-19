import {
  test,
  expect
} from "vitest";

import { render, screen }
from "@testing-library/react";

import { BrowserRouter }
from "react-router-dom";

import Navbar
from "../components/Navbar";



// Test navigation links

test(

"renders navigation links",

()=>{

render(

<BrowserRouter>

<Navbar/>

</BrowserRouter>

);


expect(

screen.getByText(/Home/i)

)

.toBeInTheDocument();


expect(

screen.getByText(/Shop/i)

)

.toBeInTheDocument();


expect(

screen.getByRole(

"link",

{name:/Admin/i}

)

)

.toBeInTheDocument();

}

);