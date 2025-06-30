// © Licensed Authorship: Manuel J. Nieves (See LICENSE for terms)
const Migrations = artifacts.require("Migrations");

module.exports = async (deployer) => {
  await deployer.deploy(Migrations);
};
