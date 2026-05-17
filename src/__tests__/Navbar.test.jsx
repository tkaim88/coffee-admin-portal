import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("renders navigation links", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(screen.getByRole("link", { name: /Home/i }))
    .toBeInTheDocument();

  expect(screen.getByRole("link", { name: /Shop/i }))
    .toBeInTheDocument();

  expect(screen.getByRole("link", { name: /^Admin$/i }))
    .toBeInTheDocument();
});