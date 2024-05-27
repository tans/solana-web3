import web3 from "@solana/web3.js";
import bs58 from "bs58";

let wallet = web3.Keypair.fromSecretKey(
  bs58.decode(process.env.PRIVATE_KEY || ""),
);

console.log("wallet", wallet.publicKey.toBase58());
