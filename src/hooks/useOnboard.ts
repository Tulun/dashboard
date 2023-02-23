import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";

const injected = injectedModule();

const infuraKey = process.env.REACT_APP_INFURA_KEY;
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
  ],
});

export default function useOnboard() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();

  if (wallet) {
    // ethersProvider = new ethers.providers.Web3Provider(wallet.provider, "any");
    console.log("ethersProvider", ethers);
  }

  return {
    wallet,
    connecting,
    connect,
    disconnect,
  };
}
