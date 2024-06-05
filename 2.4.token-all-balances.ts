import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection("https://api.mainnet-beta.solana.com");

const pubkey = new PublicKey("J3y4VWneyFZEqvemxi7uUViPjkmXzsZ8r9d4YwgwHTFh");

let accounts = await connection.getTokenAccountsByOwner(pubkey, {
  programId: TOKEN_PROGRAM_ID,
});

console.log("token accounts ", accounts);
console.log("token accounts ", accounts.value[0].pubkey.toBase58());

let balance = await connection.getTokenAccountBalance(accounts.value[0].pubkey);
console.log("token accounts balance", balance.value.uiAmount);
