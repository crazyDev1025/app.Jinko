import { useMemo } from 'react'
import { useNetwork, useProvider, useSigner } from 'wagmi'
import { AddressZero } from '@ethersproject/constants'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import {
  getMulticallAddress,
  getPurchaseCashierAddress
} from 'utils/addressHelpers'
import { Contract, ContractInterface } from '@ethersproject/contracts'
import { CHAIN_ID, defaultChainId } from 'config/constants/networks'
import { AddressMap } from 'config/constants/contracts'
import getCurrentProvider from 'utils/providers'

// ABI
import erc20Abi from 'config/abi/erc20.json'
import purchaseAbi from 'config/abi/purchaseCashier.json'
import MultiCallAbi from 'config/abi/multicall.json'

// create a contract without signer
const useStaticContract = <TContract extends Contract = Contract>(
  ABI: ContractInterface,
  address: string | AddressMap,
  chainId: CHAIN_ID
) => {
  const provider = getCurrentProvider(chainId)
  const contrAddr = typeof address === 'object' ? address[chainId as keyof typeof address] : address
  return useMemo(() => new Contract(contrAddr, ABI, provider) as TContract, [contrAddr, ABI, provider])
}

const useDynamicContract = <TContract extends Contract = Contract>(
  ABI: ContractInterface,
  addressMap: string | AddressMap,
  chainId: CHAIN_ID,
  asSigner = true
) => {
  const provider = useProvider({
    chainId
  })
  const { data: signer } = useSigner({
    chainId
  })
  const { chain = { id: defaultChainId } } = useNetwork()

  return useMemo(() => {
    const address = typeof addressMap === 'object' ? addressMap[(chainId ?? chain.id) as keyof typeof addressMap] : addressMap

    if (!address || address === AddressZero) return null

    const providerOrSigner = asSigner && signer ? signer : provider

    return new Contract(address, ABI, providerOrSigner) as TContract
  }, [addressMap, chain.id, asSigner, signer, provider, ABI, chainId])
}

export const useERC20S = (address: string, chainId: number) => {
  return useDynamicContract(erc20Abi, address, chainId)
}

export const useERC20 = (address: string, chainId: number) => {
  return useStaticContract(erc20Abi, address, chainId)
}

export function usePurchaseCashierContractS(chainId: number) {
  return useDynamicContract(purchaseAbi, getPurchaseCashierAddress(chainId), chainId)
}

export function usePurchaseCashierContract(chainId: number) {
  return useStaticContract(purchaseAbi, getPurchaseCashierAddress(chainId), chainId)
}

export function useMulticallContract() {
  const { chainId } = useActiveWeb3React()
  return useStaticContract(MultiCallAbi, getMulticallAddress(chainId), chainId)
}