// src/components/ProductDetail.js
import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function ProductDetail({ product }) {
  const { deleteProduct } = useProducts();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "#fafafa",
      }}
    >
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Stock:</strong> {product.stock}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
        <Link
          to={`/edit/${product.id}`}
          style={{
            padding: "0.5rem 1rem",
            background: "#0077cc",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none",
          }}
        >
          Edit
        </Link>
        <button
          onClick={() => deleteProduct(product.id)}
          style={{
            padding: "0.5rem 1rem",
            background: "#cc0000",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
