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

  const [menu, setToggleMenu] = useState(false);
  const toggleMenu = () => {
    setToggleMenu(!menu);
  };

  return {
    saleInfo,
    toggleSaleInfo,
    sellInfo,
    toggleSellInfo,
    menu,
    toggleMenu,
  };
};

export default useInitialState;
