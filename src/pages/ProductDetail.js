import React from "react";
import { useParams, Link } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function ProductDetail() {
  const { id } = useParams();
  const { products, deleteProduct } = useProducts();

  // ✅ Compare IDs as strings to avoid mismatch
  const product = products.find(p => String(p.id) === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div style={{
      maxWidth: "600px",
      margin: "2rem auto",
      padding: "1.5rem",
      background: "#fff",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ color: "#0077cc" }}>{product.name}</h2>
      <p><strong>Price:</strong> ${product.price}</p>
      {product.description && <p><strong>Description:</strong> {product.description}</p>}
      {product.category && <p><strong>Category:</strong> {product.category}</p>}
      {product.stock && <p><strong>Stock:</strong> {product.stock} units</p>}

      <div style={{ marginTop: "1rem" }}>
        <Link 
          to={`/edit/${product.id}`} 
          style={{
            marginRight: "1rem",
            padding: "0.5rem 1rem",
            background: "#0077cc",
            color: "#fff",
            borderRadius: "6px",
            textDecoration: "none"
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
            cursor: "pointer"
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
