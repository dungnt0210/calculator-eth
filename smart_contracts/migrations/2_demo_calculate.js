var Calculate = artifacts.require("./Calculate.sol");

module.exports = function(deployer) {
    // Demo is the contract's name
    deployer.deploy(Calculate);
};