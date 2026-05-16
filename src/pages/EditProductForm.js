import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function EditProductForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, updateProduct } = useProducts();

  
  const product = products.find(p => String(p.id) === id);

  const [name, setName] = useState(product ? product.name : "");
  const [price, setPrice] = useState(product ? product.price : "");
  const [description, setDescription] = useState(product ? product.description : "");
  const [category, setCategory] = useState(product ? product.category : "");
  const [stock, setStock] = useState(product ? product.stock : "");

  if (!product) return <p>Product not found</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(product.id, {
      name,
      price: parseFloat(price),
      description,
      category,
      stock: parseInt(stock)
    });
    
    navigate(`/product/${product.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "2rem auto", padding: "1.5rem", background: "#fff", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}>
      <h2>Edit Product</h2>
      <label>Name</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Price</label>
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />

      <label>Description</label>
      <input value={description} onChange={(e) => setDescription(e.target.value)} />

      <label>Category</label>
      <input value={category} onChange={(e) => setCategory(e.target.value)} />

      <label>Stock</label>
      <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} />

      <button type="submit" style={{ marginTop: "1rem", padding: "0.5rem 1rem", background: "#0077cc", color: "#fff", border: "none", borderRadius: "6px", cursor: "pointer" }}>
        Save Changes
      </button>
    </form>
  );
}

export default EditProductForm;
