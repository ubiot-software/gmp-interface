import React, { useState, useContext, useEffect, useCallback } from "react";
import TransactionDetail from "@containers/TransactionDetail";
import AppContext from "@context/AppContext";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { connector } from "@config/web3";
import Menu from "@components/Menu";
import Sell from "@containers/Sell";
import logoImg from "@assets/logo.png";
import addImg from "@assets/add.png";
import "@styles/Header.scss";

const Header = () => {
  const { transactionInfo, sellInfo } = useContext(AppContext);
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  // Wallet display config
  const [balance, setBalance] = useState(0);
  const { active, activate, deactivate, account, error, library } =
    useWeb3React();

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

  // Get balance of the account
  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setBalance((toSet / (1 * 10 ** 18)).toFixed(2));
  }, [library?.eth, account]);

  useEffect(() => {
    if (active) {
      getBalance();
    }
  }, [active, getBalance]);

  // String that shows connection status
  let shortAdress = "Connect wallet";
  if (active) {
    const walletSectionA = String(account).substring(0, 6);
    const walletSectionZ = String(account).substring(38);
    shortAdress = `${walletSectionA}...${walletSectionZ}`;
  }

  return (
    <nav>
      <div className="navbar-left">
        <a className="logo-container" href="/">
          <img src={logoImg} alt="logo" className="nav-logo" />
        </a>
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
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
      {toggleMenu && <Menu />}
      {sellInfo && <Sell />}
      {transactionInfo && <TransactionDetail />}
    </nav>
  );
};

export default Header;
