// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);

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

        {/* Dropdown Menu */}
        <div
          style={{ position: "relative" }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <button
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Products ▾
          </button>

          {open && (
            <div
              style={{
                position: "absolute",
                top: "2rem",
                right: 0,
                background: "#fff",
                color: "#333",
                borderRadius: "6px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                minWidth: "150px",
                zIndex: 1000,
              }}
            >
              <Link
                to="/"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                All Products
              </Link>
              <Link
                to="/add"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                Add Product
              </Link>
              <Link
                to="/categories"
                style={{
                  display: "block",
                  padding: "0.5rem 1rem",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                Categories
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
