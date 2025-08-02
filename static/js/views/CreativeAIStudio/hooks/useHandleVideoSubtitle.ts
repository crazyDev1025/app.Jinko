import { useCallback } from 'react'
import axios, { AxiosRequestConfig } from 'axios'


export const useCreateVideoSubtitle = () => {
  const handleCreateVideoSubtitle = useCallback(async (_token: string, _uuid: string, _srt: File, _title?: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }
      const formData = new FormData();
      formData.append("studio_job_id", _uuid);
      formData.append("subtitle", _srt);
      if (_title) formData.append("title", _title);

      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/subtitle/job`,
        formData,
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

  return { onCreateVideoSubtitle: handleCreateVideoSubtitle }
}
export const useGetVideoSubtitle = () => {
  const handleGetVideoSubtitle = useCallback(async (_token: string, _uuid?: string, _page?: number, _limit?: number) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        },
        params: {
          page: _page,
          limit: _limit
        }
      }

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/subtitle/job` + (_uuid ? `/${_uuid}` : ""),// eslint-disable-line
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

  return { onGetVideoSubtitle: handleGetVideoSubtitle }
}

export const useEditVideoSubtitle = () => {
  const handleEditVideoSubtitle = useCallback(async (_token: string, _uuid: string, _title?: string, _isVisible?: boolean) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/subtitle/job/${_uuid}`,
        { title: _title, is_visible: _isVisible },
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

  return { onEditVideoSubtitle: handleEditVideoSubtitle }
}





