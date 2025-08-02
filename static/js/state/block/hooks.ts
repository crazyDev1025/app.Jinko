import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { useBlockNumber } from 'wagmi'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { setBlock } from '.'
import { State } from '../types'

export const usePollBlockNumber = () => {
  const dispatch = useAppDispatch()
  const { chainId } = useActiveWeb3React()
  const { data, isLoading } = useBlockNumber({
    chainId,
    watch: true
  })

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const blockNumber = data
        dispatch(setBlock(blockNumber))
      } catch {
        console.error('Could not fetch block number')
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [dispatch, data, isLoading])
}

export const useBlock = () => {
  return useSelector((state: State) => state.block)
}

export const useInitialBlock = () => {
  return useSelector((state: State) => state.block.initialBlock)
}