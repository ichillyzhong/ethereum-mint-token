import { expect } from "chai";
import hre from "hardhat";

describe("MyToken", function () {
  let MyToken;
  let myToken;
  let owner;
  let recipient;
  let initialSupply;

  // Before each test case runs, automatically deploy contract and get accounts
  beforeEach(async function () {
    [owner, recipient] = await hre.ethers.getSigners();
    initialSupply = hre.ethers.parseEther("1000000");

    MyToken = await hre.ethers.getContractFactory("MyToken");
    myToken = await MyToken.deploy(initialSupply);
  });

  it("should be able to transfer tokens from one account to another", async function () {
    const amountToTransfer = hre.ethers.parseEther("100");

    // Verify initial balance
    const ownerInitialBalance = await myToken.balanceOf(owner.address);
    expect(ownerInitialBalance).to.equal(initialSupply);

    // Initiate transfer transaction
    await myToken.transfer(recipient.address, amountToTransfer);

    // Verify balances after transfer
    const ownerFinalBalance = await myToken.balanceOf(owner.address);
    const recipientFinalBalance = await myToken.balanceOf(recipient.address);

    expect(ownerFinalBalance).to.equal(initialSupply - amountToTransfer);
    expect(recipientFinalBalance).to.equal(amountToTransfer);
  });
});