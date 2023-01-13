require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remind huge good clog swift tongue'; 
let testAccounts = [
"0xcfed8b477778c4ade73378327e7f8b12399b4ad2d04bd0f17b2924e26070de49",
"0xd7897d3f4c0d573d992e5a0a442507b244a94bd76d5b010486ae38ea4ace5a3f",
"0x55442ebcaa560a91fe6bcff8bddb29c36a5a5ce4567f1c5451498f0919cec78a",
"0xaae3914d389e8d512e7e36299f5dacdc8be4967f6fdc88b1835e4b8abbe3880b",
"0x402aa6976074ea0e2431428ab160c6836071bc222fcb0c69b76280beabe9692f",
"0xc15ce2ea257c52467f75fb70a38c1f5166efe20aae83263ad33129a6fa0f9115",
"0xdae9e3719e40d679692c9aac5d287d1a27c9347549faa5a24b37c57ef82704ee",
"0x196fb208aae89c4f516a9ea0ebe5ff8377101f331763a2e24a3afc8fd86e5aa5",
"0x63f27c6a7e267a251ee14886e199db4c8fe26ae0a62f437c3516fc57b4af602c",
"0xe90a0ac4a4434bceafee97b8e1414808a817c078302c6b8743ce5af9f72fced6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

