import { expect } from "chai";
import hre from "hardhat";

describe("MyToken", function () {
  let MyToken;
  let myToken;
  let owner;
  let recipient;
  let initialSupply;

  // 在每个测试用例运行前，自动部署合约并获取账户
  beforeEach(async function () {
    [owner, recipient] = await hre.ethers.getSigners();
    initialSupply = hre.ethers.parseEther("1000000");

    MyToken = await hre.ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy(initialSupply);
  });

  it("应该能够将代币从一个账户转移到另一个账户", async function () {
    const amountToTransfer = hre.ethers.parseEther("100");

    // 验证初始余额
    const ownerInitialBalance = await myToken.balanceOf(owner.address);
    expect(ownerInitialBalance).to.equal(initialSupply);

    // 发起转账交易
    await myToken.transfer(recipient.address, amountToTransfer);

    // 验证转账后的余额
    const ownerFinalBalance = await myToken.balanceOf(owner.address);
    const recipientFinalBalance = await myToken.balanceOf(recipient.address);

    expect(ownerFinalBalance).to.equal(initialSupply - amountToTransfer);
    expect(recipientFinalBalance).to.equal(amountToTransfer);
  });
});