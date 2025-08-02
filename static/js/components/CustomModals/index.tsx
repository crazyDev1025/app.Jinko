import React, { useRef, useState, useCallback, useEffect, useContext } from 'react'
import styled from '@emotion/styled'
import { FormattedMessage, useIntl } from 'react-intl'
import {
    Flex,
    Table
} from '@mantine/core'
import {
    Button,
    Modal,
} from '@nextui-org/react'
import { useNotifications } from 'reapop'
import Webcam from "react-webcam";
import { useMediaQuery } from 'react-responsive'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useRequest } from 'ahooks'

import { useGetPricing } from 'views/CreativeAIStudio/hooks/useGetPricing'
import { ComponentsContext } from 'contexts/ComponentsContext'
import { getFormatNumberWithDecimal, getFormatNumberWithK } from 'utils/formatBalance'
import { GeneralText } from 'components/GlobalStyle'
import useMiddlewareTranslation from 'hooks/useMiddlewareTranslation'
import { useChangePassword } from 'views/CreativeAIStudio/hooks/useChangePassword'
import { useTokenAuth } from 'hooks/useTokenAuth'
import { useEditVideoSubtitle } from 'views/CreativeAIStudio/hooks/useHandleVideoSubtitle'
import { useGetVideoWithoutSubtitle, useEditVideoWithoutSubtitle } from 'views/CreativeAIStudio/hooks/useHandleVideoWithoutSubtitle'
import PageLoaderStudio from 'components/Loader/PageLoaderStudio'
import PageLoader from 'components/Loader/PageLoader'
import { StudioContext, extendUploadVoiceType, jobType, uploadType } from '../../contexts/Opentalker/context'


const ButtonText = styled(Button) <{ bg: string, borderradius: string }>`
border-radius: ${({ borderradius }) => borderradius};
background-image: ${({ bg }) => bg}!important;
padding:3px 8px;!important;
height:42px;
min-width:110px;
:hover {
    cursor: pointer;
  }
:disabled{
  background-image: linear-gradient(180deg, #9596B2 0%, #BCC6CE 54.69%, #CBDBDD 100%)!important;
}
`

const ButtonBack = styled(Button)`
min-width:34px;
width:34px;
background:  transparent;
border: none;
z-index: var(--nextui-zIndices-1);
margin: 0px;
display: inline-flex;
align-items: center;
min-height: 34px;
height: 34px;
cursor: pointer;
box-sizing: border-box;
transition: var(--nextui-transitions-default);
// padding: calc(var(--nextui-space-sm) * 0.5);
color: var(--nextui-colors-accents4);
border-radius: 100%;
:hover {
    cursor: pointer;
  }
`

const ModalContentStyled = styled.div`
// display:flex;
// flex-direction:column;
// width:100%;
// height:100%;
// background:black;
// border-radius: 6px;
// overflow: hidden;
// padding:10px 0px;
`

const ButtonClose = styled(Button)`
min-width:fit-content;
position: absolute;
background: transparent;
padding:0px!important;
border: none;
z-index: var(--nextui-zIndices-1);
right:25px;
margin: 0px;
display: inline-flex;
align-items: center;
height: auto;
cursor: pointer;
box-sizing: border-box;
transition: var(--nextui-transitions-default);
// padding: calc(var(--nextui-space-sm) * 0.5);
color: var(--nextui-colors-accents4);
border-radius: var(--nextui-space-5);
:hover {
    cursor: pointer;
  }
`

const StyledInput = styled.input`
  border-radius: 10px;
  // background-color: #D3EAF4;
  border: 1px solid #C3C3DE;
  min-height:45px;
  padding: 0px 16px;
  font-size: clamp(0.875rem,2vw,1rem);
  font-weight: 700;
  font-style: normal;
  font-family: var(--fontFamily3);
  :disabled{
    background-color: grey;
  }
`

const StyledTooltip = styled.div`
position: absolute;
right: 0px;
top:-20px;
height:12px;
`

const Thumbnail = styled.img`
max-width: 80%;
// aspect-ratio: 1;
object-fit: contain;
align-self: center;
`

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

const TableStyled = styled(Table)`
caption-side: bottom;
border-collapse: collapse;
>thead>tr>th{
    border-bottom:none;
    background-color: #E5FF00;
    color: black;
    &:first-of-type {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &:last-of-type {
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
}
>tbody>tr>td{
    // border:none;
    width:fit-content;
}
`

type CustomModalProps = {
    show: boolean,
    onClose: () => void,
    onSave?: (videoName?: string) => void,
    jobInfo?: jobType,
    uploadAudio?: extendUploadVoiceType //eslint-disable-line
}

type priceListType = {
    id: number,
    name: string,
    description: string,
    price: string,
    min_length_seconds: number,
    max_length_seconds: number
}

