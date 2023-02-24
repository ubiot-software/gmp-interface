import React, { useState, useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import RequestAccess from "@components/RequestAccess";
import useGmp from "@hooks/useGmp";
import "@styles/Account.scss";

const Account = () => {
  const { active, account, library } = useWeb3React();
  const [balance, setBalance] = useState();
  const [gmpBalance, setGmpBalance] = useState();

  const gmp = useGmp();

  // Get data section
  const getGmp = useCallback(async () => {
    if (gmp) {
      const total = await gmp.methods.balanceOf(account).call();
      setGmpBalance(total / (1 * 10 ** 18));
    }
  }, [gmp]);

  useEffect(() => {
    getGmp();
  }, [getGmp]);

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

  if (!active)
    return (
      <div className="Dashboard">
        <h1>Account</h1>
        <RequestAccess />;
      </div>
    );

  return (
    <div className="Account">
      <h1>My Account</h1>
      <div className="">
        <h2>Info</h2>
        <p>
          <span>My wallet:</span> {account}
        </p>
        <p>
          <span>My ETH:</span> {balance}
        </p>
        <p>
          <span>My GMP:</span> {gmpBalance}
        </p>
      </div>
    </div>
  );
};

export default Account;
