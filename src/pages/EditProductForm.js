// src/pages/EditProduct.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../hooks/useProducts";

function EditProduct() {
  const { id } = useParams(); // get product id from route
  const navigate = useNavigate();
  const { products, updateProduct } = useProducts();

  // find product by id
  const product = products.find((p) => p.id === id);

  // local state for form fields
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
  });

  // populate form when product is loaded
  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        stock: product.stock,
      });
    }
  }, [product]);

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
    });
    navigate("/"); // go back to landing page after update
  };

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
        />
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          placeholder="Stock"
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
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
