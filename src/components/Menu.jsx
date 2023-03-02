import React, { useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import AppContext from "@context/AppContext.js";
import "@styles/Menu.scss";

const Menu = () => {
  const { toggleSellInfo, toggleMenu } = useContext(AppContext);
  const handleToggleSellInfo = () => {
    toggleMenu();
    toggleSellInfo();
  };

  const handleToggleMenu = () => {
    toggleMenu();
  };

  // Disconnect to the wallet
  const { deactivate } = useWeb3React();
  const disconnect = () => {
    handleToggleMenu();
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="/account" className="title">
            My account
          </a>
        </li>
        <li>
          <a href="/marketplace">Buy</a>
        </li>
        <li>
          <a href="#" onClick={handleToggleSellInfo}>
            Sell
          </a>
        </li>
        <li>
          <a href="#" onClick={disconnect}>
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
