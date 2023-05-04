# CrowdFunding Smart contract
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![Solidity Version](https://img.shields.io/badge/solidity-0.8.17-blueviolet)](https://solidity.readthedocs.io/en/v0.8.17/) 
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)


This repository contains the code for the Crowdfunding smart contract, which is designed to facilitate the creation, funding, and management of decentralized crowdfunding campaigns on the Ethereum blockchain. The smart contract is compatible with the ERC20 token standard and allows project owners to create unique campaigns with specific funding goals and deadlines. Contributors can then support these projects by pledging custom ERC20 tokens. Built with security and decentralization in mind, this Crowdfunding contract empowers users to launch, fund, and complete projects in a transparent and secure manner without relying on centralized platforms.

##  🧭 Table of Contents
- [CrowdFunding Smart contract](#crowdfunding-smart-contract)
  - [🧭 Table of Contents](#-table-of-contents)
  - [👋 Introduction](#-introduction)
  - [✨️ Features](#️-features)
  - [📜 Requirements](#-requirements)
  - [⚙️ Installation and Deployment](#️-installation-and-deployment)
  - [🚀 Test](#-test)
  - [🔧 Usage](#-usage)
  - [✅ Verified Smart Contract](#-verified-smart-contract)
  - [👥 Contributing](#-contributing)
  - [🔓 License](#-license)

## 👋 Introduction

CrowdFunding is an open-source, flexible and scalable smart contract designed to facilitate the creation, funding, and management of crowdfunding campaigns on the Ethereum blockchain. The contract allows project owners to create new crowdfunding campaigns with specific funding goals and deadlines. Contributors can then pledge their support to these projects using a custom ERC20 token.


## ✨️ Features

- Project Creation: Project owners can create new crowdfunding projects by specifying a funding goal and a deadline. Each project is assigned a unique ID for easy identification.
- Funding with ERC20 Tokens: Contributors can support projects by pledging ERC20 tokens to the project within the specified deadline. The smart contract keeps track of the total funds raised for each project and individual contributions made by each user.
- Automatic Completion: If a project reaches its funding goal before the deadline, the project is marked as complete, and the funds can be withdrawn by the project owner.
- Refunds: If a project does not meet its funding goal within the specified deadline, contributors can withdraw their pledged funds as a refund.
- Withdraw Funds: The project owner can withdraw the raised funds once the project has reached its funding goal and the deadline has passed.
- Upgradability: The contract implements the Proxy Contract Upgradeability pattern, allowing for easy and safe upgrades to the contract logic without affecting the contract address or altering the existing NFTs.


## 📜 Requirements

- [Node.js](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)

## ⚙️ Installation and Deployment

1. Clone this repository
   
```shell
git clone https://github.com/alex-necsoiu/metacrafters-challange

2. Install the Dependencies and Dotenv

```shell
npm install
yarn install
```

3. Create .env file

```shell
GOERLI_RPC_URL = 
MAINNET_RPC_URL= 
PRIVATE_KEY = 
ETHERSCAN_API = 
INFURA_KEY=
```

4. Compiling the Smart Contracts

```shell
npx hardhat clean
npx hardhat compile
```


5. Deploying to a Network

To deploy the contract to a network such as Ethereum mainnet, modify the deployment script (scripts/deploy.js) and run the following command:

```shell
npx hardhat run scripts/deploy.js --network <network-name>
```

## 🚀 Test

```shell
npx hardhat test
```

## 🔧 Usage

To interact with the PandoraNFT smart contract, you can use a variety of tools including Remix, Truffle, and Hardhat. To get started, simply connect to a local Ethereum network using Hardhat.

## ✅ Verified Smart Contract

Goerli:
```shell
Token Contract: https://goerli.etherscan.io/address/0x1d193CB15ed1e9762CdF8e55134530c26EBe9045#code
```

## 👥 Contributing

We welcome contributions in the form of bug reports, feature requests, or pull requests. For more information, please see CONTRIBUTING.md.

## 🔓 License
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

This project is licensed under the MIT License - see the LICENSE file for details.