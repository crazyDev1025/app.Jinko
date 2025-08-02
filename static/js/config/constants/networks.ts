// Network chain ids
export enum CHAIN_ID {
  BSC = 56,
  BSC_TESTNET = 97,
  MAINNET = 1,
  GOERLI = 5
}

export const defaultChainId = CHAIN_ID.BSC

// Network labels
export const NETWORK_LABEL = {
  [CHAIN_ID.BSC]: 'BSC',
  [CHAIN_ID.BSC_TESTNET]: 'BSC Testnet',
  [CHAIN_ID.MAINNET]: 'Ethereum',
  [CHAIN_ID.GOERLI]: 'Goerli',
}

// Network RPC nodes
export const NETWORK_RPC = {
  [CHAIN_ID.BSC]: [
    'https://bsc-dataseed1.binance.org/',
    // 'https://bsc-dataseed1.ninicoin.io',
    // 'https://bsc-dataseed1.defibit.io',
  ],
  [CHAIN_ID.BSC_TESTNET]: ['https://data-seed-prebsc-2-s3.binance.org:8545/'],
  [CHAIN_ID.MAINNET]: [`https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`],
  [CHAIN_ID.GOERLI]: [`https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`],
}

// Network block explorers
export const EXPLORER_URLS = {
  [CHAIN_ID.MAINNET]: 'https://etherscan.io',
  [CHAIN_ID.GOERLI]: 'https://goerli.etherscan.io',
  [CHAIN_ID.BSC]: 'https://bscscan.com',
  [CHAIN_ID.BSC_TESTNET]: 'https://testnet.bscscan.com',
}