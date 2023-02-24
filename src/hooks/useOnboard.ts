import { useState, useEffect } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";

const injected = injectedModule();

const infuraKey = process.env.REACT_APP_INFURA_KEY;
const rpcUrl = `https://mainnet.infura.io/v3/${infuraKey}`;

// initialize Onboard
init({
  wallets: [injected],
  accountCenter: {
    desktop: {
      enabled: false,
    },
    mobile: {
      enabled: false,
    },
  },
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
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

  useEffect(() => {
    if (wallet && !provider) {
      setProvider(new ethers.providers.Web3Provider(wallet.provider as any));
    }
    if (!wallet && provider) {
      setProvider(undefined);
    }
  }, [wallet, provider]);

  return {
    wallet,
    connecting,
    connect,
    disconnect,
    provider,
  };
}
