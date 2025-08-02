import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useDisconnect } from "wagmi";

// To check on JWT validity
export const useTokenAuth = () => {
  const [cookie] = useCookies(['_acc'])
  const { disconnect } = useDisconnect()
  const [tokenValidity, setTokenValidity] = useState<boolean>(() => {
    if (cookie._acc) {
      if (cookie._acc.exp * 1000 < Date.now())
        return false
      return true
    }
    return false
  })

  useEffect(() => {
    if (cookie._acc) {
      if (cookie._acc.exp * 1000 < Date.now()) {
        // console.log("JWT invalid")
        setTokenValidity(false)
        disconnect()
      } else {
        // console.log("JWT valid")
        setTokenValidity(true)
      }
    } else {
      // console.log("JWT not found")
      setTokenValidity(false)
      disconnect()
    }
  }, [cookie, disconnect])

  return { tokenValidity, content: (cookie._acc) ? cookie._acc : null }
}