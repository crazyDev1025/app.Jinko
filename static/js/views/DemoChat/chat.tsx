import React, { useCallback, useEffect, useState, useRef, createRef, useMemo, useReducer } from 'react'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'
import { useNotifications } from 'reapop'
import { Container, Flex } from '@mantine/core'
import { Button, Dropdown as DropdownNext, Modal, Loading, Link } from '@nextui-org/react'
import { MainContainer } from "@chatscope/chat-ui-kit-react/dist/es/MainContainer"
import { ChatContainer } from "@chatscope/chat-ui-kit-react/dist/es/ChatContainer"
import MessageList from "@chatscope/chat-ui-kit-react/dist/es/MessageList"
import { Message } from "@chatscope/chat-ui-kit-react/dist/es/Message"
import { Avatar as ProfilePic } from "@chatscope/chat-ui-kit-react/dist/es/Avatar"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import { format } from "timeago.js"
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import { useForm } from 'react-hook-form'
import { useFormik } from 'formik'
import { Engine, Scene } from "react-babylonjs"
import { Engine as EngineBabylon } from "@babylonjs/core/Engines/engine"
import { Vector3 } from "@babylonjs/core/Maths/math.vector"
import { Color4 } from "@babylonjs/core/Maths/math.color"
import { Animation as AnimationBabylon } from "@babylonjs/core/Animations/animation"
import { AssetsManager } from "@babylonjs/core/Misc/assetsManager"
import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera"
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight"
import { DefaultLoadingScreen } from "@babylonjs/core/Loading/loadingScreen"
import { PointerEventTypes } from "@babylonjs/core/Events/pointerEvents"
import { AnimationGroup } from "@babylonjs/core/Animations/animationGroup"
import { MorphTargetManager } from "@babylonjs/core/Morph/morphTargetManager"
import { ArcRotateCameraPointersInput } from "@babylonjs/core/Cameras/Inputs/arcRotateCameraPointersInput"
import { DecodeBase64ToBinary } from "@babylonjs/core/Misc/stringTools"
import { Sound } from "@babylonjs/core/Audio"
import { AssetContainer, KeepAssets } from "@babylonjs/core/assetContainer"
import { Mesh } from "@babylonjs/core/Meshes"
import { SceneOptimizer, SceneOptimizerOptions, HardwareScalingOptimization } from "@babylonjs/core/Misc/sceneOptimizer"
import "@babylonjs/loaders/glTF/2.0"
// import "@babylonjs/core/Debug/debugLayer"
// import "@babylonjs/inspector"
import { useIntl } from 'react-intl'
import { useMediaQuery } from 'react-responsive'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { v4 as uuidv4 } from 'uuid';
import { Player } from '@lottiefiles/react-lottie-player'

import "../../css/chatStyles.min.css"
import { useTokenAuth } from 'hooks/useTokenAuth'
import { useAuthMode } from 'hooks/useUserAuth'
import { GeneralText, TextFieldWithIconStyled } from 'components/GlobalStyle'
import DotLoader from 'components/Loader/DotLoader'
import Loader from 'components/Loader/Loader'
import Waveform from 'components/Waveform'
import { exportAsImage } from "../../utils/imageHelper"
import { uploadImage } from "../../utils/uploadImage"
import { useTask } from './hooks/useTask'
import { useCompletions } from './hooks/useCompletions'
import { useLanguages } from './hooks/useLanguages'
import { useVoice } from './hooks/useVoices'
import { useModel } from './hooks/useModel'
import { ConversationEntry, ConversationAPI, Language, Voice, Model, CameraSettings, AnimationList, TaskProgress, Task, ShareUrlModalProps, OptionsMobileModalProps, OptionsDesktopComponentProps } from "./types"

const ContainerWrapper = styled.div`
height: 100%;
@media only screen and (min-width: 992px) {
  background-image: url(./images/background-ellipse.png);
  background-position-x: right;
  background-size: contain;
  background-repeat: no-repeat;
}
`
const CanvasWrapper = styled.div`
  background-image: url("/images/background-avatar.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  flex-wrap:wrap;
`
const DropdownListNext = styled(DropdownNext)`
font-family: var(--fontFamily1);
background-color: transparent;
border:1px solid var(--greyColor);
border-radius: 0px!important;
`
const DropdownListNextButton = styled(DropdownNext.Button)`
font-family: var(--fontFamily1);
background-color: transparent;
border:1px solid var(--greyColor);
border-radius:0px;
min-width:200px;
`
const DropdownListNextMenu = styled(DropdownNext.Menu)`
font-family: var(--fontFamily1);
background-color: transparent;
border:1px solid var(--greyColor);
border-radius: 0px;
padding:0px;
overflow:hidden;
.is-hovered {
  background-color:var(--yellowColor);
  color:var(--blackColor);
}
.is-focused {
  background-color:var(--yellowColor);
  color:var(--blackColor);
  border-radius: 0px;
}
.is-selectable{
  border-radius: 0px;
}
`
const DropdownItemNext = styled(DropdownNext.Item)`\
font-family: var(--fontFamily1);
background-color: black;
color:white;
`
const ButtonSend = styled(Button) <{ height: number, width: number }>`
height: ${({ height }) => height};
width: ${({ width }) => width};
min-width: fit-content;
background-color: transparent;
padding: 0px;
border-radius: 0px;
:hover {
    cursor: pointer;
    background-color: transparent;
  }
:pressed{
    background-color:transparent;
  }
.nextui-drip{
    background-color:transparent;
    color:var(--whiteColor);
  } 
.nextui-button-drip{
  background-color:var(--blackColor);
  color:var(--whiteColor);
} 
.nextui-button--pressed{
  background-color:transparent;
  color:var(--whiteColor);
} 
`
const ButtonCustom = styled(Button) <{ height: number, width: number, minwidth: number, bg: string, borderradius: string, padding: string }>`
height: ${({ height }) => height};
width: ${({ width }) => width};
padding: ${({ padding }) => padding};
border-radius: ${({ borderradius }) => borderradius};
min-width: ${({ minwidth }) => minwidth};
background-color: ${({ bg }) => bg}!important;
:hover {
    cursor: pointer;
  }
`
const TopOptionsBarWrapper = styled(Flex)`
align-items:center;
@media only screen and (max-width: 991px) {
  display:flex;
  // align-items:end;
}
// @media only screen and (min-width: 992px) {
//   display:none;
// }
`
const DesktopDropdownListWrapper = styled(Flex)`
@media only screen and (min-width: 0px) and (max-width: 991px) {
  display:none;
}
`
const ContentWrapper = styled(Flex)`
@media only screen and (min-width: 992px) {
  height:100%;
}
@media only screen and (min-width: 0px) and (max-width: 991px) {
  position:relative;
  align-items:self-end;
}
`
const FormLayout = styled.form`
height:100%;
@media only screen and (min-width: 0px) and (max-width: 991px) {
  position:absolute;
  width:100%;
  padding:0px 0px 50px 0px;
  height:fit-content;
  bottom:0px;
}
@media only screen and (min-width: 992px) {
  flex-grow: 1; 
  overflow: hidden; 
  position: relative;
}
`
const FormContainer = styled(Flex)`
@media only screen and (min-width: 992px) {
  height:100%;
}
@media only screen and (min-width: 0px) and (max-width: 991px) {

}
`
const StyledMainContainerWrapper = styled(Flex)`
justify-content:center;
padding:0px 0px 15px 0px;
@media only screen and (min-width: 992px) {
  min-height:480px;
}
@media only screen and (min-width: 0px) and (max-width: 991px) {
justify-content:end;
max-height: 400px;
}
`
const StyledMainContainer = styled(MainContainer)`
width:100%;
height:100%;
// @media only screen and (min-width: 0px) and (max-width: 991px) {
//   height:40%;
// }
`
// Load the 3D model's animations
const animList: AnimationList[] = [{ animName: "neutral", animList: [] }, { animName: "anger", animList: [] }, { animName: "disgust", animList: [] }, { animName: "fear", animList: [] }, { animName: "joy", animList: [] }, { animName: "excited", animList: [] }];

const cameraSettingsList: CameraSettings[] = [
  { target: new Vector3(0, 1, 0), alpha: 1.67, beta: 1.3, radius: 4.3, lowerBetaLimit: -2, upperBetaLimit: 5, lowerRadiusLimit: 3.4, upperRadiusLimit: 4.3, fov: 0.5 },
  { target: new Vector3(0, 1.3, 0), alpha: 1.67, beta: 1.3, radius: 2.3, lowerBetaLimit: -2, upperBetaLimit: 5, lowerRadiusLimit: 2.3, upperRadiusLimit: 2.3, fov: 0.5 },
  { target: new Vector3(0, 1.5, 0), alpha: 1.67, beta: 1.3, radius: 1.35, lowerBetaLimit: 1.3, upperBetaLimit: 1.3, lowerRadiusLimit: 1.35, upperRadiusLimit: 1.35, fov: 0.01 }
]

const getMorpherValue = (id: string) => {
  let returnValue = null;
  switch (id) {
    case "A":
    case "X":
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 0 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0 },
        { name: "vW", value: 0 }
      ];
      break;
    case "B":
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 0 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0.5 },
        { name: "vW", value: 0 }
      ];
      break;
    case "C":
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0.8 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 0.8 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0 },
        { name: "vW", value: 0 }
      ];
      break;
    case "D":
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0.8 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 0 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0 },
        { name: "vW", value: 0 }
      ];
      break;
    case "E":
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0.8 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 0 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0 },
        { name: "vW", value: 0.4 }
      ];
      break;
    case "F":
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 0 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0.2 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0 },
        { name: "vW", value: 0.2 }
      ];
      break;
    case "G":
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0.5 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 0 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0 },
        { name: "vW", value: 0 }
      ];
      break;
    case "H":
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0.2 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 1 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0 },
        { name: "vW", value: 0 }
      ];
      break;
    default:
      returnValue = [
        { name: "vAA", value: 0 },
        { name: "vEE", value: 0 },
        { name: "vEH", value: 0 },
        { name: "vER", value: 0 },
        { name: "vF", value: 0 },
        { name: "vIH", value: 0 },
        { name: "vIY", value: 0 },
        { name: "vK", value: 0 },
        { name: "vL", value: 0 },
        { name: "vM", value: 0 },
        { name: "vOW", value: 0 },
        { name: "vS", value: 0 },
        { name: "vSH", value: 0 },
        { name: "vT", value: 0 },
        { name: "vTH", value: 0 },
        { name: "vUW", value: 0 },
        { name: "vW", value: 0 }
      ];
      break;
  }
  return returnValue;
}

const updateMorphTargetByName = (morphTargetManager: MorphTargetManager, headGeoMorphTargetIndexesByName: [], targetName: string, influence: any) => {
  const target = morphTargetManager.getTarget(headGeoMorphTargetIndexesByName[targetName]);
  target.influence = influence;
}

