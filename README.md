# sports-betting-wallet-nickname
Hash any wallet address to a sports betting related nickname

Any Solana or EVM wallet address can be deterministrically hashed to a nickname in the format [descriptor] [nationality] [sportsman, position, or sport-/gambling-related person].
There are 11 million combos but it is technically not collision-resistent. This is hashing, not encrption - you cannot go from nickname to wallet. The dictionaries cannot be modified or it will result in a different hash to everyone else using this function. 
Solana wallet addresses are hashed as they are. 
EVM addresses remove the "0x" prefix if present and convert the address to lowercase in order to handle different input formats. 

To use:
1. `npm i @purebet/sports-betting-wallet-nickname`
2. `const {hashWallet} = require("@purebet/sports-betting-wallet-nickname")` or `import hashWallet from "@purebet/sports-betting-wallet-nickname"`
3. `const nickname = hashWallet(walletAddress)`
4. ensure a wallet address of "0" hashes to "Greedy Swedish Running-Back"

Message pure_lmao on Discord with any questions. 