export const ExportSuccessModal: React.FC<CustomModalProps> = ({ show, onClose, onSave, jobInfo }) => {
    const intl = useIntl()
    const { notify } = useNotifications()
    const navigate = useNavigate()
    const { onGetTranslation } = useMiddlewareTranslation()
    const [isEditVideoNameModalVisible, setIsEditVideoNameModalVisible] = useState<boolean>(false)
    const { content } = useTokenAuth()
    const { onGetVideoWithoutSubtitle: handleGetVideoWithoutSubtitle } = useGetVideoWithoutSubtitle()
    // const [isOverlapLoading, setIsOverlapLoading] = useState<{ isLoading: boolean, title: { id: string, defaultMessage: string } }>({ isLoading: false, title: { id: "", defaultMessage: "" } })
    const [currJob, setCurrJob] = useState<jobType>(
        {
            id: 0,
            is_done: false,
            is_failed: false,
            status: "",
            metadata: {
                is_visible: false,
                title: "",
                params: {
                    input_subtitle_url: "",
                    input_video_url: "",
                    input_image: "",
                    input_audio: "",
                    crop_mode: "",
                    face_enhance: false,
                    pose_style: 0,
                    resolution: 0,
                    still_mode: false
                },
                studio_params: {
                    params: {
                        input_image: "",
                        input_audio: "",
                        crop_mode: "",
                        face_enhance: false,
                        pose_style: 0,
                        resolution: 0,
                        still_mode: false
                    },
                    is_visible: false,
                    title: ""
                }
            },
            result: [],
            updated_at: "",
            created_at: ""
        }
    )
    const closeModalButton = () => {
        onClose();
    }

    const closeEditVideoNameModalButton = async () => {
        setIsEditVideoNameModalVisible(false)
    }
    const saveEditVideoNameModalButton = async () => {
        setIsEditVideoNameModalVisible(false)
        const response = await handleGetVideoWithoutSubtitle(content.token, (currJob.id).toString());
        if (response.error || response.data.error) {
            notify(onGetTranslation(response.data.message), 'error')
            // navigate(`/studio`)
        }
        setCurrJob(response.data.data.job)
    }
    const handleDownloadVideoButton = async () => {
        const a = document.createElement("a");
        a.href = currJob.result[0];
        a.download = `${currJob.id}`;
        a.setAttribute("download", ""); // Set the 'download' attribute
        a.target = "_blank"; // Open in a new tab
        a.rel = "noreferrer noopener"
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    const handleViewVideoButton = async () => {
        navigate(`/player/${currJob.id}`)
    }

    useEffect(() => {
        const handleGetJobData = async () => {
            setCurrJob(jobInfo)
        }
        handleGetJobData()
    }, [jobInfo])

    return (
        <>
            <EditVideoNameModal show={isEditVideoNameModalVisible} onClose={closeEditVideoNameModalButton} onSave={saveEditVideoNameModalButton} jobInfo={currJob} />
            <ModalStyled
                width="392px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                preventClose
                open={show} onClose={closeModalButton} >
                <ModalContentStyled>
                    <Modal.Body >
                        <Flex direction="column" gap="20px" align="center" style={{ width: "100%" }}>
                            <Flex direction="column" gap="5px" align="center" style={{ width: "100%" }}>
                                <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="20.8809" r="20" fill="url(#paint0_linear_4334_18169)" />
                                    <path d="M29.5556 14.9763L16.146 29.2939L10 22.7317L11.5756 21.0494L16.146 25.9174L27.9799 13.2939L29.5556 14.9763Z" fill="white" />
                                    <defs>
                                        <linearGradient id="paint0_linear_4334_18169" x1="20" y1="0.880859" x2="20" y2="40.8809" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#48CB84" />
                                            <stop offset="0.546875" stopColor="#4BE199" />
                                            <stop offset="1" stopColor="#61F2AC" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <GeneralText size="clamp(1.3rem,2vw,1.6rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center" }} >
                                    <FormattedMessage
                                        id="congratulations-your-video-is-ready"
                                        defaultMessage="Congratulations! {br} Your video is ready."
                                        values={{
                                            br: <br />
                                        }}
                                    />
                                </GeneralText>
                            </Flex>
                            <Flex direction="column" gap="10px" style={{ background: "#EFF8FF", width: "100%" }}>
                                <Flex justify="center" align="center" gap="10px" style={{ width: "100%" }}>
                                    <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#6C757D" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textAlign: "center", textAlignLast: "center", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }} >
                                        {currJob.metadata.title}
                                    </GeneralText>
                                    <ButtonBack onPress={() => { setIsEditVideoNameModalVisible(true) }}>
                                        <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.90476 14.902C1.38095 14.902 0.932382 14.7194 0.559049 14.3543C0.185716 13.9892 -0.000633303 13.5508 1.61695e-06 13.0392V1.86275C1.61695e-06 1.35049 0.186668 0.911815 0.560001 0.546717C0.933335 0.181619 1.38159 -0.000619334 1.90476 1.58128e-06L3.80952 3.72549H6.66667L4.7619 1.58128e-06H6.66667L8.57143 3.72549H11.4286L9.52381 1.58128e-06H11.4286L13.3333 3.72549H16.1905L14.2857 1.58128e-06H17.1429C17.6667 1.58128e-06 18.1152 0.18255 18.4886 0.547648C18.8619 0.912746 19.0482 1.35111 19.0476 1.86275V5.58824H1.90476V13.0392H9.52381V14.902H1.90476ZM11.4286 15.8333V12.9694L16.6905 7.84681C16.8333 7.70711 16.9921 7.60621 17.1667 7.54412C17.3413 7.48203 17.5159 7.45098 17.6905 7.45098C17.8809 7.45098 18.0635 7.48606 18.2381 7.55623C18.4127 7.62639 18.5714 7.73101 18.7143 7.8701L19.5952 8.73162C19.7222 8.87132 19.8216 9.02655 19.8933 9.1973C19.9651 9.36806 20.0006 9.53881 20 9.70956C20 9.88031 19.9682 10.0551 19.9048 10.2339C19.8413 10.4127 19.7381 10.5717 19.5952 10.7108L14.3571 15.8333H11.4286ZM12.8571 14.4363H13.7619L16.6429 11.5956L16.2143 11.1532L15.7619 10.7341L12.8571 13.5515V14.4363ZM16.2143 11.1532L15.7619 10.7341L16.6429 11.5956L16.2143 11.1532Z" fill="#0D1666" />
                                        </svg>
                                    </ButtonBack>
                                </Flex>
                                <Thumbnail src={currJob.metadata.params.input_image} alt={currJob.id.toString()} />
                            </Flex>
                            <Flex gap="10px" justify="center" style={{ width: "100%" }}>
                                <ButtonBack onPress={() => { onClose() }}>
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20.4668" r="18.75" fill="url(#paint0_linear_4550_6651)" />
                                        <path d="M20.625 10.4668C20.625 10.4668 14.0524 16.4001 10.3793 19.6135C10.2624 19.72 10.1683 19.851 10.1029 19.998C10.0376 20.145 10.0025 20.3047 10 20.4668C10 20.7615 10.1119 21.0441 10.3112 21.2525C10.5105 21.4608 10.7807 21.5779 11.0625 21.5779H13.1875V29.3557C13.1875 29.6504 13.2994 29.933 13.4987 30.1414C13.698 30.3497 13.9682 30.4668 14.25 30.4668H17.4375C17.7193 30.4668 17.9895 30.3497 18.1888 30.1414C18.3881 29.933 18.5 29.6504 18.5 29.3557V24.9112H22.75V29.3557C22.75 29.6504 22.8619 29.933 23.0612 30.1414C23.2605 30.3497 23.5307 30.4668 23.8125 30.4668H27C27.2818 30.4668 27.552 30.3497 27.7513 30.1414C27.9506 29.933 28.0625 29.6504 28.0625 29.3557V21.5779H30.1875C30.4693 21.5779 30.7395 21.4608 30.9388 21.2525C31.1381 21.0441 31.25 20.7615 31.25 20.4668C31.2485 20.3016 31.2111 20.1389 31.1406 19.9911C31.0701 19.8432 30.9684 19.7141 30.8431 19.6135C27.1955 16.4001 20.625 10.4668 20.625 10.4668Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_4550_6651" x1="20" y1="1.7168" x2="20" y2="39.2168" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#787FFC" />
                                                <stop offset="0.546875" stopColor="#42A8F6" />
                                                <stop offset="1" stopColor="#4DDBEE" />
                                                <stop offset="1" stopColor="#4DDBEE" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </ButtonBack>
                                <ButtonBack onPress={handleDownloadVideoButton}>
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20.4668" r="18.75" fill="url(#paint0_linear_4550_6679)" />
                                        <path d="M11.25 30.4668H28.75V28.1139H11.25V30.4668ZM28.75 17.5256H23.75V10.4668H16.25V17.5256H11.25L20 25.7609L28.75 17.5256Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_4550_6679" x1="20" y1="1.7168" x2="20" y2="39.2168" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#787FFC" />
                                                <stop offset="0.546875" stopColor="#42A8F6" />
                                                <stop offset="1" stopColor="#4DDBEE" />
                                                <stop offset="1" stopColor="#4DDBEE" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                </ButtonBack>
                                <ButtonBack onPress={handleViewVideoButton}>
                                    <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="20" cy="20.9668" r="18.75" fill="url(#paint0_linear_4667_10892)" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.25 12.2168C12.5931 12.2168 11.25 13.5599 11.25 15.2168V26.7168C11.25 28.3737 12.5931 29.7168 14.25 29.7168H27C28.6569 29.7168 30 28.3737 30 26.7168V15.2168C30 13.5599 28.6569 12.2168 27 12.2168H14.25ZM24.9091 19.745C25.1509 19.8802 25.3489 20.0622 25.4858 20.2752C25.6227 20.4881 25.6942 20.7255 25.6942 20.9666C25.6942 21.2076 25.6227 21.445 25.4858 21.658C25.3489 21.871 25.1509 22.053 24.9091 22.1882L19.5936 25.158C19.3247 25.308 19.0114 25.3948 18.6873 25.409C18.3632 25.4231 18.0405 25.3642 17.7539 25.2385C17.4673 25.1128 17.2276 24.925 17.0605 24.6954C16.8934 24.4657 16.8052 24.2028 16.8053 23.9349V17.9982C16.8052 17.7303 16.8934 17.4674 17.0605 17.2378C17.2276 17.0081 17.4673 16.8204 17.7539 16.6947C18.0405 16.5689 18.3632 16.51 18.6873 16.5242C19.0114 16.5384 19.3247 16.6251 19.5936 16.7752L24.9091 19.745Z" fill="white" />
                                        <defs>
                                            <linearGradient id="paint0_linear_4667_10892" x1="20" y1="2.2168" x2="20" y2="39.7168" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#787FFC" />
                                                <stop offset="0.546875" stopColor="#42A8F6" />
                                                <stop offset="1" stopColor="#4DDBEE" />
                                                <stop offset="1" stopColor="#4DDBEE" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </ButtonBack>
                            </Flex>
                        </Flex>
                    </Modal.Body>
                </ModalContentStyled>
            </ModalStyled></>
    )
};

export const EditVideoNameModal: React.FC<CustomModalProps> = ({ show, onClose, onSave, jobInfo }) => {
    const intl = useIntl()
    const { notify } = useNotifications()
    const { content } = useTokenAuth()
    const { onGetTranslation } = useMiddlewareTranslation()
    const { onEditVideoWithoutSubtitle: handleEditVideoWithoutSubtitle } = useEditVideoWithoutSubtitle()
    const { onEditVideoSubtitle: handleEditVideoSubtitle } = useEditVideoSubtitle()
    const {
        isOverlapLoading, setIsOverlapLoading
    } = useContext(StudioContext);
    const formSchema = Yup.object().shape({
        title: Yup.string()
            .required(intl.formatMessage({ id: "video-title-is-required", defaultMessage: "Video title is required" }))
            .min(1, intl.formatMessage({ id: "video-title-is-too-short", defaultMessage: "video title is too short" }))
            .max(254, intl.formatMessage({ id: "video-title-exceeds-the-allowed-length", defaultMessage: "Video title exceeds the allowed length" }))
    })
    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState: { errors } } = useForm(validationOpt)

    const formik = useFormik({
        initialValues: { title: jobInfo?.metadata.title || "" },
        validationSchema: formSchema,
        onSubmit: async (data, { resetForm }) => {
            try {
                setIsOverlapLoading({ isLoading: true, title: { id: "loading", defaultMessage: "Loading..." } })

                if (jobInfo.metadata.params.input_subtitle_url) {
                    const response = await handleEditVideoSubtitle(content.token, jobInfo.id.toString(), data.title)
                    if (response.error || response.data.error) {
                        throw new Error(response.data.message)
                    }

                } else {
                    const response = await handleEditVideoWithoutSubtitle(content.token, jobInfo.id.toString(), data.title)
                    if (response.error || response.data.error) {
                        throw new Error(response.data.message)
                    }
                }
                notify(`${intl.formatMessage({ id: "edit-video-title-successfully", defaultMessage: "Edit Video Title Successfully" })}`, 'success')
                resetForm()
                onSave()
                setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
                return;
            } catch (error: string | any) {
                notify(onGetTranslation(error.message), 'error')
                setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
            }
        }
    })

    const closeModalButton = () => {
        onClose();
    }

    return (
        <>
            <ModalStyled
                width="392px"
                closeButton
                preventClose
                open={show} onClose={closeModalButton} >
                <ModalHeaderStyled >
                    <GeneralText size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }} >
                        <FormattedMessage
                            id="edit-video-title"
                            defaultMessage="Edit Video Title"
                            values={{
                                br: <br />
                            }}
                        />
                    </GeneralText>
                </ModalHeaderStyled>
                <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
                </svg>
                <Modal.Body >
                    <Flex direction="column" gap="10px" align="center" style={{ width: "100%" }}>
                        <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%" }}>
                            <Flex direction="column" gap="15px" style={{ padding: "13px", width: "100%" }}>
                                <GeneralText size="clamp(0.875rem,2vw,0.9rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1" }} >
                                    <FormattedMessage
                                        id=" please-enter-your-new-video-title"
                                        defaultMessage=" Please enter your new video title."
                                        values={{
                                            br: <br />
                                        }}
                                    />
                                </GeneralText>
                                <Flex direction="column" style={{ gap: "6px", alignSelf: "center", width: "100%", position: "relative" }}>
                                    <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%" }}>
                                        <StyledInput style={{ width: "100%" }} name="title" type="text" autoCapitalize="off" autoComplete="off" autoCorrect='off' placeholder={intl.formatMessage({ id: "new-title", defaultMessage: "New Title" })} onChange={formik.handleChange} value={formik.values.title} autoFocus />
                                        <StyledTooltip>
                                            <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                                                {formik.errors.title}
                                            </GeneralText>
                                        </StyledTooltip>
                                    </Flex>
                                    <Flex gap="20px" style={{ width: "100%" }}>
                                        <ButtonText type="submit" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                            <GeneralText size="clamp(0.985rem,2vw,1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                                                {`${intl.formatMessage({ id: "save", defaultMessage: "Save" })}`}
                                            </GeneralText>
                                        </ButtonText>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </form>
                    </Flex>
                </Modal.Body>
            </ModalStyled>
            {
                isOverlapLoading.isLoading && <PageLoaderStudio>
                    <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }} >
                        {isOverlapLoading.title.id &&
                            <FormattedMessage
                                {...isOverlapLoading.title}
                                values={{
                                    br: <br />
                                }}
                            />
                        }
                    </GeneralText>
                </PageLoaderStudio>
            }
        </>

    )
};

