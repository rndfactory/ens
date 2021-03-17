require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    'dev.fifs': {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    "kovan": {
			provider: () => new HDWalletProvider(process.env.MNEMONIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
			network_id: 42,
			gas: 3000000,
			gasPrice: 100000000000, //100gwei
		}
  },
  compilers: {
    solc: {
      version: "0.7.4",
    }
  }
};
