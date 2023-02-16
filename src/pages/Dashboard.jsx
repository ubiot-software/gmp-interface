import React, { useState, useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useGmp from "@hooks/useGmp";

const Dashboard = () => {
  const { active } = useWeb3React();
  const [totalSupply, setTotalSupply] = useState();
  const [salesCount, setSalesCount] = useState();
  const [sale, setSale] = useState([]);

  const gmp = useGmp();

  // Get data section
  const getGmp = useCallback(async () => {
    if (gmp) {
      const total = await gmp.methods.totalSupply().call();
      setTotalSupply(total / (1 * 10 ** 18));

      const result = await gmp.methods.salesCount().call();
      setSalesCount(result);
    }
  }, [gmp]);

  useEffect(() => {
    getGmp();
  }, [getGmp]);

  // Get sale
  const getSale = useCallback(
    async (index) => {
      if (gmp) {
        const result = await gmp.methods.sales(index).call();
        setSale(result);
      }
    },
    [gmp]
  );

  useEffect(() => {
    getSale(0);
  }, [getSale]);

  if (!active) return "Connect your wallet";

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total supply: {totalSupply}</p>
      <p>Sales count: {salesCount}</p>
      <h2>Sale info </h2>
      <p>Amount: {sale.amount / (1 * 10 ** 18)}</p>
      <p>Price: {sale.price / (1 * 10 ** 18)}</p>
      <p>Wallet: {sale.wallet}</p>
      <p>Availability: {String(!sale.isSold)}</p>
    </div>
  );
};

export default Dashboard;
