// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 1.5rem",
        background: "#0077cc",
        color: "#fff",
        position: "relative",
      }}
    >
      {/* Logo / Title */}
      <h2 style={{ margin: 0 }}>Admin Portal</h2>

      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>

        <Link
          to="/add"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
