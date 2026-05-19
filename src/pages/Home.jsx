// Home page component
// Displays landing page hero section

function Home() {

  return (

    <div className="hero-container">

      {/* Dark overlay improves text readability */}

      <div className="hero-overlay">


        {/* Main hero content */}

        <div className="hero-content">

          <h1>

            Welcome to Copper Roast Café

          </h1>


          <p>

            Discover artisan coffee blends inspired by
            cozy European cafés, mountain roasteries,
            and rich global flavors.

          </p>

        </div>

      </div>

    </div>

  );

}

export default Home;