const Dictaphone = (props) => {
  const { language, getTranscript, isRecording, setIsRecording, modelIsLoading, botIsTyping } = props
  const intl = useIntl();
  const { notify } = useNotifications()
  const {
    finalTranscript,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();
  const [currentTranscript, setCurrentTranscript] = useState<{ transcript: { isReceived: boolean, result: string } }>({ transcript: { isReceived: false, result: "" } });

  const handleMicButtonOnClick = async (event) => {
    try {
      if (!isRecording) {
        SpeechRecognition.startListening({ language: language || "en-US", continuous: true });
      } else {
        SpeechRecognition.stopListening();
      }
      setIsRecording(!isRecording);
    } catch (error: any) {
      alert(error);
    }
  }

  useEffect(() => {
    if (isRecording && (!browserSupportsSpeechRecognition || !isMicrophoneAvailable)) {
      setIsRecording(false)
      if (!isMicrophoneAvailable) {
        notify(`${intl.formatMessage({ id: "no-microphone", defaultMessage: "No microphone" })}`, 'warning')
        return undefined
      }
      if (!browserSupportsSpeechRecognition) {
        notify(`${intl.formatMessage({ id: "no-browser-support", defaultMessage: "No browser support" })}`, 'warning')
        return undefined
      }
    }
    return undefined
  }, [isRecording, setIsRecording, browserSupportsSpeechRecognition, isMicrophoneAvailable, intl, notify])

  useEffect(() => {
    if ((finalTranscript === "") || !finalTranscript) {
      return undefined
    }
    setCurrentTranscript({ transcript: { isReceived: true, result: finalTranscript } })
    return () => {
      // clear
    }
  }, [finalTranscript]);

  useEffect(() => {
    if (currentTranscript.transcript.isReceived) {
      getTranscript(currentTranscript.transcript.result)
      setCurrentTranscript({ transcript: { isReceived: false, result: "" } })
      resetTranscript();
    }
  }, [currentTranscript, getTranscript, resetTranscript])

  return (
    <ButtonCustom padding="0px" borderradius="100%" bg="var(--yellowColor))" height="35px" width="35px" minwidth="35px" onPress={(e) => { handleMicButtonOnClick(e) }} disabled={botIsTyping || modelIsLoading}>
      <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.8 10V4.28571C2.8 3.14907 3.2425 2.05898 4.03015 1.25526C4.8178 0.451529 5.88609 0 7 0C8.11391 0 9.1822 0.451529 9.96985 1.25526C10.7575 2.05898 11.2 3.14907 11.2 4.28571V10C11.2 11.1366 10.7575 12.2267 9.96985 13.0305C9.1822 13.8342 8.11391 14.2857 7 14.2857C5.88609 14.2857 4.8178 13.8342 4.03015 13.0305C3.2425 12.2267 2.8 11.1366 2.8 10ZM14 10C14 9.81056 13.9263 9.62888 13.795 9.49492C13.6637 9.36097 13.4857 9.28571 13.3 9.28571C13.1143 9.28571 12.9363 9.36097 12.805 9.49492C12.6737 9.62888 12.6 9.81056 12.6 10C12.6 11.5155 12.01 12.969 10.9598 14.0406C9.90959 15.1122 8.48521 15.7143 7 15.7143C5.51479 15.7143 4.09041 15.1122 3.0402 14.0406C1.99 12.969 1.4 11.5155 1.4 10C1.4 9.81056 1.32625 9.62888 1.19497 9.49492C1.0637 9.36097 0.885652 9.28571 0.7 9.28571C0.514348 9.28571 0.336301 9.36097 0.205025 9.49492C0.0737499 9.62888 0 9.81056 0 10C0.0021316 11.7701 0.647431 13.4766 1.81111 14.7893C2.97479 16.1021 4.57419 16.9279 6.3 17.1071V19.2857C6.3 19.4752 6.37375 19.6568 6.50503 19.7908C6.6363 19.9247 6.81435 20 7 20C7.18565 20 7.3637 19.9247 7.49498 19.7908C7.62625 19.6568 7.7 19.4752 7.7 19.2857V17.1071C9.42581 16.9279 11.0252 16.1021 12.1889 14.7893C13.3526 13.4766 13.9979 11.7701 14 10Z" fill={isRecording ? "red" : "black"} />
      </svg>
    </ButtonCustom>
  );
};

const ModalStyled = styled(Modal)`
border: 1px solid rgba(255, 240, 240, 0.50);
padding:0px;
max-width:552px;
background:#16181A;
button>svg{
  color:var(--yellowColor);
}
`

const ModalHeaderStyled = styled(Modal.Header)`
padding-top: 15px;
padding-bottom: 14px;
`

const ModalBodyStyled = styled(Modal.Body)`
// &:before {
//   content: url('data:image/svg+xml,<svg width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="%23A5A2BA"/></svg>');
//   width: 29px;
//   height: 29px;
//   align-self:center;
`

const TaskContainer = styled(Flex)`
background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%);
border: 1px solid rgba(255, 240, 240, 0.50);
border-radius: 10px;
width:100%;
flex-direction:row;
gap:5px;
padding:10px;
align-items:center;
flex-wrap: wrap;
justify-content: space-between;
`

const ShareUrlModal: React.FC<ShareUrlModalProps> = ({ show, onClose, taskDetails, checkTaskProgress, containerWrapperRef }) => {
  const intl = useIntl();
  const [shareUrlRes, setShareUrlRes] = useState<{ status: number, error: boolean, message: string, data: any }>(null);
  const [isSnapshot, setIsSnapshot] = useState<boolean>(false);
  const { content } = useTokenAuth()
  const isMaxExpLottieRef = React.createRef<any>();
  const isShareLottieRef = React.createRef<any>();
  const isJoinDiscordLottieRef = React.createRef<any>();

  useEffect(() => {
    if (taskDetails.is_max_exp && isMaxExpLottieRef.current)
      isMaxExpLottieRef.current.play()
    if (taskDetails.is_share && isShareLottieRef.current)
      isShareLottieRef.current.play()
    if (taskDetails.is_join_discord && isJoinDiscordLottieRef.current)
      isJoinDiscordLottieRef.current.play()
  }, [taskDetails.is_max_exp, taskDetails.is_share, taskDetails.is_join_discord, isMaxExpLottieRef, isShareLottieRef, isJoinDiscordLottieRef])

  useEffect(() => {
    const init = async () => {
      const snapshotResponse = await exportAsImage(containerWrapperRef.current)
      if (snapshotResponse.error) {
        return undefined
      }
      setShareUrlRes(snapshotResponse)
      setIsSnapshot(true)
      return undefined
    }
    if (!isSnapshot && containerWrapperRef.current && show) {
      init()
    }
  }, [show, isSnapshot, containerWrapperRef, content])

  const handleShareOnTwitterButtonOnClick = async () => {
    const getShareUrlResponse = await uploadImage(shareUrlRes?.data, content && content.token ? content.token : null);
    if (getShareUrlResponse.error) {
      setShareUrlRes(getShareUrlResponse)
    } else {
      await checkTaskProgress()
      window.open(`https://twitter.com/intent/tweet?text=${getShareUrlResponse.data.msg}&url=${getShareUrlResponse.data.url}`, "", "width=600,height=400,left=200,top=200");

    }
  }

  const handleJoinUsOnDiscordButtonOnClick = async () => {
    window.open(`${process.env.REACT_APP_JOIN_US_ON_DISCORD_URL}`, "", "width=600,height=400,left=200,top=200");
    await checkTaskProgress();
  }

  const handleCloseButtonOnClick = () => {
    setShareUrlRes(null)
    setIsSnapshot(false)
    onClose()
  }

  return (
    <ModalStyled id="share-url-modal" closeButton blur aria-labelledby="modal-title" open={show} onClose={() => handleCloseButtonOnClick()} width="600px">
      <ModalHeaderStyled >
        <GeneralText id="modal-title" size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "clamp(1.7rem,2vw,1.875rem)" }} >
          {`${intl.formatMessage({ id: "task-instruction", defaultMessage: "Task Instruction" })}`}
        </GeneralText>
      </ModalHeaderStyled>
      <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
      </svg>
      <ModalBodyStyled >
        <Flex gap="30px" direction="column" style={{ alignItems: "center", paddingBottom: "50px" }}>
          <Flex gap="15px" direction="column">
            <TaskContainer>
              <Flex gap="10px" style={{ alignItems: "center" }}>
                <Player ref={isMaxExpLottieRef} lottieRef={(e) => {
                  e.firstFrame = 30; // eslint-disable-line
                  e.totalFrames = 30;// eslint-disable-line
                }} autoplay={false} keepLastFrame src="/images/airdrop/tick.json" style={{ width: "30px", height: "30px" }} rendererSettings={{ viewBoxSize: "150 150 300 300" }} />
                <Flex gap="5px" direction="column" style={{ maxWidth: "255px" }}>
                  <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                    {`${intl.formatMessage({ id: "task", defaultMessage: "Task" })} 1:`}
                  </GeneralText>
                  <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--whiteColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }}>
                    {`${intl.formatMessage({ id: "Chat & train Jinko Ai to reach 500 EXP", defaultMessage: "Chat & train Jinko Ai to reach 500 EXP" })}`}
                  </GeneralText>
                </Flex>
              </Flex>
              <ButtonCustom style={{ boxShadow: "0px 4px 15px 0px rgba(229, 255, 0, 0.50)" }} padding="10px" borderradius="20px" bg="var(--yellowColor))" height="40px" width="136px" minwidth="136px" onPress={() => onClose()}>
                <GeneralText id="modal-title" size="clamp(0.9rem,2vw,1rem)" color="var(--blackColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "clamp(1.7rem,2vw,1.875rem)" }} >
                  {`${intl.formatMessage({ id: "go-to-chat", defaultMessage: "Go to Chat" })}`}
                </GeneralText>
              </ButtonCustom>
            </TaskContainer>
            <TaskContainer>
              <Flex gap="10px" style={{ alignItems: "center" }}>
                <Player ref={isShareLottieRef} lottieRef={(e) => {
                  e.firstFrame = 30; // eslint-disable-line
                  e.totalFrames = 30;// eslint-disable-line
                }} autoplay={false} keepLastFrame src="/images/airdrop/tick.json" style={{ width: "30px", height: "30px" }} rendererSettings={{ viewBoxSize: "150 150 300 300" }} />
                <Flex gap="5px" direction="column" style={{ maxWidth: "255px" }}>
                  <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                    {`${intl.formatMessage({ id: "task", defaultMessage: "Task" })} 2:`}
                  </GeneralText>
                  <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--whiteColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                    {`${intl.formatMessage({ id: "tweet-your-custom-link-on-your-twitter", defaultMessage: "Tweet your custom link on your Twitter" })}`}
                  </GeneralText>
                </Flex>
              </Flex>
              {/* <TwitterShareButton title={shareUrlRes?.data?.msg || ""} url={shareUrlRes?.data?.url} style={{ position: "relative" }}> */}
              <Flex gap="6px" direction="column" style={{ alignItems: "center" }}>
                {
                  shareUrlRes?.data ?
                    <ButtonCustom style={{ boxShadow: "0px 4px 15px 0px rgba(229, 255, 0, 0.50)" }} padding="10px" borderradius="20px" bg="var(--yellowColor))" height="40px" width="136px" minwidth="136px"
                      onClick={() => { handleShareOnTwitterButtonOnClick() }}
                      icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="black" /></svg>}>
                      <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--blackColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "clamp(1.7rem,2vw,1.875rem)" }} >
                        {`${intl.formatMessage({ id: "share", defaultMessage: "Share" })}`}
                      </GeneralText>
                    </ButtonCustom>
                    :
                    shareUrlRes?.error && shareUrlRes?.message ?
                      <ButtonCustom padding="10px" borderradius="20px" bg="var(--yellowColor))" height="40px" width="136px" minwidth="136px"
                        onClick={() => { handleShareOnTwitterButtonOnClick() }} disabled
                        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="black" /></svg>}>
                        <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--blackColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "clamp(1.7rem,2vw,1.875rem)" }} >
                          {`${intl.formatMessage({ id: "share", defaultMessage: "Share" })}`}
                        </GeneralText>
                      </ButtonCustom>
                      :
                      <ButtonCustom padding="10px" borderradius="20px" bg="var(--yellowColor))" height="40px" width="136px" minwidth="136px"
                        disabled>
                        <Loading type="points-opacity" color="currentColor" size="sm" />
                      </ButtonCustom>

                }
                <Link target="_blank" href={`${process.env.REACT_APP_FOLLOW_US_ON_TWITTER_URL}`}>
                  <GeneralText size="clamp(0.675rem,2vw,0.725rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "clamp(0.675rem, 2vw, 0.725rem)", textDecoration: "underline" }} >
                    {`${intl.formatMessage({ id: "follow", defaultMessage: "Follow us" })}`}
                  </GeneralText>
                </Link>
              </Flex>
            </TaskContainer>
            <TaskContainer>
              <Flex gap="10px" style={{ alignItems: "center" }}>
                <Player ref={isJoinDiscordLottieRef} lottieRef={(e) => {
                  e.firstFrame = 30; // eslint-disable-line
                  e.totalFrames = 30;// eslint-disable-line
                }} autoplay={false} keepLastFrame src="/images/airdrop/tick.json" style={{ width: "30px", height: "30px" }} rendererSettings={{ viewBoxSize: "150 150 300 300" }} />
                <Flex gap="5px" direction="column" style={{ maxWidth: "255px" }}>
                  <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                    {`${intl.formatMessage({ id: "task", defaultMessage: "Task" })} 3:`}
                  </GeneralText>
                  <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--whiteColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                    {`${intl.formatMessage({ id: "join-our-discord-channel", defaultMessage: "Join our Discord channel" })}`}
                  </GeneralText>
                </Flex>
              </Flex>
              <ButtonCustom style={{ boxShadow: "0px 4px 15px 0px rgba(229, 255, 0, 0.50)" }} padding="10px" borderradius="20px" bg="var(--yellowColor))" height="40px" width="136px" minwidth="136px" onPress={() => handleJoinUsOnDiscordButtonOnClick()}
                icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.2701 5.33005C17.9401 4.71005 16.5001 4.26005 15.0001 4.00005C14.987 3.99963 14.9739 4.00209 14.9618 4.00728C14.9497 4.01246 14.9389 4.02023 14.9301 4.03005C14.7501 4.36005 14.5401 4.79005 14.4001 5.12005C12.8091 4.88005 11.1911 4.88005 9.60012 5.12005C9.46012 4.78005 9.25012 4.36005 9.06012 4.03005C9.05012 4.01005 9.02012 4.00005 8.99012 4.00005C7.49012 4.26005 6.06012 4.71005 4.72012 5.33005C4.71012 5.33005 4.70012 5.34005 4.69012 5.35005C1.97012 9.42005 1.22012 13.38 1.59012 17.3C1.59012 17.32 1.60012 17.34 1.62012 17.35C3.42012 18.67 5.15012 19.47 6.86012 20C6.89012 20.01 6.92012 20 6.93012 19.98C7.33012 19.43 7.69012 18.85 8.00012 18.24C8.02012 18.2 8.00012 18.16 7.96012 18.15C7.39012 17.93 6.85012 17.67 6.32012 17.37C6.28012 17.35 6.28012 17.29 6.31012 17.26C6.42012 17.18 6.53012 17.09 6.64012 17.01C6.66012 16.99 6.69012 16.99 6.71012 17C10.1501 18.57 13.8601 18.57 17.2601 17C17.2801 16.99 17.3101 16.99 17.3301 17.01C17.4401 17.1 17.5501 17.18 17.6601 17.27C17.7001 17.3 17.7001 17.36 17.6501 17.38C17.1301 17.69 16.5801 17.94 16.0101 18.16C15.9701 18.17 15.9601 18.22 15.9701 18.25C16.2901 18.86 16.6501 19.44 17.0401 19.99C17.0701 20 17.1001 20.01 17.1301 20C18.8501 19.47 20.5801 18.67 22.3801 17.35C22.4001 17.34 22.4101 17.32 22.4101 17.3C22.8501 12.77 21.6801 8.84005 19.3101 5.35005C19.3001 5.34005 19.2901 5.33005 19.2701 5.33005ZM8.52012 14.91C7.49012 14.91 6.63012 13.96 6.63012 12.79C6.63012 11.62 7.47012 10.67 8.52012 10.67C9.58012 10.67 10.4201 11.63 10.4101 12.79C10.4101 13.96 9.57012 14.91 8.52012 14.91ZM15.4901 14.91C14.4601 14.91 13.6001 13.96 13.6001 12.79C13.6001 11.62 14.4401 10.67 15.4901 10.67C16.5501 10.67 17.3901 11.63 17.3801 12.79C17.3801 13.96 16.5501 14.91 15.4901 14.91Z" fill="black" /></svg>}>
                <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--blackColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "clamp(1.7rem,2vw,1.875rem)" }} >
                  {`${intl.formatMessage({ id: "join", defaultMessage: "Join" })}`}
                </GeneralText>
              </ButtonCustom>
            </TaskContainer>
          </Flex>
          <Flex gap="10px" style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
            {
              taskDetails.is_max_exp && taskDetails.is_share && taskDetails.is_join_discord && taskDetails.is_airdrop ?
                <img src="/images/airdrop/airdrop-mission bar-image-complete.png" alt="airdop" />
                :
                <img src="/images/airdrop/airdrop-mission bar-image-noncomplete.png" alt="airdop" />
            }
            <div style={{ minWidth: "120px", width: "100%", maxWidth: "270px", height: "14px", position: "relative", background: "linear-gradient(180deg,rgba(54,56,41,0.50)0%,rgba(0,0,0,0.50)100%)", borderRadius: "5px", border: "0.50px #777E90 solid" }}>
              <div style={{ width: `${taskDetails.currTaskProgress / taskDetails.totalTask * 100}%`, height: "100%", position: "absolute", background: "var(--yellowColor)", borderRadius: "4px" }} />
            </div>
            <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--whiteColor)" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "uppercase", lineHeight: "clamp(0.9rem,2vw,1rem)" }} >
              {taskDetails.currTaskProgress}/{taskDetails.totalTask}
            </GeneralText>
          </Flex>
          {
            taskDetails.is_max_exp && taskDetails.is_share && taskDetails.is_join_discord && taskDetails.is_airdrop ?
              <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: "clamp(0.9rem,2vw,1rem)" }} >
                {`${intl.formatMessage({ id: "congratulations-you-entitled-an-airdrop", defaultMessage: "Congratulations! You entitled an airdrop!" })}`}
              </GeneralText>
              :
              <GeneralText size="clamp(0.9rem,2vw,1rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: "clamp(0.9rem,2vw,1rem)" }} >
                {taskDetails.totalTask - taskDetails.currTaskProgress} {`${intl.formatMessage({ id: "mission-more-to-entire-an-aidrop", defaultMessage: "Mission more to entitle an airdrop" })}`}
              </GeneralText>
          }
        </Flex>
      </ModalBodyStyled >
    </ModalStyled >
  )
};

