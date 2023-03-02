import React, { useContext } from "react";
import { useWeb3React } from "@web3-react/core";
import AppContext from "@context/AppContext";
import "@styles/MobileMenu.scss";

const MobileMenu = () => {
  const { active, deactivate } = useWeb3React();
  const { toggleSellInfo, toggleMobileMenu } = useContext(AppContext);

  const handleToggleSellInfo = () => {
    toggleSellInfo();
    toggleMobileMenu();
  };

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  return (
    <div className="MobileMenu">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
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
            <a href="/account">My Account</a>
          </li>
        )}
      </ul>

      {active ? (
        <>
          <ul>
            <li>
              <a href="/marketplace">Buy</a>
            </li>
            <li>
              <a href="#" onClick={handleToggleSellInfo}>
                Sell
              </a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#" className="sign-out" onClick={disconnect}>
                Sign out
              </a>
            </li>
          </ul>
        </>
      ) : (
        <ul>
          <li>
            <a href="#" className="sign-out">
              Sign in
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
