// Este código proposto pelo professor Cassiano Peres
// _ aprenseta o seguinte erro:
// ERRO: TypeError: bip32.fromSeed is not a function
// 
// O código corrigido está no arquivo createwallet.js


// importando as dependências
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

// definir a rede
// bitcoin - rede principal
// testnet - rede de teste
const network = bitcoin.networks.testnet

//derivação de carteiras HD
const path = `m/49'/1'/0'/0`

// criando o mnemonic para a seed (palavras de senha)
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)


// cirando a raiz da carteira HD
let root = bip32.fromSeed(seed,network)

// criando uma conta - par pvt-pub keys
let accoount = root.derivePath(path)
let node = accoount.derive(0).derive(0)

let btcAddress = bitcoin.payments.p2pkh({
    pubkey: Node.publicKey,
    network: network,
}).address

console.log("Carteira gerada")
console.log("Endereço:", btcAddress)
console.log("Chave privada:", node.toWIF())
console.log("Seed:", mnemonic)

