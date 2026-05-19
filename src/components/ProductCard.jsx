// ProductCard component
// Displays a single coffee product
// Receives coffee data and CRUD functions as props

function ProductCard({

  coffee,
  updatePrice,
  deleteProduct

}) {

  return (

    <div className="product-card">

      {/* Coffee image */}

      <img

        src={coffee.image}

        alt={coffee.name}

        className="coffee-image"

      />


      {/* Coffee name */}

      <h2>

        {coffee.name}

      </h2>


      {/* Coffee description */}

      <p className="coffee-description">

        {coffee.description}

      </p>


      {/* Coffee origin */}

      <p className="coffee-origin">

        <strong>Origin:</strong>

        {" "}

        {coffee.origin}

      </p>


      {/* Coffee price */}

      <p className="price">

        $

        {coffee.price}

      </p>


      {/* Button container */}

      <div className="button-group">

        {/* Update button */}

        <button

          onClick={() => {

            const newPrice = prompt(

              "Enter new price"

            );

            // Prevent empty updates

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

          className="delete-btn"

          onClick={() =>

            deleteProduct(

              coffee.id

            )

          }

        >

          Delete

        </button>

      </div>

    </div>

  );

}

export default ProductCard;