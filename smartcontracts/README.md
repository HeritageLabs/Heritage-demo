# Heritage smart contract

Smart contract for Heritage
View contract on [etherscan](https://goerli.etherscan.io/address/0x916C215bd1429Ae27d82C4B136f5ef002249B3e7#code)

## Install dependencies

```bash
npm install
```

## Compile

```bash
npx hardhat compile
```

## Deploy

```bash
npx hardhat run scripts/deploy.js
```

## Deploy to mumbai testnet

```bash
npx hardhat run scripts/deploy.js --network goerli
```

## Verify contract

```bash
npx hardhat verify [CONTRACT ADDRESS] --network goerli
```
