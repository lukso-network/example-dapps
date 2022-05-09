## dApp Examples

A set of example dApps and apps using `ethers.js` and `ethjs` to showcase the usage of Universal Profiles.

## Install and run locally

```
git clone https://github.com/lukso-network/example-dapps-ethjs
cd example-dapps-ethjs
python3 -m http.server --cgi 8080
```

## Hosted

[WIP](WIP)

## Usage

Open any of the `.html` files in `Chrome` or `Firefox`. Everything runs out of the box.

## Available Examples

Using ethers with Universal Profile and MetaMask support:

- [First Contract dApp](WIP) - [code](./first-contract.html) - Set and Get from a SimpleStore contract
- [TicTacToe](WIP) - [code](./tictactoe.html) - A tic tac toe game, the winning player gets the reward!

Using ethjs and in-browser TestRPC without Universal Profile and MetaMask support:

- [Account dApp](WIP) - [code](./accounts.html) -- See your Ethereum accounts and balances
- [Ballot dApp](WIP) - [code](./ballot.html) -- The Ballot.sol dApp from the Solidity Read the docs
- [Blockchain Explorer](WIP) - [code](./blockchain-explorer.html) Lookup blocks and transactions on the Etheruem mainnet, via Infura.io
- [Simple Auction dApp](WIP) - [code](./simple-auction.html) - A simple Ethereum auction from the Solidity examples
- [Token Wallet](WIP) - [code](./token-wallet.html) - Send and receive EC20 standard tokens

## About

This is a small set of dApps and apps using `ethers` and `ethjs`. Each example is meant to demonstrate correct usage of those libraries.

All listed examples on the hosted [landingpage](WIP) connect to the LUKSO L14 testnetwork. This is meant to get you up and running with the [Universal Profile Extension](WIP) but also works using the [MetaMask](https://metamask.io/) wallet, so configuration is kept to a minimum.

## Libraries Used

- [TestRPC](http://github.com/ethereumjs/testrpc) - An entire Ethereum node simulator written in Javascript
- [ethjs](http://github.com/ethjs/ethjs) - A simple JS utility library for Ethereum
- [ethers.js](https://github.com/ethers-io/ethers.js/)

## Licence

The project was forked and is licensed under the MIT license as its original,

Original Copyright (c) 2016 Nick Dodson. nickdodson.com

```
The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
