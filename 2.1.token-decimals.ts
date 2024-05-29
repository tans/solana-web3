import { Connection, PublicKey } from "@solana/web3.js";

const connection = new Connection(process.env.RPC);
const mintAddress = new PublicKey(
  "So11111111111111111111111111111111111111112",
);

const tokenInfo = await connection.getParsedAccountInfo(mintAddress);
console.log("token decimals", tokenInfo.value.data.parsed.info.decimals);
