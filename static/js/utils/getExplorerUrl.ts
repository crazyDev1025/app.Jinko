import { CHAIN_ID, EXPLORER_URLS } from 'config/constants/networks'


export function getExplorerLink(
  data: string | number,
  type: 'transaction' | 'token' | 'address' | 'block' | 'countdown',
  chainId: CHAIN_ID = CHAIN_ID.MAINNET,
): string {
  switch (type) {
    case 'transaction': {
      return `${EXPLORER_URLS[chainId]}/tx/${data}`
    }
    case 'token': {
      return `${EXPLORER_URLS[chainId]}/token/${data}`
    }
    case 'block': {
      return `${EXPLORER_URLS[chainId]}/block/${data}`
    }
    case 'countdown': {
      return `${EXPLORER_URLS[chainId]}/block/countdown/${data}`
    }
    default: {
      return `${EXPLORER_URLS[chainId]}/address/${data}`
    }
  }
}