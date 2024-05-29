import web3, { Connection } from "@solana/web3.js";
import base58 from "bs58";
const connection = new Connection(process.env.RPC);

let signature =
  "afQ41jqnqdkYAo8cSB1xKApyrymmA2LSNo1owkfzVzFZy9vj2cR3HFwz4K6ryUz7zsq4Wff71jEUWwCb6gGwAu1";
let status = await connection.getSignatureStatus(signature, {
  searchTransactionHistory: true,
});

console.log("signature", status?.value?.confirmationStatus || status);

let tx = await connection.getConfirmedTransaction(signature);
console.log("confirmed tx", tx.meta.preBalances, tx.meta?.postBalances);
