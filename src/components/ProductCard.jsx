function ProductCard({ product, onEditPrice }) {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>

      <p className="price">${product.price}</p>

      {/* Edit button updates the product price */}
      <button onClick={() => onEditPrice(product.id)}>
        Edit Price
      </button>
    </div>
  );
}

export default ProductCard;