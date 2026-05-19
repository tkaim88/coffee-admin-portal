// Import testing tools
import {

  test,
  expect,
  vi

} from "vitest";

import { render, screen, fireEvent }
from "@testing-library/react";

import SearchBar
from "../components/SearchBar";


// Test search input functionality

test(

"updates search input value",

()=>{

// Mock search function

const setSearch=vi.fn();


// Render component

render(

<SearchBar

search=""
setSearch={setSearch}

/>

);


// Find input field

const input=

screen.getByPlaceholderText(

/search coffee/i

);


// Simulate typing

fireEvent.change(

input,

{

target:{

value:"Espresso"

}

}

);


// Verify function ran

expect(

setSearch

)

.toHaveBeenCalled();

}

);