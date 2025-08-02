import { useCallback } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export const useCreateVoice = () => {
  const handleCreateVoice = useCallback(async (_token: string, _voice: number, _message: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }


      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/voice`,
        { voice_id: _voice, message: _message },
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

  return { onCreateVoice: handleCreateVoice }
}

export const useGetVoice = () => {
  const handleGetVoice = useCallback(async (_token: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/voice`,
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

  return { onGetVoice: handleGetVoice }
}


