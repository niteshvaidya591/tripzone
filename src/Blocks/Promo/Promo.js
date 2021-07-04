import React from "react";
import PromoImage from "./Promo-image.png";
import "./Promo.css";

const PromoContent = () => {
  return (
    <div>
      <div className="promo">
        <img src={PromoImage} alt="Promo content" />
        <div className="promo-content app-container">
          <h2 className="promo-heading">PLAN A TRIP</h2>
          <h2 className="promo-body">
            <p>Make your vacation the most</p> <p>memorable one</p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PromoContent;
