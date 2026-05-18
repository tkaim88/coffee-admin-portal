import { Link } from "react-router-dom";

// Navbar component
// This component displays navigation links
// used to move between pages in the application

function Navbar() {

  return (

    // Navigation container
    <nav className="navbar">

      {/* Website title/logo */}
      <h2>Coffee Admin Portal</h2>

      {/* Navigation links */}
      <div className="nav-links">

        {/* Link component prevents full page reload */}
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/admin">Admin</Link>

      </div>
    </nav>
  );
}

export default Navbar;