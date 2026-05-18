// ProductCard component
// Displays one coffee product
// Receives product data and functions as props

function ProductCard({

  coffee,
  updatePrice,
  deleteProduct

}) {

  return (

    <div className="product-card">

      {/* Product name */}

      <h2>

        {coffee.name}

      </h2>


      {/* Product description */}

      <p>

        {coffee.description}

      </p>


      {/* Product origin */}

      <p>

        Origin:

        {coffee.origin}

      </p>


      {/* Product price */}

      <p>

        $

        {coffee.price}

      </p>


      {/* Update button */}

      <button

        onClick={() => {

          const newPrice = prompt(

            "Enter new price"

          );

          if (newPrice) {

            updatePrice(

              coffee.id,

              Number(newPrice)

            );

          }

        }}

      >

        Edit Price

      </button>


      {/* Delete button */}

      <button

        onClick={() =>

          deleteProduct(

            coffee.id

          )

        }

      >

        Delete

      </button>

    </div>

  );

}

export default ProductCard;