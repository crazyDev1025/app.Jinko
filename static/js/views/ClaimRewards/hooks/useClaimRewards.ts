import { useCallback } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
import _ from 'lodash'


export const useClaimNft = () => {
  const handleClaimNft = useCallback(async (_token: string, _nftId: number, _nftContract: string, _address: string, _signature: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }
      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}nft/claim`,
        {
          nft_id: _nftId,
          nft_contract: _nftContract,
          address: _address,
          signature: _signature
        },
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

  return { onClaimNft: handleClaimNft }
}


export const useGetListOfNfts = () => {
  const handleGetListOfNfts = useCallback(async (_token: string, _address: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}nft/claim?address=${_address}`,
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
      const { message = "" } = e
      return {
        error: true,
        data: "",
        message
      }
    }
  }, [])

  return { onGetListOfNfts: handleGetListOfNfts }
}






