import React from "react";
import logo from "@assets/logo.png";
import TransactionDetail from "@containers/TransactionDetail";
import "@styles/Header.scss";

const Header = () => {
  return (
    <nav>
      <div className="navbar-left">
        <a className="logo-container" href="/">
          <img src={logo} alt="logo" className="nav-logo" />
        </a>
        <ul>
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="/marketplace">Marketplace</a>
          </li>
          <li>
            <a href="#">Wells</a>
          </li>
          <li>
            <a href="#">Map</a>
          </li>
          <li>
            <a href="#">Docs</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Metering</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <p className="navbar-wallet">0x577A...46e308</p>
      </div>
      {<TransactionDetail />}
    </nav>
  );
};

export default Header;
