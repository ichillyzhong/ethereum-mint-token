import hre from "hardhat";

async function main() {
  // 1. 设置合约地址和接收地址
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // 请替换为你的合约地址
  const recipientAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"; // 这是一个Hardhat测试账户

  // 2. 获取合约实例
  const MyToken = await hre.ethers.getContractFactory("MyToken");
  const myToken = MyToken.attach(contractAddress);

  // 3. 获取账户
  const [owner] = await hre.ethers.getSigners();
  const ownerAddress = owner.address;

  console.log(`转账前，账户 ${ownerAddress} 的余额是: ${hre.ethers.formatEther(await myToken.balanceOf(ownerAddress))} MTK`);
  console.log(`转账前，账户 ${recipientAddress} 的余额是: ${hre.ethers.formatEther(await myToken.balanceOf(recipientAddress))} MTK`);

  // 4. 发起转账交易
  const amountToTransfer = hre.ethers.parseEther("100"); // 转移100个代币
  const tx = await myToken.transfer(recipientAddress, amountToTransfer);
  await tx.wait(); // 等待交易被打包到区块中

  console.log(`\n已成功向 ${recipientAddress} 转账 ${hre.ethers.formatEther(amountToTransfer)} MTK`);

  // 5. 再次查询余额
  console.log(`转账后，账户 ${ownerAddress} 的余额是: ${hre.ethers.formatEther(await myToken.balanceOf(ownerAddress))} MTK`);
  console.log(`转账后，账户 ${recipientAddress} 的余额是: ${hre.ethers.formatEther(await myToken.balanceOf(recipientAddress))} MTK`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});