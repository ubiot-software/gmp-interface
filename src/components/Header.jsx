import React, { useContext, useEffect, useCallback } from "react";
import { connector } from "@config/web3";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import useTruncateAddress from "@hooks/useTruncateAddress";
import SaleDetail from "@containers/SaleDetail";
import AppContext from "@context/AppContext";
import Menu from "@components/Menu";
import Sell from "@containers/Sell";
import logoImg from "@assets/logo.png";
import addImg from "@assets/add.png";
import "@styles/Header.scss";

const Header = () => {
  // Wallet display config
  const { active, activate, deactivate, account, error } = useWeb3React();
  const { saleInfo, sellInfo, menu, toggleMenu } = useContext(AppContext);

  const handleToggleMenu = () => {
    if (active) {
      toggleMenu();
    }
  };

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  // Connect to the wallet
  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  // Disconnect to the wallet
  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  //   If previously connected, keep connected
  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") {
      connect();
    }
  }, [connect]);

  // String that shows connection status
  let shortAdress = "Connect wallet";
  if (active) {
    shortAdress = useTruncateAddress(account);
  }

  return (
    <nav>
      <div className="navbar-left prevent-select">
        <a className="logo-container" href="/">
          <img src={logoImg} alt="logo" className="nav-logo" />
        </a>
        <ul>
          <li>
            <a href="/marketplace">Marketplace</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          {active && (
            <li>
              <a href="/account">My account</a>
            </li>
          )}
          {/* <li>
            <a href="#">Wells</a>
          </li>
          <li>
            <a href="#">Map</a>
          </li>
          <li>
            <a href="#">Metering</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-right prevent-select">
        <div className="navbar-wallet">
          {/* Add account button, showed when there is not a connected acount */}
          {!active && (
            <img className="add-account" src={addImg} onClick={connect} />
          )}
          <p className="prevent-select" onClick={handleToggleMenu}>
            {isUnsupportedChain ? "Network not supported" : shortAdress}
          </p>
          {/* Close account button, showed when there is a connected account */}
          {active && (
            <img className="close-account" src={addImg} onClick={disconnect} />
          )}
        </div>
      </div>
      {menu && <Menu />}
      {sellInfo && <Sell />}
      {saleInfo && <SaleDetail />}
    </nav>
  );
};

export default Header;