export const GenerateVideoNameModal: React.FC<CustomModalProps> = ({ show, onClose, onSave, jobInfo }) => {
    const intl = useIntl()
    const { notify } = useNotifications()
    const { content } = useTokenAuth()
    const { onGetTranslation } = useMiddlewareTranslation()
    const {
        isOverlapLoading, setIsOverlapLoading
    } = useContext(StudioContext);
    const formSchema = Yup.object().shape({
        title: Yup.string()
            .required(intl.formatMessage({ id: "video-title-is-required", defaultMessage: "Video title is required" }))
            .min(1, intl.formatMessage({ id: "video-title-is-too-short", defaultMessage: "video title is too short" }))
            .max(254, intl.formatMessage({ id: "video-title-exceeds-the-allowed-length", defaultMessage: "Video title exceeds the allowed length" }))
    })
    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState: { errors } } = useForm(validationOpt)

    const formik = useFormik({
        initialValues: { title: jobInfo?.metadata.title || "" },
        validationSchema: formSchema,
        onSubmit: async (data, { resetForm }) => {
            try {
                onSave(data.title)
            } catch (error: string | any) {
                notify(onGetTranslation(error.message), 'error')
                setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
            }
        }
    })

    const closeModalButton = () => {
        onClose();
    }

    return (
        <>
            <ModalStyled
                width="392px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                preventClose
                closeButton
                open={show} onClose={closeModalButton} >
                <ModalHeaderStyled >
                    <GeneralText size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: "1", textTransform: "uppercase" }} >
                        <FormattedMessage
                            id="video-title"
                            defaultMessage="Video Title"
                            values={{
                                br: <br />
                            }}
                        />
                    </GeneralText>
                    {/* <ButtonClose onPress={() => closeModalButton()}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.16607 9.77259L14.7261 16.3359L16 15.0636L9.43813 8.50024L16 1.9387L14.7279 0.664551L8.16607 7.22788L1.60605 0.664551L0.333984 1.9387L6.89401 8.50024L0.333984 15.0618L1.60605 16.3359L8.16607 9.77259Z" fill="#0D1666" />
                            </svg>
                        </ButtonClose> */}
                </ModalHeaderStyled>

                <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
                </svg>
                <Modal.Body >
                    <Flex direction="column" gap="10px" align="center" style={{ width: "100%" }}>
                        <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%" }}>
                            <Flex direction="column" gap="15px" style={{ padding: "13px", width: "100%" }}>
                                <GeneralText size="clamp(0.875rem,2vw,0.9rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1" }} >
                                    <FormattedMessage
                                        id=" please-enter-your-new-video-title"
                                        defaultMessage=" Please enter your new video title."
                                        values={{
                                            br: <br />
                                        }}
                                    />
                                </GeneralText>
                                <Flex direction="column" gap="6px" style={{ alignSelf: "center", width: "100%", position: "relative" }}>
                                    <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%" }}>
                                        <StyledInput style={{ width: "100%" }} name="title" type="text" autoCapitalize="off" autoComplete="off" autoCorrect='off' placeholder={intl.formatMessage({ id: "new-title", defaultMessage: "New Title" })} onChange={formik.handleChange} value={formik.values.title} autoFocus />
                                        <StyledTooltip>
                                            <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                                                {formik.errors.title}
                                            </GeneralText>
                                        </StyledTooltip>
                                    </Flex>
                                    <Flex gap="20px" style={{ width: "100%" }}>
                                        <ButtonText type="submit" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                            <GeneralText size="clamp(0.985rem,2vw,1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                                                {`${intl.formatMessage({ id: "save", defaultMessage: "Save" })}`}
                                            </GeneralText>
                                        </ButtonText>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </form>
                    </Flex>
                </Modal.Body>
            </ModalStyled>
            {
                isOverlapLoading.isLoading && <PageLoaderStudio>
                    <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }} >
                        {isOverlapLoading.title.id &&
                            <FormattedMessage
                                {...isOverlapLoading.title}
                                values={{
                                    br: <br />
                                }}
                            />
                        }
                    </GeneralText>
                </PageLoaderStudio>
            }
        </>

    )
};

