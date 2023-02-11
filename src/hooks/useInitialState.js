import { useState } from "react";

const initialState = {};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toggleTransactionInfo = () => {
    setState(!state);
  };

  return {
    state,
    toggleTransactionInfo,
  };
};

export default useInitialState;
