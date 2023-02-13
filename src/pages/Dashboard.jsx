import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { connector } from "@config/web3";
import React, { useState, useEffect, useCallback } from "react";

const Dashboard = () => {
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

  let shortAdress = "Disconnected";
  if (active) {
    const walletSectionZ = String(account).substring(38);
    const walletSectionA = String(account).substring(0, 6);
    shortAdress = `${walletSectionA}...${walletSectionZ}`;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {isUnsupportedChain ? "Network not supported" : "Connect wallet"}
      <button onClick={connect}>Connect</button>
      <button onClick={disconnect}>Disconnect</button>
      <p>Account address: {shortAdress}</p>
      <p>Account balance: {balance}</p>
    </div>
  );
};

export default Dashboard;
