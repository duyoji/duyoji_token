// See <http://truffleframework.com/docs/advanced/configuration>
// to customize your Truffle configuration!
//
// https://blog.abuiles.com/blog/2017/07/09/deploying-truffle-contracts-to-rinkeby/
module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      host: "127.0.0.1", // Connect to geth on the specified
      port: 8545,
      from: "0x577c7b0e4bf76fd1d79a218f9d6e9414ee070f1d", // default address to use for any transaction Truffle makes during migrations
      network_id: 4,
      gas: 4612388 // Gas limit used for deploys
    }
  }
};
