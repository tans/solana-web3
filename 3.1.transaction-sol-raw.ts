import web3, { Connection } from "@solana/web3.js";
import base58 from "bs58";

const connection = new Connection(process.env.RPC);
const fromWallet = web3.Keypair.fromSecretKey(
  base58.decode(process.env.PRIVATE_KEY),
);
console.log("from wallet", fromWallet.publicKey.toBase58());

// request airdop 1 sol to fromWallet

// try {
//   let txhash = await connection.requestAirdrop(fromWallet.publicKey, 1e9);
//   console.log(`airdrop txhash: ${txhash}`);
// } catch (err) {
//   console.error(err);
// }

const toPublicKey = new web3.PublicKey(process.env.PUBLIC_KEY);

let oldBalance = await connection.getBalance(fromWallet.publicKey);
console.log("old balance", oldBalance);

const addPriorityFee = ComputeBudgetProgram.setComputeUnitPrice({
  microLamports: 1,
});

const transaction = new web3.Transaction().add(
  web3.SystemProgram.transfer({
    fromPubkey: fromWallet.publicKey,
    toPubkey: toPublicKey,
    lamports: 10 ** 9 * 0.003,
  }),
);
transaction.sign(fromWallet);
const signature = await connection.sendRawTransaction(transaction.serialize());
console.log("signature", signature);

await connection.confirmTransaction(signature, "confirmed");
// let tx = await connection.getTransaction(signature);
// console.log("transaction", tx);

let newBalance = await connection.getBalance(fromWallet.publicKey);
console.log("new balance", newBalance);

await Bun.sleep(1000);
newBalance = await connection.getBalance(fromWallet.publicKey);
console.log("new balance", newBalance);

await Bun.sleep(1000);
newBalance = await connection.getBalance(fromWallet.publicKey);
console.log("new balance", newBalance);
