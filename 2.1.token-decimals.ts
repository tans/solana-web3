import { Connection, PublicKey } from "@solana/web3.js";

const mintAddress = new PublicKey(
  "So11111111111111111111111111111111111111112",
);

const connection = new Connection("https://api.mainnet-beta.solana.com");

const tokenInfo = await connection.getParsedAccountInfo(mintAddress);

console.log("token decimals", tokenInfo.value.data.parsed.info.decimals);
