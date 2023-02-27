import { useEffect } from "react";
import { ethers } from "ethers";
import { getBlock } from "src/utils/blockchain";

export default function useDashboard(
  provider: ethers.providers.Web3Provider | undefined
) {
  useEffect(() => {
    if (provider) {
      const fetchBlock = async () => {
        const logs = await getBlock(provider);
        console.log("logs", logs);
      };
      fetchBlock();
      const interval = setInterval(() => {
        fetchBlock();
      }, 20000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [provider]);

  return {};
}
