/*
config.js - Configuration for Zero Testnet
*/

module.exports = {
  mainnet: {
//    messagePrefix: 'ZCash main net',
messagePrefix: '\x18Zcash Signed Message:\n',
  bip32: {
      public: '043587cf',
//      private: '0488ade4'
      private: '04358394'
   },
    pubKeyHash: '1d25',
    scriptHash: '1cba',
    zcPaymentAddressHash: '16b6', // Private z-address
    zcSpendingKeyHash: 'ac08', // Spending key
    wif: 'ef'
  },
  testnet: {
    wif: 'ef',
    pubKeyHash: '2098'
  }
};