export const RemoveVideoModal: React.FC<CustomModalProps> = ({ show, onClose, onSave, jobInfo }) => {
    const intl = useIntl()
    const { notify } = useNotifications()
    const { content } = useTokenAuth()
    const { onGetTranslation } = useMiddlewareTranslation()
    const { onEditVideoWithoutSubtitle: handleEditVideoWithoutSubtitle } = useEditVideoWithoutSubtitle()
    const { onEditVideoSubtitle: handleEditVideoSubtitle } = useEditVideoSubtitle()

    const {
        isOverlapLoading
        // , setIsOverlapLoading
    } = useContext(StudioContext);

    const closeModalButton = () => {
        onClose();
    }

    const handleRemoveVideoButton = async () => {
        try {
            if (jobInfo.metadata.params.input_subtitle_url) {
                const response = await handleEditVideoSubtitle(content.token, jobInfo.id.toString(), jobInfo.metadata.title, false)
                if (response.error || response.data.error) {
                    throw new Error(response.data.message);
                }

            } else {
                const response = await handleEditVideoWithoutSubtitle(content.token, jobInfo.id.toString(), jobInfo.metadata.title, false)
                if (response.error || response.data.error) {
                    throw new Error(response.data.message);
                }
            }
            notify(`${intl.formatMessage({ id: "remove-video-successfully", defaultMessage: "Remove Video Successfully" })}`, 'success')
            onSave()
        } catch (e: any) {
            notify(onGetTranslation(e.message), 'error')
        }

    }

    return (
        <>
            <ModalStyled
                width="392px"
                preventClose
                closeButton
                open={show} onClose={closeModalButton} >
                <ModalHeaderStyled >
                    <GeneralText size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }} >
                        <FormattedMessage
                            id="remove-video"
                            defaultMessage="Remove Video "
                            values={{
                                br: <br />
                            }}
                        />
                    </GeneralText>
                </ModalHeaderStyled>
                <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
                </svg>
                <Modal.Body >
                    <Flex direction="column" gap="20px" align="center" style={{ width: "100%" }}>
                        <GeneralText size="clamp(0.875rem,2vw,0.9rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center" }} >
                            <FormattedMessage
                                id="this-action-will-delete-the-selected-scane"
                                defaultMessage="This action will delete the selected video permanently.{br}
                                    Do you really want to delete this video?"
                                values={{
                                    br: <br />
                                }}
                            />
                        </GeneralText>
                        <Flex gap="20px" style={{ width: "100%" }}>
                            <ButtonText onClick={() => { handleRemoveVideoButton() }} type="button" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                <GeneralText size="clamp(0.985rem,2vw,1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                                    {`${intl.formatMessage({ id: "yes-delete-it", defaultMessage: "Yes, Remove it" })}`}
                                </GeneralText>
                            </ButtonText>
                            <ButtonText onClick={() => { onClose() }} type="button" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                <GeneralText size="clamp(0.985rem,2vw,1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                                    {`${intl.formatMessage({ id: "no-keep-it", defaultMessage: "No, Keep it" })}`}
                                </GeneralText>
                            </ButtonText>
                        </Flex>
                    </Flex>
                </Modal.Body>
            </ModalStyled>
            {
                isOverlapLoading.isLoading && <PageLoaderStudio>
                    <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }} >
                        {isOverlapLoading.title.id &&
                            <FormattedMessage
                                {...isOverlapLoading.title}
                                values={{
                                    br: <br />
                                }}
                            />
                        }
                    </GeneralText>
                </PageLoaderStudio>
            }
        </>

    )
};

