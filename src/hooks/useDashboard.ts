import { useEffect } from "react";
import { ethers } from "ethers";

export default function (provider: ethers.providers.Web3Provider | undefined) {
  useEffect(() => {
    if (provider) {
      // const fetchLogs = async () => {
      //   const logs = await getLogs(provider);
      //   console.log("logs", logs);
      // };
      // fetchLogs();
    }
  }, [provider]);

  return {};
}

const AVERAGE_NUMBER_BLOCKS_ETHEREUM = 7118;

async function getLogs(
  provider: ethers.providers.Web3Provider,
  address: string,
  toBlock: number,
  fromBlock: number
) {
  const filter = {
    fromBlock,
    toBlock,
    address,
  };

  const logs = await provider.getLogs(filter);

  return logs;
}
