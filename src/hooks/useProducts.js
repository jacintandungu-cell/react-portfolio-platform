import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const API_URL = process.env.REACT_APP_API_URL || "https://react-portfolio-backend-1.onrender.com";

  // Fetch products
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error fetching products:", err));
  }, [API_URL]);

  // Add product
  const addProduct = (product) => {
    fetch(`${API_URL}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(newProduct => setProducts([...products, newProduct]))
      .catch(err => console.error("Error adding product:", err));
  };

  // Update product
  const updateProduct = (id, updatedFields) => {
    fetch(`${API_URL}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields)
    })
      .then(res => res.json())
      .then(updatedProduct => {
        setProducts(products.map(p => p.id === id ? updatedProduct : p));
      })
      .catch(err => console.error("Error updating product:", err));
  };

  // Delete product
  const deleteProduct = (id) => {
    fetch(`${API_URL}/products/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setProducts(products.filter(p => p.id !== id));
      })
      .catch(err => console.error("Error deleting product:", err));
  };

  return { products, addProduct, updateProduct, deleteProduct };
}

export default useProducts;
