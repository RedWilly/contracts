const { deployAdapter, addresses } = require("../deploy/utils");
const hardhat = require("hardhat");
const { factory } = addresses.arbitrum.camelot;

const { ethers } = hardhat;
// const TRUSTED_TOKENS = ["0x4200000000000000000000000000000000000006", "0xf0F161fDA2712DB8b566946122a5af183995e2eD"];

// ETH
// WETH
// USDC
// USDT
// MODE
// WBTC
// MBTC
// ezETH
// wrsETH
// STONE
const TRUSTED_TOKENS = [
  "0x4200000000000000000000000000000000000006",
  "0xd988097fb8612cc24eeC14542bC03424c656005f",
  "0xf0F161fDA2712DB8b566946122a5af183995e2eD",
  "0xDfc7C877a950e49D2610114102175A06C2e3167a",
  "0xcDd475325D6F564d27247D1DddBb0DAc6fA0a5CF",
  "0x59889b7021243dB5B1e065385F918316cD90D46c", //
  "0x2416092f143378750bb29b79eD961ab195CcEea5",
  "0xe7903B1F75C534Dd8159b313d92cDCfbC62cB3Cd", //
  "0x80137510979822322193FC997d400D5A6C747bf7",
];
const TRUSTED_TOKENS1 = [
  "0x4200000000000000000000000000000000000006",
  "0xf0F161fDA2712DB8b566946122a5af183995e2eD",
  "0xd988097fb8612cc24eeC14542bC03424c656005f",
  "0xcDd475325D6F564d27247D1DddBb0DAc6fA0a5CF",
  "0x282Fe9Fa55F3bf4Ef26DfFf7abEBAC3633fC3927",
  "0x76ba9dbf6EEC1C56C3028891152834e428cdD859",
  "0xB7F1bfF3dEc5879fD95392C0a5B9441661A2CfEd",
  "0xdE17C73152137647Ce6Dd72c1b25d4041AD8eCa1",
  "0x64b767b50136B6d469eA00c70e30dabCC9bb8D5b",
  "0x0F5a740fe0945A5C48a9cb4672988D1fa9e4CE78",
  "0xF319156EC653781Eff69b448Cfc831847db743a5",
  "0xCEa7Edf2dce990702B5e1a0178F9Dc071BBF835C",
  "0x3Bc3270bC3088C3CcFeA2B4156A4964C8cc60aD5",
  "0x9108DA57544Df636aec7939378E8F792811d21B0",
  "0xc6F416Ee8C8da8187646f93251Af156ccFF73d04",
  "0x9e1F41bc72C85F3D8A46CE7959e0BAEe01e96f87",
  "0x16EdE8f657782EA0189F28e51fDf91E4d7F3D3f1",
  "0x84C535F33D236e0A241AC33114D5cBd1a0A0F01A",
  "0x0512C6419039a067837EA66dFAE92B4e1e2d1A89",
  "0x465303bA5A9f4a332611f472BcCB6e9C184a7F2c",
  "0x3b5dA8451E0CccE42315D83c3330B97E4DbfC23F",
  "0x4811E7900b0718B26A4Fac690708a4c6ecc1e04a",
  "0xC035d4c8Ed58ea34DA71648cdE881DE62E73e10f",
  "0xB6886ef509E33d6D0BB74e19271d01e3A8f2E66A",
  "0x578d131eD9a761DFAEEa59Bd435d9E0e82e63f67",
  "0x61753b698C4a525Dc6fB0a3EA8AdE45aE4D0f34A",
  "0x634029B9C480f64199FB3110517465eEc1462Cd7",
  "0xF9792e9365eFcc389f91aF48e2C0A0ab5EEBe83e",
  "0x6a3BA099078C86adA52B3Fa9b4Fc17097A7a653D",
  "0x266DFda1261D909F530A7aa53b8D306D0F757F8E",
  "0x046E121f65e8eD1878A0161819e294BC2894c43b",
  "0xcFEB2576FAD00c5021AB400f9b15AE04B7623260",
  "0x6B97757fb27a345745aA725E2E45D327b3D8C9E4",
  "0xAcF7A232b235CCba6FC82CE7AfC172EB6D9f60f8",
  "0x837E5044Bf5dc761F5F8fb39a094F016d6f2A8fE",
  "0x1E553C14ebf1A5c2BbC9eD1a414E393BAf1eD091",
  "0x81E48D07F36e905f57456dd9712d30B3AEc9d3df",
  "0x5a8FC7e5735DDaA8e551938d5ed45A7673392b2F",
  "0x6f4566d8a7982E0A5139a10b88ae690239F4b873",
  "0x52c8400A1264b78a105cff685632De4Bc1Ff06f0",
  "0xBB260BeaF7E2E17f6D876ab5cA3731E9C8fD8518",
  "0x39108848371Cf3ab1eC0415adD455A39fB527E47",
  "0x53F7FC8B4305588a6ba7cA30B47Fa8642AB8c4Ad",
  "0x12D8CE035c5DE3Ce39B1fDD4C1d5a745EAbA3b8C",
  "0x2416092f143378750bb29b79eD961ab195CcEea5",
  "0x028227c4dd1e5419d11Bb6fa6e661920c519D4F5",
  "0xFDa619b6d20975be80A10332cD39b9a4b0FAa8BB",
  "0xF57Ff705307AB309CCC2e4a5d0cB7F8eF3599D4D",
  "0x80137510979822322193FC997d400D5A6C747bf7",
  "0x9E0d7D79735e1c63333128149c7b616a0dC0bBDb",
  "0xC8f3c3c0ae2C33D8c8c225D0c9F9E300f6F8276c",
  "0xF419234b27D0EFb71D93D522804dF370A4107Be1",
  "0xe7903B1F75C534Dd8159b313d92cDCfbC62cB3Cd",
  "0xcDa802a5BFFaa02b842651266969A5Bba0c66D3e",
  "0x1BB9b64927e0C5e207C9DB4093b3738Eef5D8447",
  "0x42613fff4B89B38d2c4d8E432B1Ab6D875F05d7c",
  "0x2F1ec3D8909929e8C2B52867660B3Dc9B4981B29",
  "0xb93AA6D64270C3E40CFE209A871f4f5f4B79D705",
  "0x2388dc785f1aB1518E9373d8B96F080adDB299dc",
  "0x59889b7021243dB5B1e065385F918316cD90D46c",
  "0xE678dCBa4B321e9804F969b7A8874c768AF9b1A4",
  "0x04C0599Ae5A44757c0af6F9eC3b93da8976c150A",
  "0x028227c4dd1e5419d11bb6fa6e661920c519d4f5",
  "0x04c0599ae5a44757c0af6f9ec3b93da8976c150a",
  "0x0d4ba8fdefaa8f8755db6abd5192b854f531e0af",
  "0x1278bd7001e88cf58a4c86ae0886826382f6ffa9",
  "0x12d8ce035c5de3ce39b1fdd4c1d5a745eaba3b8c",
  "0x19fa84717be818d5202b2b417bc9b915020b129a",
  "0x1d16d210921c673a1ca31bd29f65c094bd71b756",
  "0x2388dc785f1ab1518e9373d8b96f080addb299dc",
  "0x2416092f143378750bb29b79ed961ab195cceea5",
  "0x2be717340023c9e14c1bb12cb3ecbcfd3c3fb038",
  "0x2ec385c6119eb1853de9d46c7e76070cc128ddae",
  "0x2fb62fc8a9b7c403515f4235da9044e7f907bc0d",
  "0x339590a9a6a8a9fd2507549fea87013c0210720a",
  "0x3f59a297b1412950badaa5ef2ddac750b4e54f12",
  "0x43368bdb25d6898b06155f5de4173103143a9050",
  "0x44964da079005cbc71bc402b3d68a94ce2fe36c9",
  "0x488b8eefd57b03e15acf3ec046bbd0e3489ca429",
  "0x4891e952fd04bbdf96a9ea21b986c111c6261661",
  "0x49885889358b0a6fbcbe70679b0aaf3502cb311a",
  "0x4a841ca8c750c1005b5b3ebaa289b66af5ba765f",
  "0x4acffd54c84ce5b440425755ea5a99f4ad4f8ef9",
  "0x4e3323f51476d8df7c675f5db982029cfc7fcfcf",
  "0x5182674d63fcef7f76b07d81e606dfc973590870",
  "0x5335e75834ecd8560510ee5d72985ab46989f510",
  "0x55e119b547d0a9c52acae0d6dde003bb53882061",
  "0x59889b7021243db5b1e065385f918316cd90d46c",
  "0x598f9cb99bafc8346b4c153a61b3a27c8f13b10f",
  "0x5a2554f1e8a22e0e041c44f400a06331945f6914",
  "0x5c537dd660d2edc0b9a57fe089cb86b769ba9f28",
  "0x5c6f01d4d95a88c6385a26353298987876394cd7",
  "0x5c75f570e80b3c592243debed73e8b6f33154889",
  "0x5cbff7516b08849c6192ac4d5b611898d7ea02e7",
  "0x61310e2390bde167273087e17413b5c1ede95650",
  "0x617f337fce8f60237257dad2a6e68d743c0edb9c",
  "0x634029b9c480f64199fb3110517465eec1462cd7",
  "0x652ec647551074edd1a0f6d8a1d8a58e5266f199",
  "0x66085fa74a270f675023cafef71cd16582433871",
  "0x660c3435c8ff7c1032719f1ed811b229ec472b5f",
  "0x663c3652c1cc6eab102ca7e5db9992de5a0a4225",
  "0x6672bdb6b8aecf57ad4201ae519bad44d926d1a2",
  "0x66860305c43fe4a9e29dbd630ad764df14ea81df",
  "0x68506c2be1bbea88ba213e894ebfe5e12a27f34c",
  "0x6babd223bca7afbd5bf7fe4f6184f7a128dc43b9",
  "0x6d7d230206c2f8f4247845313570d7b4de5196a5",
  "0x6db4893c7770e78cf1c460983219a69101345c89",
  "0x6e8366ef192e5b89237ed6af28239dc9f16829d6",
  "0x6f6055cec0f220824c00f8b2d1d7109c1f28a3d0",
  "0x6fbca78bae9f6e7c6e7511479a5cbafb1dea1dae",
  "0x6ff55a79d6739b73d1b5fd6b43f7439276792881",
  "0x7270b4762dfb06656d06d91e8c9c087c34412563",
  "0x74596bb1432e1f99b75d330c054721ad544b9ec4",
  "0x745cfd816de5d9061905963d5f91f3c10241c37e",
  "0x76c74d582d1763e79ff9d18b7c305c23ea29d158",
  "0x794f80b125ef94a013a1cd3448978aa1eb622f70",
  "0x79579e0a02f74e110fbf87d07dd90cba403e505c",
  "0x7a89119a5b63a303e05da4e265555d638725fb94",
  "0x7aea4164c50666538ef4f000b0d714af55c5366b",
  "0x7dc44b521589c372f0ed043bbfbe3169fc9a3321",
  "0x7e9470241d78555cbb2569717c800ea1ce1f9c94",
  "0x80137510979822322193fc997d400d5a6c747bf7",
  "0x84efec220318c875c1c3c1ad74110eedf03831b9",
  "0x865e0681e02d74f5dd1bd168836c639286500c79",
  "0x87916c5545a5f95009da856e1b95eae58ec72c0f",
  "0x8a92aec1012a58a75327d65986754da961e79286",
  "0x8b68ecd3ec4428e589e8a6d83b677b4019a7915f",
  "0x8d87ae2b178718c5c658cffd87428849225a3dd0",
  "0x8db18ba4d58a9b3c863720cc814e0a7b074356bc",
  "0x8fe2788912a8d17645ce0af68e443661bebe96a2",
  "0x90c0f2e8679ad74f8757d6f0c2f7667503c2d882",
  "0x92b18e1b053bb41787449d24a00211f68edfb847",
  "0x96f08b5b855d08e92a8c91d6079a061aa6206ad9",
  "0x99de847efb7f6dcdc58a421c56d2720c79bf6fcb",
  "0x9b71592685af0ebf87ef8aa0812f05be4d6ab303",
  "0x9bbc4b9fd09b4debb68bbafd589e2dd44b91bc79",
  "0x9d66591a222e574d050440a8c0b4bc79f1b0a4cd",
  "0x9e0d7d79735e1c63333128149c7b616a0dc0bbdb",
  "0x9e864cad86bcb9b80b1bebe8ebff25df5d2818c1",
  "0xa04fc471f851c5c4425c994e3951d3a904ae297b",
  "0xa21782ddf1d2f69ece810196b1591f58fc219d89",
  "0xa26df9d7342ae8b3855b347c043c05eed269e0a9",
  "0xa40ac2866eb12cef740256dbe7d794fb81b0f2f2",
  "0xaab60fe2ae047db421cdbcd857ead4bfda2849ee",
  "0xab7f0bb4cd46c7caada661ca9f3bd7935a766361",
  "0xab91ecf174a6ee7bbb0937273c0e53c1fc3cc762",
  "0xabb15883f6ca98c4319b9692ce0608d57f57cf23",
  "0xac79240f7f68ff9d5fccdc8bc06e6e9ce7785e3d",
  "0xad1c611a46240e07294d325931704e64f010f82f",
  "0xad2141d27d11f235a4257d7b4564c0d6f0683299",
  "0xafbde9fff7a1874f1fbbe261408ea285daa60ad7",
  "0xb1f4e58ff3d4628cf6cf711ff2af6268c28768e1",
  "0xb241734662f8c81819e4660cb548789929ea9e71",
  "0xb5a96b835e53c7384fbbd3dce786c2d21f91ed18",
  "0xb656ba850ef776d5f58d395cc020eb817c8378a0",
  "0xba82543e4d443e02c1e88ad65a63ef2c8d3b1e62",
  "0xbdeffa2bca8c37c2e8232a3f204a2d8c294e6a73",
  "0xbe1d572baf09402bef8ad8870bb24cb045e62156",
  "0xbfb59018cd2a8599c43c318b41e82e99cd77691c",
  "0xc01989168bf93520bdd198307f17cdb2fb81c97f",
  "0xc0925a8b5d5859effc56c4f28d3fb39a243409f5",
  "0xf0f161fda2712db8b566946122a5af183995e2ed",
  "0xd988097fb8612cc24eec14542bc03424c656005f",
  "0xdc6d2fce4ac351945db9e26d478bc5f6f6a350f5",
  "0x801231db2235867d103bf575d1cc3de8ec4319f7",
  "0x8ccdc4222020f4a0177fef0824387b0cb58ef3d8",
  "0x160f5bb45af90239a0b8082249c507cf287fcab9",
  "0x4295CfA56B7421E24dAc2B6EE0274E8169B503f7",
  "0xC655197Dac6f8cc2bB81841a1BeBFB64cF2bF069",
  "0xCF8cbEc21348F2163b0489E7F191A093ba13E0C1",
  "0x1669c7306212CB7Ef3f0c46653A1ebbF3809Ea34",
  "0xd0d8e3e3b5E402604f9b3b1Db6bD62930DA8F859",
  "0xB2739a38618E0437fB9216F9e487ec081dB95718",
  "0xDF474B7109b73b7D57926d43598D5934131136b2",
  "0xBD480Cc0AB6E92ed89125D39C2B918A8DFf4491b",
  "0x1Ca797d7CcDd080A3571398a596a470A8Cbe1f7a",
  "0x638ac0563543dc14A16A5C0105375982b4b5B1a7",
  "0x839126518ae3106229Ff825D7efCE1179f04293D",
  "0x7906c8893362F1475e05C0647ed40c76A4ec9B72",
  "0xa8a52706af50DAb1b39F42E94C8Debfc43e3dec1",
  "0xc50A1A2A79B44C75F7441d01716576BAF01efe59",
  "0xfd9Da2d66cc2A076704583eB89f7eE9916043f1C",
];

