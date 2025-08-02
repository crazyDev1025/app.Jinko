import { useCallback } from 'react'
import axios from 'axios'
import { useDisconnect } from 'wagmi'
import { useCookies } from 'react-cookie'

// To check app authentication mode i.e. public or private to access
export const useAuthMode = () => {
  const handleAuthMode = useCallback(async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}chat/shouldAuthenticate`)
      const { data, status, statusText } = await response;
      const { data: apiData, status: apiStatus, error: apiError, msg } = await response?.data
      if (status !== 200) throw new Error(statusText);
      if (apiStatus !== 200 || apiError) throw new Error(msg)

      return {
        error: false,
        data: apiData,
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

  return { onGetAuthMode: handleAuthMode }
}

// To check user existence and whitelist status
export const useCheckUser = () => {
  const handleCheckUser = useCallback(async (_address: string | null) => {
    try {
      if (!_address) throw new Error("No wallet connected")
      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}auth/user?wallet_address=${_address}`)
      const { data, status, statusText } = await response;
      const { data: apiData, status: apiStatus, error: apiError, msg } = await response?.data
      if (status !== 200) throw new Error(statusText);
      if (apiStatus !== 200 || apiError) throw new Error(msg)

      return {
        error: false,
        data: apiData,
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

  return { onCheckUser: handleCheckUser }
}

export const useRegisterUser = () => {
  const handleRegisterUser = useCallback(async (_address: string | null, signature: string) => {
    try {
      if (!_address) throw new Error("No wallet connected")
      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}auth/register`, {
        walletAddress: _address,
        signature
      })
      const { data, status, statusText } = await response;
      const { data: apiData, status: apiStatus, error: apiError, msg } = await response?.data
      if (status !== 200) throw new Error(statusText);
      if (apiStatus !== 200 || apiError) throw new Error(msg)

      return {
        error: false,
        data: apiData,
        message: msg,
      }
    } catch (e: any) {
      const { message = "" } = e
      return {
        error: true,
        data: {},
        message
      }
    }
  }, [])

  return { onRegisterUser: handleRegisterUser }
}

// To get challenge for login
export const useChallenge = () => {
  const handleGetChallenge = useCallback(async (_address: string | null) => {
    try {
      if (!_address) throw new Error("No wallet connected")
      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}auth/challenge`, {
        address: _address,
      })
      const { data, status, statusText } = await response;
      const { data: apiData, status: apiStatus, error: apiError, msg } = await response?.data
      if (status !== 200) throw new Error(statusText);
      if (apiStatus !== 200 || apiError) throw new Error(msg)

      return {
        error: false,
        data: apiData,
        message: msg,
      }
    } catch (e: any) {
      const { message = "" } = e
      return {
        error: true,
        data: {},
        message
      }
    }
  }, [])

  return { onGetChallenge: handleGetChallenge }
}

// To login with challenge
export const useChallengeLogin = () => {
  const handleChallengeLogin = useCallback(async (_address: string | null, challenge: string, signature: string) => {
    try {
      if (!_address) throw new Error("No wallet connected")
      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}auth/login`, {
        address: _address,
        challenge,
        response: signature
      })
      const { data, status, statusText } = await response;
      const { data: apiData = {}, status: apiStatus, error: apiError, msg } = await response?.data
      if (status !== 200) throw new Error(statusText);
      if (apiStatus !== 200 || apiError) throw new Error(msg)

      return {
        error: false,
        data: apiData,
        message: msg,
      }
    } catch (e: any) {
      const { message = "" } = e
      return {
        error: true,
        data: {},
        message
      }
    }
  }, [])

  return { onChallengeLogin: handleChallengeLogin }
}

// To check user authentication
export const useCheckAuth = () => {
  const handleCheckAuth = useCallback(async (_token: string) => {
    try {
      if (!_token) throw new Error("invalid token")
      const response = await axios.get(`${process.env.REACT_APP_GENERATIVE_API_LINK}auth/isAuthenticated`, {
        headers: {
          Authorization: _token
        }
      })
      const { data, status, statusText } = await response;
      const { data: apiData, status: apiStatus, error: apiError, msg } = await response?.data
      if (status !== 200) throw new Error(statusText);
      if (apiStatus !== 200 || apiError) throw new Error(msg)

      return {
        error: false,
        data: apiData,
        message: msg,
      }
    } catch (e: any) {
      const { message = "" } = e
      return {
        error: true,
        data: {},
        message
      }
    }
  }, [])

  return { onCheckAuth: handleCheckAuth }
}

// To update email address
export const useEditOrBindEmail = () => {
  const handleEditOrBindEmail = useCallback(async (_token: string, email: string) => {
    try {
      if (!_token) throw new Error("invalid token")
      const response = await axios.post(`${process.env.REACT_APP_GENERATIVE_API_LINK}auth/bindEmail`, {
        email
      }, {
        headers: {
          Authorization: _token
        }
      })
      const { data, status, statusText } = await response;
      const { data: apiData, status: apiStatus, error: apiError, msg } = await response?.data
      if (status !== 200) throw new Error(statusText);
      if (apiStatus !== 200 || apiError) throw new Error(msg)

      return {
        error: false,
        data: apiData,
        message: msg,
      }
    } catch (e: any) {
      const { message = "" } = e
      return {
        error: true,
        data: {},
        message
      }
    }
  }, [])

  return { onEditOrBindEmail: handleEditOrBindEmail }
}

// To disconnect wallet and logout
export const useDisconnectAccount = () => {
  const { disconnect } = useDisconnect()
  const [cookie, setCookie, removeCookie] = useCookies(['_acc'])
  const handleDisconnectAccount = useCallback(() => {
    try {
      console.log("disconnects")
      disconnect()
      removeCookie("_acc", { path: '/' })
      return {
        error: false,
        data: {},
        message: "Successfully disconnected"
      }
    } catch (e: any) {
      const { message = "" } = e
      return {
        error: true,
        data: {},
        message
      }
    }
  }, [disconnect, removeCookie])

  return { onDisconnectAccount: handleDisconnectAccount }



}