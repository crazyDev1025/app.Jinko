import { getContract, getProvider } from '@wagmi/core'

// Addresses
import {
  getMulticallAddress,
  getPurchaseCashierAddress
} from 'utils/addressHelpers'

// ABI
import erc20Abi from 'config/abi/erc20.json'
import purchaseAbi from 'config/abi/purchaseCashier.json'
import MultiCallAbi from 'config/abi/multicall.json'
import jinkoAbi from 'config/abi/jinko.json'

const getContractInstance = (abi: any, address: string, chainId: number, signer?: any) => {
  const provider = getProvider({
    chainId,
  })
  const signerOrProvider = signer ?? provider
  const contract = getContract({
    address,
    abi,
    signerOrProvider,
  })
  return contract
}

export const getErc20Contract = (address: string, chainId: number, signer?: any) => {
  return getContractInstance(erc20Abi, address, chainId, signer)
}

export const getPurchaseCashierContract = (chainId: number, signer?: any) => {
  return getContractInstance(purchaseAbi, getPurchaseCashierAddress(chainId), chainId, signer)
}

export const getMulticallContract = (chainId: number, signer?: any) => {
  return getContractInstance(MultiCallAbi, getMulticallAddress(chainId), chainId, signer)
}

export const getJinkoTokenContract = (address: string, chainId: number, signer?: any) => {
  return getContractInstance(jinkoAbi, address, chainId, signer)
}
