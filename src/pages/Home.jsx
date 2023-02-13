import React from "react";
import infoImage from "@assets/info.png";
import "@styles/Home.scss";

const Home = () => {
  const redirectTo = (url) => {
    window.location.href = url;
  };
  const toMarketplace = () => {
    redirectTo("/marketplace");
  };
  const toDashboard = () => {
    redirectTo("/dashboard");
  };

  return (
    <section className="container">
      <div className="content">
        <div className="content-text">
          <h1>GroundWater Marketplace</h1>
          <p>
            Provides the technical infrastructure to facilitate the sharing and
            usage of groundwater.
          </p>
          <p>
            Facilitates collective-choice arrangements that allow most resource
            appropriators to participate.
          </p>
          <p>
            Makes possible the integration with third party financial external
            providers.
          </p>
          <div className="buttons">
            <button className="primary-button" onClick={toMarketplace}>
              Marketplace
            </button>
            <button className="secondary-button" onClick={toDashboard}>
              Dashboard
            </button>
          </div>
        </div>

        <div className="content-img">
          <img src={infoImage} alt="GMP info" />
        </div>
      </div>
    </section>
  );
};

export default Home;
