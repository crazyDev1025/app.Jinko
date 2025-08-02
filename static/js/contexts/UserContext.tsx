import { useTokenAuth } from 'hooks/useTokenAuth';
import { useCheckAuth } from 'hooks/useUserAuth';
import React, { useState, useEffect, useRef } from 'react'
import { useCookies } from 'react-cookie';

const UserContext = React.createContext({
  username: "",
  setUsername: (username: string) => null,
})

const UserContextProvider = ({ children }) => {
  const { content } = useTokenAuth()
  const [username, setUsername] = useState<string>("");
  const [cookie, setCookie, removeCookie] = useCookies(["_acc"]);
  const { onCheckAuth: handleCheckAuth } = useCheckAuth()
  useEffect(() => {
    const getUsername = async () => {
      const response = await handleCheckAuth(content.token)
      if (!response.error)
        setUsername(response.data.username)
      else {
        removeCookie("_acc");
      }
    }
    if (content && content.token) {
      getUsername()
    }
  }, [content, handleCheckAuth, removeCookie])


  return <UserContext.Provider value={{ username, setUsername }}>{children}</UserContext.Provider>
}

export { UserContext, UserContextProvider }
