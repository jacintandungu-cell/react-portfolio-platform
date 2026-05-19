import { useState, useEffect } from "react";

const API_URL = "https://react-portfolio-backend-1.onrender.com/products";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = async (product) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const newProduct = await res.json();
    setProducts((prev) => [...prev, newProduct]);
  };

  const updateProduct = async (id, updatedFields) => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    });
    const updatedProduct = await res.json();
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? updatedProduct : p))
    );
  };

  const deleteProduct = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return { products, addProduct, updateProduct, deleteProduct };
}

export default useProducts;