async function deployUniswapV2() {
  const networkName = "mumbai";
  const contractName = "Uniswapv2Adapter";
  const tags = ["uniswapv2"];
  const name = contractName;
  const gasEstimate = 238_412;
  const args = [name, factory, gasEstimate];
  return deployAdapter(networkName, tags, contractName, contractName, args);
}

async function deployKimV2() {
  const routerAddress = "0x5D61c537393cf21893BE619E36fC94cd73C77DD3"; //subswap
  const adapterType = "univ2";
  const contractName = "UniswapV2Adapter";
  const gasEstimate = 120000;
  const factoryAddress = "0xc02155946dd8C89D3D3238A6c8A64D04E2CD4500";

  const AdapterContract = await ethers.getContractFactory("UniswapV2RouterAdapter");
  const UniswapV2Adapter = await AdapterContract.deploy(adapterType, factoryAddress, routerAddress, gasEstimate);
  console.log("KimV2: ", UniswapV2Adapter.address);

  return UniswapV2Adapter.address;
}

async function deployKimV3() {
  const subswapFactoryAddress = "0xB5F00c2C5f8821155D8ed27E31932CFD9DB3C5D5";
  //   const quoterAddress = "0x5E6AEbab1AD525f5336Bd12E6847b851531F72ba";
  //   const quoterAddress = "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f";
  const quoterAddress = "0xAF6BadaB5240B24Fe2ebff5c9B68Cc34b86beA4a";
  const adapterType = "kimv3";
  const gasEstimate = 120000;
  const AdapterContract = await ethers.getContractFactory("AlgebraAdapter");

  const AlgebraAdapter = await AdapterContract.deploy(
    adapterType,
    // gasEstimate,
    ethers.utils.parseEther("0.01"),
    ethers.utils.parseEther("0.01"),
    quoterAddress,
    subswapFactoryAddress
  );

  console.log("AlgebraAdapter: ", AlgebraAdapter.address);
  return AlgebraAdapter.address;
}

