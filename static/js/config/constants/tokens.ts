import { AddressZero } from '@ethersproject/constants'

export const multichainTokens = {
  bnb: {
    symbol: 'BNB',
    address: {
      1: '',
      5: '',
      56: AddressZero,
      97: AddressZero,
    },
    decimals: {
      1: 18,
      5: 18,
      56: 18,
      97: 18,
    }
  },
  eth: {
    symbol: 'ETH',
    address: {
      1: AddressZero,
      5: '',
      56: '',
      97: '',
      11155111: '',
    },
    decimals: {
      1: 18,
      5: 18,
      56: 18,
      97: 18,
      11155111: 18,
    }
  },
  busd: {
    symbol: 'BUSD',
    address: {
      1: '',
      5: '',
      56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
      97: '',
    },
    decimals: {
      1: 18,
      5: 18,
      56: 18,
      97: 18,
    }
  },
  usdt: {
    symbol: 'USDT',
    address: {
      1: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      5: '0xDFAD200cdB096bC395bc007bd469e93DE22886C9',
      56: '0x55d398326f99059fF775485246999027B3197955',
      97: '',
      11155111: '0x9cB0ddD1ef6619036dd62e468087138124b353E4',
    },
    decimals: {
      1: 6,
      5: 6,
      56: 18,
      97: 18,
      11155111: 18,
    }
  },
  jinko: {
    symbol: 'Neko',
    address: {
      1: '0xE97dB8503dd3E3eB0286AAFC50327C598EFDb578',
      5: '0x82C0A81632A021085a59e9FFA16c77577CD13aE8',
      56: '0x55d398326f99059fF775485246999027B3197955',
      97: '',
      11155111: '0xe14b5F6ed6287b31b76FDc60ed8a89c7E3a8f23D',
    },
    decimals: {
      1: 18,
      5: 18,
      56: 18,
      97: 18,
      11155111: 18,
    }
  }
}
export const paymentList = [
  {
    name: 'USDT',
    symbol: 'USDT',
    is_token: true,
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png'

  },
  {
    name: 'Neko',
    symbol: 'Neko',
    is_token: true,
    image: 'https://s2.coinmarketcap.com/static/img/coins/64x64/821.png'
  }
]