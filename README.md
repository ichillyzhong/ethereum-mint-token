# MyToken - ERC-20 Token Contract

An Ethereum-based ERC-20 token smart contract project built with the Hardhat development framework.

## 📋 Project Overview

MyToken is a standard ERC-20 token contract with the following features:
- Token Name: MyToken (MTK)
- Initial Supply: 1,000,000 MTK
- Built on OpenZeppelin's secure implementation
- Supports standard ERC-20 functions like transfer, approval, etc.

## Tech Stack

- **Solidity**: ^0.8.20
- **Hardhat**: ^2.22.0
- **OpenZeppelin Contracts**: Secure smart contract library
- **Ethers.js**: Ethereum interaction library
- **Chai**: Testing framework

## Quick Start

### Prerequisites

- Node.js >= 16.0.0
- npm or yarn

### Installation

```bash
# Clone the project
git clone https://github.com/ichillyzhong/ethereum-mint-token.git
cd ethereum-mint-token

# Install dependencies
npm install
```

### Project Structure

```
ethereum-mint-token/
├── contracts/
│   └── MyToken.sol          # ERC-20 token contract
├── scripts/
│   ├── deploy.js           # Deployment script
│   └── interact.js         # Interaction script
├── test/
│   └── testMyToken.js      # Test file
├── hardhat.config.js       # Hardhat configuration
└── package.json
```

## Usage Guide

### 1. Compile Contracts

```bash
npx hardhat compile
```

### 2. Run Tests

```bash
npx hardhat test
```

### 3. Start Local Network

```bash
# Start local Hardhat network
npx hardhat node --port 8545
```

### 4. Deploy Contract

```bash
# Deploy to local network
npx hardhat run scripts/deploy.js --network localhost

# Deploy to other networks (requires network configuration)
npx hardhat run scripts/deploy.js --network <network-name>
```

### 5. Interact with Contract

```bash
# Run interaction script
npx hardhat run scripts/interact.js --network localhost
```

## Testing

The project includes a comprehensive test suite that tests the basic token functionality:

```bash
# Run all tests
npx hardhat test

# Run specific test file
npx hardhat test test/testMyToken.js

# View test coverage
npx hardhat coverage
```

## Contract Features

### MyToken.sol

- `constructor(uint256 initialSupply)`: Constructor that sets initial supply
- `transfer(address to, uint256 amount)`: Transfer functionality
- `balanceOf(address account)`: Query balance
- `approve(address spender, uint256 amount)`: Approval functionality
- Inherits from OpenZeppelin's ERC20 standard implementation