async function deploySubswapV2() {
  const routerAddress = "0x082C1E810B6518a65ae61d9C07dc25d9ffe61Ae6"; //subswap
  const adapterType = "univ2";
  const contractName = "UniswapV2Adapter";
  const gasEstimate = 120000;
  const factoryAddress = "0x557f46F67a36E16Ff27e0a39C5DA6bFCB4Ff89c0";

  const AdapterContract = await ethers.getContractFactory("UniswapV2RouterAdapter");
  const UniswapV2Adapter = await AdapterContract.deploy(adapterType, factoryAddress, routerAddress, gasEstimate);
  console.log("SubswapV2: ", UniswapV2Adapter.address);

  return UniswapV2Adapter.address;
}

async function deploySubswapV3() {
  const subswapFactoryAddress = "0xa0b018Fe0d00ed075fb9b0eEe26d25cf72e1F693";
  //   const quoterAddress = "0x5E6AEbab1AD525f5336Bd12E6847b851531F72ba";
  //   const quoterAddress = "0xa85233C63b9Ee964Add6F2cffe00Fd84eb32338f";
  const quoterAddress = "0x3284B753B71533409caF461595Abe5e4B78Ef990";
  const adapterType = "supswapv3";
  const gasEstimate = 120000;
  const feeTierList = [100, 500, 2500, 10000];

  const AdapterContract = await ethers.getContractFactory("UniswapV3Adapter");

  const UniswapV3Adapter = await AdapterContract.deploy(
    adapterType,
    // gasEstimate,
    ethers.utils.parseEther("0.01"),
    ethers.utils.parseEther("0.01"),
    quoterAddress,
    subswapFactoryAddress,
    feeTierList
  );

  //   string memory _name,
  //   uint256 _swapGasEstimate,
  //   uint256 _quoterGasLimit,
  //   address _quoter,
  //   address _factory,
  //   uint24[] memory _defaultFees

  console.log("Subswap V3: ", UniswapV3Adapter.address);
  return UniswapV3Adapter.address;
}

