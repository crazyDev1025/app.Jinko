import React, { useRef, useState, useEffect, useContext, useReducer } from 'react'
import styled from '@emotion/styled'
import Sheet from 'react-modal-sheet';
import { useNavigate } from 'react-router-dom'
import { useIntl } from 'react-intl'
import {
  Container,
  Flex, 
  Pagination,
  Button as MButton
} from '@mantine/core'
import { useNotifications } from 'reapop'
import { useMediaQuery } from 'react-responsive'
import { Player } from '@lottiefiles/react-lottie-player'
import { usePagination } from 'ahooks'

import { UserContext } from 'contexts/UserContext';
import { useTranslation } from 'contexts/I18nContext'
import { GeneralText } from 'components/GlobalStyle'
import { EditVideoNameModal, RemoveVideoModal } from 'components/CustomModals';
import { useTokenAuth } from '../../hooks/useTokenAuth'
import { useGetVideoWithoutSubtitle } from './hooks/useHandleVideoWithoutSubtitle'
import { useGetVideoSubtitle } from './hooks/useHandleVideoSubtitle';
import useMiddlewareTranslation from '../../hooks/useMiddlewareTranslation'
import { CustomTabs, CustomTab } from './components/CustomTabs'
import { CustomTabsWithCaptions, CustomTabWithCaptions } from './components/CustomTabsWithCaptions'

const ContentBottom = styled.ul`
  position: relative;
  display:flex;
  background:transparent;
  margin:0px;
  z-index: 200;
  flex-direction: row;
  justify-content: flex-start;
  @media only screen and (min-width: 0px) and (max-width: 991px) {
    width:100%;
    height:fit-content;
    gap:10px;
    padding:0px;
  }
`

// const ButtonVideoList = styled(Button)`
// border: none;
// display:flex;
// min-height: 94px;
// min-width: 100%;
// padding: 12px!important;
// background-color: rgb(22,24,26)!important;
// background-image: linear-gradient(180deg, #01010100 0%, #fff50066 100%);
// border: 1.5px solid #E5FF00;
// position:relative;
// align-items: center;
// justify-content: center;
// align-self: flex-end;
// padding:50px;
// gap: 25px;
// width: 100%;
// >span{
//   background-image: transparent;
//   width: 100%;
//   height: 100%;
//   gap: 20px;
// }


// :disabled{
//   background: grey;
//   --border-color: grey;
// }
// }
// `

// const ButtonVideoOptions = styled(Button)`
// border: none;
// display:flex;
// min-height: 70px;
// min-width: 100%;
// height:70px;
// width:100%;
// background: transparent;
// padding: 20px!important;
// >span{
//   background-image: transparent;
//   width: 100%;
//   height: 100%;
// }
// :hover {
//     cursor: pointer;
// }
// `

const VideoPrevImg = styled.img`
height: 70px;
min-width: 115px; 
max-width: 115px;
border-radius: 4px; 
object-fit: contain;
background-color: black;
`

const ACTIONS = {
  OPEN: 'open',
  CLOSE: 'close'
}

function reducer(isSheetVisible, action) {
  switch (action.type) {
    case ACTIONS.OPEN:
      return { isVisible: true, job: action.payload }
    case ACTIONS.CLOSE:
      return { isVisible: false, job: null }
    default:
      return isSheetVisible
  }

}

