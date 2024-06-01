import web3, { Connection } from "@solana/web3.js";
import base58 from "bs58";
const connection = new Connection(process.env.RPC);

let signature =
  "3kzj4DLm7HUf2yHs4umYcJBbXWM2hzF1VkgT1HKRQAXUw3FkPL9u37CUMuWidCfVHrxtryE4JL4TquaYA1e8ZNA2";
let status = await connection.getSignatureStatus(signature, {
  searchTransactionHistory: true,
});

console.log("signature", status?.value?.confirmationStatus || status);

let tx = await connection.getTransaction(signature, {
  maxSupportedTransactionVersion: 0,
});
console.log("confirmed tx", tx);