async function deployVelodrome() {
  const name = "Velodrome";
  const factory = "0x31832f2a97Fd20664D76Cc421207669b55CE4BC0";
  const gasEstimate = 120000;
  // string memory _name,
  // address _factory,
  // uint256 _swapGasEstimate

  const AdapterContract = await ethers.getContractFactory("VelodromeAdapter");

  const VelodromeAdapter = await AdapterContract.deploy(name, factory, gasEstimate);

  console.log("VelodromeAdapter: ", VelodromeAdapter.address);
  return VelodromeAdapter.address;
}

async function deploySwapMode() {
  const routerAddress = "0xc1e624c810d297fd70ef53b0e08f44fabe468591"; //subswap
  const adapterType = "univ2";
  const contractName = "swapMode";
  const gasEstimate = 120000;
  const factoryAddress = "0xfb926356BAf861c93C3557D7327Dbe8734A71891";

  const AdapterContract = await ethers.getContractFactory("UniswapV2RouterAdapter");
  const UniswapV2Adapter = await AdapterContract.deploy(adapterType, factoryAddress, routerAddress, gasEstimate);
  console.log("SwapMode: ", UniswapV2Adapter.address);

  return UniswapV2Adapter.address;
}

async function testRun(deployer) {
  for (let i = 0; i < TRUSTED_TOKENS.length; i++) {
    console.log("token :", i);
    const ERC20 = new ethers.Contract(
      TRUSTED_TOKENS[i],
      [
        {
          inputs: [
            {
              internalType: "address",
              name: "poolAddress",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "balance", type: "int256" }],
          stateMutability: "view",
          type: "function",
        },
      ],
      deployer
    );

    const bal = await ERC20.balanceOf(deployer.address);
    console.log("bal: ", bal);
    console.log();
  }
}

