import React, { useState, useEffect, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import useGmp from "@hooks/useGmp";
import RequestAccess from "@components/RequestAccess";
import GmpArtifact from "@config/web3/artifacts/Gmp";
import useTruncateAddress from "@hooks/useTruncateAddress";
import "@styles/Dashboard.scss";

const Dashboard = () => {
  const { active } = useWeb3React();
  const [totalSupply, setTotalSupply] = useState();
  const [salesCount, setSalesCount] = useState(0);
  const [sale, setSale] = useState();
  const { address } = GmpArtifact;

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

  const handleClick = () => {
    const saleId = document.getElementById("saleId");
    getSale(saleId.value);
  };

  const handleClear = () => {
    setSale(0);
  };

  if (!active)
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <RequestAccess />
      </div>
    );

  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <div className="sections">
        <div className="left">
          <h2>Contract info</h2>

          <h3>Address</h3>
          <a
            target="_blank"
            href={`https://goerli.etherscan.io/address/${address["5"]}`}
          >
            {address["5"]}
          </a>

          <h3>Total supply</h3>
          <p>{totalSupply}</p>

          <h3>Sales count</h3>
          <p> {salesCount}</p>
        </div>

        <div className="right">
          <h2>Query sale </h2>
          <div>
            <input id="saleId" type="number" min="0" max={salesCount - 1} />
            <button className="primary-button query-bt" onClick={handleClick}>
              Query
            </button>
            <button className="primary-button clear-bt" onClick={handleClear}>
              Clear
            </button>
          </div>
          {sale ? (
            <div className="card">
              <div className="info">
                <p className="bold"> GMP: {sale.amount / (1 * 10 ** 18)}</p>
                <p>ETH: {sale.price / (1 * 10 ** 18)}</p>
                <p>Wallet: {useTruncateAddress(sale.wallet)}</p>
                <p>Availability: {String(!sale.isSold)}</p>
              </div>
            </div>
          ) : (
            <div className="block"></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
