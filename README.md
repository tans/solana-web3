# useful solana-web3 script

`copy and paste` Or `run in shell`

常用solana web3脚本(可复用或直接运行)

1. account manage & balance  -  帐号管理和余额查询
2. token info & balance - token信息和余额查询
3. transaction - 交易
   
## how to use
1. To install dependencies:

```bash
bun install
```

2. Set Env
```bash
cp env .env
```


```
# 私钥，用于发送交易
PRIVATE_KEY=
# 另一个钱包公钥，接收交易
PUBLIC_KEY=92U3aM8kRqihutqFWNDGxmWXxMHDrnAyFEMYXcKmvKcD
# 开发或测试网rpc
RPC=https://api.devnet.solana.com
```

3. To run:

```bash
bun run ***.ts
```
