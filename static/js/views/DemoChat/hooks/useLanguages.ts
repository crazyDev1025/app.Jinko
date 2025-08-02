import { useCallback } from 'react'
import axios from 'axios'

export const useLanguages = () => {
  const handleLanguages = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_LINK}chat/languages`)
      const { data, status, statusText } = await response
      if (status !== 200) throw new Error(statusText)
      if (data.error) throw new Error(data.msg);
      if (data.data.length === 0) throw new Error("No language available")
      return {
        error: false,
        data: data.data,
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

  return { onGetLanguages: handleLanguages }
}


