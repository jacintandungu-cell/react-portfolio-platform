import React, { useState } from "react";
import useProducts from "../hooks/useProducts";

function AddProductForm() {
  const { addProduct } = useProducts();
  const [form, setForm] = useState({ name: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ ...form, price: parseFloat(form.price) });
    setForm({ name: "", price: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Product Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProductForm;
