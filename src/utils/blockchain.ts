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

export function calculateAverageGasPrice(
  blocks: ethers.providers.Block[]
): number {
  // const gasPrices = blocks.map((block) => block.gasPrice.toNumber());
  const baseFeePerGas = blocks.map(
    (block) => block.baseFeePerGas?.toNumber() || 0
  );
  const gasUsed = blocks.map((block) => block.gasUsed.toNumber());
  console.log("baseFeePerGas", baseFeePerGas);
  console.log("gasUsed", gasUsed);
  return 0;
}