export const ChangePasswordModal: React.FC<CustomModalProps> = ({ show, onClose, onSave, jobInfo }) => {
    const intl = useIntl()
    const { notify } = useNotifications()
    const { content } = useTokenAuth()
    const { onGetTranslation } = useMiddlewareTranslation()
    const { onChangePassword: handleChangePassword } = useChangePassword()
    const [cookie, setCookie, removeCookie] = useCookies(["_acc"]);
    const {
        isOverlapLoading, setIsOverlapLoading
    } = useContext(StudioContext);
    const formSchema = Yup.object().shape({
        oldPassword: Yup.string()
            .required(intl.formatMessage({ id: "old-password-is-required", defaultMessage: "old password is required" }))
            .min(8, intl.formatMessage({ id: "old-password-is-too-short", defaultMessage: "old password is too short" }))
            .max(254, intl.formatMessage({ id: "old-password-exceeds-the-allowed-length", defaultMessage: "old password exceeds the allowed length" })),
        newPassword: Yup.string()
            .required(intl.formatMessage({ id: "new-password-is-required", defaultMessage: "new password is required" }))
            .min(8, intl.formatMessage({ id: "new-password-is-too-short", defaultMessage: "new password is too short" }))
            .max(254, intl.formatMessage({ id: "new-password-exceeds-the-allowed-length", defaultMessage: "new password exceeds the allowed length" })),
        newPasswordConfirm: Yup.string()
            .oneOf([Yup.ref('newPassword'), null], intl.formatMessage({ id: "new-passwords-must-match", defaultMessage: "new passwords must match" }))

    })
    const validationOpt = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState: { errors } } = useForm(validationOpt)

    const formik = useFormik({
        initialValues: { oldPassword: "", newPassword: "", newPasswordConfirm: "" },
        validationSchema: formSchema,
        onSubmit: async (data, { resetForm }) => {
            try {
                setIsOverlapLoading({ isLoading: true, title: { id: "loading", defaultMessage: "Loading..." } })
                const response = await handleChangePassword(content.token, data.oldPassword, data.newPassword, data.newPasswordConfirm)
                if (!response.error && !response.data.error) {
                    notify(`${intl.formatMessage({ id: "change-password-successfully", defaultMessage: "Change Password Successfully" })}`, 'success')
                    resetForm()
                    onClose()
                    setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
                    removeCookie("_acc")
                    return;
                }
                throw new Error(response.message)
            } catch (error: string | any) {
                notify(onGetTranslation(error.message), 'error')
                setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
            }
        }
    })

    const closeModalButton = () => {
        onClose();
    }

    return (
        <>
            <ModalStyled
                width="392px"
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                preventClose
                open={show} onClose={closeModalButton} >
                <ModalContentStyled>
                    <ModalHeaderStyled >
                        <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#0D1666" weight="bold" css={{ fontFamily: "var(--fontFamily3)" }} >
                            <FormattedMessage
                                id="change-password"
                                defaultMessage="Change Password"
                                values={{
                                    br: <br />
                                }}
                            />
                        </GeneralText>
                        <ButtonClose onPress={() => closeModalButton()}>
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.16607 9.77259L14.7261 16.3359L16 15.0636L9.43813 8.50024L16 1.9387L14.7279 0.664551L8.16607 7.22788L1.60605 0.664551L0.333984 1.9387L6.89401 8.50024L0.333984 15.0618L1.60605 16.3359L8.16607 9.77259Z" fill="#0D1666" />
                            </svg>
                        </ButtonClose>
                    </ModalHeaderStyled>
                    <Modal.Body >
                        <Flex direction="column" gap="10px" align="center" style={{ width: "100%" }}>
                            <form onSubmit={formik.handleSubmit} autoComplete="off" style={{ width: "100%", display: "flex", flexDirection: "column", gap: "10px" }}>
                                <Flex direction="column" gap="10px" style={{ background: "#EFF8FF", width: "100%" }}>
                                    <GeneralText size="clamp(0.875rem,2vw,0.9rem)" color="#0D1666" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1" }} >
                                        <FormattedMessage
                                            id="old-password"
                                            defaultMessage="Old Password"
                                            values={{
                                                br: <br />
                                            }}
                                        />
                                    </GeneralText>
                                    <Flex direction="column" style={{ gap: "6px", alignSelf: "center", width: "100%", position: "relative" }}>
                                        <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%" }}>
                                            <StyledInput style={{ width: "100%" }} name="oldPassword" type="password" autoCapitalize="off" autoComplete="off" autoCorrect='off' placeholder={intl.formatMessage({ id: "old-password", defaultMessage: "Old Password" })} onChange={formik.handleChange} value={formik.values.oldPassword} autoFocus />
                                            <StyledTooltip>
                                                <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                                                    {formik.errors.oldPassword}
                                                </GeneralText>
                                            </StyledTooltip>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex direction="column" gap="10px" style={{ background: "#EFF8FF", width: "100%" }}>
                                    <GeneralText size="clamp(0.875rem,2vw,0.9rem)" color="#0D1666" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1" }} >
                                        <FormattedMessage
                                            id="new-password"
                                            defaultMessage="New Password"
                                            values={{
                                                br: <br />
                                            }}
                                        />
                                    </GeneralText>
                                    <Flex direction="column" style={{ gap: "6px", alignSelf: "center", width: "100%", position: "relative" }}>
                                        <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%" }}>
                                            <StyledInput style={{ width: "100%" }} name="newPassword" type="password" autoCapitalize="off" autoComplete="off" autoCorrect='off' placeholder={intl.formatMessage({ id: "new-password", defaultMessage: "New Password" })} onChange={formik.handleChange} value={formik.values.newPassword} autoFocus />
                                            <StyledTooltip>
                                                <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                                                    {formik.errors.newPassword}
                                                </GeneralText>
                                            </StyledTooltip>
                                        </Flex>
                                    </Flex>
                                </Flex>

                                <Flex direction="column" gap="10px" style={{ background: "#EFF8FF", width: "100%" }}>
                                    <GeneralText size="clamp(0.875rem,2vw,0.9rem)" color="#0D1666" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1" }} >
                                        <FormattedMessage
                                            id="confirm-new-password"
                                            defaultMessage="Confirm New Password"
                                            values={{
                                                br: <br />
                                            }}
                                        />
                                    </GeneralText>
                                    <Flex direction="column" style={{ gap: "6px", alignSelf: "center", width: "100%", position: "relative" }}>
                                        <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%" }}>
                                            <StyledInput style={{ width: "100%" }} name="newPasswordConfirm" type="password" autoCapitalize="off" autoComplete="off" autoCorrect='off' placeholder={intl.formatMessage({ id: "confirm-new-password", defaultMessage: "Confirm New Password" })} onChange={formik.handleChange} value={formik.values.newPasswordConfirm} autoFocus />
                                            <StyledTooltip>
                                                <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                                                    {formik.errors.newPasswordConfirm}
                                                </GeneralText>
                                            </StyledTooltip>
                                        </Flex>
                                    </Flex>

                                    <Flex direction="column" style={{ gap: "6px", alignSelf: "center", width: "100%", position: "relative" }}>
                                        <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%" }}>
                                            <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                                                {`**${intl.formatMessage({ id: "after-submission-your-login-token-will-expire", defaultMessage: "After submission, your login token will expire, and you will need to log in again." })}`}
                                            </GeneralText>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex gap="20px" style={{ width: "100%" }}>
                                    <ButtonText type="submit" bg="linear-gradient(180deg, #787FFC 0%, #42A8F6 54.69%, #4DDBEE 100%, #4DDBEE 100%)" borderradius='8px' style={{ width: "100%" }} >
                                        <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: 1, textTransform: "uppercase" }} >
                                            {`${intl.formatMessage({ id: "submit", defaultMessage: "Submit" })}`}
                                        </GeneralText>
                                    </ButtonText>
                                </Flex>
                            </form>
                        </Flex>
                    </Modal.Body>
                </ModalContentStyled>
            </ModalStyled>
            {
                isOverlapLoading.isLoading && <PageLoaderStudio>
                    <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }} >
                        {isOverlapLoading.title.id &&
                            <FormattedMessage
                                {...isOverlapLoading.title}
                                values={{
                                    br: <br />
                                }}
                            />
                        }
                    </GeneralText>
                </PageLoaderStudio>
            }
        </>

    )
};

