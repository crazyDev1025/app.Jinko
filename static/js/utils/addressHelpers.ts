import { CHAIN_ID } from 'config/constants/networks'
import addresses from 'config/constants/contracts'
import { Address } from 'config/constants/types'
import { paymentList, multichainTokens } from 'config/constants/tokens'

export const getAddress = (address: Address, chainId: number): string => {
  if (!address) return ""
  return address[chainId] ? address[chainId] : address[CHAIN_ID.MAINNET]
}

export const getMulticallAddress = (chainId: number) => {
  return getAddress(addresses.multiCall, chainId)
}

export const getPurchaseCashierAddress = (chainId: number) => {
  return getAddress(addresses.purchaseCashierContr, chainId)
}

export const getPaymentList = (chainId: number) => {
  const newPaymenList = paymentList.map((item) => {
    const token = Object.keys(multichainTokens).find((key) => multichainTokens[key].symbol === item.symbol)
    return {
      ...item,
      value: token ? multichainTokens[token].address[chainId] : '',
      label: item.name,
      symbol: token ? multichainTokens[token].symbol : '',
      decimals: token ? multichainTokens[token].decimals : 18
    }
  })
  return newPaymenList;
}

export const getStakePoolAddress = (chainId: number) => {
  return getAddress(addresses.stakingPoolContr, chainId)
}