const OptionsMobileModal: React.FC<OptionsMobileModalProps> = ({ show, onClose, handleOptionsLanguageListDropdown, handleOptionsVoiceListDropdown, handleOptionsModelListSelector, handleOptionsApplyButton, optionsLanguageList, currentOptionsLanguage, optionsVoiceList, currentOptionsVoice, optionsModelList, currentOptionsModel }) => {
  const intl = useIntl();

  return (
    <ModalStyled closeButton blur aria-labelledby="modal-title" open={show} onClose={onClose} >
      <ModalHeaderStyled >
        <GeneralText id="modal-title" size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "clamp(1.7rem,2vw,1.875rem)" }} >
          {`${intl.formatMessage({ id: "choose", defaultMessage: "Choose" })}`}
        </GeneralText>
      </ModalHeaderStyled>
      <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
      </svg>
      <Modal.Body >
        <Flex gap="10px" justify="start" align="start" direction="column" wrap="wrap" style={{ width: "100%" }}>
          <GeneralText size="0.9rem" color="var(--whiteColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase" }} >
            {`${intl.formatMessage({ id: "language", defaultMessage: "Language" })} :`}
          </GeneralText>
          {
            optionsLanguageList.length > 0 ?
              <DropdownListNext offset={0} disableTriggerPressedAnimation rounded={false} containerCss={{ borderRadius: "0px" }}>
                <DropdownListNextButton css={{ color: "var(--whiteColor)", justifyContent: "space-between" }} >
                  <GeneralText size="0.9rem" color="var(--whiteColor)" weight="normal" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)" }} >
                    {currentOptionsLanguage?.name}
                  </GeneralText>
                </DropdownListNextButton>
                <DropdownListNextMenu containerCss={{ borderRadius: "0px", }} color="default" disallowEmptySelection selectionMode="single" selectedKeys={currentOptionsLanguage?.id.toString()} onSelectionChange={(la) => { handleOptionsLanguageListDropdown(la) }} >
                  {optionsLanguageList.map((la) => (
                    <DropdownItemNext key={la.id.toString()} css={{ color: "var(--whiteColor)", textTransform: "uppercase" }}>
                      {la.name}
                    </DropdownItemNext>
                  ))}
                </DropdownListNextMenu>
              </DropdownListNext>
              :
              null
          }
        </Flex>
        {
          currentOptionsModel?.default_voice_id ?
            null
            :
            <Flex gap="10px" justify="start" align="start" direction="column" wrap="wrap" style={{ width: "100%" }}>
              <GeneralText size="0.9rem" color="var(--whiteColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase" }} >
                {`${intl.formatMessage({ id: "voice", defaultMessage: "Voice" })} :`}
              </GeneralText>
              {
                optionsVoiceList.length > 0 ?
                  <DropdownListNext offset={0} disableTriggerPressedAnimation rounded={false} containerCss={{ borderRadius: "0px" }}>
                    <DropdownListNextButton
                      css={{
                        color: "var(--whiteColor)",
                        justifyContent: "space-between"
                      }}
                    >
                      <GeneralText size="0.9rem" color="var(--whiteColor)" weight="normal" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)" }} >
                        {currentOptionsVoice?.name}
                      </GeneralText>
                    </DropdownListNextButton>
                    <DropdownListNextMenu
                      containerCss={{
                        borderRadius: "0px",
                      }}
                      color="default"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={currentOptionsVoice?.id.toString()}
                      onSelectionChange={(la) => {
                        handleOptionsVoiceListDropdown(la)
                      }}
                    >
                      {optionsVoiceList.map((la) => (
                        <DropdownItemNext key={la?.id.toString()} rounded={false} css={{ color: "var(--whiteColor)", textTransform: "uppercase" }}>
                          {la?.name}
                        </DropdownItemNext>
                      ))}
                    </DropdownListNextMenu>
                  </DropdownListNext>
                  :
                  null
              }
            </Flex>
        }
        <Flex gap="10px" justify="start" align="start" direction="column" wrap="wrap" style={{ width: "100%" }}>
          <GeneralText size="0.9rem" color="var(--whiteColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase" }} >
            {`${intl.formatMessage({ id: "personality", defaultMessage: "Personality" })} :`}
          </GeneralText>
          {
            optionsModelList.length > 0 ?
              <Flex direction="column" style={{ flex: "none", width: "100%" }} className="hide-scrollbar-keep-function ">
                {
                  optionsModelList.map((la) => (
                    <>
                      <Flex className="border-radio-button-mobile" onClick={(e) => { handleOptionsModelListSelector(la) }}>
                        <Flex direction="row" wrap="nowrap" justify="center" gap="5px" style={{ margin: "5px 30px", width: "max-content" }}>
                          <img src={`${la?.image_url}?v=${Date.now()}` || `/images/icon-personality.png`} alt={la?.name} style={{ width: "30px", height: "30px", border: currentOptionsModel?.id === la.id ? "1px solid var(--yellowColor)" : "1px solid var(--greyColor)", borderRadius: "100%" }} crossOrigin="" />
                          <GeneralText size="1rem" color={currentOptionsModel?.id === la.id ? "var(--yellowColor)" : "var(--whiteColor)"} weight="bold" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)", margin: "0px", wordBreak: "keep-all", whiteSpace: "nowrap" }} >
                            {la?.name || ""}
                          </GeneralText>
                        </Flex>
                      </Flex >
                    </>
                  ))
                }
              </Flex>
              :
              null
          }
        </Flex>
        <ButtonCustom padding="0px" borderradius="20px" width="100%" minwidth="100%" height="42px" bg="var(--yellowColor)" onPress={() => { handleOptionsApplyButton() }}>
          <GeneralText size="clamp(0.8rem,2vw,0.9rem)" color="var(--blackColor)" weight="bold" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)" }} >
            {`${intl.formatMessage({ id: "apply", defaultMessage: "Apply" })}`}
          </GeneralText>
        </ButtonCustom>
      </Modal.Body>
    </ModalStyled>
  )
};

