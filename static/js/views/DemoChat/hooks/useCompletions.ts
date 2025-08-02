import { useCallback } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

interface Messages {
  role: string,
  content: string,
}

export const useCompletions = () => {
  const handleCompletion = useCallback(async (messages: Messages[], model: number, voice: number, _token: string | null) => {
    try {
      const options: AxiosRequestConfig = { headers: { accept: 'application/json' } }
      if (_token) options.headers.Authorization = _token
      const response = await axios.post(`${process.env.REACT_APP_API_LINK}chat/complete`,
        { message: messages, model, voice },
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
      const { message = "" } = e
      return {
        error: true,
        data: "",
        message
      }
    }
  }, [])

  return { onGetCompletions: handleCompletion }
}


