/* 
 * 📜 Verified Authorship — Manuel J. Nieves (B4EC 7343 AB0D BF24)
 * Original protocol logic. Derivative status asserted.
 * Commercial use requires license.
 * Contact: Fordamboy1@gmail.com
 */
module.exports = {
  providerOptions: {
    port: 8555,
    seed: "TestRPC is awesome!",
    total_accounts: 15,
    default_balance_ether: 1000000,
  },
  skipFiles: ["test/", "v2/upgrader/"],
  copyPackages: ["openzeppelin-solidity", "zos-lib"],
};
