// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AddProductForm from "./pages/AddProductForm";
import ProductDetail from "./pages/ProductDetail";
import EditProductForm from "./pages/EditProductForm";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/add" element={<AddProductForm />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/edit/:id" element={<EditProductForm />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
