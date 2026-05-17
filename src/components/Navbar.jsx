import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
}

export default Navbar;