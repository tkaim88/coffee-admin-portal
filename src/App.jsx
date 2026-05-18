import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Admin from "./pages/Admin";

function App() {

  return (

    <Router>

      <Navbar />

      <Routes>

        {/* Home page */}

        <Route
          path="/"
          element={<Home />}
        />

        {/* Shop page */}

        <Route
          path="/shop"
          element={<Shop />}
        />

        {/* Admin page */}

        <Route
          path="/admin"
          element={<Admin />}
        />

      </Routes>

    </Router>

  );

}

export default App;