// src/pages/AddProductForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function AddProductForm() {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
  });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });
    navigate("/"); // go back to landing page after adding
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h1>Add New Product</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
          required
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
          required
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
        />
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Stock"
          required
        />
        <button
          type="submit"
          style={{
            padding: "0.5rem 1rem",
            background: "#0077cc",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProductForm;
