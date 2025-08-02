import { useCallback } from 'react'
import axios, { AxiosRequestConfig } from 'axios'

export const useCreateVideoWithoutSubtitle = () => {
  const handleCreateVideoWithoutSubtitle = useCallback(async (_token: string, _image: File, _audio: File) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }
      const formData = new FormData();
      formData.append("image", _image);
      formData.append("audio", _audio);

      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/studio/job`,
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
      const { message = "" } = e
      return {
        error: true,
        data: "",
        message
      }
    }
  }, [])

  return { onCreateVideoWithoutSubtitle: handleCreateVideoWithoutSubtitle }
}

export const useGetVideoWithoutSubtitle = () => {
  const handleGetVideoWithoutSubtitle = useCallback(async (_token: string, _uuid?: string, _page?: number, _limit?: number) => {
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
      
      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/studio/job` + (_uuid ? `/${_uuid}` : ""),// eslint-disable-line
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

  return { onGetVideoWithoutSubtitle: handleGetVideoWithoutSubtitle }
}

export const useEditVideoWithoutSubtitle = () => {
  const handleEditVideoWithoutSubtitle = useCallback(async (_token: string, _uuid: string, _title?: string, _isVisible?: boolean) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/studio/job/${_uuid}`,
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

  return { onEditVideoWithoutSubtitle: handleEditVideoWithoutSubtitle }
}





