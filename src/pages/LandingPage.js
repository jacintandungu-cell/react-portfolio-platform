import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard"; 
function LandingPage() {
  const { products } = useProducts();
  const [query, setQuery] = useState("");

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Admin Portal</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem", color: "#555" }}>
        Welcome to the Admin Portal. This site allows administrators to manage
        products easily — you can search, add new items, edit prices, and delete
        outdated entries. It’s designed to keep your product catalog organized
        and up to date.
      </p>
      <SearchBar query={query} setQuery={setQuery} />
      {filtered.map(p => (
        <ProductCard key={p.id} product={p} />   
      ))}
    </div>
  );
}

export default LandingPage;
