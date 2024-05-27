import web3 from "@solana/web3.js";
import { createPrivateKey } from "crypto";
import bs58 from "bs58";

let keypair = web3.Keypair.generate();
console.log("generate wallet account");

let address = keypair.publicKey.toBase58();
console.log("wallet address : ", address);

let secretKey = keypair.secretKey;
console.log("wallet privateKey: ", secretKey);
console.log("wallet privateKey base58:", bs58.encode(secretKey));
