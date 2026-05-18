import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // ← Added Navigate here

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

        {/* ✅ NEW: Catch-all route - redirects any unknown paths to Home */}
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />

      </Routes>

    </Router>

  );

}

export default App;