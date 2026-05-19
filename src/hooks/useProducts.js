import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const API_URL = "https://react-portfolio-backend-1.onrender.com/api/products";

  // Fetch products
  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then(data => setProducts(data))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  // Add product
  const addProduct = (product) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to add product");
        return res.json();
      })
      .then(newProduct => setProducts([...products, newProduct]))
      .catch(err => console.error("Add error:", err));
  };

  // Update product
  const updateProduct = (id, updatedFields) => {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to update product");
        return res.json();
      })
      .then(updatedProduct => {
        setProducts(products.map(p => p.id === id ? updatedProduct : p));
      })
      .catch(err => console.error("Update error:", err));
  };

  // Delete product
  const deleteProduct = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to delete product");
        setProducts(products.filter(p => p.id !== id));
      })
      .catch(err => console.error("Delete error:", err));
  };

  return { products, addProduct, updateProduct, deleteProduct };
}

export default useProducts;
