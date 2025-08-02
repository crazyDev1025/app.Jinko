import { createAction } from '@reduxjs/toolkit'
import { CHAIN_ID } from 'config/constants/networks'

export interface SerializableTransactionReceipt {
  to: string
  from: string
  contractAddress: string
  transactionIndex: number
  blockHash: string
  transactionHash: string
  blockNumber: number
  status?: number
}

export const addTransaction = createAction<{
  chainId: CHAIN_ID
  hash: string
  from: string
  approval?: { tokenAddress: string; spender: string }
  claim?: { recipient: string }
  summary?: string
}>('transactions/addTransaction')

export const clearAllTransactions = createAction<{ chainId: CHAIN_ID }>('transactions/clearAllTransactions')

export const finalizeTransaction = createAction<{
  chainId: CHAIN_ID
  hash: string
  receipt: SerializableTransactionReceipt
}>('transactions/finalizeTransaction')

export const checkedTransaction = createAction<{
  chainId: CHAIN_ID
  hash: string
  blockNumber: number
}>('transactions/checkedTransaction')