const OptionsDesktopComponent: React.FC<OptionsDesktopComponentProps> = ({ modelIsLoading, handleLanguageListDropdown, handleVoiceListDropdown, handleModelListSelector, languageList, voiceList, modelList, currentLanguage, currentVoice, currentModel, }) => {
  const intl = useIntl();
  return (
    <>
      <Flex gap="10px" justify="start" align="start" direction="row" wrap="wrap" style={{ width: "100%" }}>
        <Flex justify="start" align="start" direction="row" wrap="wrap" style={{ width: "150px" }}>
          <GeneralText size="1rem" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", margin: "0px" }} >
            {`${intl.formatMessage({ id: "language", defaultMessage: "Language" })}:`}
          </GeneralText>
        </Flex>
        <Flex direction="row" wrap="wrap" style={{ flex: 3 }}>
          {
            languageList.length > 0 ?
              <DropdownListNext offset={0} disableTriggerPressedAnimation rounded={false} containerCss={{ borderRadius: "0px" }} isDisabled={modelIsLoading}                >
                <DropdownListNextButton
                  css={{
                    color: "var(--whiteColor)",
                    justifyContent: "space-between",
                    fontSize: "1rem"
                  }}
                >
                  <GeneralText size="1rem" color="var(--whiteColor)" weight="bold" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)" }} >
                    {currentLanguage.name}
                  </GeneralText>
                </DropdownListNextButton>
                <DropdownListNextMenu
                  containerCss={{
                    borderRadius: "0px",
                  }}
                  color="default"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={currentLanguage.id.toString()}
                  onSelectionChange={(la) => { handleLanguageListDropdown(la) }}
                >
                  {languageList.map((la) => (
                    <DropdownItemNext key={la.id.toString()} css={{ color: "var(--whiteColor)", fontWeight: "bold", fontFamily: "var(--fontFamily1)", fontSize: "1rem", textTransform: "uppercase" }}>
                      {la.name}
                    </DropdownItemNext>
                  ))}
                </DropdownListNextMenu>
              </DropdownListNext>
              :
              null
          }
        </Flex>
      </Flex>
      {
        currentModel?.default_voice_id ?
          null
          :
          <Flex gap="10px" justify="start" align="center" direction="row" wrap="wrap" style={{ width: "100%" }}>
            <Flex justify="start" align="start" direction="row" wrap="wrap" style={{ width: "150px", height: "fit-content" }}>
              <GeneralText size="1rem" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", margin: "0px", width: "fit-content", height: "fit-content" }} >
                {`${intl.formatMessage({ id: "voice", defaultMessage: "Voice" })}:`}
              </GeneralText>
            </Flex>
            <Flex direction="row" wrap="wrap" style={{ flex: 3 }}>
              {
                voiceList.length > 0 ?
                  <DropdownListNext offset={0} disableTriggerPressedAnimation rounded={false} containerCss={{ borderRadius: "0px" }} isDisabled={modelIsLoading}>
                    <DropdownListNextButton
                      css={{
                        color: "var(--whiteColor)",
                        justifyContent: "space-between",
                        fontSize: "1rem"
                      }}
                    >
                      <GeneralText size="1rem" color="var(--whiteColor)" weight="bold" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)" }} >
                        {currentVoice?.name}
                      </GeneralText>
                    </DropdownListNextButton>
                    <DropdownListNextMenu
                      containerCss={{
                        borderRadius: "0px",
                      }}
                      color="default"
                      disallowEmptySelection
                      selectionMode="single"
                      selectedKeys={currentVoice?.id.toString()}
                      onSelectionChange={(la) => {
                        handleVoiceListDropdown(la)
                      }}
                    >
                      {voiceList.map((la) => (
                        <DropdownItemNext key={la?.id.toString()} rounded={false} css={{ color: "var(--whiteColor)", textTransform: "uppercase" }}>
                          {la?.name}
                        </DropdownItemNext>
                      ))}
                    </DropdownListNextMenu>
                  </DropdownListNext>
                  :
                  null
              }
            </Flex>
          </Flex >
      }
      <Flex gap="10px" justify="start" align="center" direction="row" style={{ width: "100%" }}>
        <Flex justify="start" align="start" direction="row" wrap="wrap" style={{ width: "150px", flex: "none" }}>
          <GeneralText size="1rem" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", margin: "0px" }} >
            {`${intl.formatMessage({ id: "personality", defaultMessage: "Personality" })}:`}
          </GeneralText>
        </Flex>
        <div style={{ overflow: "hidden", pointerEvents: modelIsLoading ? "none" : "all", width: "100%" }} >
          {
            modelList.length > 0 ?
              <Flex style={{ width: `100%` }} className="hide-scrollbar-keep-function" id="personality-bar">
                {
                  modelList.map((la) => (
                    <Flex key={la?.name || null} className="border-radio-button-desktop" onClick={(e) => { handleModelListSelector(la) }}>
                      <Flex direction="row" wrap="nowrap" justify="center" gap="5px" style={{ margin: "5px 30px", width: "max-content" }}>
                        <img src={`${la?.image_url}?v=${Date.now()}` || `/images/icon-personality.png`} alt={la?.name} style={{ width: "30px", height: "30px", border: currentModel?.id === la.id ? "1px solid var(--yellowColor)" : "1px solid var(--greyColor)", borderRadius: "100%" }} crossOrigin="" />
                        <GeneralText size="1rem" color={currentModel?.id === la.id ? "var(--yellowColor)" : "var(--whiteColor)"} weight="bold" transform="uppercase" css={{ fontFamily: "var(--fontFamily1)", margin: "0px", wordBreak: "keep-all", whiteSpace: "nowrap" }} >
                          {la?.name || ""}
                        </GeneralText>
                      </Flex>
                    </Flex >
                  ))
                }
              </Flex>
              :
              null
          }
        </div>
      </Flex >
    </>

  )
};

