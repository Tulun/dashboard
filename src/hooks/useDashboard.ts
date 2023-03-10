import { useEffect } from "react";
import { ethers } from "ethers";
import { getBlock } from "src/utils/blockchain";

export default function useDashboard(
  provider: ethers.providers.Web3Provider | undefined,
  address: string | undefined
) {
  useEffect(() => {
    if (provider && address) {
      const getAddressTransactions = async () => {
        const etherscanProvider = new ethers.providers.EtherscanProvider();
        const transactions = await etherscanProvider.getHistory(address);
        console.log("transactions", transactions);
      };
      getAddressTransactions();
      // const fetchBlock = async () => {
      //   const block = await getBlock(provider);
      //   console.log("block", block);
      //   return block;
      // };
      // fetchBlock();
      // const interval = setInterval(() => {
      //   fetchBlock();
      // }, 10000);
      // return () => {
      //   clearInterval(interval);
      // };
    }
  }, [provider, address]);

  return {};
}