const Contents: React.FC = () => {
  const intl = useIntl()
  const navigate = useNavigate()
  const { tokenValidity, content } = useTokenAuth()
  const { onGetVideoWithoutSubtitle: handleGetVideoWithoutSubtitle } = useGetVideoWithoutSubtitle()
  const { onGetVideoSubtitle: handleGetVideoSubtitle } = useGetVideoSubtitle()
  const { notify } = useNotifications()
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` })
  const { currentLanguage: { locale: currLang } } = useTranslation()
  const { onGetTranslation } = useMiddlewareTranslation()

  const {
    username, setUsername
  } = useContext(UserContext)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  // tab state and ref 
  const [activeTab, setActiveTab] = useState<number>(0)
  const handleChange = newActive => setActiveTab(newActive)


  const [withCaptionsTab, setWithCaptionsTab] = useState<number>(0)
  const handleWithCaptionsChange = newWithCaptionsTab => {
    setWithCaptionsTab(newWithCaptionsTab)
  }

  const yourVideoRef = useRef(null)

  // sheet state and ref
  const sheetRef = React.useRef<any>()
  const [isSheetVisible, setIsSheetVisibleDispatch] = useReducer(reducer, { isVisible: false, job: null })

  const [isOpenPopover, setIsOpenPopover] = useState<boolean>(false);
  const handlePopover = () => setIsOpenPopover(!isOpenPopover);

  const [isEditVideoNameModalVisible, setIsEditVideoNameModalVisibleDispatch] = useReducer(reducer, { isVisible: false, job: null })
  const [isRemoveVideoModalVisible, setIsRemoveVideoModalVisibleDispatch] = useReducer(reducer, { isVisible: false, job: null })

  const getJobsWithoutCaptions = usePagination(
    ({ current, pageSize }) => {
      return handleGetVideoWithoutSubtitle(content.token, '', current, pageSize).then((response) => {
        if (response.error || response.data.error) throw new Error(response.data.message)
        return {
          list: response.data.data.jobs,
          total: response.data.max_page,
        }
      });
    }, {
    defaultPageSize: 10, defaultCurrent: 1, ready: !!content && !!content.token && withCaptionsTab === 0,
    onBefore: () => {
      setIsLoading(true)
    }, onFinally: () => {
      setIsLoading(false)
    },
    onError: (error) => {
      notify(onGetTranslation(error.message), 'error')
    }
  },
  );

  const getJobsWithCaptions = usePagination(
    ({ current, pageSize }) => {
      return handleGetVideoSubtitle(content.token, '', current, pageSize).then((response) => {
        if (response.error || response.data.error) throw new Error(response.data.message)
        return {
          list: response.data.data.jobs,
          total: response.data.max_page,
        }
      });
    }, {
    defaultPageSize: 10, defaultCurrent: 1, ready: !!content && !!content.token && withCaptionsTab === 1,
    onBefore: () => {
      setIsLoading(true)
    }, onFinally: () => {
      setIsLoading(false)
    },
    onError: (error) => {
      notify(onGetTranslation(error.message), 'error')
    }
  },
  );

  const handleBackToDashboardOnClick = () => {
    navigate('/dashboard')
  }

  const handleCreateNewVideoOnClick = async () => {
    try {
      // const response = await handleCheckVideoLimit(content.token)
      // if (response.error || response.data.error) {
      //   throw new Error(response.data.msg)
      // }
      // if (response.data.data.remaining === 0) {
      //   throw new Error("You have reached the maximum number of videos allowed. Please upgrade your plan to continue.")
      // }
      navigate('/editor')
    } catch (e: any) {
      notify(onGetTranslation(e.message), 'error')
    }
  }

  const handleVideoButtonOptionsOnClick = (job,e) => {
    e.stopPropagation()
    setIsSheetVisibleDispatch({ type: 'open', payload: job });
  }

  const handleSheetClose = () => {
    setIsSheetVisibleDispatch({ type: 'close', payload: null })
  }

  const handlePreviewVideoOnClick = async (job) => {
    if (job.metadata.params?.input_subtitle_url) {
      navigate(`/player/1/${job.id}`)
    } else {
      navigate(`/player/0/${job.id}`)
    }
  }

  const handleDownloadVideoOnClick = async () => {
    const response = await fetch(isSheetVisible.job.result[0])
    const blob = await response.blob()
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${isSheetVisible.job.metadata.title}.mp4`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const handleEditVideoTitleOnClick = () => {
    setIsEditVideoNameModalVisibleDispatch({ type: 'open', payload: isSheetVisible.job })
    setIsSheetVisibleDispatch({ type: 'close', payload: null })
  }

  const handleRemoveVideoOnClick = () => {
    setIsRemoveVideoModalVisibleDispatch({ type: 'open', payload: isSheetVisible.job })
    setIsSheetVisibleDispatch({ type: 'close', payload: null })
  }

  const handleEditSubtitleOnClick = () => {
    navigate(`/subtitle/${isSheetVisible.job.id}`)
  }

  const closeEditVideoNameModalButton = () => {
    setIsEditVideoNameModalVisibleDispatch({ type: 'close', payload: null })
  }

  const saveEditVideoNameModalButton = async () => {
    try {
      if (withCaptionsTab === 0)
        getJobsWithoutCaptions.run({ current: getJobsWithoutCaptions.pagination.current, pageSize: getJobsWithoutCaptions.pagination.pageSize })      // getJobsWithoutCaptions(content.token, page.currentPage)
      else if (withCaptionsTab === 1)
        getJobsWithCaptions.run({ current: getJobsWithCaptions.pagination.current, pageSize: getJobsWithCaptions.pagination.pageSize })      // getJobsWithoutCaptions(content.token, page.currentPage)
      setIsEditVideoNameModalVisibleDispatch({ type: 'close', payload: null })
    } catch (e: any) {
      notify(onGetTranslation(e.message), 'error')
      setIsEditVideoNameModalVisibleDispatch({ type: 'close', payload: null })
    }

  }

  const handleRefreshJobList = async () => {
    try {
      yourVideoRef.current.play()
      if (withCaptionsTab === 0)
        getJobsWithoutCaptions.run({ current: getJobsWithoutCaptions.pagination.current, pageSize: getJobsWithoutCaptions.pagination.pageSize })      // getJobsWithoutCaptions(content.token, page.currentPage)
      else if (withCaptionsTab === 1)
        getJobsWithCaptions.run({ current: getJobsWithCaptions.pagination.current, pageSize: getJobsWithCaptions.pagination.pageSize })      // getJobsWithoutCaptions(content.token, page.currentPage)
      // getJobsWithCaptions(content.token, page.currentPage)
    } catch (e: any) {
      notify(onGetTranslation(e.message), 'error')
    }
  }

  const closeRemoveVideoNameModalButton = () => {
    setIsRemoveVideoModalVisibleDispatch({ type: 'close', payload: null })
  }

  const saveRemoveVideoNameModalButton = async () => {
    try {
      if (withCaptionsTab === 0) {
        getJobsWithoutCaptions.run({ current: getJobsWithoutCaptions.pagination.current, pageSize: getJobsWithoutCaptions.pagination.pageSize })      // getJobsWithoutCaptions(content.token, page.currentPage)
      } else if (withCaptionsTab === 1) {
        getJobsWithCaptions.run({ current: getJobsWithCaptions.pagination.current, pageSize: getJobsWithCaptions.pagination.pageSize })      // getJobsWithoutCaptions(content.token, page.currentPage)
      }
      setIsRemoveVideoModalVisibleDispatch({ type: 'close', payload: null })
    } catch (e: any) {
      notify(onGetTranslation(e.message), 'error')
      setIsRemoveVideoModalVisibleDispatch({ type: 'close', payload: null })
    }

  }

  useEffect(() => {
    if (tokenValidity === false) {
      navigate('/dashboard')
    }
  }, [tokenValidity, navigate, content])

  return (
    <>
      <EditVideoNameModal show={isEditVideoNameModalVisible.isVisible} onClose={closeEditVideoNameModalButton} onSave={saveEditVideoNameModalButton} jobInfo={isEditVideoNameModalVisible.job} />
      <RemoveVideoModal show={isRemoveVideoModalVisible.isVisible} onClose={closeRemoveVideoNameModalButton} onSave={saveRemoveVideoNameModalButton} jobInfo={isRemoveVideoModalVisible.job} />
      <div id="opentalker-container" style={{ height: "100%", display: "contents" }}>
        <Container style={{ paddingBottom: "14px", overflow: "hidden", height: "100%" }}>
          <Flex direction="column" gap="20px" style={{ height: "100%", overflow: "hidden" }}>
            <Flex justify="space-between" style={{ width: "100%" }}>
              <MButton  variant='iconWithTransparentBg' onClick={handleBackToDashboardOnClick}>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M25.7475 0H8.25254C3.69479 0 0 3.69479 0 8.25254V25.7475C0 30.3052 3.69479 34 8.25254 34H25.7475C30.3052 34 34 30.3052 34 25.7475V8.25254C34 3.69479 30.3052 0 25.7475 0Z" fill="url(#paint0_linear_4322_13710)" />
                  <path d="M11.375 16.375H23.875C24.0408 16.375 24.1997 16.4408 24.3169 16.5581C24.4342 16.6753 24.5 16.8342 24.5 17C24.5 17.1658 24.4342 17.3247 24.3169 17.4419C24.1997 17.5592 24.0408 17.625 23.875 17.625H11.375C11.2092 17.625 11.0503 17.5592 10.9331 17.4419C10.8158 17.3247 10.75 17.1658 10.75 17C10.75 16.8342 10.8158 16.6753 10.9331 16.5581C11.0503 16.4408 11.2092 16.375 11.375 16.375Z" fill="black" stroke="black" strokeWidth="0.5" />
                  <path d="M11.6339 16.9998L16.8176 22.1823C16.935 22.2997 17.0009 22.4588 17.0009 22.6248C17.0009 22.7908 16.935 22.95 16.8176 23.0673C16.7003 23.1847 16.5411 23.2506 16.3751 23.2506C16.2092 23.2506 16.05 23.1847 15.9326 23.0673L10.3076 17.4423C10.2494 17.3843 10.2033 17.3153 10.1718 17.2394C10.1402 17.1634 10.124 17.082 10.124 16.9998C10.124 16.9176 10.1402 16.8362 10.1718 16.7603C10.2033 16.6843 10.2494 16.6154 10.3076 16.5573L15.9326 10.9323C16.05 10.815 16.2092 10.749 16.3751 10.749C16.5411 10.749 16.7003 10.815 16.8176 10.9323C16.935 11.0497 17.0009 11.2088 17.0009 11.3748C17.0009 11.5408 16.935 11.7 16.8176 11.8173L11.6339 16.9998Z" fill="black" stroke="black" strokeWidth="0.5" />
                  <defs>
                    <linearGradient id="paint0_linear_4322_13710" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E5FF00" />
                      <stop offset="0.546875" stopColor="#E5FF00" />
                      <stop offset="1" stopColor="#E5FF00" />
                      <stop offset="1" stopColor="#E5FF00" />
                    </linearGradient>
                  </defs>
                </svg>
              </MButton>
            </Flex>
            <Flex style={{ height: "120px" }} p="5px">
              <MButton variant='studioVideoList' onClick={() => {
                handleCreateNewVideoOnClick()
              }} styles={()=>({
                root:{
                  padding: "25px",
                },
                label:{
                  justifyContent: "center",
                }
              })}>
                <Flex gap="20px" >
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_4463_12743)">
                      <circle cx="30" cy="30" r="30" fill="#E5FF00" />
                      <path d="M22.9258 30.0002C22.9258 29.7184 23.0377 29.4481 23.237 29.2489C23.4362 29.0496 23.7065 28.9377 23.9883 28.9377H28.9367V23.9893C28.9367 23.7075 29.0486 23.4372 29.2479 23.238C29.4472 23.0387 29.7174 22.9268 29.9992 22.9268C30.281 22.9268 30.5512 23.0387 30.7505 23.238C30.9498 23.4372 31.0617 23.7075 31.0617 23.9893V28.9377H36.0101C36.2919 28.9377 36.5622 29.0496 36.7614 29.2489C36.9607 29.4481 37.0726 29.7184 37.0726 30.0002C37.0726 30.282 36.9607 30.5522 36.7614 30.7515C36.5622 30.9507 36.2919 31.0627 36.0101 31.0627H31.0617V36.0111C31.0617 36.2929 30.9498 36.5631 30.7505 36.7624C30.5512 36.9616 30.281 37.0736 29.9992 37.0736C29.7174 37.0736 29.4472 36.9616 29.2479 36.7624C29.0486 36.5631 28.9367 36.2929 28.9367 36.0111V31.0627H23.9883C23.7065 31.0627 23.4362 30.9507 23.237 30.7515C23.0377 30.5522 22.9258 30.282 22.9258 30.0002Z" fill="black" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M23.3655 18.3393C27.7748 17.8505 32.2247 17.8505 36.634 18.3393C39.2222 18.6283 41.3118 20.6668 41.615 23.2693C42.1392 27.7417 42.1392 32.2594 41.615 36.7318C41.3104 39.3343 39.2208 41.3714 36.634 41.6618C32.2247 42.1507 27.7748 42.1507 23.3655 41.6618C20.7772 41.3714 18.6877 39.3343 18.3845 36.7318C17.8614 32.2596 17.8614 27.7415 18.3845 23.2693C18.6877 20.6668 20.7787 18.6283 23.3655 18.3393ZM36.3988 20.4501C32.1458 19.9787 27.8537 19.9787 23.6007 20.4501C22.8133 20.5374 22.0784 20.8877 21.5147 21.4442C20.951 22.0007 20.5914 22.731 20.4939 23.5172C19.9901 27.8252 19.9901 32.1773 20.4939 36.4853C20.5917 37.2712 20.9514 38.0012 21.5151 38.5575C22.0788 39.1137 22.8135 39.4637 23.6007 39.551C27.8181 40.0213 32.1814 40.0213 36.3988 39.551C37.1857 39.4634 37.9201 39.1133 38.4835 38.5571C39.0469 38.0008 39.4065 37.271 39.5042 36.4853C40.008 32.1773 40.008 27.8252 39.5042 23.5172C39.4062 22.7318 39.0465 22.0023 38.4831 21.4463C37.9197 20.8904 37.1855 20.5404 36.3988 20.4529V20.4501Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_4463_12743">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                  <Flex direction="column" align="start" justify="center" gap="4px">
                    <GeneralText size="clamp(1.3rem,2vw,1.4rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily3)", whiteSpace: "nowrap", lineHeight: "clamp(1rem,2vw,1rem)" }} >
                      {intl.formatMessage({ id: "generate-reel", defaultMessage: "Generate Reel" })}
                    </GeneralText>
                    <GeneralText size="clamp(1rem,2vw,1rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily3)", whiteSpace: "nowrap", lineHeight: "clamp(1rem,2vw,1rem)" }} >
                      {
                        isMobile ?
                          intl.formatMessage({ id: "tap-to-create-your-video", defaultMessage: "Tap to create your video" })
                          :
                          intl.formatMessage({ id: "tap-to-create-your-personalized", defaultMessage: "Tap to create your personalized AI-powered video" })}
                    </GeneralText>
                  </Flex>
                </Flex>
              </MButton>
            </Flex>
            <Flex direction="column" gap="5px" style={{ height: "100%", overflow: "hidden" }}>
              <ContentBottom>
                <CustomTabs active={activeTab} onChange={handleChange}>
                  <>
                    <Flex gap="5px" align="center">
                      <GeneralText size="clamp(1rem,2vw,1.125rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                        {`${intl.formatMessage({ id: "your-video", defaultMessage: "Your Video" })}`}
                      </GeneralText>
                      <MButton variant='iconWithTransparentBg' onClick={() => { handleRefreshJobList() }}>
                        <Player
                          ref={yourVideoRef}
                          src='../../lotties/your-video-loader.json'
                          className="player"
                          style={{ height: '24px', width: '24px' }}
                        />
                      </MButton>
                    </Flex>
                  </>
                  {/* <>
                      <GeneralText size="clamp(1rem,2vw,1.125rem)" color="black" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize", lineHeight: "clamp(0.9rem,2vw,0.938rem)" }} >
                        {`${intl.formatMessage({ id: "my-video", defaultMessage: "My Video" })}`}
                      </GeneralText>
                    </> */}
                </CustomTabs>
              </ContentBottom>
              <CustomTab active={activeTab}>
                <Flex direction="column" gap="10px" style={{ height: "100%", overflow: "hidden" }}>
                  <Flex style={{ width: "100%", padding: "0px 10px" }}>
                    <CustomTabsWithCaptions active={withCaptionsTab} onChange={handleWithCaptionsChange}>
                      <>
                        <Flex gap="5px" align="center">
                          <GeneralText size="clamp(0.85rem,2vw,0.875rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                            {`${intl.formatMessage({ id: "without-captions", defaultMessage: "Without Captions" })}`}
                          </GeneralText>
                        </Flex>
                      </>
                      <>
                        <Flex gap="5px">
                          <GeneralText size="clamp(0.85rem,2vw,0.875rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                            {`${intl.formatMessage({ id: "with-captions", defaultMessage: "With Captions" })}`}
                          </GeneralText>
                        </Flex>
                      </>
                    </CustomTabsWithCaptions>
                  </Flex>
                  <CustomTabWithCaptions active={withCaptionsTab}>
                    <Flex style={{ height: "100%", width: "100%", overflowY: "auto" }}>
                      {
                        isLoading ?
                          <Flex gap="5px" direction="column" align="center" style={{ height: "100%", width: "100%", justifyContent: "center" }}>
                            <Player
                              src='./lotties/loading-icon.json'
                              className="player"
                              loop
                              autoplay
                              style={{ height: '250px', width: '250px' }}
                            />
                          </Flex>
                          :
                          <Flex direction="column" gap="5px" style={{ height: "100%", width: "100%", overflowY: "hidden", padding: "5px 10px" }}>
                            {
                              getJobsWithoutCaptions.data?.list.length > 0 ?
                                <>
                                  <Flex direction="column" gap="5px" style={{ width: "100%", height: "100%", overflowY: "scroll", padding: "5px" }}>
                                    {getJobsWithoutCaptions.data.list.map((job, index) => {
                                      // if (job.metadata.is_visible === false)
                                      //   return null
                                      return <MButton variant='studioVideoList' key={job.id} role="button" onClick={() => { handlePreviewVideoOnClick(job) }} disabled={job.is_failed || job.status === "pending"}>
                                        <VideoPrevImg src={job.metadata.params?.input_image} alt={`video ${index}`} />
                                        <Flex direction="row" justify="space-between" style={{ width: "100%", overflow: "hidden" }}>
                                          <Flex direction="column" gap="5px" style={{ textAlign: "start", textAlignLast: "start", overflow: "hidden" }}>
                                            <Flex gap="5px" style={{ alignItems: "center" }}>
                                              <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize", lineHeight: "clamp(1rem,2vw,1.125rem)", overflow: "hidden", textOverflow: "ellipsis", }} >
                                                {job.metadata.title || `${intl.formatMessage({ id: "video", defaultMessage: "Video" })} ${index + 1}`}
                                              </GeneralText>
                                              {
                                                job.is_failed ?
                                                  <GeneralText size="clamp(0.75rem,2vw,0.8rem)" color="red" weight="bold" css={{ border: "2px solid red", borderRadius: "5px", padding: "3px", fontFamily: "var(--fontFamily3)", textTransform: "uppercase", lineHeight: "clamp(0.75rem,2vw,0.8rem)" }} >
                                                    {`${intl.formatMessage({ id: "failed", defaultMessage: "Failed" })}`}
                                                  </GeneralText>
                                                  : ""

                                              }
                                              {
                                                job.status === "pending" ?
                                                  <GeneralText size="clamp(0.75rem,2vw,0.8rem)" color="#ffffff" weight="bold" css={{ border: "2px solid #ffffff", borderRadius: "5px", padding: "3px", fontFamily: "var(--fontFamily3)", textTransform: "uppercase", lineHeight: "clamp(0.75rem,2vw,0.8rem)" }} >
                                                    {`${intl.formatMessage({ id: "processing", defaultMessage: "Processing" })}`}
                                                  </GeneralText>
                                                  : ""

                                              }

                                            </Flex>
                                            <GeneralText size="clamp(0.75rem,2vw,0.8rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize", lineHeight: "clamp(0.75rem,2vw,0.8rem)" }} >
                                              {new Date(parseInt(job.created_at) * 1000).toLocaleDateString(currLang, { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}
                                            </GeneralText>
                                          </Flex>
                                          <MButton variant='iconWithTransparentBg' disabled={job.is_failed} onClick={(e) => handleVideoButtonOptionsOnClick(job,e)}>
                                            <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M2 2.25C2.41421 2.25 2.75 1.91421 2.75 1.5C2.75 1.08579 2.41421 0.75 2 0.75C1.58579 0.75 1.25 1.08579 1.25 1.5C1.25 1.91421 1.58579 2.25 2 2.25Z" stroke="#E5FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              <path d="M2 7.75C2.41421 7.75 2.75 7.41421 2.75 7C2.75 6.58579 2.41421 6.25 2 6.25C1.58579 6.25 1.25 6.58579 1.25 7C1.25 7.41421 1.58579 7.75 2 7.75Z" stroke="#E5FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              <path d="M2 13.25C2.41421 13.25 2.75 12.9142 2.75 12.5C2.75 12.0858 2.41421 11.75 2 11.75C1.58579 11.75 1.25 12.0858 1.25 12.5C1.25 12.9142 1.58579 13.25 2 13.25Z" stroke="#E5FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                          </MButton>
                                        </Flex>
                                      </MButton>
                                    })}
                                  </Flex>
                                  <Pagination position="center" total={getJobsWithoutCaptions.pagination.total} value={getJobsWithoutCaptions.pagination.current} onChange={(p) => { getJobsWithoutCaptions.run({ current: p, pageSize: getJobsWithoutCaptions.pagination.pageSize }) }} styles={(theme) => ({
                                    control: {
                                      '&[data-active]': {
                                        backgroundImage: theme.fn.gradient({ from: '#E5FF00', to: '#E5FF00' }),
                                        color: '#000',
                                        border: 0,
                                      },
                                      fontFamily: "var(--fontFamily1)",
                                      fontWeight: "bold",
                                    },
                                  })} />
                                </>
                                :
                                <Flex direction="column" align="center" style={{ height: "100%", width: "100%", justifyContent: "center" }}>
                                  <img alt="not-found" src="/images/opentalker/not-found.svg" style={{ width: "150px", height: "150px" }} />
                                  <GeneralText size="clamp(1.5rem,2vw,1.6rem)" color="#777E90" weight="bold" css={{ fontFamily: "var(--fontFamily3)", fontStyle: "normal", lineHeight: "clamp(1.5rem,2vw,1.6rem)" }} >
                                    {`${intl.formatMessage({ id: "oops-its-empty-here", defaultMessage: "Oops, it's empty here!" })}`}
                                  </GeneralText>
                                </Flex>
                            }
                          </Flex>
                      }
                    </Flex>
                    <Flex style={{ height: "100%", width: "100%", overflowY: "auto" }}>
                      {
                        isLoading ?
                          <Flex direction="column" align="center" style={{ height: "100%", width: "100%", justifyContent: "center" }}>
                            <Player
                              src='./lotties/loading-icon.json'
                              className="player"
                              loop
                              autoplay
                              style={{ height: '250px', width: '250px' }}
                            />
                          </Flex>
                          :
                          <Flex direction="column" gap="5px" style={{ width: "100%", height: "100%", overflowY: "scroll", padding: "0px 5px 0px 0px" }}>
                            {
                              getJobsWithCaptions.data?.list.length > 0 ?
                                <>
                                  <Flex direction="column" gap="5px" style={{ width: "100%", height: "100%", overflowY: "scroll", padding: "5px" }}>
                                    {getJobsWithCaptions.data.list.map((job, index) => {
                                      // if (job.metadata.is_visible === false)
                                      //   return null
                                      return <MButton variant='studioVideoList' role="button" onClick={() => { handlePreviewVideoOnClick(job) }} disabled={job.is_failed}>
                                        <VideoPrevImg src={job.metadata.studio_params.params.input_image} alt={`video ${index}`} />
                                        <Flex direction="row" justify="space-between" style={{ width: "100%", overflow: "hidden" }}>
                                          <Flex direction="column" gap="5px" style={{ textAlign: "start", textAlignLast: "start", overflow: "hidden" }}>
                                            <Flex gap="5px" style={{ alignItems: "center" }}>
                                              <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize", lineHeight: "clamp(1rem,2vw,1.125rem)", overflow: "hidden", textOverflow: "ellipsis", }} >
                                                {job.metadata.title || `${intl.formatMessage({ id: "video", defaultMessage: "Video" })} ${index + 1}`}
                                              </GeneralText>
                                              {
                                                job.is_failed ?
                                                  <GeneralText size="clamp(0.75rem,2vw,0.8rem)" color="red" weight="bold" css={{ border: "2px solid red", borderRadius: "5px", padding: "3px", fontFamily: "var(--fontFamily3)", textTransform: "uppercase", lineHeight: "clamp(0.75rem,2vw,0.8rem)" }} >
                                                    {`${intl.formatMessage({ id: "failed", defaultMessage: "Failed" })}`}
                                                  </GeneralText>
                                                  : ""
                                              }
                                            </Flex>
                                            <GeneralText size="clamp(0.75rem,2vw,0.8rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize", lineHeight: "clamp(0.75rem,2vw,0.8rem)" }} >
                                              {new Date(parseInt(job.created_at) * 1000).toLocaleDateString(currLang, { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' })}
                                            </GeneralText>
                                          </Flex>
                                          <MButton variant='iconWithTransparentBg'disabled={job.is_failed} onClick={(e) => handleVideoButtonOptionsOnClick(job,e)}>
                                            <svg width="4" height="14" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M2 2.25C2.41421 2.25 2.75 1.91421 2.75 1.5C2.75 1.08579 2.41421 0.75 2 0.75C1.58579 0.75 1.25 1.08579 1.25 1.5C1.25 1.91421 1.58579 2.25 2 2.25Z" stroke="#E5FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              <path d="M2 7.75C2.41421 7.75 2.75 7.41421 2.75 7C2.75 6.58579 2.41421 6.25 2 6.25C1.58579 6.25 1.25 6.58579 1.25 7C1.25 7.41421 1.58579 7.75 2 7.75Z" stroke="#E5FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                              <path d="M2 13.25C2.41421 13.25 2.75 12.9142 2.75 12.5C2.75 12.0858 2.41421 11.75 2 11.75C1.58579 11.75 1.25 12.0858 1.25 12.5C1.25 12.9142 1.58579 13.25 2 13.25Z" stroke="#E5FF00" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                          </MButton>
                                        </Flex>
                                      </MButton>
                                    })}
                                  </Flex>
                                  <Pagination position="center" total={getJobsWithCaptions.pagination.total} value={getJobsWithCaptions.pagination.current} onChange={(p) => { getJobsWithCaptions.run({ current: p, pageSize: getJobsWithCaptions.pagination.pageSize }) }} styles={(theme) => ({
                                    control: {
                                      '&[data-active]': {
                                        backgroundImage: theme.fn.gradient({ from: '#E5FF00', to: '#E5FF00' }),
                                        color: '#000',
                                        border: 0,
                                      },
                                      fontFamily: "var(--fontFamily1)",
                                      fontWeight: "bold",

                                    },
                                  })} />
                                </>
                                :
                                <Flex direction="column" align="center" style={{ height: "100%", width: "100%", justifyContent: "center" }}>
                                  <img alt="not-found" src="/images/opentalker/not-found.svg" style={{ width: "150px", height: "150px" }} />
                                  <GeneralText size="clamp(1.5rem,2vw,1.6rem)" color="#777E90" weight="bold" css={{ fontFamily: "var(--fontFamily3)", fontStyle: "normal", lineHeight: "clamp(1.5rem,2vw,1.6rem)" }} >
                                    {`${intl.formatMessage({ id: "oops-its-empty-here", defaultMessage: "Oops, it's empty here!" })}`}
                                  </GeneralText>
                                </Flex>
                            }
                          </Flex>
                      }
                    </Flex>

                  </CustomTabWithCaptions>
                </Flex>
              </CustomTab>
            </Flex>
          </Flex>
        </Container>
        <Sheet isOpen={isSheetVisible.isVisible} onClose={handleSheetClose}
          ref={sheetRef}
          detent="content-height"
        >
          <Sheet.Container style={{ background: "#000000", borderTop: "2px solid #777E90", borderRight: "2px solid #777E90", borderLeft: "2px solid #777E90" }}>
            <Sheet.Header />
            <Sheet.Content>
              <Flex direction="column" >
                <MButton variant='studioPopUp' 
                leftIcon={
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 22.5C21.9037 22.5 27.5 15 27.5 15C27.5 15 21.9037 7.5 15 7.5C8.09625 7.5 2.5 15 2.5 15C2.5 15 8.09625 22.5 15 22.5Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
                        <path d="M15 18.125C15.8288 18.125 16.6237 17.7958 17.2097 17.2097C17.7958 16.6237 18.125 15.8288 18.125 15C18.125 14.1712 17.7958 13.3763 17.2097 12.7903C16.6237 12.2042 15.8288 11.875 15 11.875C14.1712 11.875 13.3763 12.2042 12.7903 12.7903C12.2042 13.3763 11.875 14.1712 11.875 15C11.875 15.8288 12.2042 16.6237 12.7903 17.2097C13.3763 17.7958 14.1712 18.125 15 18.125Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
                      </svg>
                }
                onClick={() => handlePreviewVideoOnClick(isSheetVisible.job)}
                >
                  {/* <Flex align="center" gap="10px" style={{ width: "100%" }}> */}
                    {/* <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15 22.5C21.9037 22.5 27.5 15 27.5 15C27.5 15 21.9037 7.5 15 7.5C8.09625 7.5 2.5 15 2.5 15C2.5 15 8.09625 22.5 15 22.5Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M15 18.125C15.8288 18.125 16.6237 17.7958 17.2097 17.2097C17.7958 16.6237 18.125 15.8288 18.125 15C18.125 14.1712 17.7958 13.3763 17.2097 12.7903C16.6237 12.2042 15.8288 11.875 15 11.875C14.1712 11.875 13.3763 12.2042 12.7903 12.7903C12.2042 13.3763 11.875 14.1712 11.875 15C11.875 15.8288 12.2042 16.6237 12.7903 17.2097C13.3763 17.7958 14.1712 18.125 15 18.125Z" stroke="#ffffff" strokeWidth="2" strokeLinejoin="round" />
                    </svg> */}
                    {/* <GeneralText size="clamp(0.8rem,2vw,0.9rem)" color="#ButtonVideoOptions" weight="bold" css={{ fontFamily: "var(--fontFamily3)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", lineHeight: "clamp(0.8rem,2vw,0.9rem)", textAlign: "left", textAlignLast: "left" }} > */}
                      {`${intl.formatMessage({ id: "preview", defaultMessage: "Preview" })}`}
                    {/* </GeneralText> */}
                  {/* </Flex> */}
                </MButton>
                <MButton variant='studioPopUp' 
                leftIcon={
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.8495 25.9996H7.18816C6.75157 25.9818 6.32277 25.8782 5.92632 25.6948C5.52986 25.5113 5.17351 25.2516 4.87767 24.9305C4.58183 24.6094 4.3523 24.2332 4.20221 23.8234C4.05213 23.4136 3.98443 22.9783 4.003 22.5424V18.771C4.003 18.5209 4.10248 18.2811 4.27956 18.1043C4.45663 17.9275 4.6968 17.8281 4.94722 17.8281C5.19764 17.8281 5.4378 17.9275 5.61488 18.1043C5.79195 18.2811 5.89143 18.5209 5.89143 18.771V22.5424C5.85893 22.9157 5.97156 23.2871 6.20596 23.5797C6.44036 23.8723 6.77855 24.0636 7.15039 24.1138H22.8495C23.2214 24.0636 23.5596 23.8723 23.794 23.5797C24.0284 23.2871 24.141 22.9157 24.1085 22.5424V18.771C24.1085 18.5209 24.208 18.2811 24.385 18.1043C24.5621 17.9275 24.8023 17.8281 25.0527 17.8281C25.3031 17.8281 25.5433 17.9275 25.7204 18.1043C25.8974 18.2811 25.9969 18.5209 25.9969 18.771V22.5424C26.0346 23.4166 25.7251 24.2703 25.1357 24.9177C24.5462 25.5652 23.7246 25.954 22.8495 25.9996Z" fill="#ffffff" />
                  <path d="M15.0185 19.715C14.8944 19.7156 14.7715 19.6914 14.6569 19.6439C14.5423 19.5964 14.4384 19.5266 14.3512 19.4384L9.31543 14.4098C9.14864 14.2311 9.05784 13.9947 9.06216 13.7504C9.06647 13.5062 9.16557 13.2731 9.33857 13.1004C9.51156 12.9276 9.74495 12.8287 9.98957 12.8244C10.2342 12.8201 10.4709 12.9107 10.6499 13.0773L15.0185 17.4396L19.3871 13.0773C19.566 12.9107 19.8028 12.8201 20.0474 12.8244C20.292 12.8287 20.5254 12.9276 20.6984 13.1004C20.8714 13.2731 20.9705 13.5062 20.9748 13.7504C20.9791 13.9947 20.8883 14.2311 20.7215 14.4098L15.6857 19.4384C15.5986 19.5266 15.4946 19.5964 15.3801 19.6439C15.2655 19.6914 15.1425 19.7156 15.0185 19.715Z" fill="#ffffff" />
                  <path d="M15.0194 19.7143C14.77 19.711 14.5317 19.6106 14.3554 19.4345C14.179 19.2584 14.0785 19.0205 14.0752 18.7714V4.94286C14.0752 4.6928 14.1747 4.45298 14.3517 4.27616C14.5288 4.09934 14.769 4 15.0194 4C15.2698 4 15.51 4.09934 15.6871 4.27616C15.8641 4.45298 15.9636 4.6928 15.9636 4.94286V18.7714C15.9604 19.0205 15.8598 19.2584 15.6835 19.4345C15.5071 19.6106 15.2688 19.711 15.0194 19.7143Z" fill="#ffffff" />
                </svg>
                } onClick={handleDownloadVideoOnClick}>
              {`${intl.formatMessage({ id: "download", defaultMessage: "Download" })}`}
                </MButton>

                <MButton variant='studioPopUp'
                leftIcon={
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.28572 23.8824C4.65714 23.8824 4.11886 23.6633 3.67086 23.2252C3.22286 22.7871 2.99924 22.261 3 21.6471V8.2353C3 7.62059 3.224 7.09418 3.672 6.65606C4.12 6.21794 4.65791 5.99926 5.28572 6L7.57143 10.4706H11L8.71429 6H11L13.2857 10.4706H16.7143L14.4286 6H16.7143L19 10.4706H22.4286L20.1429 6H23.5714C24.2 6 24.7383 6.21906 25.1863 6.65718C25.6343 7.0953 25.8579 7.62134 25.8571 8.2353V12.7059H5.28572V21.6471H14.4286V23.8824H5.28572ZM16.7143 25V21.5632L23.0286 15.4162C23.2 15.2485 23.3905 15.1275 23.6 15.0529C23.8095 14.9784 24.019 14.9412 24.2286 14.9412C24.4571 14.9412 24.6762 14.9833 24.8857 15.0675C25.0952 15.1517 25.2857 15.2772 25.4571 15.4441L26.5143 16.4779C26.6667 16.6456 26.7859 16.8319 26.872 17.0368C26.9581 17.2417 27.0008 17.4466 27 17.6515C27 17.8564 26.9619 18.0661 26.8857 18.2807C26.8095 18.4953 26.6857 18.686 26.5143 18.8529L20.2286 25H16.7143ZM18.4286 23.3235H19.5143L22.9714 19.9147L22.4571 19.3838L21.9143 18.8809L18.4286 22.2618V23.3235ZM22.4571 19.3838L21.9143 18.8809L22.9714 19.9147L22.4571 19.3838Z" fill="#ffffff" />
                </svg>
                }
                onClick={handleEditVideoTitleOnClick}>
             {`${intl.formatMessage({ id: "update-title", defaultMessage: "Update Title" })}`}
                </MButton>

                
                <MButton variant='studioPopUp' 
                leftIcon={
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M11.7857 8.125V6.0625H18.2143V8.125H11.7857ZM9.64286 8.125V5.375C9.64286 5.01033 9.79337 4.66059 10.0613 4.40273C10.3292 4.14487 10.6925 4 11.0714 4H18.9286C19.3075 4 19.6708 4.14487 19.9387 4.40273C20.2066 4.66059 20.3571 5.01033 20.3571 5.375V8.125H23.9286C24.2127 8.125 24.4853 8.23365 24.6862 8.42705C24.8871 8.62044 25 8.88275 25 9.15625C25 9.42975 24.8871 9.69206 24.6862 9.88545C24.4853 10.0789 24.2127 10.1875 23.9286 10.1875H23.4071L22.3457 23.4604C22.2906 24.1512 21.9666 24.7966 21.4385 25.2675C20.9104 25.7383 20.217 26 19.4971 26H10.5029C9.78297 26 9.08963 25.7383 8.56149 25.2675C8.03336 24.7966 7.70936 24.1512 7.65429 23.4604L6.59286 10.1875H6.07143C5.78727 10.1875 5.51475 10.0789 5.31381 9.88545C5.11288 9.69206 5 9.42975 5 9.15625C5 8.88275 5.11288 8.62044 5.31381 8.42705C5.51475 8.23365 5.78727 8.125 6.07143 8.125H9.64286ZM8.74286 10.1875H21.2571L20.2086 23.3022C20.1949 23.4749 20.114 23.6362 19.9821 23.754C19.8503 23.8718 19.677 23.9373 19.4971 23.9375H10.5029C10.323 23.9373 10.1497 23.8718 10.0179 23.754C9.88596 23.6362 9.8051 23.4749 9.79143 23.3022L8.74286 10.1875Z" fill="#ffffff" />
                      <path d="M13.0597 12.4801C12.901 12.3328 12.6858 12.25 12.4614 12.25C12.237 12.25 12.0218 12.3328 11.8631 12.4801C11.7044 12.6275 11.6152 12.8273 11.6152 13.0357V20.8929C11.6152 21.1012 11.7044 21.3011 11.8631 21.4484C12.0218 21.5958 12.237 21.6786 12.4614 21.6786C12.6858 21.6786 12.901 21.5958 13.0597 21.4484C13.2184 21.3011 13.3075 21.1012 13.3075 20.8929V13.0357C13.3075 12.8273 13.2184 12.6275 13.0597 12.4801Z" fill="#ffffff" />
                      <path d="M18.1366 12.4801C18.2953 12.6275 18.3845 12.8273 18.3845 13.0357V20.8929C18.3845 21.1012 18.2953 21.3011 18.1366 21.4484C17.9779 21.5958 17.7627 21.6786 17.5383 21.6786C17.3139 21.6786 17.0987 21.5958 16.94 21.4484C16.7813 21.3011 16.6922 21.1012 16.6922 20.8929V13.0357C16.6922 12.8273 16.7813 12.6275 16.94 12.4801C17.0987 12.3328 17.3139 12.25 17.5383 12.25C17.7627 12.25 17.9779 12.3328 18.1366 12.4801Z" fill="#ffffff" />
                    </svg>
                }
                onClick={handleRemoveVideoOnClick}>
               {`${intl.formatMessage({ id: "remove-video", defaultMessage: "Remove Video" })}`}

                </MButton>
                {withCaptionsTab === 0 &&
                
                <MButton variant='studioPopUp'
                leftIcon={
                      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 10.8H17.3462V13.2H4V10.8ZM4 8.4H17.3462V6H4V8.4ZM4 18H12.493V15.6H4V18ZM22.2115 14.244L23.0729 13.392C23.1852 13.2808 23.3185 13.1925 23.4653 13.1323C23.6121 13.0721 23.7694 13.0411 23.9283 13.0411C24.0872 13.0411 24.2445 13.0721 24.3913 13.1323C24.5381 13.1925 24.6714 13.2808 24.7837 13.392L25.6451 14.244C26.1183 14.712 26.1183 15.468 25.6451 15.936L24.7837 16.788L22.2115 14.244ZM21.3501 15.096L14.9196 21.456V24H17.4918L23.9222 17.64L21.3501 15.096Z" fill="#ffffff" />
                      </svg>
                }
                onClick={handleEditSubtitleOnClick}>
                {`${intl.formatMessage({ id: "add-captions", defaultMessage: "Add Captions" })}`}
                  </MButton>
                }

              </Flex>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onTap={handleSheetClose} />
        </Sheet>
      </div >
    </>
  )
}

export default Contents