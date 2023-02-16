import { useState } from "react";

const useInitialState = () => {
  const [saleInfo, setToggleSaleInfo] = useState(false);
  const toggleSaleInfo = () => {
    setToggleSaleInfo(!saleInfo);
  };

  const [sellInfo, setToggleSellInfo] = useState(false);
  const toggleSellInfo = () => {
    setToggleSellInfo(!sellInfo);
  };

  return {
    saleInfo,
    toggleSaleInfo,
    sellInfo,
    toggleSellInfo,
  };
};

export default useInitialState;
