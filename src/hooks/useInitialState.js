import { useState } from "react";

const useInitialState = () => {
  const [transactionInfo, setToggleTransactionInfo] = useState(false);
  const toggleTransactionInfo = () => {
    setToggleTransactionInfo(!transactionInfo);
  };

  const [sellInfo, setToggleSellInfo] = useState(false);
  const toggleSellInfo = () => {
    setToggleSellInfo(!sellInfo);
  };

  return {
    transactionInfo,
    toggleTransactionInfo,
    sellInfo,
    toggleSellInfo,
  };
};

export default useInitialState;
