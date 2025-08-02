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

export const useGetAvatarWalletPackage = () => {
  const handleGetAvatarWalletPackage = useCallback(async (_token: string) => {
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
      const { message = "" } = e
      return {
        error: true,
        data: "",
        message
      }
    }
  }, [])

  return { onGetAvatarWalletPackage: handleGetAvatarWalletPackage }
}


export const useGetAvatarPackage = () => {
  const handleGetAvatarPackage = useCallback(async (_token: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/avatar/packages`,
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

  return { onGetAvatarPackage: handleGetAvatarPackage }
}

export const useGetModel = () => {
  const handleGetModel = useCallback(async (_token: string) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/avatar/models`,
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

  return { onGetModel: handleGetModel }
}

export const useCreateJobwithTrainNInfr = () => {
  const handleCreateJobwithTrainNInfr = useCallback(async (_token: string, _avatarPackageId: string, _title: string, _model?: string, _modelName?: string, _images?: File[]) => {
    try {
      const options: AxiosRequestConfig = {
        headers: {
          accept: 'application/json',
          Authorization: _token
        }
      }

      const formData = new FormData();
      formData.append("title", _title);
      formData.append("avatar_package_id", _avatarPackageId);
      if (_modelName) formData.append("model_name", _modelName);
      if (_images && _images.length > 0) _images.forEach((blob, index) => {
        formData.append(`image`, blob);
      });
      if (_model) formData.append("model", _model);

      // if (_mode === "train & inference") {
      //   if (_modelName) formData.append("model_name", _modelName);
      //   if (_images.length > 0) _images.forEach((blob, index) => {
      //     formData.append(`image`, blob);
      //   });
      // } else if (_mode === "inference") {
      //   if (_model) formData.append("model", _model);
      // }
      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/avatar/job`,
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

  return { onCreateJobwithTrainNInfr: handleCreateJobwithTrainNInfr }
}

export const useGetArtGallery = () => {
  const handleGetArtGallery = useCallback(async (_token: string, _page: number, _limit: number) => {
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

      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}generative/avatar/job`,
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

  return { onGetArtGallery: handleGetArtGallery }
}





