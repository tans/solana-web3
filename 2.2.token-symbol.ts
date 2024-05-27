import { Connection, PublicKey } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";
import meta from "@metaplex-foundation/mpl-token-metadata";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";

const connection = new Connection("https://api.mainnet-beta.solana.com");
const mintAddress = new PublicKey(
  "So11111111111111111111111111111111111111112",
);

const metaplex = Metaplex.make(connection);
console.log("mint", mintAddress.toBase58());

const umi = createUmi("https://api.mainnet-beta.solana.com");

const metadataPda = metaplex.nfts().pdas().metadata({ mint: mintAddress });
console.log("pda", metadataPda.toBase58());

let ret = await meta.fetchMetadata(umi, metadataPda);
console.log("symbol", ret.symbol);
console.log("name", ret.name);
