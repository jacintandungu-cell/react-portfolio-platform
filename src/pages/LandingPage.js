import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import SearchBar from "../components/SearchBar";
import ProductCard from "../components/ProductCard";

function LandingPage() {
  const { products } = useProducts();
  const [query, setQuery] = useState("");

  // Filter products by search term
  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Admin Portal</h1>
      <p style={{ maxWidth: "600px", marginBottom: "1rem", color: "#555" }}>
        Welcome to the Admin Portal. This site allows administrators to manage
        products easily — you can search, add new items, edit prices, and delete
        outdated entries. It’s designed to keep your product catalog organized
        and up to date.
      </p>

      {/* SearchBar controlled by query state */}
      <SearchBar query={query} setQuery={setQuery} />

      {/* Product list */}
      {filtered.length === 0 ? (
        <p style={{ color: "#888" }}>No products found.</p>
      ) : (
        <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}

export default LandingPage;
