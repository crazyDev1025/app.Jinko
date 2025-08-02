import { useTokenAuth } from 'hooks/useTokenAuth'
import { useGetCredit, useGetCreditsPackages } from 'hooks/useCredit'
import useRefresh from 'hooks/useRefresh'
import React, { useState, useEffect, useRef, useCallback, useReducer, useMemo } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { useJinkoTokenBalance, useJinkoTokenBalanceV2 } from 'hooks/useTokenBalance'
import { multichainTokens } from 'config/constants/tokens'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useMiddlewareTranslation from 'hooks/useMiddlewareTranslation'
import { useNotifications } from 'reapop'
import { useRequest } from 'ahooks'
import BigNumber from 'bignumber.js'

import { useGetPricing } from 'views/CreativeAIStudio/hooks/useGetPricing'

type creditsPackage = {
  id: number,
  price: number,
  credits: number,
  bonus: number,
}
type priceListType = {
  id: number,
  name: string,
  description: string,
  price: string,
  min_length_seconds: number,
  max_length_seconds: number
}
const ComponentsContext = React.createContext({
  walletOpened: false,
  walletOpen: () => null,
  walletClose: () => null,
  navOpened: false,
  navOpen: () => null,
  navClose: () => null,
  credit: 0,
  getCredit: null,
  creditsPackages: null,
  getCreditsPackages: null,
  jinkoBalance: null,
  getJinkoBalance: null,
  priceList: [],
  getPricingList: null,
  durationLimit: 0,
})

const ComponentsContextProvider = ({ children }) => {
  const { chainId } = useActiveWeb3React()
  const { notify } = useNotifications()
  const [walletOpened, { open: walletOpen, close: walletClose }] = useDisclosure(false)
  const [navOpened, { open: navOpen, close: navClose }] = useDisclosure(false)
  const { content } = useTokenAuth()
  // const jinkoBalance = useJinkoTokenBalance(multichainTokens.jinko.address[chainId], chainId)
  const [jinkoBalance, setJinkoBalance] = useState(new BigNumber(0))
  const {onGetJinkoTokenBalanceV2:handleGetJinkoTokenBalanceV2 }=useJinkoTokenBalanceV2(multichainTokens.jinko.address[chainId], chainId)
  const { onGetTranslation } = useMiddlewareTranslation()
  const { onGetCredit: handleGetCredit } = useGetCredit()
  const { onGetCreditsPackages: handleGetCreditsPackages } = useGetCreditsPackages()
  const { onGetPricing: handleGetPricing } = useGetPricing()
  const [credit, setCredit] = useState(0)
  const [creditsPackages, setCreditsPackages] = useState<creditsPackage>(null)
  const [priceList, setPriceList] = useState<priceListType[]>([])
  const [durationLimit, setDurationLimit] = useState(0)

  const getCredit = useRequest(() => handleGetCredit(content?.token), {
    pollingInterval: 30000,
    pollingWhenHidden: false,
    refreshOnWindowFocus: true,
    ready: content?.token !== undefined,
    onSuccess: (result) => {
      if (result.error || result.data.error)
        throw new Error(result.message)
      setCredit(result.data.data.balance)
    },
    onError: (error) => {
      console.error(onGetTranslation(error.message))
    }
  }
  );

  const getCreditsPackages = useRequest(() => handleGetCreditsPackages(content?.token), {
    // pollingInterval: 1000000,
    // pollingErrorRetryCount: 10,
    // pollingWhenHidden: false,
    refreshOnWindowFocus: true,
    cacheKey: 'creditsPackages',
    staleTime: 50000,
    ready: content?.token !== undefined,
    onSuccess: (result) => {
      if (result.error || result.data.error)
        throw new Error(result.message)
      setCreditsPackages(result.data.data.packages)
      // setCreditsPackages({ isLoading: false, creditsPackages: result.data.data.packages })
    },
    onError: (error) => {
      console.error(onGetTranslation(error.message))
    }
  }
  );

  const getPricingList = useRequest(() => handleGetPricing(content.token), {
    // loadingDelay: 3000000,
    ready: content?.token !== undefined,
    onSuccess: (result) => {
      try {
        if (result.error || result.data.error) throw new Error(result.message)
        const packages = result.data.data.packages
        setPriceList(packages)
        const dLimit = packages.reduce((acc, curr) => {
          return Math.max(acc, curr.max_length_seconds)
        }, 0)
        setDurationLimit(dLimit)
      } catch (e) {
        console.error(e)
      }
    },
    onError: (error) => {
      notify(onGetTranslation(error.message), 'error')
    }
  });

  const getJinkoBalance =useRequest(() => handleGetJinkoTokenBalanceV2(), {
    ready: content?.token !== undefined,
    pollingInterval: 10000,
    onSuccess: (result) => {
      const [tokenBalance, errorMsg] = result
      // console.log(getFullDisplayBalance(tokenBalance.toString(),18), errorMsg)
      setJinkoBalance(new BigNumber(tokenBalance.toString()))
      return [tokenBalance, errorMsg]
    },
    onError: (error) => {
      console.error(onGetTranslation(error.message))
      return [0, onGetTranslation(error.message)]
    }
 
   }
  );
  
  useEffect(() => {
    if (!content?.token)
      walletClose()
  }, [content?.token, walletClose])

  useEffect(() => {
    if (walletOpened)
      navClose()
  }, [walletOpened, navClose])

  useEffect(() => {
    if (navOpened)
      walletClose()
  }, [navOpened, walletClose])

  return <ComponentsContext.Provider value={{ walletOpened, walletOpen, walletClose, navOpened, navOpen, navClose, credit, getCredit, creditsPackages, getCreditsPackages, jinkoBalance,getJinkoBalance, priceList, getPricingList, durationLimit }}>{children}</ComponentsContext.Provider>
}

export { ComponentsContext, ComponentsContextProvider }
