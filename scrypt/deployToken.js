const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const initialSupply = hre.ethers.utils.parseUnits("1000000", "ether");

  const tokenFactory = await hre.ethers.getContractFactory("CustomERC20Token");
  const customERC20Token = await tokenFactory.deploy(initialSupply);

  await customERC20Token.deployed();

  console.log("CustomERC20Token deployed to:", customERC20Token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