export const CapturedPhotoModal: React.FC<CustomModalProps> = ({ show, onClose, onSave, jobInfo }) => {
    const intl = useIntl();
    const { notify } = useNotifications()
    const isMobile = useMediaQuery({ query: `(max-width: 992px)` })
    const {
        uploadPhotoList, setUploadPhotoList,
        setUploadPhoto,
        setIsSideMenuOpen
    } = useContext(StudioContext);
    const webcamRef = useRef(null);
    const [isCapturedButtonDisabled, setIsCapturedButtonDisabled] = useState<boolean>(true);
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        notify(`${intl.formatMessage({ id: "photo-successfully-taken", defaultMessage: "Photo Successfully Taken." })}`, 'success')
        const tempUploadPhoto = { uuid: Date.now(), displayName: "capture_image.png", filename: "capture_image.png", base64: imageSrc }
        setUploadPhotoList( // Replace the state
            [ // with a new array
                ...uploadPhotoList, // that contains all the old items
                tempUploadPhoto
            ]
        );
        setUploadPhoto(tempUploadPhoto)

        if (isMobile)
            setIsSideMenuOpen(false)
        onClose();
    },
        [webcamRef, intl, notify, uploadPhotoList, isMobile, setIsSideMenuOpen, setUploadPhotoList, setUploadPhoto, onClose]);
    const closeModalButton = () => {
        setIsCapturedButtonDisabled(true);
        onClose();
    }

    useEffect(() => {
        if (webcamRef.current !== null) {
            setIsCapturedButtonDisabled(false);
        }
    }, [webcamRef])

    return (
        <ModalStyled open={show} closeButton onClose={closeModalButton} >
            <ModalHeaderStyled >
                <GeneralText size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textTransform: "uppercase" }} >
                    {`${intl.formatMessage({ id: "take-a-photo", defaultMessage: "Take a photo" })}`}
                </GeneralText>
            </ModalHeaderStyled>

            <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
            </svg>
            <Modal.Body >
                <Flex direction="column" gap="20px" align="center" style={{ maxHeight: "90%" }}>
                    {
                        isCapturedButtonDisabled &&
                        <PageLoader />
                    }

                    <Webcam
                        audio={false}
                        height="100%"
                        ref={webcamRef}
                        mirrored
                        screenshotFormat="image/png"
                        width="100%"
                        videoConstraints={{
                            width: 600,
                            height: 600,
                            facingMode: "user"
                        }}
                        onUserMedia={() => { setIsCapturedButtonDisabled(false) }}
                        style={{
                            display: isCapturedButtonDisabled ? "none" : "block",
                            border: "1px solid rgba(255, 240, 240, 0.5)",
                            borderRadius: "10px"
                        }}
                    />
                </Flex>
                <Flex justify="flex-end" gap="20px" style={{ width: "100%" }}>
                    <ButtonText onClick={() => { capture() }} bg="linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%)" borderradius='8px' style={{ width: "fit-content" }} disabled={isCapturedButtonDisabled}>
                        <GeneralText size="clamp(0.985rem,2vw,1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                            {`${intl.formatMessage({ id: "capture", defaultMessage: "Capture" })}`}
                        </GeneralText>
                    </ButtonText>
                </Flex>
            </Modal.Body>
        </ModalStyled >
    )
};

