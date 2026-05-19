// Home page component
// Displays fullscreen coffee hero section

function Home() {

  return (

    <div className="hero-container">

      {/* Dark overlay for readability */}

      <div className="hero-overlay">


        {/* Hero text content */}

        <div className="hero-content">

          <h1>

            Copper Roast Café

          </h1>


          <p>

            Experience artisan coffee inspired by
            cozy European cafés, handcrafted espresso,
            and rich global flavors.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Home;