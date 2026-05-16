import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // Add product
  const addProduct = (product) => {
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(newProduct => setProducts([...products, newProduct]));
  };

  // Update product
  const updateProduct = (id, updatedFields) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields)
    })
      .then(res => res.json())
      .then(updatedProduct => {
        setProducts(products.map(p => p.id === id ? updatedProduct : p));
      });
  };

  // Delete product
  const deleteProduct = (id) => {
    fetch(`http://localhost:3001/products/${id}`, {
      method: "DELETE"
    }).then(() => {
      setProducts(products.filter(p => p.id !== id));
    });
  };

  return { products, addProduct, updateProduct, deleteProduct };
}

export default useProducts;