export const ConfirmOrderModal: React.FC<CustomModalProps> = ({ show, onClose, onSave, jobInfo, uploadAudio }) => {
    const intl = useIntl()
    const { notify } = useNotifications()
    const { content } = useTokenAuth()
    const { onGetTranslation } = useMiddlewareTranslation()
    const { onGetPricing: handleGetPricing } = useGetPricing()
    const { isOverlapLoading, setIsOverlapLoading, } = useContext(StudioContext);
    const [priceList, setPriceList] = useState<priceListType[]>([])
    const [audioLength, setAudioLength] = useState<number>(0)

    const getPricingList = useRequest(() => handleGetPricing(content.token), {
        // loadingDelay: 3000000,
        refreshDeps: [content.token],
        ready: !!content.token,
        onBefore: () => {
            setIsOverlapLoading({ isLoading: true, title: { id: "loading", defaultMessage: "Loading..." } })
        },
        onFinally: () => {
            setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
        },
        onSuccess: (result) => {
            try {
                if (result.error || result.data.error) throw new Error(result.message)
                const packages = result.data.data.packages
                setPriceList(packages)
            } catch (e) {
                console.error(e)
            }
        },
        onError: (error) => {
            notify(onGetTranslation(error.message), 'error')
        }
    });

    const getCurrentAudioPackage = useCallback(() => {
        if (priceList.length > 0 && uploadAudio?.duration > 0) {
            const duration = Math.ceil(uploadAudio.duration)
            const audioUnderWhichPackages = priceList.filter((item: priceListType) => duration >= item.min_length_seconds && duration <= item.max_length_seconds)
            return audioUnderWhichPackages
        }
        return []
    }, [priceList, uploadAudio])

    const closeModalButton = () => {
        onClose();
    }

    const handleConfirmOrderButton = async () => {
        try {
            // notify(`${intl.formatMessage({ id: "remove-video-successfully", defaultMessage: "Remove Video Successfully" })}`, 'success')
            onSave()
        } catch (e: any) {
            notify(onGetTranslation(e.message), 'error')
        }

    }

    return (
        <>
            <ModalStyled
                width="430px"
                preventClose
                closeButton
                open={show} onClose={closeModalButton} >
                <ModalHeaderStyled >
                    <GeneralText size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: "1", textTransform: "uppercase" }} >
                        <FormattedMessage
                            id="confirm-order"
                            defaultMessage="Confirm Order"
                            values={{
                                br: <br />
                            }}
                        />
                    </GeneralText>
                </ModalHeaderStyled>
                <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
                </svg>
                <Modal.Body >
                    <Flex direction="column" gap="20px" align="center" style={{ width: "100%" }}>
                        <Flex direction="column" gap="20px">
                            <TableStyled>
                                <thead>
                                    <tr>
                                        <th>
                                            <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center" }} >
                                                {`${intl.formatMessage({ id: "your-video-duration", defaultMessage: "Your Video Duration" })}`}
                                            </GeneralText>
                                        </th>
                                        <th>
                                            <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center" }} >
                                                {`${intl.formatMessage({ id: "price", defaultMessage: "Price" })}`}
                                            </GeneralText>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center", textTransform: 'capitalize' }} >
                                                <FormattedMessage
                                                    id="xx-seconds"
                                                    defaultMessage="{duration} Seconds"
                                                    values={{
                                                        duration: Math.ceil(uploadAudio?.duration) || 0
                                                    }}
                                                />
                                            </GeneralText>
                                        </td>
                                        <td>
                                            <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center", textTransform: "capitalize" }} >
                                                {`${getFormatNumberWithK(getCurrentAudioPackage()[0]?.price || 0, 1)} ${intl.formatMessage({ id: "credits", defaultMessage: "Credits" })}`}
                                            </GeneralText>
                                        </td>
                                    </tr>

                                </tbody>
                            </TableStyled>
                            <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1.1", textAlign: "center", textAlignLast: "center" }} >
                                <FormattedMessage
                                    id="you-will-receive-an-email-notification"
                                    defaultMessage=" You will receive an email notification in your mailbox as soon as the generation process has been completed."
                                    values={{
                                        br: <br />,
                                        credits: getFormatNumberWithK(getCurrentAudioPackage()[0]?.price || 0, 1),
                                        duration: Math.ceil(uploadAudio?.duration) || 0
                                    }}
                                />
                            </GeneralText>
                        </Flex>
                        <Flex gap="20px" style={{ width: "100%" }}>
                            <ButtonText onClick={() => { handleConfirmOrderButton() }} type="button" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: 1, textTransform: "uppercase" }} >
                                    {`${intl.formatMessage({ id: "confirm", defaultMessage: "Confirm" })}`}
                                </GeneralText>
                            </ButtonText>
                            <ButtonText onClick={() => { onClose() }} type="button" bg="#E5FF00" borderradius='8px' style={{ width: "100%" }} >
                                <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#000000" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: 1, textTransform: "uppercase" }} >
                                    {`${intl.formatMessage({ id: "cancel", defaultMessage: "Cancel" })}`}
                                </GeneralText>
                            </ButtonText>
                        </Flex>
                    </Flex>
                </Modal.Body>
            </ModalStyled>
            {
                isOverlapLoading.isLoading && <PageLoaderStudio>
                    <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "" }} >
                        {isOverlapLoading.title.id &&
                            <FormattedMessage
                                {...isOverlapLoading.title}
                                values={{
                                    br: <br />
                                }}
                            />
                        }
                    </GeneralText>
                </PageLoaderStudio>
            }
        </>

    )
};

