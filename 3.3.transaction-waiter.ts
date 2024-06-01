import { Connection } from "@solana/web3.js";

const connection = new Connection(process.env.RPC);

// await Promise.race([connection.confirmTransaction({
//   blockhash:
// })]);
