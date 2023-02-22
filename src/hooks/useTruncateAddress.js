const useTruncateAddress = (address) => {
  const walletSectionA = String(address).substring(0, 6);
  const walletSectionZ = String(address).substring(38);
  const shortAdress = `${walletSectionA}...${walletSectionZ}`;

  return shortAdress;
};

export default useTruncateAddress;
