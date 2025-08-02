import { useCallback } from 'react'
import axios from 'axios'

export const useVoice = () => {
  const handleVoice = useCallback(async (language: string, gender: string) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_LINK}chat/voices?page=1&limit=20&language=${language}&gender=${gender}`)
      const { data, status, statusText } = await response
      if (status !== 200) throw new Error(statusText)
      if (data.error) throw new Error(data.msg)
      if (data.data.models.length === 0) throw new Error("No voice available")
      return {
        error: false,
        data: data.data.models,
        message: ""
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

  return { onGetVoice: handleVoice }
}


