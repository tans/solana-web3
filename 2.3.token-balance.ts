import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.mainnet-beta.solana.com");

const pubkey = new PublicKey("J3y4VWneyFZEqvemxi7uUViPjkmXzsZ8r9d4YwgwHTFh");

const mintAddress = new PublicKey(
  "8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB",
);

let accounts = await connection.getTokenAccountsByOwner(pubkey, {
  mint: mintAddress,
});

console.log("token accounts ", accounts.value[0].pubkey.toBase58());

let balance = await connection.getTokenAccountBalance(accounts.value[0].pubkey);
console.log("token accounts balance", balance.value.uiAmount);
