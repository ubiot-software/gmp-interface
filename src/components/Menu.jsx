import React, { useContext } from "react";
import AppContext from "@context/AppContext.js";
import "@styles/Menu.scss";

const Menu = () => {
  const { toggleSellInfo } = useContext(AppContext);
  const handleToggleSellInfo = () => {
    toggleSellInfo();
  };

  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="#" className="title">
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
          <a href="#">Sign out</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
