const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32')
const bip32 = BIP32Factory(ecc)
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// Rede de teste (testnet)
const network = bitcoin.networks.testnet

// BIP84 (bech32)
const pathBIP84 = `m/84'/1'/0'/0`

// Gerar mnemonic (12 palavras)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)
let root = bip32.fromSeed(seed, network)


// ======= BIP84 =======
let account84 = root.derivePath(pathBIP84)
let node84 = account84.derive(0).derive(0)

let { address: address84 } = bitcoin.payments.p2wpkh({
    pubkey: node84.publicKey,
    network
})

console.log("Carteira gerada com sucesso!\n")
console.log("Seed (mnemonic):", mnemonic)

console.log("\n--- BIP84 (Bech32 nativo) ---")
console.log("Endereço:", address84)
console.log("Chave privada (WIF):", node84.toWIF())
