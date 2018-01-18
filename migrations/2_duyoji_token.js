const DuyojiToken = artifacts.require("./DuyojiToken.sol");

module.exports = (deployer) => {
  deployer.deploy(DuyojiToken);
};
