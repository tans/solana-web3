import web3, { Connection } from "@solana/web3.js";
import base58 from "bs58";
const connection = new Connection("https://api.devnet.solana.com");

let signature =
  "4MJrb6AufdvMFBWpx1TRD8Ruyn4bzxWWsNkfq2pmAHLkiktzFibnzmAGBiLQFmBhsnyehVP2pqL4Mr9wBqVAzkqd";
let status = await connection.getSignatureStatus(signature, {
  searchTransactionHistory: true,
});

console.log("signature", status?.value?.confirmationStatus || status);
