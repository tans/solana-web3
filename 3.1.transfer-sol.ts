import web3, { Connection } from "@solana/web3.js";
import base58 from "bs58";

const connection = new Connection("https://api.devnet.solana.com");
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

const transaction = new web3.Transaction().add(
  web3.SystemProgram.transfer({
    fromPubkey: fromWallet.publicKey,
    toPubkey: toPublicKey,
    lamports: 10 ** 9 * 0.003,
  }),
);

const { value: simulatedTransactionResponse } =
  await connection.simulateTransaction(transaction, [fromWallet]);
const { err, logs } = simulatedTransactionResponse;
console.log("sim logs", logs);

const signature = await connection.sendTransaction(transaction, [fromWallet]);
console.log("signature", signature);

let transaction = await connection.getTransaction(signature);
console.log("transaction", transaction);
