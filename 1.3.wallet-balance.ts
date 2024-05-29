import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(process.env.RPC);

const mintAddress = new PublicKey(
  "So11111111111111111111111111111111111111112",
);

let balance = await connection.getBalance(mintAddress);
console.log("sol balance", balance);

const pubkey = new PublicKey(process.env.PUBLIC_KEY);
await connection.requestAirdrop(pubkey, 1 * 10 ** 9);
console.log("pubkey balance", await connection.getBalance(pubkey));
console.log("pubkey account", await connection.getAccountInfo(pubkey));
