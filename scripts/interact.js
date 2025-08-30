import hre from "hardhat";

async function main() {
  // 1. Set contract address and recipient address
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your contract address
  const recipientAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"; // This is a Hardhat test account

  // 2. Get contract instance
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = MyToken.attach(contractAddress);

  // 3. Get accounts
  const [owner] = await hre.ethers.getSigners();
  const ownerAddress = owner.address;

  console.log(`Before transfer, account ${ownerAddress} balance is: ${hre.ethers.formatEther(await myToken.balanceOf(ownerAddress))} MTK`);
  console.log(`Before transfer, account ${recipientAddress} balance is: ${hre.ethers.formatEther(await myToken.balanceOf(recipientAddress))} MTK`);

  // 4. Initiate transfer transaction
  const amountToTransfer = hre.ethers.parseEther("100"); // Transfer 100 tokens
  const tx = await myToken.transfer(recipientAddress, amountToTransfer);
  await tx.wait(); // Wait for transaction to be mined

  console.log(`\nSuccessfully transferred ${hre.ethers.formatEther(amountToTransfer)} MTK to ${recipientAddress}`);

  // 5. Query balances again
  console.log(`After transfer, account ${ownerAddress} balance is: ${hre.ethers.formatEther(await myToken.balanceOf(ownerAddress))} MTK`);
  console.log(`After transfer, account ${recipientAddress} balance is: ${hre.ethers.formatEther(await myToken.balanceOf(recipientAddress))} MTK`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});