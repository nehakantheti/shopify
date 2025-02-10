import "../styles/Products.css";

function Products() {
  return (
    <div className="container">
      <h2>Products</h2>
      <div className="product-grid">
        <div className="product-card">Product 1</div>
        <div className="product-card">Product 2</div>
        <div className="product-card">Product 3</div>
        <div className="product-card">Product 4</div>
      </div>
    </div>
  );
}

export default Products;