import hre from "hardhat";

async function main() {
  const initialSupply = hre.ethers.parseEther("1000000"); // 100万个代币

  const myToken = await hre.ethers.deployContract("MyToken", [initialSupply]);

  await myToken.waitForDeployment();

  console.log(`MyToken deployed to ${myToken.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});