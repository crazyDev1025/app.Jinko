/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CHAIN_ID } from 'config/constants/networks'
import { Network, NetworkState } from 'state/types'
import fetchAndUpdateNetwork from './fetchNetwork'

const chainIdSafeCheck = (): { chainId: number } => {
  const localStorageChain = parseInt(window.localStorage.getItem(`chainIdStatus${process.env.REACT_APP_PROJECT_NAME}`))
  return { chainId: localStorageChain || CHAIN_ID.MAINNET }
}

const { chainId: initChainId } = chainIdSafeCheck()

const initialState: NetworkState = {
  isInitialized: false,
  isLoading: true,
  data: { chainId: initChainId },
}

export const networkSlice = createSlice({
  name: 'network',
  initialState,
  reducers: {
    networkFetchStart: (state) => {
      state.isLoading = true
    },
    networkFetchSucceeded: (state, action: PayloadAction<Network>) => {
      state.isInitialized = true
      state.isLoading = false
      state.data = action.payload
    },
    networkFetchFailed: (state) => {
      state.isLoading = false
      state.isInitialized = true
    },
    setNetwork: (state, action) => {
      state.isInitialized = true
      state.isLoading = false
      state.data.chainId = action.payload.chainId
    },
  },
})

// Actions
export const {
  networkFetchStart,
  networkFetchSucceeded,
  networkFetchFailed,
  setNetwork
} = networkSlice.actions

// thunks
export const fetchUserNetwork = (web3ChainId: number, account: string, chainId: number) => (dispatch) => {
  try {
    dispatch(networkFetchStart())
    const network = fetchAndUpdateNetwork(web3ChainId, account, chainId)
    dispatch(setNetwork(network))
    localStorage.setItem(`chainIdStatus${process.env.REACT_APP_PROJECT_NAME}`, JSON.stringify(network.chainId))
  } catch (error) {
    dispatch(networkFetchFailed())
  }
}

export default networkSlice.reducer
