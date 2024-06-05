import { Connection } from "@solana/web3.js";

const connection = new Connection(process.env.RPC);

let res = await connection.getBlockHeight();
console.log("block height res", res, new Date());

// let resBlock = await connection.getBlock(269332927, {
//   maxSupportedTransactionVersion: 0,
// });
// console.log("block res", resBlock);
