import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import GmpArtifact from "@config/web3/artifacts/Gmp";

const { address, abi } = GmpArtifact;

const useGmp = () => {
  const { active, library, chainId } = useWeb3React();

  const gmp = useMemo(() => {
    if (active) return new library.eth.Contract(abi, address[chainId]);
  }, [active, chainId, library?.eth?.Contract]);

  return gmp;
};

export default useGmp;
