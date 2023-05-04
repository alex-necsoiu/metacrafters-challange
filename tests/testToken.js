const { expect } = require("chai");
const { ethers, upgrades } = require("hardhat");

// Describe the test suite for the CustomERC20Token contract
describe("CustomERC20 Unit Test!", function () {
  let contract;
  let accounts;

  // Before running the test cases, deploy the contract and store its instance
  before(async function () {
    accounts = await ethers.getSigners();

    const initialSupply = ethers.utils.parseUnits("1000000", "ether");
    const tokenFactory = await ethers.getContractFactory("CustomERC20Token");
    const customERC20Token = await tokenFactory.deploy(initialSupply);
    contract = await customERC20Token.deployed();
    // console.log("CustomERC20Token deployed to:", contract.address);
  });

  // Test case: Check the balance of the deployer account
  it("Check Balance of Deployer", async () => {
    const balance = ((await contract.balanceOf(accounts[0].address)) / 10 ** 6).toString();
  });


  // Test case: Check token name and symbol
  it("Check token name and symbol", async () => {
    const name = await contract.name();
    const symbol = await contract.symbol();

    expect(name).to.equal("Custom Token");
    expect(symbol).to.equal("CTK");
  });

  // Test case: Transfer tokens between accounts
  it("Transfer tokens between accounts", async () => {
    const initialSenderBalance = await contract.balanceOf(accounts[0].address);
    const initialReceiverBalance = await contract.balanceOf(accounts[1].address);

    const amountToSend = ethers.utils.parseUnits("100", "ether");
    await contract.transfer(accounts[1].address, amountToSend);

    const newSenderBalance = await contract.balanceOf(accounts[0].address);
    const newReceiverBalance = await contract.balanceOf(accounts[1].address);

    expect(newSenderBalance).to.equal(initialSenderBalance.sub(amountToSend));
    expect(newReceiverBalance).to.equal(initialReceiverBalance.add(amountToSend));
  });

    // Test case: Transfer should revert when trying to send tokens to the zero address
    it("Transfer should revert when trying to send tokens to the zero address", async () => {
        const zeroAddress = "0x0000000000000000000000000000000000000000";
        const amountToSend = ethers.utils.parseUnits("100", "ether");
    
        await expect(contract.transfer(zeroAddress, amountToSend)).to.be.revertedWith(
          "ERC20: transfer to the zero address"
        );
      });
    
  // Test case: Approve and transfer tokens from one account to another
  it("Approve and transfer tokens from one account to another", async () => {
    const spender = accounts[2];
    const owner = accounts[1];

    const initialOwnerBalance = await contract.balanceOf(owner.address);
    const initialSpenderBalance = await contract.balanceOf(spender.address);

    const amountToApprove = ethers.utils.parseUnits("50", "ether");
    await contract.connect(owner).approve(spender.address, amountToApprove);
    const allowance = await contract.allowance(owner.address, spender.address);

    expect(allowance).to.equal(amountToApprove);

    await contract.connect(spender).transferFrom(owner.address, spender.address, amountToApprove);

    const newOwnerBalance = await contract.balanceOf(owner.address);
    const newSpenderBalance = await contract.balanceOf(spender.address);

    expect(newOwnerBalance).to.equal(initialOwnerBalance.sub(amountToApprove));
    expect(newSpenderBalance).to.equal(initialSpenderBalance.add(amountToApprove));
  });

  // Test case: Check total supply of the custom ERC20 token
  it("Check total supply", async () => {
    const totalSupply = await contract.totalSupply();
    expect(totalSupply).to.equal(ethers.utils.parseUnits("1000000", "ether"));
  });

});