async function main() {
  accounts = await ethers.getSigners();
  const [deployer] = accounts;
  console.log("deployer: ", deployer.address);
  //   return;

  //   const wethAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
  const wethAddress = "0x4200000000000000000000000000000000000006";

  const adapterList = [];
  //   adapterList.push(await deployKimV2()); //0x762efc3A05744979B4e8B918B368e8E0333561a2
  // adapterList.push(await deploySubswapV2()); //(0x8082dfC18d4aa60Fba4F6F62946703807C969C1F
  //   adapterList.push(await deploySubswapV3());
  // adapterList.push(await deployKimV3());
  //   adapterList.push(await deploySwapMode());
  //   adapterList.push(await deployVelodrome());

  //   adapterList.push("0xF0398C975581D8B74CF8C6196BE3c5AB33799a86");
  //   adapterList.push("0xf6c89146381ccCF667bce14B446D76f4a6Fb92b0");
  //   adapterList.push("0x79CCDD415819BDA2Cd0129DC548e315124b80209");
  //   //   adapterList.push(await deployKimV3());
  //   adapterList.push("0x3E9B1780851811ba219e10a96D3a966a4C04d68f");

  const YakRouterContract = await ethers.getContractFactory("YakRouter");
  //   const YakRouter = await YakRouterContract.deploy(adapterList, [], deployer.address, wethAddress);

  //   console.log("YakRouter: ", YakRouter.address);

  //   0x64f1Cd91F37553E5A8718f7D235e5078C962b7e7
  const YakRouter = YakRouterContract.attach("0x64f1Cd91F37553E5A8718f7D235e5078C962b7e7");

  //   await testRun(deployer);
  //   await YakRouter.setAdapters(adapterList);

  await YakRouter.setAdapters([
    "0xF0398C975581D8B74CF8C6196BE3c5AB33799a86", //kimv2
    "0xf6c89146381ccCF667bce14B446D76f4a6Fb92b0", //subswapv2
    // "0x79CCDD415819BDA2Cd0129DC548e315124b80209", //subswap v3
    "0x3E9B1780851811ba219e10a96D3a966a4C04d68f", //kimv3
    "0xC971175Eb30a59F1a6699DCA5ED4833BAa556e48", //swapMode
  ]);

  //   await YakRouter.setAdapters([
  //     "0xC971175Eb30a59F1a6699DCA5ED4833BAa556e48", //swapMode
  //   ]);

  //   return;
  //   await YakRouter.setTrustedTokens([...TRUSTED_TOKENS]);
  // await YakRouter.setTrustedTokens([...TRUSTED_TOKENS1].splice(0, 90));
  //   await YakRouter.setTrustedTokens([TRUSTED_TOKENS[0], TRUSTED_TOKENS[1], ...TRUSTED_TOKENS.splice(12, 24)]);
  //   const AdapterContract = await ethers.getContractFactory("AlgebraAdapter");
  //   const Adapter = AdapterContract.attach("0x3E9B1780851811ba219e10a96D3a966a4C04d68f");
  //   const val = await Adapter.query(
  //     //   ethers.utils.parseUnits("5134394382222210", "wei"),
  //     ethers.utils.parseUnits("51343943222210", "wei"),
  //     TRUSTED_TOKENS[0],
  //     TRUSTED_TOKENS[1]
  //   );
  //   //   const feeAmount = await Adapter.feeAmounts(0);
  //   console.log("val: ", val.toString());

  //   const savedAdapterList = await YakRouter.ADAPTERS(0);
  //   console.log("savedAdapterList: ", savedAdapterList);
  //   getBestPool

  //   const amountIn = ethers.utils.parseUnits("1000000000000000", "wei");\
  const amountIn = ethers.utils.parseUnits("100000", "wei");
  const ans = await YakRouter.findBestPath(
    //   ethers.utils.parseEther("0.01"),
    //   ethers.utils.parseUnits("5134394382222210", "wei"),
    // ethers.utils.parseUnits("51343943222210", "wei"),
    //   ethers.utils.parseEther("1"),
    amountIn,
    //   TRUSTED_TOKENS[2],
    //   TRUSTED_TOKENS[0],
    "0xd988097fb8612cc24eeC14542bC03424c656005f",
    "0x4200000000000000000000000000000000000006",
    // "0xd988097fb8612cc24eeC14542bC03424c656005f",
    3
    // ethers.utils.parseEther("1")
  );

  console.log("ans: ", ans);
  console.log("out: ", ans.amounts[0].toString(), ans.amounts[ans.amounts.length - 1].toString());

  //   1000000000000000000 2979143436
  //   2, 979.143, 436;

  //   amounts:  [
  //     BigNumber { value: "5134394382222210" },
  //     BigNumber { value: "16265691" }
  //   ]

  //   5134394382222210 16265691

  // console.log("reserve: ", reserve)

  // console.log(
  //     "getAmountOut: ",
  //     getAmountOut("5134394382222210", reserve[0], reserve[1])
  // )

  // const trade = [ethers.utils.parseEther("0.01"), ans.amounts[2], ans.path, ans.adapters];
  const trade = {
    amountIn,
    amountOut: ans.amounts[ans.amounts.length - 1],
    path: ans.path,
    adapters: ans.adapters,
  };
  console.log("trade: ", trade);

  //   const MIN_FEE = await YakRouter.MIN_FEE();
  //   console.log("MIN_FEE: ", MIN_FEE);

  //   const WETH = await ethers.getContractAt("IWETH", "0x4200000000000000000000000000000000000006", accounts[0]);

  //   const tr = await WETH.deposit({ value: amountIn });
  //   console.log(tr);
  //   IWETH(WNATIVE).deposit{ value: _amount }();

  //   const Token = await ERC20.attach(trade.path[0]);

  //   //   const allowance = await Token.allowance(accounts[0].address, YakRouter.address);
  //   //   console.log("allowance: ", allowance.toString());

  //   let prevAmount = amountIn;
  //   for (let i = 0; i < trade.adapters.length; i++) {
  //     console.log(trade.adapters[i]);
  //     const adapter = await ethers.getContractAt("IAdapter", trade.adapters[i], accounts[0]);
  //     // amounts[i], _trade.path[i], _trade.path[i + 1])
  //     const query = await adapter.query(prevAmount, trade.path[i], trade.path[i + 1]);
  //     console.log("adapter:", query.toString());
  //     prevAmount = query;
  //   }
  //   const checktr = await Token.approve(YakRouter.address, amountIn);
  //   console.log(checktr);

  //   IAdapter(_trade.adapters[i]).swap(
  //     amounts[i],
  //     amounts[i + 1],
  //     _trade.path[i],
  //     _trade.path[i + 1],
  //     targetAddress
  // );
  //   for (let i = 0; i < 5; i++) {
  //     try {
  //       const adapters = await YakRouter.ADAPTERS(i);
  //       console.log(adapters);
  //     } catch (err) {
  //       break;
  //     }
  //   }
  // 0xF0398C975581D8B74CF8C6196BE3c5AB33799a86
  // 0xf6c89146381ccCF667bce14B446D76f4a6Fb92b0
  // 0x79CCDD415819BDA2Cd0129DC548e315124b80209
  // 0x3E9B1780851811ba219e10a96D3a966a4C04d68f

  //   3000648

  //   const adapter = await ethers.getContractAt("IAdapter", trade.adapters[trade.adapters.length - 1], accounts[0]);
  //   const tr = await adapter.swap(trade.amountIn, trade.amountOut, trade.path[0], trade.path[1], accounts[0].address);

  //   const ERC20 = await ethers.getContractFactory("Token");
  //   const Token = ERC20.attach(trade.path[0]);

  //   //   await Token.approve(YakRouter.address, trade.amountIn);

  //   const tr = await YakRouter.swapNoSplit(trade, accounts[0].address, 0);

  //   const adapter = await ethers.getContractAt("IAdapter", "0x79CCDD415819BDA2Cd0129DC548e315124b80209", accounts[0]);
  //   const name = await adapter.name();
  //   console.log(name);

  //   //   const tr = await YakRouter.swapNoSplitFromAVAX(trade, accounts[0].address, 0, {
  //   //     value: amountIn,
  //   //   });
  //   console.log("tr", tr);

  //   const WNATIVE = await YakRouter.WNATIVE();
  //   console.log("WNATIVE: ", WNATIVE);

  //   console.log("rc: ", rc);
  //   struct Trade {
  //     uint256 amountIn;
  //     uint256 amountOut;
  //     address[] path;
  //     address[] adapters;
  // }
  //   function swapNoSplit(
  //     Trade calldata _trade,
  //     address _to,
  //     uint256 _fee
  // ) override public {
  //     _swapNoSplit(_trade, msg.sender, _to, _fee);
  // }
  // function findBestPathWithGas(
  //     uint256 _amountIn,
  //     address _tokenIn,
  //     address _tokenOut,
  //     uint256 _maxSteps,
  //     uint256 _gasPrice
  // )

  // address[] memory _adapters,
  // address[] memory _trustedTokens,
  // address _feeClaimer,
  // address _wrapped_native

  //   string memory _name,
  //   address _factory,
  //   uint256 _fee,
  //   uint256 _swapGasEstimate
  //   console.log("deployer: ", deployer.address);
  //   console.log("deployUniswapV2: ", deployUniswapV2());
  //   await deployUniswapV2();
  //   0x79Bdda65C706CBdA69C0AD4C8da1d3e91724f48D

  //   const account = "0x79Bdda65C706CBdA69C0AD4C8da1d3e91724f48D";
  //   await hre.network.provider.request({
  //     method: "hardhat_impersonateAccount",
  //     params: [account],
  //   });
  //   const signer = await ethers.getSigner(account);

  //   const ERC20 = await ethers.getContractFactory("Token");
  //   const USDT = ERC20.attach(TRUSTED_TOKENS[1]);
  //   await USDT.connect(signer).transfer(deployer.address, "945741");
  //   //   bal = await USDT.connect(signer).balanceOf(signer.address);
  //   bal = await USDT.connect(signer).balanceOf(deployer.address);
  //   console.log("bal: ", bal.toString());
  //   const chainId = await ethers.provider.getNetwork().then((network) => network.chainId);
  //   console.log("Chain ID:", chainId);

  //   const ERC20 = await ethers.getContractFactory("Token");
  //   for (let i = 0; i < TRUSTED_TOKENS.length; i++) {
  //     const Token = ERC20.attach(TRUSTED_TOKENS[i]);
  //     console.log(await Token.totalSupply());
  //   }

  //   const Velodrome = await ethers.getContractAt(
  //     "IVelodromeFactory",
  //     "0x8d9c67488c154286B9D4ccaC6c4CBF30589107a7",
  //     accounts[0]
  //   );

  //   const val = await Velodrome.pairCodeHash();
  //   console.log("val");
  //   const SwapMode = await ethers.getContractAt(
  //     "UniswapV2RouterAdapter",
  //     "0xC971175Eb30a59F1a6699DCA5ED4833BAa556e48",
  //     accounts[0]
  //   );

  //   prevAmount, trade.path[i], trade.path[i + 1]
  //   const val = await SwapMode.query(
  //     ethers.utils.parseUnits("1000000", "wei"),
  //     "0xd988097fb8612cc24eeC14542bC03424c656005f",
  //     "0x4200000000000000000000000000000000000006"

  //     //   ethers.utils.parseUnits("5134394382222210", "wei"),
  //     ethers.utils.parseUnits("51343943222210", "wei"),
  //     TRUSTED_TOKENS[0],
  //     TRUSTED_TOKENS[1]
  //   );

  //   console.log("val: ", val.toString());
  //   const ERC20 = await ethers.getContractFactory("Token");
  //   const Token = ERC20.attach("0xd988097fb8612cc24eeC14542bC03424c656005f");

  //   //   await Token.transfer(SwapMode.address, ethers.utils.parseUnits("100000", "wei"));
  //   //   await Token.approve(SwapMode.address, ethers.utils.parseUnits("100000", "wei"));

  //   const tr = await SwapMode.swap(
  //     ethers.utils.parseUnits("100000", "wei"),
  //     val,
  //     "0xd988097fb8612cc24eeC14542bC03424c656005f",
  //     "0x4200000000000000000000000000000000000006",
  //     accounts[0].address
  //   );
  //   console.log(tr);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
