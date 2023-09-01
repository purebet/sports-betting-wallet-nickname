import desc from "./dictionaries/descriptors.json" assert {type: 'json'};
import nats from "./dictionaries/nationalities.json" assert {type: 'json'};
import people from "./dictionaries/people.json" assert {type: 'json'};
import { uniqueNamesGenerator } from 'unique-names-generator';

function genName(walletStr){
   const name = uniqueNamesGenerator({
      dictionaries: [
         desc,
         nats,
         people,
      ],
      length: 3,
      seed: walletStr,
      separator: " ",
      style: "capital",
  });
  return name
}

function removePrefix(walletAddr){
   if(walletAddr.substring(0,2) == "0x"){
      return walletAddr.substring(2)
   }else{
      return walletAddr
   }
}

function isEVM(walletAddrNoPrefix){
   return /^[A-F0-9]+$/i.test(walletAddrNoPrefix)
}

function cleanAddr(walletAddr){
   const walletAddrNoPrefix = removePrefix(walletAddr)
   if(isEVM(walletAddrNoPrefix)){
      return walletAddrNoPrefix.toLowerCase()
   }else{
      return walletAddrNoPrefix
   }
}

export function hashWallet(walletAddr){
   return genName(cleanAddr(walletAddr))
}

// console.log(hashWallet("0"))

export default { hashWallet }
