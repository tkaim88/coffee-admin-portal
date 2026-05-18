function ProductCard({
  product,
  onEditPrice,
  onDelete,
  onEditName
}) {

  return (
    <div className="product-card">

      <h2>{product.name}</h2>

      <p className="price">
        ${product.price}
      </p>

      <div className="button-group">

        <button onClick={() => onEditPrice(product.id)}>
          Edit Price
        </button>

        <button onClick={() => onEditName(product.id)}>
          Edit Name
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(product.id)}
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default ProductCard;