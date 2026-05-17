import products from "../data/products";

function Shop() {
  return (
    <div>
      <h1>Shop</h1>

      {products.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
          }}
        >
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Shop;