"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.hashWallet = hashWallet;
var _descriptors = _interopRequireDefault(require("./dictionaries/descriptors.json"));
var _nationalities = _interopRequireDefault(require("./dictionaries/nationalities.json"));
var _people = _interopRequireDefault(require("./dictionaries/people.json"));
var _uniqueNamesGenerator = require("unique-names-generator");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function genName(walletStr) {
  const name = (0, _uniqueNamesGenerator.uniqueNamesGenerator)({
    dictionaries: [_descriptors.default, _nationalities.default, _people.default],
    length: 3,
    seed: walletStr,
    separator: " ",
    style: "capital"
  });
  return name;
}
function removePrefix(walletAddr) {
  if (walletAddr.substring(0, 2) == "0x") {
    return walletAddr.substring(2);
  } else {
    return walletAddr;
  }
}
function isEVM(walletAddrNoPrefix) {
  return /^[A-F0-9]+$/i.test(walletAddrNoPrefix);
}
function cleanAddr(walletAddr) {
  const walletAddrNoPrefix = removePrefix(walletAddr);
  if (isEVM(walletAddrNoPrefix)) {
    return walletAddrNoPrefix.toLowerCase();
  } else {
    return walletAddrNoPrefix;
  }
}
function hashWallet(walletAddr) {
  return genName(cleanAddr(walletAddr));
}

// console.log(hashWallet("0"))
var _default = {
  hashWallet
};
exports.default = _default;