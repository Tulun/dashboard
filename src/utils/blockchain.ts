import { ethers } from "ethers";
import { saveBlock } from "./db";

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

export async function getBlock(
  provider: ethers.providers.Web3Provider,
  blockNumber?: number
) {
  const block = await provider.getBlock("latest");
  // Attempt to save block to local storage if not cached
  saveBlock(block);

  return block;
}
