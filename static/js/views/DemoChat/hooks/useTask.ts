import { useCallback } from 'react'
import axios, { AxiosRequestConfig } from 'axios'


export const useTask = () => {
  const handleTask = useCallback(async (_token: string | null) => {
    try {
      const config: AxiosRequestConfig = { headers: { accept: 'application/json' } }
      if (_token) config.headers.Authorization = _token
      const response = await axios.get(`${process.env.REACT_APP_API_LINK}auth/tasks`, config)
      const { data, status, statusText } = await response
      if (status !== 200) throw new Error(statusText)
      if (data.error) throw new Error(data.msg)
      // if (data.data.tasks.length === 0) throw new Error("No task available")
      return {
        error: false,
        data: data.data,
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

  return { onGetTask: handleTask }
}


