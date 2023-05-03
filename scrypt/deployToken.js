// const { ethers, upgrades } = require("hardhat");
// const { keccak256 } = ethers.utils;


// const ENVIRONMENT = process.env.ENVIRONMENT;
// // const admin = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
// // const treasury = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
// const admin = "0xa2f4F4e465AAE91241D61E3518c9f2e7cb74c014";

// async function main() {

//     const tokenFactory = await ethers.getContractFactory("CustomERC20Token");
//     console.log("ADMIN:",admin);
    
//     contract = await upgrades.deployProxy(
//       tokenFactory,
//       [
//        100000 // total supply
//       ],
//       {
//         kind:"uups",
//       } 
//     );
    
//   await contract.deployed();
//   console.log(`Contract deploy with address:${contract.address}`);
//   console.log(`Contract signer address:${contract.signer.address}`);

//   const implAddress = await upgrades.erc1967.getImplementationAddress(
//     contract.address
//   );

//   await hre.run("verify:verify", {
//     address: implAddress,
//     constructorArguments: [],
//   });

// }

// main()
// .then(() => process.exit(0))
// .catch((error) => {
//   console.error(error);
//   process.exit(1);
// });

const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const initialSupply = hre.ethers.utils.parseUnits("1000000", "ether");

  const CustomERC20Token = await hre.ethers.getContractFactory("CustomERC20Token");
  const customERC20Token = await CustomERC20Token.deploy(initialSupply);

  await customERC20Token.deployed();

  console.log("CustomERC20Token deployed to:", customERC20Token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