const Chat: React.FC = () => {
  const intl = useIntl()
  const navigate = useNavigate()
  const { content } = useTokenAuth()
  // const { notify } = useNotifications()
  const { genderParam } = useParams<{ genderParam: string }>()
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` })

  const containerWrapperRef = createRef<HTMLElement>()
  const sceneRef = useRef(null)
  const messageListRef = useRef(null)
  const assetContainerRef = useRef(null)
  const keepAssetsRef = useRef<KeepAssets>(null)
  const assetContainerListRef = useRef<Map<string, { assetContainer?: AssetContainer, meshList?: Mesh[] }>>(null)
  // Input form
  const formSchema = Yup.object().shape({
    message: Yup.string()
    // .required(intl.formatMessage({ id: "message-is-required", defaultMessage: "Message is required" }))
  })
  const validationOpt = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, formState: { errors } } = useForm(validationOpt)
  // Get languages, voice and completion hooks
  const { onGetAuthMode: handleAuthMode } = useAuthMode();
  const { onGetLanguages: handleLanguages } = useLanguages()
  const { onGetVoice: handleVoice } = useVoice()
  const { onGetModel: handleModel } = useModel()
  const { onGetCompletions: handleCompletion } = useCompletions()
  const { onGetTask: handleTask } = useTask()
  // Canvas
  const canvasWrapperRef = useRef(null);
  const mainCanvasWrapperRef = useRef(null);
  const contentWrapperRef = useRef(null);
  const [sceneIsReady, setSceneIsReady] = useState<boolean>(false);
  const [modelIsLoading, setModelIsLoading] = useState<boolean>(true);
  // User Input
  const headGeoMorphTargetIndexesByName = useRef<any[]>([]);
  // Conversation
  const conversationInputRef = useRef<HTMLInputElement>(null);
  const conversationRef = useRef<ConversationAPI[]>([]);
  const [conversation, setConversation] = useState<ConversationEntry[]>([]);
  const [botIsTyping, setBotIsTyping] = useState<boolean>(false);
  // Camera such as Default Camera, Close-up Camera, etc.
  const cameraZoomLevel = useRef<number>(0);
  const [cameraSettings, setCameraSettings] = useState<CameraSettings>(cameraSettingsList[0])
  // Language, Voice, Model
  // Desktop Options
  const [authMode, setAuthMode] = useState<boolean>(true);
  const [currentLanguage, setCurrentLanguage] = useState<Language>();
  const [currentVoice, setCurrentVoice] = useState<Voice>();
  const [currentModel, setCurrentModel] = useState<Model>();
  const [languageList, setLanguageList] = useState<Language[]>([]);
  const [voiceList, setVoiceList] = useState<Voice[]>([]);
  const [modelList, setModelList] = useState<Model[]>([]);
  // Mobile Options, and all depend on desktop options
  const [currentOptionsLanguage, setCurrentOptionsLanguage] = useState<Language>();
  const [currentOptionsVoice, setCurrentOptionsVoice] = useState<Voice>();
  const [currentOptionsModel, setCurrentOptionsModel] = useState<Model>();
  const [optionsLanguageList, setOptionsLanguageList] = useState<Language[]>([]);
  const [optionsVoiceList, setOptionsVoiceList] = useState<Voice[]>([]);
  const [optionsModelList, setOptionsModelList] = useState<Model[]>([]);
  // Is show choose options modal
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
  const [shareUrlModalVisible, setShareUrlModalVisible] = useState<boolean>(false);
  // Task Progress and Exp
  const [isAirdropFinished, setIsAirdropFinished] = useState<boolean>(false);
  const [taskProgress, setTaskProgress] = useState<TaskProgress[]>([]);
  const [taskDetails, setTaskDetails] = useState<Task>({ max_exp: 0, exp: 0, is_max_exp: false, is_share: false, is_airdrop: false });
  // Is Mute
  const [isMute, setIsMute] = useState<boolean>(true);
  const [isRecording, setIsRecording] = useState<boolean>(false);

  // const checkTaskProgress = async () => {
  //   // Set task progress
  //   if (content && content.token && !isAirdropFinished) {
  //     const taskProgressResponse = await handleTask(content && content.token ? content.token : null);
  //     if (taskProgressResponse.error)
  //       throw new Error(taskProgressResponse.message);
  //     setTaskProgress(taskProgressResponse.data.tasks);
  //   }
  // }

  const formik = useFormik({
    // enableReinitialize: false,
    initialValues: { message: "" },
    validationSchema: formSchema,
    onSubmit: async (data, { resetForm }) => {
      try {
        if (!data.message) {
          // notify(`${intl.formatMessage({ id: "please-input-something", defaultMessage: "Please input something" })}`, 'warning')
          return;
        }
        if (!currentVoice?.id || !currentModel?.id) {
          //   notify(`${intl.formatMessage({ id: "voice-and-model-is-required", defaultMessage: "Voice and model is required" })}`, 'warning')
          return;
        }

        setConversation((state) => [
          ...state,
          {
            content: `${data.message}`,
            role: "user",
            date: new Date(),
            id: uuidv4()
          },
        ]);
        resetForm();
        try {
          setBotIsTyping(true);
          // Send message to middleware
          const response = await handleCompletion([...conversationRef.current, { content: data.message, role: "user", }], currentModel.id, isMute ? 0 : currentVoice.id, (authMode || (!authMode && taskDetails.is_airdrop)) && content && content.token ? content.token : null);
          if (response.error)
            throw new Error(response.message)
          // Save conversation
          conversationRef.current = [...conversationRef.current, {
            content: data.message,
            role: "user",
          }];
          conversationRef.current = [...conversationRef.current, {
            content: response.data.data.response.raw_message.content,
            role: "assistant",
          }];
          // Set conversation to render
          setConversation((state) => [
            ...state,
            {
              content: response.data.data.response.message.content,
              role: "assistant",
              emotion: response.data.data.response.emotion,
              pose: response.data.data.response.pose,
              date: new Date(),
              id: uuidv4()
            },
          ]);
          // Play animation
          if (response.data.data.response.emotion && response.data.data.response.emotion !== "neutral") {
            const currentAnim = sceneRef.current.getAnimationGroupByName(response.data.data.response.emotion);
            if (currentAnim) {
              const idle = sceneRef.current.getAnimationGroupByName(`neutral`);
              idle.stop();
              currentAnim.start(false, 1.0, currentAnim.from, currentAnim.to, true)
            }
          }
          // Play audio
          if (response.data.data.audio) {
            const frameRate = 60;
            const keyFrames = {};
            const animationGroups = new AnimationGroup("mouthViseme", sceneRef.current);
            const mouthCues: [] = response.data.data.mouthShape.mouthCues;
            mouthCues.forEach((mouthCue: any, index: number) => {
              const currentFrame = frameRate * mouthCue.start;
              getMorpherValue(mouthCue.value).forEach((morpherValue: any) => {
                if (keyFrames[morpherValue.name] === undefined) {
                  keyFrames[morpherValue.name] = [];
                }
                keyFrames[morpherValue.name].push({
                  frame: currentFrame,
                  value: morpherValue.value,
                });
                if (mouthCues.length - 1 === index) {
                  getMorpherValue("A").forEach((endMorpherValue: any) => {
                    keyFrames[endMorpherValue.name].push({
                      frame: currentFrame,
                      value: endMorpherValue.value,
                    });
                  })
                }
              });
            });
            const headGeoMeshList = assetContainerListRef.current.get(currentModel.model?.name)?.meshList

            for (let i = 0; i < headGeoMeshList.length; i++) {
              if (keyFrames) {
                Object.keys(keyFrames).map((e, index) => {
                  const morphAnimation = new AnimationBabylon(e, "influence", frameRate, AnimationBabylon.ANIMATIONTYPE_FLOAT);
                  morphAnimation.setKeys(keyFrames[e]);
                  const target = headGeoMeshList[i].morphTargetManager.getTarget(headGeoMorphTargetIndexesByName.current[e]);
                  return animationGroups.addTargetedAnimation(morphAnimation, target);
                })
              }
            }

            animationGroups.onAnimationEndObservable.add(() => {
              animationGroups.dispose();
            })
            animationGroups.start(false, 1.0, animationGroups.from, animationGroups.to, true);
            const audio = DecodeBase64ToBinary(response.data.data.audio.split(',')[1]);
            const viseme = new Sound("mouthVisemeSound", audio, sceneRef.current, null, {
              loop: false,
              autoplay: true,
              volume: 1
            });
          }
          // Set task progress
          // await checkTaskProgress();
        } catch (error) {
          console.error("Error submitting content:", error);
          setConversation((state) => [
            ...state,
            {
              content: `😐`,
              role: "assistant",
              date: new Date(),
              id: uuidv4()
            },
          ]);
        } finally {
          if (!isMobile)
            conversationInputRef.current.focus();
          setBotIsTyping(false);
        }
      } catch (e) {
        console.error(e)
      }
    }
  })

  // Check Auth Mode i.e. public or private
  const checkAuthMode = useCallback(async () => {
    try {
      const response = await handleAuthMode();
      if (response.error) throw new Error(response.message)
      const _data = response.data.shouldAuthenticate
      // if (!_data)
      //   removeCookie("_acc", { path: '/' })
      setAuthMode(_data)
      return _data
    } catch (e: any) {
      setAuthMode(true) // fallback
      // console.error(e)
      return true
    }
  }, [handleAuthMode])

  useEffect(() => {
    // Chat container always scroll to bottom
    const scrollToBottom = () => {
      messageListRef?.current?.scrollToBottom();
    }
    scrollToBottom();
  }, [conversation])

  // useEffect(() => {
  //   if (!["male", "female"].includes(genderParam))
  //     history.replace({ pathname: '../chat' });
  // }, [genderParam, history])

  // Load the base model based on current prompt
  useEffect(() => {
    if (!sceneIsReady || !sceneRef.current) {
      return undefined;
    }

    const assetsManagerRef = new AssetsManager(sceneRef.current);
    assetsManagerRef.useDefaultLoadingScreen = false;
    assetsManagerRef.autoHideLoadingUI = false;

    if (sceneRef.current && currentModel) {
      if (!sceneRef.current.getMeshByName(currentModel.model?.name)) {
        try {
          // if asset container is loaded
          if (assetContainerListRef.current.has(currentModel.model?.name)) {
            assetContainerListRef.current.get(currentModel.model?.name)?.assetContainer.addAllToScene();
            assetContainerListRef.current.get(assetContainerRef.current)?.assetContainer.removeAllFromScene();
            assetContainerRef.current = currentModel.model?.name;
            const actionAnim = sceneRef.current.getAnimationGroupByName("neutral");
            if (actionAnim) {
              actionAnim.play(true);
            }
            const eyeBlinkAnim = sceneRef.current.getAnimationGroupByName("eyeBlink");
            if (eyeBlinkAnim) {
              eyeBlinkAnim.play(true);
            }
          } else {
            // if asset container is not loaded

            // Show loading screen
            sceneRef.current.getEngine().displayLoadingUI();

            // esline-disable-next-line 
            if (assetContainerRef.current) {
              assetContainerListRef.current.get(assetContainerRef.current)?.assetContainer.removeAllFromScene();
            }

            const regToRemoveFileName = /[^\/]+$/g // eslint-disable-line 
            const newFileUrl = currentModel.model?.file_url ? currentModel.model.file_url.replace(regToRemoveFileName, "") : "../glb/characters/";
            const newFileName = `${currentModel.model?.file_name || (genderParam === "female" ? `Jinko_Female_Base` : `Jinko_Male_Base`)}.glb`;
            const model = assetsManagerRef.addMeshTask("Model", "", newFileUrl, newFileName);
            model.onSuccess = function tModel(task: any) {
              const taskT = task;
              sceneRef.current.stopAllAnimations();
              taskT.loadedMeshes[0].name = currentModel.model?.name;
              headGeoMorphTargetIndexesByName.current = [];
              const headGeoPrimitiveList = [];

              const jinkoTfNd = sceneRef.current.getTransformNodeByName("Jinko")
              const childTfNdsJinko = jinkoTfNd.getChildTransformNodes(true)
              const childTfNdJinkoName = childTfNdsJinko[0].name;
              childTfNdsJinko[0].dispose();
              const getJinkoMeshList = sceneRef.current.getTransformNodeByName(childTfNdJinkoName)
              getJinkoMeshList.getChildMeshes(true).forEach((mesh: any) => {
                mesh.parent = jinkoTfNd // eslint-disable-line
                mesh.isPickable = false // eslint-disable-line
                mesh.doNotSyncBoundingInfo = true// eslint-disable-line
                headGeoPrimitiveList.push(mesh)
              })
              // let tmpPrimitive = null;
              // let primitiveNum = 0;
              // do {
              //   tmpPrimitive = sceneRef.current.getMeshByName(`Jinko_primitive${primitiveNum}`);
              //   if (tmpPrimitive) {
              //     primitiveNum += 1;
              //     tmpPrimitive.isPickable = false;
              //     tmpPrimitive.doNotSyncBoundingInfo = true;
              //     headGeoPrimitiveList.push(tmpPrimitive);

              //   }
              // } while (tmpPrimitive);

              assetContainerListRef.current.set(currentModel.model?.name, { assetContainer: new AssetContainer(sceneRef.current), meshList: headGeoPrimitiveList })
              assetContainerRef.current = currentModel.model?.name;
              for (let i = 0; i < headGeoPrimitiveList[0].morphTargetManager.numTargets; i++) {
                headGeoMorphTargetIndexesByName.current[headGeoPrimitiveList[0].morphTargetManager.getTarget(i).name] = i;
              }

              // console.log(Object.values(sceneRef.current.getMaterialByName("Face").meshMap)[0]);

              // Load blink eye animations
              if (headGeoPrimitiveList.length > 0) {
                const frameRate = 60;
                const eyeBlink = new AnimationGroup("eyeBlink", sceneRef.current);
                const keyframes = [{ frame: 0, value: 0 }, { frame: frameRate * 4.9, value: 0 }, { frame: frameRate * 5, value: 1 }, { frame: frameRate * 5.5, value: 0 }];

                const morpherName = genderParam === "female" ? "Eye Blink" : "Blink eye";

                for (let i = 0; i < headGeoPrimitiveList.length; i++) {
                  const morphAnimation = new AnimationBabylon("eyeBlink", "influence", frameRate, AnimationBabylon.ANIMATIONTYPE_FLOAT);
                  morphAnimation.setKeys(keyframes);
                  const target = headGeoPrimitiveList[i].morphTargetManager.getTarget(headGeoMorphTargetIndexesByName.current[morpherName]);
                  eyeBlink.addTargetedAnimation(morphAnimation, target);
                }
                if (genderParam === "female") {
                  const morphAnimation = new AnimationBabylon("eyeLashesBlink", "influence", frameRate, AnimationBabylon.ANIMATIONTYPE_FLOAT);
                  morphAnimation.setKeys(keyframes);
                  const jinkoEyeLashesTfNd = sceneRef.current.getTransformNodeByName("JinkoEyelashes");
                  const childjinkoEyeLashesTfNd = jinkoEyeLashesTfNd.getChildTransformNodes(true)
                  const childjinkoEyeLashesTfNdName = childjinkoEyeLashesTfNd[0].name;
                  childjinkoEyeLashesTfNd[0].dispose();
                  const eyeLashesBlink = sceneRef.current.getMeshByName(childjinkoEyeLashesTfNdName);
                  if (eyeLashesBlink) {
                    const target = eyeLashesBlink.morphTargetManager.getTarget(0);
                    eyeBlink.addTargetedAnimation(morphAnimation, target);
                  }
                }
                eyeBlink.play(true);
              }
            }
            animList.forEach((anim: any) => {
              const animTask = assetsManagerRef.addMeshTask(`${anim.animName}`, "", `../glb/animations/${genderParam}/`, `${anim.animName}.glb`);
              animTask.onSuccess = function (task: any) {
                const taskT = task;
                if (taskT.loadedMeshes.length > 0)
                  taskT.loadedMeshes[0].dispose();
                // Rename the animation groups to match the animation name
                taskT.loadedAnimationGroups[0].name = `${anim.animName}`;

              }
            });
            assetsManagerRef.onFinish = async function assetMgrOnFinish() {
              // Load Animation
              // Enable blending
              animList.forEach((anim: any) => {
                const animation = sceneRef.current.getAnimationGroupByName(anim.animName);
                // Discard any meshes - we just want the animations
                const basicAnims: any[] = []
                const groups: any[] = []
                basicAnims.push(animation);
                const bodyGeo = sceneRef.current.getTransformNodeByName(genderParam === "female" ? "JinkoF" : "JinkoM");
                basicAnims.forEach((basicAnim: any) => {
                  // THIS BIT NOT WORKING IN VERSION 5
                  const group = basicAnim.clone(basicAnim.name, (target: any) => {
                    return bodyGeo.parent.getChildren((node: any) => node.name === target.name, false)[0];
                    // let idx = destMesh.skeleton.getBoneIndexByName(target.name)
                    // return destMesh.skeleton.bones[idx]
                  })
                  groups.push(group);
                })
                if (groups[0].name === "neutral") {
                  groups[0].play(true);
                  // sceneRef.current.animationPropertiesOverride = new AnimationPropertiesOverride();
                  // sceneRef.current.animationPropertiesOverride.enableBlending = true;
                  // sceneRef.current.animationPropertiesOverride.blendingSpeed = 0.05;
                } else {
                  groups[0].onAnimationGroupEndObservable.add(() => {
                    const idle = sceneRef.current.getAnimationGroupByName("neutral");
                    groups[0].stop();
                    idle.play(true)
                  });
                }
                for (let i = 0; i < groups[0].targetedAnimations.length; i++) {
                  groups[0].targetedAnimations[i].animation.enableBlending = true;
                  groups[0].targetedAnimations[i].animation.blendingSpeed = 0.05;
                }

                // Dispose the animation groups
                animation.dispose();
              })
              // const faceMesh: any = Object.values(sceneRef.current.getMaterialByName("Face").meshMap)[0];
              // const camera = sceneRef.current.getCameraByName("arc");
              // camera.inputs.attached.custommousewheel.customZoomFeature = true;
              // camera.inputs.attached.custommousewheel.customStartZoomPosition = camera.target.clone();
              // camera.inputs.attached.custommousewheel.customEndZoomPosition = faceMesh.getBoundingInfo().boundingBox.centerWorld.clone();
              const currentAssetContainer = assetContainerListRef.current.get(currentModel.model?.name).assetContainer;
              currentAssetContainer.moveAllFromScene(keepAssetsRef.current);
              currentAssetContainer.addAllToScene();
              await new Promise(resolve => setTimeout(resolve, 1000));
              sceneRef.current.getEngine().hideLoadingUI();
            }
            assetsManagerRef.load();
          }
        } catch (e: any) {
          console.error(e)
        }
      }
    }
    return () => {
      assetsManagerRef.reset();
      // assetContainerListRef.current.forEach((value, key) => {
      //   value.assetContainer.dispose();
      // });
      // assetContainerListRef.current = new Map<string, { assetContainer: AssetContainer, meshList: [] }>();
    }
  }, [currentModel, genderParam, sceneIsReady])

  // const initTask = useCallback(async () => {
  //   if (content && content.token) {
  //     const task = await handleTask(content && content.token ? content.token : null);
  //     if (task.error)
  //       throw new Error(task.message)
  //     if (task.data.airdrop_finished)
  //       setIsAirdropFinished(true)
  //     setTaskProgress(task.data.tasks)
  //   }
  // }, [content, handleTask])

  // useEffect(() => {
  //   initTask();
  // }, [initTask])

  useEffect(() => {
    const init = async () => {
      try {
        const checkAuth = await checkAuthMode();
        const languageResponse = await handleLanguages();
        if (languageResponse.error)
          throw new Error(languageResponse.message);
        const languages = languageResponse.data;
        languages.map((obj, i) => {
          const tObj = obj;
          tObj.id = i + 1;
          return tObj
        })
        setCurrentLanguage(languages[0]);
        setLanguageList(languages);
        const modelResponse = await handleModel(languages[0].code, genderParam);
        if (modelResponse.error)
          throw new Error(modelResponse.message);
        setCurrentModel((modelResponse.data)[0]);
        setModelList(modelResponse.data);
        if (modelResponse.data[0]?.greeting_prompt) {
          conversationRef.current = [...conversationRef.current, {
            content: modelResponse.data[0]?.greeting_prompt,
            role: "assistant",
          }];
          setConversation((state) => [
            ...state,
            {
              content: modelResponse.data[0]?.greeting_prompt,
              role: "assistant",
              emotion: "joy",
              date: new Date(),
              id: uuidv4()
            },
          ]);
        }
        const voiceResponse = await handleVoice(languages[0].code, genderParam);
        if (voiceResponse.error)
          throw new Error(voiceResponse.message);
        setVoiceList(voiceResponse.data);
        if (modelResponse.data[0]?.default_voice_id) {
          setCurrentVoice(voiceResponse.data.find(l => l.id.toString() === modelResponse.data[0].default_voice_id.toString()));
        } else {
          setCurrentVoice(voiceResponse.data[0]);
        }
      } catch (e: any) {
        console.error(e)
      }
    }
    init();
  }, [handleLanguages, checkAuthMode, genderParam, handleModel, handleVoice])

  // Change camera settings
  useEffect(() => {
    if (sceneRef.current) {
      const camera = sceneRef.current.getCameraByName("arc");
      if (camera) {
        camera.radius = cameraSettings.radius;
        camera.lockedTarget = cameraSettings.target;
        camera.lowerBetaLimit = cameraSettings.lowerBetaLimit;
        camera.upperBetaLimit = cameraSettings.upperBetaLimit;
        camera.lowerRadiusLimit = cameraSettings.lowerRadiusLimit;
        camera.upperRadiusLimit = cameraSettings.upperRadiusLimit;
      }
    }
  }, [cameraSettings])

  // Responsive canvas
  useEffect(() => {
    // Handle window resize event to update the canvas size
    const handleResize = () => {
      // Set up initial size of the canvas
      const topOptionsBar = document.getElementById("top-options-bar");
      const navbarElement = document.getElementById("cs-navbar");
      const babylonCanvas = document.getElementById("babylon-canvas");
      const babylonLoading = document.getElementById("babylon-loading");

      babylonCanvas.style.width = `${window.innerWidth < 992 ? contentWrapperRef.current.offsetWidth : 500}px`;
      babylonCanvas.style.height = `${window.innerHeight - navbarElement.clientHeight - topOptionsBar.clientHeight}px`;
      babylonLoading.style.width = `${window.innerWidth < 992 ? contentWrapperRef.current.offsetWidth : 500}px`;
      babylonLoading.style.height = `${window.innerHeight - navbarElement.clientHeight - topOptionsBar.clientHeight}px`;
      mainCanvasWrapperRef.current.style.width = `${window.innerWidth < 992 ? contentWrapperRef.current.offsetWidth : 500}px`;
      // Additional logic to redraw the canvas if needed
      // Redraw the canvas when the size of the canvas container changes
      if (sceneRef.current)
        sceneRef.current?.getEngine().resize();
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Handle task progress
  useEffect(() => {
    if (taskProgress.length === 0)
      return undefined;
    const chatExpProgress = taskProgress.find(function (el) {
      return el.task_key === "chat_exp";
    }) || null
    const shareProgress = taskProgress.find(function (el) {
      return el.task_key === "share";
    }) || null
    const discordProgress = taskProgress.find(function (el) {
      return el.task_key === "discord";
    }) || null
    const airdropProgress = taskProgress.find(function (el) {
      return el.task_key === "airdrop";
    }) || null
    if (!chatExpProgress || !shareProgress || !discordProgress)
      return undefined;
    let currTaskProgress = 0;
    const totalTask = 3;
    if (chatExpProgress?.is_done) currTaskProgress += 1;
    if (shareProgress?.is_done) currTaskProgress += 1;
    if (discordProgress?.is_done) currTaskProgress += 1;
    setTaskDetails({ max_exp: chatExpProgress.progress.max_progress, exp: chatExpProgress.progress.progress, is_max_exp: chatExpProgress.is_done, is_share: shareProgress.is_done, is_join_discord: discordProgress.is_done, is_airdrop: airdropProgress ? true : false, currTaskProgress: currTaskProgress, totalTask: totalTask });//eslint-disable-line
    return () => {
      // clear cache
    }

  }, [taskProgress])

  // Handle is mute side effect
  useEffect(() => {
    if (sceneRef.current && EngineBabylon.audioEngine) {
      if (isMute)
        EngineBabylon.audioEngine.setGlobalVolume(0)
      else
        EngineBabylon.audioEngine.setGlobalVolume(1)
    }
  }, [isMute])

  // Handle is mute button
  const handleIsMuteToggle = async () => {
    setIsMute(!isMute)
  }

  // Handle Desktop Language List Dropdown 
  const handleLanguageListDropdown = useCallback(async (item) => {
    const newLocale = Object.values(item)[0];
    const tLanguage = languageList.find(l => l.id.toString() === newLocale.toString());
    setCurrentLanguage(tLanguage);
    conversationRef.current = [];
    setConversation([]);
    try {
      const model = await handleModel(tLanguage.code, genderParam);
      if (model.error)
        throw new Error(model.message);
      setCurrentModel((model.data)[0]);
      if (model.data[0]?.greeting_prompt) {
        conversationRef.current = [...conversationRef.current, {
          content: model.data[0]?.greeting_prompt,
          role: "assistant",
        }];
        setConversation((state) => [
          ...state,
          {
            content: model.data[0]?.greeting_prompt,
            role: "assistant",
            emotion: "joy",
            date: new Date(),
            id: uuidv4()
          },
        ]);
      }
      setModelList(model.data);
      const voice = await handleVoice(tLanguage.code, genderParam);
      if (voice.error)
        throw new Error(voice.message);
      if (model.data[0]?.default_voice_id) {
        setCurrentVoice(voice.data.find(l => l.id.toString() === model.data[0].default_voice_id.toString()));
      } else {
        setCurrentVoice(voice.data[0]);
      }
      setVoiceList(voice.data);
    } catch (e: any) {
      console.error(e)
    }
  }, [languageList, handleModel, handleVoice, genderParam])

  // Handle Desktop Voice List Dropdown 
  const handleVoiceListDropdown = useCallback((item) => {
    const newLocale = Object.values(item)[0];
    setCurrentVoice(voiceList.find(l => l.id.toString() === newLocale.toString()))
  }, [voiceList])

  // Handle Model List Selector 
  const handleModelListSelector = useCallback((item) => {
    const newLocale = Object.values(item)[0];
    const model = modelList.find(l => l.id.toString() === newLocale.toString());
    setCurrentModel(model)
    if (model.default_voice_id)
      setCurrentVoice(voiceList.find(l => l.id.toString() === model.default_voice_id.toString()));
    conversationRef.current = [];
    setConversation([]);
    if (model.greeting_prompt) {
      conversationRef.current = [...conversationRef.current, {
        content: model.greeting_prompt,
        role: "assistant",
      }];
      setConversation((state) => [
        ...state,
        {
          content: model.greeting_prompt,
          role: "assistant",
          emotion: "joy",
          date: new Date(),
          id: uuidv4()
        },
      ]);
    }
  }, [modelList, voiceList])

  const handleShareModalButton = async () => {
    setShareUrlModalVisible(true);
  }

  const closeShareUrlModalHandler = () => {
    setShareUrlModalVisible(false);
  };

  // Handle the show choose options modal
  const handleOptionsButton = () => {
    setCurrentOptionsLanguage(currentLanguage);
    setCurrentOptionsVoice(currentVoice);
    setCurrentOptionsModel(currentModel);
    setOptionsLanguageList(languageList);
    setOptionsVoiceList(voiceList);
    setOptionsModelList(modelList);
    setOptionsVisible(true);
  }

  // Handle the hide choose options modal
  const closeOptionsHandler = () => {
    setOptionsVisible(false);
  };

  // Handle Mobile Language List Dropdown
  const handleOptionsLanguageListDropdown = useCallback(async (item) => {
    const newLocale = Object.values(item)[0];
    const tLanguage = optionsLanguageList.find(l => l.id.toString() === newLocale.toString());
    setCurrentOptionsLanguage(tLanguage)
    try {
      const model = await handleModel(tLanguage.code, genderParam);
      if (model.error)
        throw new Error(model.message);
      setCurrentOptionsModel((model.data)[0]);
      setOptionsModelList(model.data);
      const voice = await handleVoice(tLanguage.code, genderParam);
      if (voice.error)
        throw new Error(voice.message);
      if (model.data[0]?.default_voice_id) {
        setCurrentOptionsVoice(voice.data.find(l => l.id.toString() === model.data[0].default_voice_id.toString()));
      } else {
        setCurrentOptionsVoice(voice.data[0]);
      }
      setOptionsVoiceList(voice.data);
    } catch (e: any) {
      console.error(e)
    }

  }, [optionsLanguageList, genderParam, handleModel, handleVoice])

  // Handle Mobile Voice List Dropdown
  const handleOptionsVoiceListDropdown = useCallback((item) => {
    const newLocale = Object.values(item)[0];
    setCurrentOptionsVoice(optionsVoiceList.find(l => l.id.toString() === newLocale.toString()))
  }, [optionsVoiceList])

  // Handle Mobile Model List Selector
  const handleOptionsModelListSelector = useCallback((item) => {
    const newLocale = Object.values(item)[0];
    const model = optionsModelList.find(l => l.id.toString() === newLocale.toString());
    setCurrentOptionsModel(model)
  }, [optionsModelList])

  // Handle Mobile Apply Button
  const handleOptionsApplyButton = useCallback(() => {
    setLanguageList(optionsLanguageList);
    setVoiceList(optionsVoiceList);
    setModelList(optionsModelList);
    setCurrentLanguage(currentOptionsLanguage);
    setCurrentModel(currentOptionsModel);
    if (currentOptionsModel.default_voice_id)
      setCurrentVoice(optionsVoiceList.find(l => l.id.toString() === currentOptionsModel.default_voice_id.toString()));

    conversationRef.current = [];
    setConversation([]);
    if (currentOptionsModel.greeting_prompt) {
      conversationRef.current = [...conversationRef.current, {
        content: currentOptionsModel.greeting_prompt,
        role: "assistant",
      }];
      setConversation((state) => [
        ...state,
        {
          content: currentOptionsModel.greeting_prompt,
          role: "assistant",
          emotion: "joy",
          date: new Date(),
          id: uuidv4()
        },
      ]);
    } setOptionsVisible(false);
  }, [currentOptionsLanguage, currentOptionsModel, optionsLanguageList, optionsVoiceList, optionsModelList])

  // Handle back to gender menu button
  const handleBackToMenuButton = () => {
    sceneRef.current?.getEngine().dispose();
    navigate('../chat');
  }

  const getTranscript = (transcript: string, blob: Blob) => {
    formik.setFieldValue("message", transcript);
    formik.submitForm();
    return true;
  }

  // Initialize avatar environment
  const onSceneMount = (event: any) => {
    sceneRef.current = event.scene;
    // Performance settings
    // sceneRef.current.performancePriority = ScenePerformancePriority.Intermediate;
    const options = new SceneOptimizerOptions(60);
    options.addOptimization(new HardwareScalingOptimization(0, 1));
    // Optimizer
    const optimizer = new SceneOptimizer(sceneRef.current, options);
    sceneRef.current.freezeWorldMatrix = true;
    sceneRef.current.skipPointerMovePicking = true;
    sceneRef.current.clearCachedVertexData();
    // Debug Layer
    // sceneRef.current.debugLayer.show();
    // Transparent background
    sceneRef.current.clearColor = new Color4(0, 0, 0, 0);
    EngineBabylon.audioEngine.useCustomUnlockedButton = true;
    // Add camera to scene
    const camera = new ArcRotateCamera("arc", cameraSettingsList[0].alpha, cameraSettingsList[0].beta, cameraSettingsList[0].radius, cameraSettingsList[0].target, sceneRef.current);
    camera.lowerBetaLimit = cameraSettingsList[0].lowerBetaLimit;
    camera.upperBetaLimit = cameraSettingsList[0].upperBetaLimit;
    // Zoom in
    camera.lowerRadiusLimit = cameraSettingsList[0].lowerRadiusLimit;
    // Zoom out
    camera.upperRadiusLimit = cameraSettingsList[0].upperRadiusLimit;
    // camera.upperRadiusLimit = 50;
    camera.wheelPrecision = 50;
    camera.panningSensibility = 0;
    camera.fov = cameraSettingsList[0].fov;
    camera.useFramingBehavior = true;
    camera.inputs.removeByType("ArcRotateCameraMouseWheelInput");
    const pointersInput = camera.inputs.attached.pointers as ArcRotateCameraPointersInput;
    // pointersInput.multiTouchPanAndZoom = false;
    // pointersInput.multiTouchPanning = false;
    pointersInput.pinchZoom = false;
    camera.attachControl(sceneRef.current.getEngine().getRenderingCanvas(), true);
    // Custom Zoom in/out
    sceneRef.current.onPointerObservable.add((pointerInfo) => {
      pointerInfo.event.preventDefault();
      let delta = 0;
      switch (pointerInfo.type) {
        // case PointerEventTypes.POINTERDOWN:
        //   break;
        // case PointerEventTypes.POINTERUP:
        //   break;
        // case PointerEventTypes.POINTERMOVE:
        //   break;
        case PointerEventTypes.POINTERWHEEL:
          if (pointerInfo.event.wheelDelta) {
            delta = pointerInfo.event.wheelDelta;
          }
          else if (pointerInfo.event.detail) {
            delta = -pointerInfo.event.detail;
          }
          if (delta > 0 && cameraZoomLevel.current < cameraSettingsList.length - 1) {
            cameraZoomLevel.current += 1
            setCameraSettings(cameraSettingsList[cameraZoomLevel.current]);
          } else if (delta <= 0 && cameraZoomLevel.current > 0) {
            // do nothing 
            cameraZoomLevel.current -= 1
            setCameraSettings(cameraSettingsList[cameraZoomLevel.current]);
          }
          break;
        // case PointerEventTypes.POINTERDOUBLETAP:
        //   break
        default:
          break
      }
    });
    // Add light to scene
    const lightfront = new DirectionalLight("lightFront", new Vector3(0, 1, -2), sceneRef.current);
    lightfront.position = new Vector3(3, 3, 3);
    lightfront.intensity = 3;
    const lightBack = new DirectionalLight("lightBack", new Vector3(0, -1, 2), sceneRef.current);
    lightBack.position = new Vector3(-3, -3, -3);
    lightBack.intensity = 3;
    const lightTop = new DirectionalLight("lightTop", new Vector3(0, -1, 0), sceneRef.current);
    lightTop.position = new Vector3(0, -2, 0);
    lightTop.intensity = 1;

    assetContainerListRef.current = new Map<string, { assetContainer: AssetContainer, meshList: [] }>();

    keepAssetsRef.current = new KeepAssets();
    keepAssetsRef.current.cameras.push(camera)
    keepAssetsRef.current.lights.push(lightfront);
    keepAssetsRef.current.lights.push(lightBack);
    keepAssetsRef.current.lights.push(lightTop);

    // Replace the default loading screen
    const babylonCanvasElement = document.getElementById("babylon-canvas");
    const loadingScreenElement = document.getElementById("babylon-loading");
    const topOptionsBar = document.getElementById("top-options-bar");
    const navbarElement = document.getElementById("cs-navbar");
    // Show the custom loading screen
    DefaultLoadingScreen.prototype.displayLoadingUI = function dLoadingUI() {
      try {
        setModelIsLoading(true);
        loadingScreenElement.style.width = `${babylonCanvasElement.clientWidth}px`;
        loadingScreenElement.style.height = `${babylonCanvasElement.clientHeight}px`;
        loadingScreenElement.style.display = `block`;
        loadingScreenElement.style.paddingBottom = `${navbarElement.clientHeight + topOptionsBar.clientHeight}px`;
      } catch (e) {
        console.error(e);
      }
    };
    // Hide the custom loading screen
    DefaultLoadingScreen.prototype.hideLoadingUI = function hLoadingUI() {
      try {
        setModelIsLoading(false);
        loadingScreenElement.style.display = "none";
      } catch (e) {
        console.error(e)
      }
    };
    // Handle scene resize
    sceneRef.current.getEngine().resize();
    setSceneIsReady(true);
  }

  return (
    <div style={{ height: "100%" }}>
      {/* <ShareUrlModal show={shareUrlModalVisible} onClose={closeShareUrlModalHandler} taskDetails={taskDetails} isAirdropFinished={isAirdropFinished} checkTaskProgress={checkTaskProgress} containerWrapperRef={containerWrapperRef} /> */}
      <OptionsMobileModal show={optionsVisible} onClose={closeOptionsHandler} handleOptionsLanguageListDropdown={handleOptionsLanguageListDropdown} handleOptionsVoiceListDropdown={handleOptionsVoiceListDropdown} handleOptionsModelListSelector={handleOptionsModelListSelector} handleOptionsApplyButton={handleOptionsApplyButton} optionsLanguageList={optionsLanguageList} currentOptionsLanguage={currentOptionsLanguage} optionsVoiceList={optionsVoiceList} currentOptionsVoice={currentOptionsVoice} optionsModelList={optionsModelList} currentOptionsModel={currentOptionsModel} />
      <ContainerWrapper ref={containerWrapperRef}>
        <Container style={{ height: "100%" }}>
          {/* Options mobile view modal */}
          <div style={{ height: '100%', position: 'relative', maxWidth: "100%" }}>
            <ContentWrapper ref={contentWrapperRef} gap="10px" justify="center" align="start" direction="row" >
              <Flex ref={mainCanvasWrapperRef} justify="center" align="center" direction="row" wrap="wrap" style={{ position: "relative" }}>
                <TopOptionsBarWrapper id="top-options-bar" gap="10px" justify="space-between" direction="row" style={{ width: "100%", height: "45px" }}>
                  <ButtonCustom bg="rgba(118, 118, 115, 0.5)" height="35px" width="35px" minwidth="35px" padding="0px" borderradius="100%" onPress={() => { handleBackToMenuButton() }} >
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18.75 7.7152H3.925L8.4625 2.10999C8.67467 1.84745 8.77675 1.50898 8.74628 1.16903C8.7158 0.829086 8.55527 0.515513 8.3 0.297298C8.04473 0.0790819 7.71563 -0.0259025 7.3851 0.00544001C7.05456 0.0367826 6.74967 0.201885 6.5375 0.464426L0.2875 8.17802C0.245451 8.23937 0.207849 8.30383 0.175 8.37086C0.175 8.43514 0.175 8.47371 0.0875002 8.53799C0.0308421 8.68539 0.0011764 8.8423 0 9.0008C0.0011764 9.1593 0.0308421 9.31621 0.0875002 9.46362C0.0875002 9.5279 0.0874998 9.56647 0.175 9.63075C0.207849 9.69778 0.245451 9.76223 0.2875 9.82359L6.5375 17.5372C6.65503 17.6823 6.8022 17.799 6.96856 17.879C7.13491 17.959 7.31636 18.0003 7.5 18C7.79207 18.0006 8.07511 17.896 8.3 17.7043C8.42657 17.5964 8.5312 17.4638 8.60789 17.3143C8.68458 17.1647 8.73183 17.001 8.74692 16.8326C8.76202 16.6643 8.74466 16.4945 8.69586 16.333C8.64705 16.1715 8.56775 16.0215 8.4625 15.8916L3.925 10.2864H18.75C19.0815 10.2864 19.3995 10.151 19.6339 9.90986C19.8683 9.66876 20 9.34177 20 9.0008C20 8.65984 19.8683 8.33284 19.6339 8.09175C19.3995 7.85065 19.0815 7.7152 18.75 7.7152Z" fill="white" />
                    </svg>
                  </ButtonCustom>
                  <div id="exp-bar" style={{ display: "flex", width: "100%", justifyContent: "center", alignItems: "center" }}>
                    {
                      content ?
                        taskDetails.is_max_exp && taskDetails.is_share && taskDetails.is_join_discord && taskDetails.is_airdrop ?
                          // <Marquee direction="left" delay={2} autoFill>
                          //   <GeneralText size="1rem" color="var(--whiteColor)" weight="normal" css={{ padding: "0px 15px 0px 0px" }} >
                          //     {intl.formatMessage({ id: "congratulations-you-have-unlocked-an", defaultMessage: "Congratulations! 🥳 You've unlocked an amazing achievement and qualified for the Jinko Airdrop!" })}
                          //   </GeneralText>
                          // </Marquee>
                          <>
                            <div style={{ minWidth: "120px", width: "100%", maxWidth: "140px", height: "22px", position: "relative", background: "linear-gradient(180deg,rgba(54,56,41,0.50)0%,rgba(0,0,0,0.50)100%)", borderRadius: "5px", border: "0.50px #777E90 solid" }}>
                              <div style={{ width: `${taskDetails.exp / taskDetails.max_exp * 100}%`, height: "100%", position: "absolute", background: "linear-gradient(180deg, rgba(241.86,255,126.17,0.30)0%,rgba(229,255,0,0.50)100%)", borderRadius: "4px" }} />
                              <div style={{ width: "100%", height: "100%", textAlign: "center", color: "white", fontSize: "12px", fontWeight: "900", wordWrap: "break-word" }}>{taskDetails.exp} / {taskDetails.max_exp} Exp</div>
                            </div>
                            <ButtonCustom padding="0px" borderradius="100%" bg="transparent" height="45px" width="45px" minwidth="45px" onPress={() => { handleShareModalButton() }} disabled={modelIsLoading || botIsTyping}>
                              <img alt="airdrop completed anim" src="/images/airdrop/airdrop-complete.png" />
                            </ButtonCustom>
                          </>
                          :
                          !isAirdropFinished && taskDetails.max_exp > 0 ?
                            <>
                              <div style={{ minWidth: "120px", width: "100%", maxWidth: "140px", height: "22px", position: "relative", background: "linear-gradient(180deg,rgba(54,56,41,0.50)0%,rgba(0,0,0,0.50)100%)", borderRadius: "5px", border: "0.50px #777E90 solid" }}>
                                <div style={{ width: `${taskDetails.exp / taskDetails.max_exp * 100}%`, height: "100%", position: "absolute", background: "linear-gradient(180deg, rgba(241.86,255,126.17,0.30)0%,rgba(229,255,0,0.50)100%)", borderRadius: "4px" }} />
                                <div style={{ width: "100%", height: "100%", textAlign: "center", color: "white", fontSize: "12px", fontWeight: "900", wordWrap: "break-word" }}>{taskDetails.exp} / {taskDetails.max_exp} Exp</div>
                              </div>
                              <ButtonCustom padding="0px" borderradius="100%" bg="transparent" height="45px" width="45px" minwidth="45px" onPress={() => { handleShareModalButton() }} disabled={modelIsLoading || botIsTyping}>
                                <img alt="airdrop anim" src="/images/airdrop/airdrop-animation.gif" />
                              </ButtonCustom>
                            </>
                            :
                            null
                        :
                        null
                    }
                  </div>
                  <Flex gap="10px" align="end" direction="row" style={{ flexBasis: "0%" }}>
                    {isMobile ?
                      <ButtonCustom bg="var(--yellowColor))" height="35px" width="35px" minwidth="35px" padding="0px" borderradius="100%" onPress={() => { handleOptionsButton() }} disabled={modelIsLoading || botIsTyping}>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8.42105 11.5789V19.9999H0C2.53776e-05 17.8121 0.851513 15.7102 2.37418 14.1392C3.89684 12.5682 5.97115 11.6514 8.1579 11.5831L8.42105 11.5789Z" fill="black" />
                          <path d="M17.0343 16.3854C17.1103 15.9908 17.1103 15.5879 17.0343 15.1934L17.7885 14.7765C17.8762 14.7289 17.9142 14.6309 17.885 14.5386C17.6891 13.9342 17.3529 13.3858 16.9144 12.9325C16.8472 12.8625 16.739 12.8457 16.6513 12.8933L15.8971 13.3102C15.5785 13.05 15.2131 12.8485 14.8184 12.7142V11.8804C14.8184 11.7852 14.7482 11.7013 14.6518 11.6817C13.9999 11.5418 13.3363 11.5474 12.7165 11.6817C12.6201 11.7013 12.5499 11.7852 12.5499 11.8804V12.7142C12.1553 12.8485 11.7899 13.05 11.4712 13.3102L10.717 12.8933C10.6322 12.8457 10.5211 12.8625 10.4539 12.9325C10.0154 13.3858 9.67922 13.9342 9.48335 14.5386C9.45412 14.6309 9.49505 14.7289 9.57982 14.7765L10.334 15.1934C10.258 15.5879 10.258 15.9908 10.334 16.3854L9.57982 16.8023C9.49212 16.8499 9.45412 16.9478 9.48335 17.0402C9.67922 17.6446 10.0154 18.1902 10.4539 18.6463C10.5211 18.7162 10.6293 18.733 10.717 18.6855L11.4712 18.2685C11.7899 18.5288 12.1553 18.7302 12.5499 18.8646V19.6984C12.5499 19.7935 12.6201 19.8775 12.7165 19.8971C13.3684 20.037 14.032 20.0314 14.6518 19.8971C14.7482 19.8775 14.8184 19.7935 14.8184 19.6984V18.8646C15.2131 18.7302 15.5785 18.5288 15.8971 18.2685L16.6513 18.6855C16.7361 18.733 16.8472 18.7162 16.9144 18.6463C17.3529 18.193 17.6891 17.6446 17.885 17.0402C17.9142 16.9478 17.8733 16.8499 17.7885 16.8023L17.0343 16.3854ZM13.6871 17.1465C12.9036 17.1465 12.2693 16.5365 12.2693 15.7894C12.2693 15.0423 12.9066 14.4323 13.6871 14.4323C14.4676 14.4323 15.1049 15.0423 15.1049 15.7894C15.1049 16.5365 14.4705 17.1465 13.6871 17.1465Z" fill="black" />
                          <path d="M14.7368 5.26316C14.7368 2.35526 12.3815 0 9.47361 0C6.56571 0 4.21045 2.35526 4.21045 5.26316C4.21045 8.17105 6.56571 10.5263 9.47361 10.5263C12.3815 10.5263 14.7368 8.17105 14.7368 5.26316Z" fill="black" />
                        </svg>
                      </ButtonCustom>
                      :
                      null
                    }
                  </Flex>
                </TopOptionsBarWrapper>
                <div id="babylon-loading" style={{ display: "none", position: "absolute", background: "var(--blackColor)", textAlign: "center", opacity: '1', zIndex: 998, bottom: 0 }} >
                  <div style={{ position: "relative", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
                    <Flex justify="center" align="center" direction="column" wrap="wrap">
                      <Loader name="babylon-loading-icon" />
                    </Flex>
                  </div>
                </div>
                <CanvasWrapper ref={canvasWrapperRef} id="canvas-wrapper">
                  <Engine antialias adaptToDeviceRatio observeCanvasResize={false} touchActionNone={false} canvasId="babylon-canvas" style={{ outline: "none" }} engineOptions={{ preserveDrawingBuffer: true }}>
                    <Scene onSceneMount={onSceneMount}>
                      {/* <arcRotateCamera name="arc" target={new Vector3(0, 1, 0)} alpha={1.67} beta={1.3} radius={2.4} lowerBetaLimit={1.3} upperBetaLimit={1.3} lowerRadiusLimit={2.4} upperRadiusLimit={2.4} wheelPrecision={50} panningSensibility={0} fov={0.5} /> */}
                      {/* <hemisphericLight name='light' intensity={1} direction={new Vector3(5, 5, 0)} /> */}
                    </Scene>
                  </Engine>
                </CanvasWrapper>
              </Flex>
              <FormLayout onSubmit={formik.handleSubmit} autoComplete="off" >
                <FormContainer gap="10px" justify="center" align="start" direction="column" style={{ width: "100%" }}>
                  <DesktopDropdownListWrapper id="desktop-options" gap="10px" justify="center" align="start" direction="column" style={{ width: "100%" }} >
                    <OptionsDesktopComponent modelIsLoading={modelIsLoading || botIsTyping} handleLanguageListDropdown={handleLanguageListDropdown} handleVoiceListDropdown={handleVoiceListDropdown} handleModelListSelector={handleModelListSelector} languageList={languageList} voiceList={voiceList} modelList={modelList} currentLanguage={currentLanguage} currentVoice={currentVoice} currentModel={currentModel} />
                  </DesktopDropdownListWrapper>
                  <StyledMainContainerWrapper gap="10px" direction="column" style={{ width: "100%", position: "relative", height: "100%" }}>
                    <StyledMainContainer>
                      <ChatContainer>
                        <MessageList ref={messageListRef}>
                          {conversation.map((entry, index) => {
                            return (
                              <Message
                                key={entry.id}
                                style={{ width: "90%" }}
                                model={{
                                  type: "custom",
                                  sender: entry.role,
                                  position: "single",
                                  direction:
                                    entry.role === "assistant" ? "incoming" : "outgoing",
                                }}
                              >
                                {
                                  entry.role === "assistant" ?
                                    <ProfilePic name={`${currentModel?.ai_name || "AI"}`} style={{ border: "1px solid var(--yellowColor)" }}>
                                      <img src={`${`${currentModel.image_url}?v=${Date.now()}`}` || "./images/avatar.png"} alt={currentModel?.name} style={{ width: "100%", height: "100%" }} crossOrigin="" />
                                    </ProfilePic>
                                    :
                                    null
                                }
                                <Message.CustomContent>
                                  <Flex align="center">
                                    <strong style={{ color: entry.role === "assistant" ? "var(--yellowColor)" : "white", textTransform: "uppercase" }}>{entry.role === "assistant" ? `${currentModel?.ai_name || "AI"}` : "You"} </strong>
                                    <small style={{ color: entry.role === "assistant" ? "var(--yellowColor)" : "white" }}>
                                      {format(entry.date, currentLanguage?.code ? currentLanguage?.code.replace(/-/g, "_") : "en_US")}
                                    </small>
                                  </Flex>
                                  <ReactMarkdown
                                    components={{
                                      pre: ({ node, ...props }) => <pre style={{ unicodeBidi: "inherit" }}  {...props} />,
                                      code: ({ node, ...props }) => <code style={{ background: "transparent" }}  {...props} />,
                                      ol: ({ node, ...props }) => <ol style={{ color: "var(--whiteColor)" }}  {...props} />,
                                      ul: ({ node, ...props }) => <ul style={{ color: "var(--whiteColor)", padding: "0px" }}  {...props} />,
                                      li: ({ node, ...props }) => <li style={{ margin: "0px" }}  {...props} />,
                                    }}
                                    remarkPlugins={[remarkMath, rehypeKatex]}
                                  >
                                    {`${entry.content} `}
                                  </ReactMarkdown>
                                </Message.CustomContent>
                              </Message>
                            );
                          })}
                          {
                            botIsTyping ?
                              <Message
                                // key={index}
                                style={{ width: "90%" }}
                                model={{
                                  type: "custom",
                                  sender: "assistant",
                                  position: "single",
                                  direction: "incoming",
                                }}
                              >
                                <ProfilePic name={`${currentModel?.ai_name || "AI"}`} style={{ border: "1px solid var(--yellowColor)" }}>
                                  <img src={`${`${currentModel.image_url}?v=${Date.now()}`}` || "./images/avatar.png"} alt={currentModel?.name} style={{ width: "100%", height: "100%" }} crossOrigin="" />
                                </ProfilePic>                                <Message.CustomContent>
                                  <DotLoader style={{ padding: "0px" }} />
                                </Message.CustomContent>
                              </Message>
                              :
                              null
                          }
                        </MessageList>
                      </ChatContainer>
                    </StyledMainContainer>
                    <Flex id="send-a-message-bar" style={{ width: "100%", alignItems: "center", gap: "5px" }}>
                      <Flex gap="10px" justify="center" align="start" direction="column" style={{ backgroundColor: "#2F3432", width: "100%", borderRadius: "25px", padding: "5px 10px" }}>
                        {
                          isRecording ?
                            <Waveform name="waveform" />
                            :
                            <TextFieldWithIconStyled style={{ width: "100%" }} autoComplete="off" autoCorrect='off' className="input-custom" fontColor="white" bgColor="transparent" name="message" type="text" role="presentation" placeholder={`${intl.formatMessage({ id: "send-a-message", defaultMessage: "Send a message" })}...`} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.message} ref={conversationInputRef} />
                        }
                      </Flex>
                      <ButtonSend height="100%" width="fit-content" disabled={botIsTyping || modelIsLoading} type="submit" animated={false} onPress={formik.handleSubmit}>
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.70652 7.51655L0.5 5.61483V0.769381L16.7689 8L0.5 15.2306V10.3852L7.70652 8.48345L9.53855 8L7.70652 7.51655Z" stroke="#E5FF00" />
                        </svg>
                      </ButtonSend>
                      {
                        process.env.REACT_APP_MICROPHONE_IS_DISABLED === "false" ?
                          <Dictaphone language={currentLanguage?.code || "en-US"} getTranscript={getTranscript} isRecording={isRecording} setIsRecording={setIsRecording} modelIsLoading={modelIsLoading} botIsTyping={botIsTyping} />
                          :
                          null
                      }
                      {
                        !isMute ?
                          <ButtonCustom padding="0px" borderradius="100%" bg="var(--yellowColor))" height="35px" width="35px" minwidth="35px" onPress={() => { handleIsMuteToggle() }}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.1096 4.09026C15.2162 4.15055 15.305 4.23807 15.3668 4.34388C15.4286 4.4497 15.4612 4.57002 15.4613 4.69255V21.3076C15.4613 21.4301 15.4288 21.5504 15.3672 21.6562C15.3055 21.762 15.2169 21.8496 15.1103 21.91C15.0037 21.9704 14.883 22.0014 14.7606 21.9999C14.6381 21.9985 14.5182 21.9645 14.4131 21.9015L7.65497 17.8461H5.07688C4.52605 17.8461 3.99779 17.6273 3.6083 17.2378C3.21881 16.8483 3 16.32 3 15.7692V10.2267C3.00037 9.67616 3.21934 9.14825 3.60879 8.75906C3.99824 8.36987 4.52629 8.15124 5.07688 8.15125H7.65497L14.4117 4.09857C14.5169 4.03551 14.6369 4.00151 14.7595 4.00005C14.8821 3.99859 15.0029 4.02972 15.1096 4.09026Z" fill="black" />
                              <path d="M18.2305 9.14298C18.2305 9.14298 19.3633 10.3298 19.3633 12.3077C19.3633 14.2857 18.2305 15.4725 18.2305 15.4725M20.4962 6.76941C20.4962 6.76941 22.3842 8.74739 22.3842 12.3077C22.3842 15.8681 20.4962 17.8461 20.4962 17.8461" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </ButtonCustom>
                          :
                          <ButtonCustom padding="0px" borderradius="100%" bg="var(--yellowColor))" height="35px" width="35px" minwidth="35px" onPress={() => { handleIsMuteToggle() }}>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.1096 4.09026C15.2162 4.15055 15.305 4.23807 15.3668 4.34388C15.4286 4.4497 15.4612 4.57002 15.4613 4.69255V21.3076C15.4613 21.4301 15.4288 21.5504 15.3672 21.6562C15.3055 21.762 15.2169 21.8496 15.1103 21.91C15.0037 21.9704 14.883 22.0014 14.7606 21.9999C14.6381 21.9985 14.5182 21.9645 14.4131 21.9015L7.65497 17.8461H5.07688C4.52605 17.8461 3.99779 17.6273 3.6083 17.2378C3.21881 16.8483 3 16.32 3 15.7692V10.2267C3.00037 9.67616 3.21934 9.14825 3.60879 8.75906C3.99824 8.36987 4.52629 8.15124 5.07688 8.15125H7.65497L14.4117 4.09857C14.5169 4.03551 14.6369 4.00151 14.7595 4.00005C14.8821 3.99859 15.0029 4.02972 15.1096 4.09026Z" fill="black" />
                              <path d="M18 16L20.5 13.5M20.5 13.5L23 11M20.5 13.5L18 11M20.5 13.5L23 16" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </ButtonCustom>
                      }
                    </Flex>
                  </StyledMainContainerWrapper>
                </FormContainer>
              </FormLayout>
            </ContentWrapper>
          </div>
        </Container >
      </ContainerWrapper >
    </div >

  )
}

export default Chat