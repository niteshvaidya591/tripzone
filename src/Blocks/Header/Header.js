import React from "react";
import Countdown from "../../Components/CountDown";
import "./Header.css";
function Header() {
  return (
    <header className="header-container">
      <p className="header-main__title">
        Book now to get exciting travel deals. Upto 40% off on credit card payments
      </p>
      <p className="header-offer__title">
        <strong>
          Offers ends in <Countdown />
        </strong>
      </p>
    </header>
  );
}

export default Header;
