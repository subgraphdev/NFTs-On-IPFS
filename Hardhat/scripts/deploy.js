
const {ethers}= require("hardhat");

require("dotenv").config({path:".env"})

async function main() {
  const metadataURL = "ipfs://Qmbygo38DWF1V8GttM1zy89KzyZTPU2FLUzQtiDvB7q6i5/"
  const nftContract = await ethers.getContractFactory("LW3Punks");
  const deployedContract = await nftContract.deploy(metadataURL);
  await deployedContract.deployed();
  console.log(`LW3Punks Tokens is deployed at: ${deployedContract.address}`)
}

main()
.then(()=>process.exit(0))
.catch((err)=>{
  console.error(err);
  process.exit(1);
})


/*-----------------contract address* ----------------*/
// ! LW3Punks Tokens is deployed at: 0x6DEa9E6FB9e341bCbf0A05A5d81c5a4b518c40ea
/*-----------------contract address* ----------------*/