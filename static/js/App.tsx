import React, { lazy, useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useIntl } from 'react-intl'
// import { Flex } from '@mantine/core';
// import { Button } from '@nextui-org/react'
import BigNumber from 'bignumber.js'
import styled from '@emotion/styled'
import jwtDecode, { JwtPayload } from 'jwt-decode'
import { useCookies } from 'react-cookie'
import { useSignMessage, useAccount } from 'wagmi'
import Menu from 'components/Menu'
import Countdown from 'react-countdown'

import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useChallenge, useChallengeLogin, useCheckAuth, useCheckUser, useRegisterUser } from 'hooks/useUserAuth'
import PageLoader from 'components/Loader/PageLoader'
import { GeneralText } from 'components/GlobalStyle'
import Page from 'components/Layout/Page'
import { usePollBlockNumber } from 'state/block/hooks'
import { useUpdateNetwork } from 'state/network/hooks'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import { userAuthLoadObj, userStatusData } from 'config/constants/types'
import { useTokenAuth } from 'hooks/useTokenAuth'
import OpentalkerProvider from 'contexts/Opentalker'
import { ConnectWallet } from 'components/ConnectWallet'


const NotFound = lazy(() => import('./views/NotFound'))
const GenderMenu = lazy(() => import('./views/DemoChat'))
const Chat = lazy(() => import('./views/DemoChat/chat'))
const Dashboard = lazy(() => import('./views/Dashboard'))
const OpentalkerContents = lazy(() => import('./views/CreativeAIStudio/contents'))
const OpentalkerEditor = lazy(() => import('./views/CreativeAIStudio/editor'))
const OpentalkerPlayer = lazy(() => import('./views/CreativeAIStudio/player'))
const OpentalkerSubtitleEditor = lazy(() => import('./views/CreativeAIStudio/subtitleEditor'))
const MagicAvatar = lazy(() => import('./views/MagicAvatar'))
const ClaimRewards = lazy(() => import('./views/ClaimRewards'))
const StakingPool = lazy(() => import('./views/StakingPool'))

// This config is required for number formatting
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

enum errorMsg {
  USER_DENIED_REQ = 'User denied request...'
}

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonWrapper = styled.div`
  border-image-source: url(/images/content-frame-t.svg);
  border-image-width: 20px;
  border-image-outset: 6px;
  border-image-slice: 27;
  padding:30px 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:10px;
`

// const ButtonText = styled(Button) <{ height: string, width: string, bg: string, padding?: string }>`
//   height: ${({ height }) => height};
//   width: ${({ width }) => width};
//   padding: ${({ padding }) => padding || '0px'};
//   border-radius: 20px;
//   min-width: ${({ width }) => width};
//   background-color: ${({ bg }) => bg}!important;
//   color: black!important;
//   :hover {
//     cursor: pointer;
//   }
//   :disabled {
//     cursor: not-allowed;
//     background-color: #E6E8EC!important;
//     pointer-events: visible;
//   }
// `

export const RemoveTrailingSlash = ({ ...rest }) => {
  const location = useLocation()

  // If the last character of the url is '/'
  if (location.pathname.match('/.*/$')) {
    return <Navigate replace {...rest} to={{
      pathname: location.pathname.replace(/\/+$/, ""),
      search: location.search
    }} />
  }
  return <></>
}

type PleaseConnectWalletWrapperProps = {
  intl: any,
  content: any,
  children?: React.ReactNode
}

const PleaseConnectWalletWrapper: React.FC<PleaseConnectWalletWrapperProps> = ({ intl, content, children }) => {
  if (content?.token && children) return <>{children}</>
  return <Wrapper>
    <ButtonWrapper>
      <GeneralText size="0.9rem" color="var(--whiteColor)" weight="bold" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)" }} >
        {`${intl.formatMessage({ id: "please-connect-your-wallet", defaultMessage: "Please connect your wallet" })}`}
      </GeneralText>
      <ConnectWallet />
    </ButtonWrapper>
  </Wrapper>
}

