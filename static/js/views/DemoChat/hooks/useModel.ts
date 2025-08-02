import { useCallback } from 'react'
import axios from 'axios'
import { useTokenAuth } from 'hooks/useTokenAuth'

export const useModel = () => {
  const { tokenValidity } = useTokenAuth()
  const handleModel = useCallback(async (language: string, gender: string) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_LINK}chat/models?page=1&limit=20&language=${language}&gender=${gender}`)
      const { data, status, statusText } = await response
      if (status !== 200) throw new Error(statusText)
      if (data.error) throw new Error(data.msg)
      if (data.data.models.length === 0) throw new Error("No personality available")
      const model = tokenValidity ? data.data.models : data.data.models.filter((m) => { return m.whitelist_only === false })
      return {
        error: false,
        data: model,
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
  }, [tokenValidity])

  return { onGetModel: handleModel }
}


