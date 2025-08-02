import { useCallback } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export const useGetCredit = () => {
  const handleGetCredit = useCallback(async (_token: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}wallet/`,
        options
      )
      const { data, status, statusText } = await response
      if (status !== 200) throw new Error(statusText)
      if (data.error) throw new Error(data.msg)
      return {
        error: false,
        data,
        message: "",
      }
    } catch (e: any) {
      // eslint-disable-next-line
      const { message } = e
      return {
        error: true,
        data: "",
        message
      }
    }
  }, [])

  return { onGetCredit: handleGetCredit }
}

export const useGetCreditsPackages = () => {
  const handleGetCreditsPackages = useCallback(async (_token: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}wallet/packages`,
        options
      )
      const { data, status, statusText } = await response
      if (status !== 200) throw new Error(statusText)
      if (data.error) throw new Error(data.msg)
      return {
        error: false,
        data,
        message: "",
      }
    } catch (e: any) {
      // eslint-disable-next-line
      const { message } = e
      return {
        error: true,
        data: "",
        message
      }
    }
  }, [])

  return { onGetCreditsPackages: handleGetCreditsPackages }
}

export const usePurchaseCreditsPackages = () => {
  const handlePurchaseCreditsPackages = useCallback(async (_token: string, _packageId: string, _address: string, _paymentToken: string, _network: number) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          authorization: _token
        }
      }
      const body = {
        package_id: _packageId,
        address: _address,
        payment_token: _paymentToken,
        network_id: _network,
      }
      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}wallet/purchase`, body, options)
      const { data, status, statusText } = await response
      if (status !== 200) throw new Error(statusText)
      if (data.error) throw new Error(data.msg)
      return {
        error: false,
        data,
        message: "",
      }
    } catch (e: any) {
      // eslint-disable-next-line
      const { message } = e
      return {
        error: true,
        data: "",
        message
      }
    }
  }, [])

  return { onPurchaseCreditsPackages: handlePurchaseCreditsPackages }
}

export const useGetJinkoPrice = () => {
  const handleGetJinkoPrice = useCallback(async (_token: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}wallet/jinko-price`,
        options
      )
      const { data, status, statusText } = await response
      if (status !== 200) throw new Error(statusText)
      if (data.error) throw new Error(data.msg)
      return {
        error: false,
        data,
        message: "",
      }
    } catch (e: any) {
      // eslint-disable-next-line
      const { message } = e
      return {
        error: true,
        data: "",
        message
      }
    }
  }, [])

  return { onGetJinkoPrice: handleGetJinkoPrice }
}


