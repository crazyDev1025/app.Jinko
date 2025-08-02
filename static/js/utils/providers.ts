import { getProvider } from '@wagmi/core'

const activeWeb3Instance = {}

const getCurrentProvider = (chainId: number) => {
  if (!activeWeb3Instance[chainId]) {
    const provider = getProvider({
      chainId,
    })
    activeWeb3Instance[chainId] = provider
  }
  return activeWeb3Instance[chainId]
}

export default getCurrentProvider
