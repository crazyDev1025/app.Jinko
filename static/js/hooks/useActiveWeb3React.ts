import { useEffect, useState, useRef } from 'react'
import { useAccount, useProvider, useConnect, useSigner } from 'wagmi'
import { useSelector } from 'react-redux'
import getCurrentProvider from 'utils/providers'
import { State } from 'state/types'

interface Web3ReactContext<T = any> {
  library?: T
  chainId?: number
  account?: null | string
  active: boolean
  error?: Error
  signer?: any
}

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
const useActiveWeb3React = (chainId?: number): Web3ReactContext<any> => {
  const { address, isConnected } = useAccount()
  const appChainId = useSelector((state: State) => state.network.data.chainId)
  const appProvider = getCurrentProvider(chainId || appChainId)
  const library = useProvider({
    chainId,
  })
  const { error } = useConnect({
    chainId,
  })
  const { data: signer } = useSigner({
    chainId,
  })
  const libRef = useRef(library)
  const [provider, setProvider] = useState(library || appProvider)

  useEffect(() => {
    if (library !== libRef.current) {
      setProvider(library || appProvider)
      libRef.current = library
    }
  }, [library, appProvider])

  return {
    library: provider,
    chainId: chainId || library._network.chainId || appChainId,
    account: address,
    active: isConnected,
    error,
    signer
  }
}

export default useActiveWeb3React