const App: React.FC<any> = () => {
  usePollBlockNumber()
  useUpdateNetwork()
  const pathName = window.location.pathname
  const { account } = useActiveWeb3React();
  const { isDisconnected } = useAccount()
  const { signMessageAsync, data, error: signError, isLoading: isSignLoading } = useSignMessage()
  const { tokenValidity, content } = useTokenAuth()
  const contentRef = useRef(content)
  const intl = useIntl()
  const { onCheckUser: handleCheckUser } = useCheckUser()
  const { onRegisterUser: handleRegisterUser } = useRegisterUser()
  const { onGetChallenge: handleGetChallenge } = useChallenge()
  const { onChallengeLogin: handleChallengeLogin } = useChallengeLogin()
  const { onCheckAuth: handleCheckAuth } = useCheckAuth()
  const initStateData = useMemo<userAuthLoadObj>(() => ({
    isLoading: true, isLoginLoading: true, isSigned: true
  }), [])
  const [stateObj, setStateObj] = useReducer((state: userAuthLoadObj, newState: Partial<userAuthLoadObj>) => ({
    ...state, ...newState
  }), initStateData)
  const initUserStatus = useMemo<userStatusData>(() => ({ is_found: false, is_whitelisted: false }), [])
  const [userStatus, setUserStatus] = useState<userStatusData>(initUserStatus)
  const [showBlockMsg, setShowBlockMsg] = useState<boolean>(false)
  const [isCheckAuthValid, setIsCheckAuthValid] = useState<boolean>(false)

  const [cookies, setCookie, removeCookie] = useCookies()
  const loginValidity = () => {
    return tokenValidity && isCheckAuthValid
  }

  const checkUser = useCallback(async () => {
    try {
      const response = await handleCheckUser(account)
      if (response.error) throw new Error(response.message)
      const _data = response.data
      setUserStatus(_data)
      return _data
    } catch (e: any) {
      // console.error(e)
      setUserStatus(initUserStatus)
      return initUserStatus
    }
  }, [handleCheckUser, account, initUserStatus])

  const getChallenge = useCallback(async () => {
    try {
      const response = await handleGetChallenge(account)
      if (response.error) throw new Error(response.message)
      const _data = response.data.challenge
      return _data
    } catch (e: any) {
      // console.error(e)
      return ""
    }
  }, [handleGetChallenge, account])

  const registerUser = useCallback(async () => {
    try {
      const message = {
        "action": "register",
        "walletAddress": account
      }
      let signature = ""
      await signMessageAsync({ message: JSON.stringify(message) })
        .then((result) => {
          signature = result
        }).catch((e) => {
          // console.error(e)
          throw new Error(errorMsg.USER_DENIED_REQ)
        })
      const response = await handleRegisterUser(account, signature)
      if (response.error) throw new Error(response.message)
      return { error: false, message: "" }
    } catch (e: any) {
      // console.error(e)
      const { message = "" } = e
      return { error: true, message }
    }
  }, [handleRegisterUser, account, signMessageAsync])

  const challengeLogin = useCallback(async (_challenge: string) => {
    try {
      const message = `Login : ${_challenge}`

      let signature = ""
      await signMessageAsync({ message: JSON.stringify(message) })
        .then((result) => {
          signature = result
        }).catch(e => {
          throw new Error(errorMsg.USER_DENIED_REQ)
        })

      const response = await handleChallengeLogin(account, _challenge, signature)
      // const response = { error: false, data: { token: 'token here...' }, message: '' }
      if (response.error) throw new Error(response.message)
      if (response.data.token) {
        const decodedJwt = jwtDecode<JwtPayload>(response.data.token)
        const jwtExpires = new Date(decodedJwt.exp * 1000)
        // console.log("JWT GET: ", { ...decodedJwt, token: response.data.token })
        setCookie('_acc', JSON.stringify({ ...decodedJwt, token: response.data.token }),
          {
            sameSite: true, secure: true,
            expires: jwtExpires, path: '/'
          })
        return { error: false, message: '' }
      }
      return { error: true, message: 'no token found in response' }
    } catch (e: any) {
      // console.error(e)
      const { message = "" } = e
      return { error: true, message }
    }
  }, [handleChallengeLogin, account, signMessageAsync, setCookie])

  const checkAuth = useCallback(async () => {
    try {
      if (contentRef.current && contentRef.current.token) {
        const response = await handleCheckAuth(contentRef.current.token)
        if (response.error) throw new Error(response.message)
        const isValid = (Object.keys(response.data).length > 0) && response.data.address === account
        setIsCheckAuthValid(isValid)
        return { error: false, message: '', data: { isValid } }
      }
      throw new Error("No token found")
    } catch (e: any) {
      // console.error(e)
      setIsCheckAuthValid(false)
      const { message = "" } = e
      return { error: true, message, data: { isValid: false } }
    }
  }, [handleCheckAuth, account])

  // ALL IN ONE FLOW
  // const allInOne = useCallback(async () => {
  //   setStateObj({ isLoading: true })
  //   const isAuthMode = false;
  //   const _userStatus: userStatusData = await checkUser()
  //   console.log("USER STATUS: ", _userStatus)
  //   setStateObj({ isLoading: false, isLoginLoading: true })
  //   if (_userStatus.is_whitelisted || ((!_userStatus.is_whitelisted || !_userStatus.is_found) && !isAuthMode && account)) {
  //     setShowBlockMsg(false)
  //     console.log("USER STATUS: ", _userStatus.is_found)
  //     if (_userStatus.is_found === false) {
  //       const registerResult = await registerUser()
  //       if (registerResult.error === true) {
  //         if (registerResult.message.includes(errorMsg.USER_DENIED_REQ)) setStateObj({ isSigned: false })
  //         return;
  //       }
  //       setStateObj({ isSigned: true })
  //     }
  //     const checkAuthResult = await checkAuth()
  //     if (checkAuthResult.data.isValid) {
  //       setStateObj({ isLoginLoading: false })
  //       return;
  //     }
  //     const _challenge = await getChallenge()
  //     const loginResult = await challengeLogin(_challenge)
  //     if (loginResult.error === true) {
  //       if (loginResult.message.includes(errorMsg.USER_DENIED_REQ)) setStateObj({ isSigned: false })
  //       return;
  //     }
  //     setStateObj({ isSigned: true })
  //     await checkAuth()
  //   } else {
  //     setShowBlockMsg(true)
  //   }
  //   setStateObj({ isLoginLoading: false })
  // }, [checkUser, getChallenge, challengeLogin, registerUser, checkAuth, account])

  const allInTwo = useCallback(async () => {
    setStateObj({ isLoading: true })
    const _userStatus: userStatusData = await checkUser()
    // console.log("USER STATUS: ", _userStatus)
    setStateObj({ isLoading: false, isLoginLoading: true })
    if (account) {
      setShowBlockMsg(false)
      // console.log("USER STATUS: ", _userStatus.is_found)
      if (_userStatus.is_found === false) {
        const registerResult = await registerUser()
        if (registerResult.error === true) {
          if (registerResult.message.includes(errorMsg.USER_DENIED_REQ)) setStateObj({ isSigned: false })
          return;
        }
        setStateObj({ isSigned: true })
      }
      const checkAuthResult = await checkAuth()
      if (checkAuthResult.data.isValid) {
        setStateObj({ isLoginLoading: false })
        return;
      }
      const _challenge = await getChallenge()
      const loginResult = await challengeLogin(_challenge)
      if (loginResult.error === true) {
        if (loginResult.message.includes(errorMsg.USER_DENIED_REQ)) setStateObj({ isSigned: false })
        return;
      }
      setStateObj({ isSigned: true })
      await checkAuth()
    }
    setStateObj({ isLoginLoading: false })
  }, [checkUser, getChallenge, challengeLogin, registerUser, checkAuth, account])

  useEffect(() => {
    allInTwo()
  }, [allInTwo])

  useEffect(() => {
    contentRef.current = content
  }, [content])

  // To clear cookie once disconnected
  useEffect(() => {
    if (isDisconnected) {
      removeCookie("_acc", { path: '/' })
    }
  }, [isDisconnected, removeCookie])

  return (
    <BrowserRouter>
      <div style={{ height: "100%", width: "100%", position: "relative", overflowX: "hidden" }}>
        <Menu />
        <div className="master-container" style={{ background: "black", height: "calc(100% - 76px)", overflowY: "auto" }}>
          <SuspenseWithChunkError fallback={<PageLoader />}>
            {/* Remove backslash */}
            <RemoveTrailingSlash />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chat" element={<GenderMenu />} />
              <Route path="/chat/:genderParam" element={<Chat />} />
              {
                (isSignLoading || account) && (stateObj.isLoginLoading) && loginValidity() ?
                  <>
                    <Route path="/continue" element={
                      <Wrapper>
                        <ButtonWrapper>
                          <GeneralText size="0.9rem" color="var(--whiteColor)" weight="bold" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)" }} >
                            {`${intl.formatMessage({ id: "please-approve-the-signature", defaultMessage: "Please approve the signature request" })}`}
                          </GeneralText>
                          {/* <ButtonText width="fit-content" height="42px" bg="var(--yellowColor)" padding="5px 10px" onPress={() => allInTwo()}>
                            <GeneralText size="0.9rem" color="var(--blackColor)" weight="bold" transform="capitalize" css={{ fontFamily: "var(--fontFamily1)" }} >
                              {`${intl.formatMessage({ id: "continue", defaultMessage: "Continue" })}`}
                            </GeneralText>
                          </ButtonText> */}
                        </ButtonWrapper>
                      </Wrapper>
                    } />
                    <Route path="*" element={<Navigate to="/continue" replace />} />
                  </>
                  :
                  <>
                    <Route path="/staking-pool" element={
                         <Countdown
                         date={new Date(parseInt(process.env.REACT_APP_STAKING_START_DATE))}
                         renderer={({ completed }) => {
                          if (completed) {
                            return <PleaseConnectWalletWrapper intl={intl} content={content}><StakingPool /></PleaseConnectWalletWrapper>
                          } 
                            return <Navigate to="/dashboard" />
                          }
                         }/>}
                      />
                    <Route path="/claim-rewards" element={<PleaseConnectWalletWrapper intl={intl} content={content}><ClaimRewards /></PleaseConnectWalletWrapper>} />
                    <Route path="/studio" element={<PleaseConnectWalletWrapper intl={intl} content={content}>< OpentalkerContents /></PleaseConnectWalletWrapper>} />
                    <Route path="/editor" element={<PleaseConnectWalletWrapper intl={intl} content={content}><OpentalkerProvider><OpentalkerEditor /></OpentalkerProvider></PleaseConnectWalletWrapper>} />
                    <Route path="/player/:subtitle/:uuid" element={<PleaseConnectWalletWrapper intl={intl} content={content}>< OpentalkerPlayer /></PleaseConnectWalletWrapper>} />
                    <Route path="/subtitle/:uuid" element={<PleaseConnectWalletWrapper intl={intl} content={content}><OpentalkerSubtitleEditor /></PleaseConnectWalletWrapper>} />
                    <Route path="/magic-avatar" element={<PleaseConnectWalletWrapper intl={intl} content={content}><MagicAvatar /></PleaseConnectWalletWrapper>} />
                    <Route path="/home" index element={<Navigate to="/dashboard" />} />
                    <Route path="/" index element={<Navigate to="/dashboard" />} />
                    <Route path="*" element={<Navigate to="/dashboard" />} />
                    {/* <Route path="/loading" index element={<PageLoader />} /> */}
                    {/* <Route path="*" element={<Navigate to="/loading" replace />} /> */}
                  </>
              }
              {/* 404 */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
            {/* <Route component={NotFound} /> */}
          </SuspenseWithChunkError>
        </div >
      </div>

      {/* <Footer /> */}
    </BrowserRouter >
  )

}

export default React.memo(App)
