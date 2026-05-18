// ProductCard component
// Responsible for displaying one coffee product

function ProductCard({
  product,
  onEditPrice,
  onDelete,
  onEditName
}) {

  return (

    // Product card container
    <div className="product-card">

      {/* Product name */}
      <h2>{product.name}</h2>

      {/* Product price */}
      <p className="price">
        ${product.price}
      </p>

      {/* Button container */}
      <div className="button-group">

        {/* Edit price button */}
        {/* Sends product id into edit function */}
        <button onClick={() => onEditPrice(product.id)}>
          Edit Price
        </button>

        {/* Edit product name */}
        <button onClick={() => onEditName(product.id)}>
          Edit Name
        </button>

        {/* Delete product button */}
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