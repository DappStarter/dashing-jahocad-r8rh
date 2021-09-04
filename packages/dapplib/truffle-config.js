require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note praise code hunt brand flip gate'; 
let testAccounts = [
"0xda42cd6377ee30ad3c36643dc95ea7f5b9e9f5b39fdc81ab6f5b215a5a03c827",
"0x1f2231ef187d6a198f515dc222bf63d8f11166e4815dcb24cbbf5cf3ccefb4f1",
"0xed36c9b22bbfc91472cdb5b3e9cdacaad50a01f029bbeae325881e7666ce55fd",
"0x25e27a77b4949edde5bbc018119309b330551034b607645d99eb0d24d4f74517",
"0x8420229ef43bd73a6cd43b40972e4e8a8dd162f36d9a8ff91db24d3dd8ee1e07",
"0x87250cb065b41cb4f5b9ab131baed43a8b3c13227e090bc0ccfaaa3d640e05d6",
"0xc302299d1f80a50764660f81f7a5cb4bdffa4a5cc525951590c3a7f68a7ad4e8",
"0x76c43727d7a42cc8365104d93e8c9b973839f3c3243d82b184b061f73051a9ef",
"0x8e1a5cb96c8934d8923de58813574c6a36142cd9e00fb6730e27cc8413514ee4",
"0xdda6a4ff9d76c84e6b5f8b474ba4110f6e2f11dadf0bf056bc2ac66403cc08e4"
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

