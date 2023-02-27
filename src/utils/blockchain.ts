import { ethers } from "ethers";

export async function getLogs(
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

// const AVERAGE_NUMBER_BLOCKS_ETHEREUM = 7118;

export async function getBlock(
  provider: ethers.providers.Web3Provider,
  blockNumber?: number
) {
  const block = await provider.getBlock("latest");
  console.log("block", block);
  return block;
}