import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams(); // route like /products/:id
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const API_URL = "https://react-portfolio-backend-1.onrender.com/api/products";

  // Fetch single product
  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Delete product
  const handleDelete = () => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(res => {
        if (!res.ok) throw new Error("Failed to delete product");
        navigate("/products"); // redirect back to list
      })
      .catch(err => setError(err.message));
  };

  // Save edits
  const handleSave = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to update product");
        return res.json();
      })
      .then(updatedProduct => {
        setProduct(updatedProduct);
        setIsEditing(false);
      })
      .catch(err => setError(err.message));
  };

  if (loading) return <p>Loading product...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleSave}>
          <label>
            Name:
            <input
              type="text"
              value={product.name}
              onChange={e => setProduct({ ...product, name: e.target.value })}
            />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={product.description}
              onChange={e => setProduct({ ...product, description: e.target.value })}
            />
          </label>
          <br />
          <label>
            Price:
            <input
              type="number"
              value={product.price}
              onChange={e => setProduct({ ...product, price: Number(e.target.value) })}
            />
          </label>
          <br />
          <label>
            Category:
            <input
              type="text"
              value={product.category}
              onChange={e => setProduct({ ...product, category: e.target.value })}
            />
          </label>
          <br />
          <label>
            Stock:
            <input
              type="number"
              value={product.stock}
              onChange={e => setProduct({ ...product, stock: Number(e.target.value) })}
            />
          </label>
          <br />
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      ) : (
        <>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Stock: {product.stock}</p>

          <button onClick={() => setIsEditing(true)}>Edit Product</button>
          <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
            Delete Product
          </button>
        </>
      )}
    </div>
  );
}

export default ProductDetail;
