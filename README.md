# sports-betting-wallet-nickname
Hash any wallet address to a sports betting related nickname

Any Solana or EVM wallet address can be deterministrically hashed to a nickname in the format [descriptor] [nationality] [sportsman, position, or sport-/gambling-related person].
There are 11 million combos but it is technically not collision-resistent. This is hashing, not encrption - you cannot go from nickname to wallet. The dictionaries cannot be modified or it will result in a different hash to everyone else using this function. 
