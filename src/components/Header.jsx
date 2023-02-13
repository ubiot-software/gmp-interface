import React, { useState, useContext } from "react";
import TransactionDetail from "@containers/TransactionDetail";
import AppContext from "@context/AppContext";
import Menu from "@components/Menu";
import Sell from "@containers/Sell";
import logo from "@assets/logo.png";
import "@styles/Header.scss";

const Header = () => {
  const { transactionInfo, sellInfo } = useContext(AppContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

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
        <p className="navbar-wallet prevent-select" onClick={handleToggleMenu}>
          0x577A...46e308
        </p>
      </div>
      {toggleMenu && <Menu />}
      {sellInfo && <Sell />}
      {transactionInfo && <TransactionDetail />}
    </nav>
  );
};

export default Header;
