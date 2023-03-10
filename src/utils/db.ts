import localForage from "localforage";
import { ethers } from "ethers";

export const blockCache = localForage.createInstance({
  name: "blockcache",
  storeName: "blocks",
});

export async function saveBlock(block: ethers.providers.Block) {
  const savedBlock = await blockCache.getItem(block.number.toString());
  console.log("block", block.number.toString(), savedBlock);
  if (!savedBlock) {
    try {
      await blockCache.setItem(block.number.toString(), block);
      console.log("saved", block.number.toString());
      return true;
    } catch (error) {
      console.error("Error in save block call", error);
    }
  }
  return null;
}
