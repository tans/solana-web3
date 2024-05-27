import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.mainnet-beta.solana.com");

const mintAddress = new PublicKey(
  "So11111111111111111111111111111111111111112",
);

let balance = await connection.getBalance(mintAddress);
console.log("balance", balance);
