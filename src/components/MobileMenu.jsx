import React from "react";
import { useWeb3React } from "@web3-react/core";
import "@styles/MobileMenu.scss";

const MobileMenu = () => {
  const { active } = useWeb3React();

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
              <a href="#">Sell</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#" className="sign-out">
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