export const PricingTableModal: React.FC<CustomModalProps> = ({ show, onClose, onSave, jobInfo }) => {
    const intl = useIntl()
    const { priceList } = useContext(ComponentsContext);
    const closeModalButton = () => {
        onClose();
    }
    return (
        <>
            <ModalStyled
                width="430px"
                closeButton
                open={show} onClose={closeModalButton} >
                <ModalHeaderStyled >
                    <GeneralText size="clamp(1.7rem,2vw,1.875rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", lineHeight: "1", textTransform: "uppercase" }} >
                        <FormattedMessage
                            id="pricing-table"
                            defaultMessage="Pricing Table"
                            values={{
                                br: <br />
                            }}
                        />
                    </GeneralText>
                </ModalHeaderStyled>
                <svg style={{ alignSelf: "center" }} width="29" height="1" viewBox="0 0 29 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="0.5" y1="0.5" x2="28.5" y2="0.500002" stroke="#A5A2BA" />
                </svg>
                <Modal.Body >
                    <Flex direction="column" gap="20px" align="center" style={{ width: "100%" }}>
                        <TableStyled>
                            <thead>
                                <tr>
                                    <th>
                                        <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center" }} >
                                            {`${intl.formatMessage({ id: "duration", defaultMessage: "Duration" })}`}
                                        </GeneralText>
                                    </th>
                                    <th>
                                        <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center" }} >
                                            {`${intl.formatMessage({ id: "price", defaultMessage: "Price" })}`}
                                        </GeneralText>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {priceList.map((item, index) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>
                                                <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center", textTransform: "capitalize" }} >
                                                    {`${item.min_length_seconds} - ${item.max_length_seconds} ${intl.formatMessage({ id: "seconds", defaultMessage: "Seconds" })}`}
                                                </GeneralText>
                                            </td>
                                            <td>
                                                <GeneralText size="clamp(1/4rem,2vw,1.5rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", lineHeight: "1", textAlign: "center", textAlignLast: "center", textTransform: "capitalize" }} >
                                                    {`${getFormatNumberWithDecimal(item.price, 2)} ${intl.formatMessage({ id: "credits", defaultMessage: "Credits" })}`}
                                                </GeneralText>
                                            </td>
                                        </tr>
                                        // <Table.Row key={item.id}>
                                        //     <Table.Cell>{`${item.min_length_seconds} - ${item.max_length_seconds} ${intl.formatMessage({ id: "seconds", defaultMessage: "Seconds" })}`}</Table.Cell>
                                        //     <Table.Cell>{`${getFormatNumberWithDecimal(item.price, 2)} ${intl.formatMessage({ id: "credit", defaultMessage: "Credit" })}`}</Table.Cell>
                                        // </Table.Row>
                                    )
                                })}
                            </tbody>
                        </TableStyled>
                    </Flex>
                </Modal.Body>
            </ModalStyled>
        </>

    )
};





