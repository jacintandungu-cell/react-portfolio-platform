// src/components/ProductCard.js
import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}

export default ProductCard;
