// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const initialSupply = ethers.BigNumber.from(100000000);
  // const SGTToken = await ethers.getContractFactory("SGToken");
  // const instance = await SGTToken.deploy(initialSupply);
  // await instance.deployed();

  // console.log("SGTToken deployed to:", instance.address);

  await hre.run("verify:verify", {
    address: "0x4cdCf42d40288A6da325bF409903f7Ea09eBd53e",
    contract: "contracts/SGTokeFlatten.sol:SGToken",
    constructorArguments: [
      initialSupply
    ]
  })
};

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
