const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("SGToken", function () {
  let SGTToken,instance, owner;
  const initialSupply = ethers.BigNumber.from(1000000);

  beforeEach(async function() {
    [owner] = await ethers.getSigners();
    SGTToken = await ethers.getContractFactory("contracts/SGTokeFlatten.sol:SGToken");
    instance = await SGTToken.deploy(initialSupply);
    await instance.deployed();
  })

  it("Should SGT token's name, symbol, totalSupply are right", async function () {
    // const Greeter = await ethers.getContractFactory("Greeter");
    // const greeter = await Greeter.deploy("Hello, world!");
    // await greeter.deployed();

    // expect(await greeter.greet()).to.equal("Hello, world!");

    // const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // // wait until the transaction is mined
    // await setGreetingTx.wait();

    expect(await instance.name()).to.equal("Sou Gold");
    expect(await instance.symbol()).to.equal("SGT");
    expect(await instance.totalSupply()).to.equal(initialSupply);
  });
  it("Should owner's balance equals totalSupply",async function(){
    //console.log(owner.address);
    expect(await instance.balanceOf(owner.address)).to.equal(initialSupply);
  })
});
