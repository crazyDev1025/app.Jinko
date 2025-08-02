import React, { useRef, useState, useEffect, useContext, useCallback, useMemo } from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import { Container, Flex, Pagination, Select, List } from '@mantine/core'
import { Button, Radio } from '@nextui-org/react'
import { useNotifications } from 'reapop'
import { Player } from '@lottiefiles/react-lottie-player'
import { v4 as uuidv4 } from 'uuid'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useFormik } from 'formik'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useRequest } from 'ahooks'

import { ComponentsContext } from 'contexts/ComponentsContext'
import PageLoader from 'components/Loader/PageLoaderStudio'
import { useCheckAuth } from 'hooks/useUserAuth';
import { useTranslation } from 'contexts/I18nContext'
import { GeneralText } from 'components/GlobalStyle'
import { useTokenAuth } from 'hooks/useTokenAuth'
import useMiddlewareTranslation from '../../hooks/useMiddlewareTranslation'
import { CustomTabsMagicAvatar, CustomTabMagicAvatar } from './components/CustomTabsMagicAvatar'
import { useGetAvatarWalletPackage, useGetAvatarPackage, useGetModel, useCreateJobwithTrainNInfr, useGetArtGallery } from './hooks/useHandleMagicAvatar'
import { ConfirmOrderModal, AddEmailModal } from './components/CustomModals2'

const ContainerWrapper = styled.div`
background-image: url(/images/background-ellipse.png);
background-position-x: right;
background-size: contain;
background-repeat: no-repeat;
background-color: black; 
display: flex;
width: 100%;
height: 100%;
overflow-y: auto;
`

const ButtonText = styled(Button) <{ bg?: string, borderradius?: string }>`
border-radius: ${({ borderradius }) => borderradius};
background-image: ${({ bg }) => bg}!important;
// padding:3px 8px!important;
margin:0px 0px 10px 0px!important;
min-width:110px;
color:black;
box-shadow: 0px 4px 15px 0px rgba(229, 255, 0, 0.50);
:hover {
    cursor: pointer;
  }
:disabled {
  background-image: linear-gradient(180deg, #9596B2 0%, #BCC6CE 54.69%, #CBDBDD 100%)!important;
  color:grey;
  box-shadow: none;
}
`

const TitleWrapper = styled(Flex)`
width: 100%;
gap: 20px;
@media only screen and (min-width: 0px) and (max-width: 991px) {
  place-content: start;
}
@media only screen and (min-width: 992px) {
  place-content:space-between;
}
`

const FormStyled = styled.form`
width: 100%;
// height: 100%;
display: flex;
flex-direction: column;
padding: 0px 10px;
gap:28px;
// padding:0px 0px 20px 0px;
height:100%;
overflow: auto; 
`

const StyledInput = styled.input`
  border-radius: 10px;
  background-color: transparent;
  border: 1px solid #777E90;
  min-height:45px;
  padding: 0px 16px;
  font-size: clamp(0.875rem,2vw,1rem);
  font-weight: 700;
  font-style: normal;
  font-family: var(--fontFamily1);
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
const ButtonGender = styled(Button) <{ isselected?: string }>`
width: 170px;
height: 46px;
min-width: 170px;
background: transparent;
border: ${({ isselected }) => isselected === "true" ? "2px solid #E5FF00" : "2px solid #777E90"};
border-radius: 8px;
>span{
  color: ${({ isselected }) => isselected === "true" ? "#E5FF00" : "#777E90"};
}
`

const TrainYourModelWrapper = styled(Flex)`
@media only screen and (min-width: 0px) and (max-width: 991px) {
  flex-direction: column;
  gap: 8px;
}
@media only screen and (min-width: 992px) {
  flex-direction: row;
  gap: 20px;
  align-items: center;
}
`

const TrainingPhotosContentWrapper = styled(Flex)`
width:100%;
flex-direction: column;
gap: 24px;
background-image:linear-gradient(180deg, rgba(54, 56, 41, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
border-radius: 8px;
border: 2px solid #777E90;

@media only screen and (min-width: 0px) and (max-width: 991px) {
  padding:20px 10px;
}
@media only screen and (min-width: 992px) {
  padding:20px 44px;
}
`

const SamplePhotoWrapper = styled(Flex)`
gap: 16px;
overflow-y: scroll;
overflow-x: hidden;
flex-wrap: wrap;
max-height:150px
`

const SamplePhoto = styled.img`
  height: 115px;
  width: 115px;
  object-fit: contain;
  background-color: black;
`

const UploadImageListWrapper = styled(Flex)`
gap: 16px;
overflow-y: scroll;
overflow-x: hidden;
flex-wrap: wrap;
max-height:250px;
// min-height: 250px;
height:100%;
padding: 10px 0px;
`

const UploadImageWrapper = styled(Flex)`
position: relative;
overflow: show;
`

const UploadImageDeleteButton = styled(Button)`
position: absolute;
width: fit-content;
height: fit-content;
min-width: fit-content;
background-color:transparent;
padding:0px;
border-radius: 0px;
right:-10px;
top:-10px;
z-index: 200;
`

const UploadImage = styled.img`
height: 115px;
width: 115px;
object-fit: contain;
background-color: black;
`

const UploadImageButton = styled(Button)`
width: 115px;
height: 115px;
min-width: 115px;
background-color:black;
background-image: linear-gradient(180deg, rgba(54, 56, 41, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
padding:0px;
border-radius: 0px;
border:2px solid #E5FF00;
`

const PackageContent = styled(Flex)`
width: 100%;
height: 100%;
display: grid;
grid-gap: 20px;
grid-auto-flow: dense;
max-height:430px;
overflow-y:scroll;
padding:0px 5px 20px 0px;
align-items: center;
@media only screen and (min-width: 0px) and (max-width: 991px) {
  grid-template-columns:repeat(1, 1fr);
  grid-template-rows: 100%;
}

@media only screen and (min-width: 992px) {
  grid-template-columns:repeat(2, 1fr);
  grid-template-rows: 100%;
}

`

const ButtonPackage = styled(Button) <{ isselected?: string }>`
width: 100%;
height: 404px;
background-color: black;
padding:0px;
background-image: linear-gradient(180deg, rgba(54, 56, 41, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%);
border: ${({ isselected }) => isselected === 'true' ? "2px solid #E5FF00" : "2px solid #777E90"};
border-radius: 8px;
>span{
  color: ${({ isselected }) => isselected === 'true' ? "#E5FF00" : "#777E90"};
  height: 100%;
  width: 100%;
  padding:20px 30px;
}
`

const StylesContent = styled(Flex)`
  // flex-flow: wrap;
  // justify-content: center;
  // gap: 12px;
  display:grid;
  grid-gap: 10px;
  grid-auto-rows: 125px;
  // grid-auto-flow: dense;
  grid-template-columns:repeat(auto-fill, minmax(82px, 1fr));
  overflow-y: scroll;
  padding:10px 10px 0px 0px;
  width:100%;
  justify-items: center;
  // height:100%;

`

const StyleImageWrapper = styled(Flex)`
position:relative;
width:80px;
flex-direction: column;
`

const StyleImage = styled.img`
height: 80px;
width: 80px;
object-fit: contain;
background-color: black;
`

const StyleNumberOfPic = styled(Flex)`
position: absolute;
right:-10px;
top:-10px;
width:34px;
height:34px;
align-items: center;
border-radius: 50%;
background-color: #000000;
border:2px solid #E5FF00
`

const ButtonFile = styled(Button)`
background-color: transparent;
background-image: linear-gradient(180deg, rgba(185, 180, 180, 0.50) 0%, rgba(185, 180, 180, 0.30) 100%);
border-radius: 18px;
border: none;
// display: flex;
// flex-direction: column;

>span{
  height:100%;
  width:100%;
}

  @media only screen and (min-width: 0px) and (max-width: 991px) {
    width: 125px;
    min-width: 125px;
    max-width: 125px;
    height: 115px;
    max-height: 115px;
    min-height: 115px;
  }
  @media only screen and (min-width: 992px) {
    width: 141px;
    min-width: 141px;
    max-width: 141px;
    height: 128px;
    max-height: 128px;
    min-height: 128px;
  }
`

const FileListWrapper = styled(Flex)`
  display:grid;
  grid-gap: 10px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding:5px 5px 0px 0px;
  justify-items: center;
  align-items: center;
  width:100%;
  @media only screen and (min-width: 0px) and (max-width: 991px) {
    grid-auto-rows: 115px;
    grid-template-columns:repeat(auto-fill, minmax(115px, 1fr));
  }
  
  @media only screen and (min-width: 992px) {
    grid-auto-rows: 141px;
    grid-template-columns:repeat(auto-fill, minmax(141px, 1fr));
  }
`

const ButtonIcon = styled(Button) <{ minwidth?: string, minheight?: string, padding?: string }>`
min-width:${({ minwidth }) => minwidth};
min-height:${({ minheight }) => minheight};
max-width:${({ minwidth }) => minwidth};
padding:${({ padding }) => padding || ""};
background: transparent;
margin: 0px;
align-items: center;
height: auto;
cursor: pointer;
box-sizing: border-box;
border-radius: var(--nextui-space-5);
position: relative;

:hover {
    cursor: pointer;
  }

&:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 0px;
    pointer-events: none;
    opacity: ${({ disabled }) => (disabled ? '1' : '0')};
    z-index: 201;
  }
`

const ButtonArtGalleryBack = styled(Button) <{ minwidth?: string, minheight?: string, padding?: string }>`
min-width:${({ minwidth }) => minwidth};
min-height:${({ minheight }) => minheight};
max-width:${({ minwidth }) => minwidth};
padding:${({ padding }) => padding || ""};
background: transparent;
margin: 0px;
align-items: center;
height: auto;
cursor: pointer;
box-sizing: border-box;
border-radius: var(--nextui-space-5);
position: relative;
>span>svg>path{
  fill: white;
}
:hover {
    cursor: pointer;
  }
:disabled{
  >span>svg>path{
    fill: grey;
  }
}
// &:after {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.5);
//     border-radius: 0px;
//     pointer-events: none;
//     opacity: ${({ disabled }) => (disabled ? '1' : '0')};
//     z-index: 201;
//   }
`

type samplePhotoProps = {
  id: string,
  src: string
}

type styleProps = {
  id: string,
  cn_name: string,
  en_name: string,
  image: string,
  number_of_pictures: number
}

type packageProps = {
  id: string,
  name: string,
  description: string,
  price: string,
  styles: styleProps[],
  gender: string
}

type loadingType = {
  isLoading: boolean,
  title: {
    id: string,
    defaultMessage: string
  }
}

type modelType = {
  id: string,
  name: string,
  model: string,
  gender: string,
  created_at: string
}

type itemType = {
  value: string,
  label: string,
}

type jobType = {
  task_id: string,
  metadata: {
    service: string,
    is_visible: boolean,
    lora: string,
    lora_name: string,
    package_id: string,
    title: string,
    params: {
      training: {
        params: {
          type: string,
          params: {
            input_image_urls: string[],
          }
        },
      },
      inference: [
        {
          params: {
            type: string,
            params: {
              prompt: string,
              negative_prompt: string,
              base_model: string,
              number_of_pictures: number,
              style: string,
              multiplier_style: string,
              multiplier_human: string,
            }
          }
        }
      ],
      lora: string,

    }

  },
  job: [
    {
      status: string,
      is_done: boolean,
      is_failed: false,
      result: [],
      style: {
        id: string,
        style_name_cn: string,
        style_name_en: string,
      },
      metadata: {
        created_at: string,
        updated_at: string,
      }
    }
  ]
}

type pageType = {
  currentPage: number,
  totalPage: number,
}

const TrainYourModel = ({ register, formik, optionsModelList, selectedOptionsModel, setSelectedOptionsModel, setSelectedGender, selectedGender, setIsOverlapLoading }) => {
  const intl = useIntl()
  const { notify } = useNotifications()
  const [samplePhotoList] = useState<samplePhotoProps[]>([
    { id: uuidv4(), src: "/images/magic-avatar/sample-image-1.png" },
    { id: uuidv4(), src: "/images/magic-avatar/sample-image-2.png" },
    { id: uuidv4(), src: "/images/magic-avatar/sample-image-3.png" }
  ])
  const inputFileRef = useRef(null);
  const { onGetTranslation } = useMiddlewareTranslation()
  // mantine selector issue
  const [newOptionsModelList, setNewOptionsModelList] = useState<(itemType & modelType)[]>([])

  const getModelList = useCallback(async () => {
    try {
      setIsOverlapLoading({ isLoading: true, title: { id: "", defaultMessage: "" } })
      const newArray = optionsModelList.map(item => ({
        ...item,
        label: item.name,
        value: item.model
      }));
      setNewOptionsModelList(newArray)
      setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
    } catch (error: string | any) {
      notify(onGetTranslation(error.message), 'error')
      setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
    }
  }, [notify, onGetTranslation, optionsModelList, setIsOverlapLoading])

  const handleSelectGenderOnClick = (gender: string) => {
    setSelectedGender(gender)
    setSelectedOptionsModel(null)
    formik.setFieldValue('model', "")
  }

  const handleUploadImageOnChange = async (e) => {
    const newFiles = Array.from(e.target.files);
    const existingFiles = formik.values.images || []; // Retrieve existing files from formik values
    const allFiles = [...existingFiles, ...newFiles];
    formik.setFieldValue("images", allFiles);
    console.log(allFiles)
    // if (!files || files.length === 0) {
    //   notify(`${intl.formatMessage({ id: "please-select-a-file", defaultMessage: "Please select a file" })}`, 'warning');
    //   return false;
    // }

    // const uploadPromises = [];

    // for (let i = 0; i < files.length; i++) {
    //   const file = files[i];

    //   if (!file.name || file === undefined || file === null) {
    //     notify(`${intl.formatMessage({ id: "please-select-a-file", defaultMessage: "Please select a file" })}`, 'warning');
    //     return false;
    //   }
    //   if (file.size > 5e6) {
    //     notify(`${intl.formatMessage({ id: "please-upload-a-file-smaller-than-4MB", defaultMessage: "Please upload a file smaller than 4 MB" })}`, 'warning');
    //     return false;
    //   }
    //   const promise = convertFileToBase64(file).then((base64Image) => {
    //     const tempUploadPhoto = { id: uuidv4(), displayName: file.name, filename: file.name, base64: base64Image };
    //     setUploadImageList((prevList) => [...prevList, tempUploadPhoto]);
    //   });
    //   uploadPromises.push(promise);
    // }
    // await Promise.all(uploadPromises);
    // return true;
  }
  const handleDeleteImageOnClick = (id) => {
    const updatedImageList = formik.values.images.filter((_, index) => index !== id)
    formik.setFieldValue("images", updatedImageList)
  }
  const handleSelectModelOnChange = (model) => {
    formik.setFieldValue("model", model)
    setSelectedOptionsModel(optionsModelList.find(l => l.model === model.toString()))
  }
  useEffect(() => {
    getModelList()
  }, [getModelList])


  return <Flex direction="column" gap="10px" style={{ height: "100%", padding: "0px 0px 20px 0px", overflow: "auto" }}>
    <FormStyled onSubmit={formik.handleSubmit}>
      <TrainYourModelWrapper>
        <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1", width: "200px" }} >
          {`1. ${intl.formatMessage({ id: "choose-gender", defaultMessage: "Choose Gender" })}  `}
        </GeneralText>
        <Flex gap="16px" style={{ width: "100%", flexWrap: "wrap" }}>
          <ButtonGender isselected={selectedGender === "female" ? "true" : "false"} onClick={() => handleSelectGenderOnClick("female")}>
            <img src="/images/magic-avatar/choose-gender-female.png" alt="girl" style={{ width: "24.38px", height: "30px", marginRight: "5px" }} />
            <GeneralText size="clamp(1rem,2vw,1.125rem)" color="" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
              {`${intl.formatMessage({ id: "female", defaultMessage: "Female" })} `}
            </GeneralText>
          </ButtonGender>
          <ButtonGender isselected={selectedGender === "male" ? "true" : "false"} onClick={() => handleSelectGenderOnClick("male")}>

            <img src="/images/magic-avatar/choose-gender-male.png" alt="girl" style={{ width: "24.38px", height: "30px", marginRight: "5px" }} />
            <GeneralText size="clamp(1rem,2vw,1.125rem)" color="" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
              {`${intl.formatMessage({ id: "male", defaultMessage: "Male" })} `}
            </GeneralText>
          </ButtonGender>
        </Flex>
      </TrainYourModelWrapper>
      <TrainYourModelWrapper>
        <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1", width: "200px" }} >
          {`2. ${intl.formatMessage({ id: "training-photos", defaultMessage: "Training photos" })}  `}
        </GeneralText>
        <TrainingPhotosContentWrapper >
          <Radio.Group role="group" name="mode" defaultValue={formik.values.mode} onChange={(value) => formik.setFieldValue('mode', value)} orientation="horizontal">
            <Radio type="radio" name="mode" value="upload-new-photo" color="primary" labelColor="primary" >
              <GeneralText size="clamp(1rem,2vw,1.125rem)" color="" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize" }} >
                {`${intl.formatMessage({ id: "upload-new-photo", defaultMessage: "Upload new photo" })}`}
              </GeneralText>
            </Radio>
            <Radio type="radio" name="mode" value="existing-model" color="primary" labelColor="primary" isDisabled={optionsModelList.length <= 0} >
              <GeneralText size="clamp(1rem,2vw,1.125rem)" color="" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize" }} >
                {`${intl.formatMessage({ id: "existing-model", defaultMessage: "Existing model" })}`}
              </GeneralText>
            </Radio>
          </Radio.Group>
          {(() => {
            switch (formik.values.mode) {
              case 'upload-new-photo':
                return <>
                  <Flex direction="column" gap="10px" style={{ width: "100%", position: "relative" }}>
                    <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "", lineHeight: "1" }}>
                      {`${intl.formatMessage({ id: "to-achieve-optimal-results-please", defaultMessage: "To achieve optimal results, please follow the guidelines below" })}:`}
                    </GeneralText>
                    <List listStyleType='circle' style={{ color: "white" }}>
                      <List.Item>
                        <GeneralText size="clamp(0.9rem,2vw,0.9rem)" color="#ffffff" weight="normal" css={{ fontFamily: "var(--fontFamily3)", textTransform: "", lineHeight: "1" }}>
                          {`${intl.formatMessage({ id: "upload-5-to-10-headshot-photos", defaultMessage: "Upload 5 to 10 headshot photos." })}`}
                        </GeneralText>
                      </List.Item>
                      <List.Item>
                        <GeneralText size="clamp(0.9rem,2vw,0.9rem)" color="#ffffff" weight="normal" css={{ fontFamily: "var(--fontFamily3)", textTransform: "", lineHeight: "1" }}>
                          {`${intl.formatMessage({ id: "avoiding-having-multiple-face", defaultMessage: "Avoiding having multiple faces or obstructions in the image." })}`}
                        </GeneralText>
                      </List.Item>
                      <List.Item>
                        <GeneralText size="clamp(0.9rem,2vw,0.9rem)" color="#ffffff" weight="normal" css={{ fontFamily: "var(--fontFamily3)", textTransform: "", lineHeight: "1" }}>
                          {`${intl.formatMessage({ id: "recommended-image-size-is", defaultMessage: "Recommended image size is between 512x512 to 1080x1400 pixel." })}`}
                        </GeneralText>
                      </List.Item>
                    </List>

                  </Flex >
                  <Flex direction="column" gap="10px" style={{ width: "100%" }}>
                    <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "1" }}>
                      {`${intl.formatMessage({ id: "sample", defaultMessage: "Sample" })}`}
                    </GeneralText>
                    <SamplePhotoWrapper>
                      {
                        samplePhotoList.map((samplePhoto) => {
                          return (
                            <SamplePhoto key={samplePhoto.id} src={samplePhoto.src} alt={samplePhoto.src} />
                          )
                        })
                      }
                    </SamplePhotoWrapper>
                  </Flex>
                  <Flex direction="column" style={{ width: "100%", position: "relative" }}>
                    <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "1" }}>
                      {`${intl.formatMessage({ id: "upload", defaultMessage: "Upload" })}`}
                    </GeneralText>
                    <StyledTooltip style={{ top: -5 }}>
                      <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize" }} >
                        {formik.errors.images}
                      </GeneralText>
                    </StyledTooltip>
                    <UploadImageListWrapper>
                      <UploadImageButton onPress={() => { inputFileRef.current.click() }}>
                        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M34 45C34 44.5618 34.1741 44.1415 34.484 43.8316C34.7938 43.5218 35.2141 43.3477 35.6523 43.3477H43.3477V35.6523C43.3477 35.2141 43.5218 34.7938 43.8316 34.484C44.1415 34.1741 44.5618 34 45 34C45.4382 34 45.8585 34.1741 46.1684 34.484C46.4782 34.7938 46.6523 35.2141 46.6523 35.6523V43.3477H54.3477C54.7859 43.3477 55.2062 43.5218 55.516 43.8316C55.8259 44.1415 56 44.5618 56 45C56 45.4382 55.8259 45.8585 55.516 46.1684C55.2062 46.4782 54.7859 46.6523 54.3477 46.6523H46.6523V54.3477C46.6523 54.7859 46.4782 55.2062 46.1684 55.516C45.8585 55.8259 45.4382 56 45 56C44.5618 56 44.1415 55.8259 43.8316 55.516C43.5218 55.2062 43.3477 54.7859 43.3477 54.3477V46.6523H35.6523C35.2141 46.6523 34.7938 46.4782 34.484 46.1684C34.1741 45.8585 34 45.4382 34 45Z" fill="white" />
                          <defs>
                            <linearGradient id="paint0_linear_3033_7531" x1="45" y1="0" x2="45" y2="90" gradientUnits="userSpaceOnUse">
                              <stop stopColor="white" stopOpacity="0" />
                              <stop offset="1" stopColor="#FFF500" stopOpacity="0.8" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </UploadImageButton>
                      {
                        formik.values.images.map((uploadImage, index) => {
                          return (
                            <UploadImageWrapper>
                              <UploadImageDeleteButton onClick={() => handleDeleteImageOnClick(index)}>
                                <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="13.125" cy="12.875" r="12.5" fill="#E5FF00" />
                                  <path d="M17.619 8.41016L8.66064 17.3685" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                  <path d="M8.66064 8.41016L17.619 17.3685" stroke="black" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                              </UploadImageDeleteButton>
                              <UploadImage src={URL.createObjectURL(uploadImage)} alt={index} />
                            </UploadImageWrapper>
                          )
                        })
                      }
                      <input type="file" name="images"   {...register("images")} multiple accept="image/png,image/jpeg" ref={inputFileRef} onChange={(e) => handleUploadImageOnChange(e)} style={{ display: "none" }} aria-label='images' />
                    </UploadImageListWrapper>
                  </Flex>
                  <Flex direction="column" gap="10px" style={{ width: "100%" }}>
                    <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "1" }}>
                      {`${intl.formatMessage({ id: "name-your-model", defaultMessage: "Name your model" })} `}
                    </GeneralText>
                    <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%", position: "relative" }}>
                      <StyledInput aria-label='model name' style={{ width: "100%" }} name="modelName" type="text" autoCapitalize="off" autoComplete="off" autoCorrect='off' placeholder={intl.formatMessage({ id: "new-model-title", defaultMessage: "New Model Title" })} onChange={formik.handleChange} value={formik.values.modelName} />
                      <StyledTooltip>
                        <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize" }} >
                          {formik.errors.modelName}
                        </GeneralText>
                      </StyledTooltip>
                    </Flex>
                  </Flex>
                </>
              case 'existing-model':
                return <>
                  <Select
                    placeholder={`${intl.formatMessage({ id: "select-model", defaultMessage: "Select Model" })}`}
                    onChange={handleSelectModelOnChange}
                    data={newOptionsModelList}
                    value={selectedOptionsModel?.model || ""}
                    // filter=
                    radius={10}
                    rightSection={<svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 1.03846L8.33333 0.5L5 3.34615L1.66667 0.5L1 1.03846L5 4.5L9 1.03846Z" fill="#E5FF00" stroke="#E5FF00" strokeWidth="0.6" />
                    </svg>
                    }
                    styles={() => ({
                      item: {
                        fontFamily: "var(--fontFamily1)",
                        fontSize: "clamp(0.875rem,2vw,1rem)",
                        padding: "10px 20px",
                        backgroundColor: "#16181A",
                        color: "white",
                        border: "none",
                        borderRadius: "9px",
                        // applies styles to selected item
                        '&[data-selected]': {
                          '&, &:hover': {
                            backgroundColor: "#2b2f31",
                            color: "white",
                          },
                        },
                        // applies styles to hovered item (with mouse or keyboard)
                        '&[data-hovered]': {
                          backgroundColor: "#787f85",

                        },
                      },
                      input: {
                        padding: "10px 20px",
                        fontFamily: "var(--fontFamily1)",
                        fontSize: "clamp(0.875rem,2vw,1rem)",
                        backgroundColor: "#16181A",
                        border: "1px solid #777E90",
                        height: "100%",
                        color: "#ffffff",
                        '::placeholder': {
                          textAlign: "start",
                        },
                        ':focus': {
                          outline: "none",
                          border: "1px solid #E5FF00",
                        }

                      },
                      dropdown: {
                        backgroundColor: "#16181A",
                        border: "none",
                      },
                      itemsWrapper: {
                        gap: "2px",
                      }
                    })}
                  />
                </>
              default:
                return <></>
            }
          })()}
        </TrainingPhotosContentWrapper>
      </TrainYourModelWrapper>
      <TrainYourModelWrapper>
        <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1", width: "200px" }} >
          {`3. ${intl.formatMessage({ id: "name-your-avatar", defaultMessage: "Name your avatar" })} `}
        </GeneralText>
        <Flex justify="center" direction="column" align="flex-start" style={{ width: "100%", position: "relative" }}>
          <StyledInput aria-label='title' style={{ width: "100%" }} name="title" type="text" autoCapitalize="off" autoComplete="off" autoCorrect='off' placeholder={intl.formatMessage({ id: "new-avatar-title", defaultMessage: "New Avatar Title" })} onChange={formik.handleChange} value={formik.values.title} />
          <StyledTooltip>
            <GeneralText size="clamp(0.7rem,2vw,0.8rem)" color="red" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize" }} >
              {formik.errors.title}
            </GeneralText>
          </StyledTooltip>
        </Flex>
      </TrainYourModelWrapper>
      <Flex style={{ alignSelf: "center" }}>
        <ButtonText type="submit" bg="#E5FF00" borderradius='8px' style={{ width: "fit-content" }}>
          <GeneralText size="clamp(0.985rem,2vw,1rem)" color="" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
            {`${intl.formatMessage({ id: "next", defaultMessage: "Next" })}`}
          </GeneralText>
        </ButtonText>
      </Flex>
    </FormStyled>
  </Flex >
}

const ChooseYourStyle = ({ formik, setIsOverlapLoading, selectedAvatarPackage, setSelectedAvatarPackage, selectedGender }) => {
  const intl = useIntl()
  const { content } = useTokenAuth()
  const { notify } = useNotifications()
  const [avatarPackageList, setAvatarPackageList] = useState<packageProps[]>([])
  const { onGetTranslation } = useMiddlewareTranslation()
  const { onGetAvatarPackage: handleGetAvatarPackage } = useGetAvatarPackage()
  const { onGetAvatarWalletPackage: handleGetAvatarWalletPackage } = useGetAvatarWalletPackage()

  useEffect(() => {
    const getPackage = async () => {
      try {
        setIsOverlapLoading({ isLoading: true, title: { id: "", defaultMessage: "" } })
        const avatarPResponse = await handleGetAvatarPackage(content.token)
        if (avatarPResponse.error) throw new Error(avatarPResponse.message)
        // const avatarWPResponse = await handleGetAvatarWalletPackage(content.token)
        // if (avatarWPResponse.error) throw new Error(avatarWPResponse.message)

        // const resEs6 = avatarPResponse.data.data.packages.map((item, i) => {
        //   return { ...item, ...avatarWPResponse.data.data.packages[i] };
        // });
        setAvatarPackageList(avatarPResponse.data.data.packages)
        setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
      } catch (error: string | any) {
        notify(onGetTranslation(error.message), 'error')
        setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })

      }
    }
    if (content?.token)
      getPackage()
  }, [handleGetAvatarPackage, handleGetAvatarWalletPackage, setSelectedAvatarPackage, onGetTranslation, setIsOverlapLoading, content, notify])

  return <>
    <Flex direction="column" gap="10px" style={{ height: "100%", overflow: "hidden", padding: "0px 0px 20px 0px" }}>
      <FormStyled onSubmit={formik.handleSubmit}>
        <TrainYourModelWrapper>
          <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1", width: "200px" }} >
            {`1. ${intl.formatMessage({ id: "select-package", defaultMessage: "Select package" })}  `}
          </GeneralText>
          <PackageContent>
            {
              avatarPackageList.filter((avatar) => avatar.gender === selectedGender).map((avatarPackage) => {
                return (
                  <ButtonPackage key={avatarPackage.id} isselected={avatarPackage?.id === selectedAvatarPackage?.id ? "true" : "false"} onClick={() => {
                    setSelectedAvatarPackage(avatarPackage)
                  }}>
                    <Flex direction="column" gap="20px" style={{ alignItems: "flex-start", height: "100%", width: "100%" }}>
                      <Flex style={{ justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                        <GeneralText size="clamp(1.1rem,2vw,1.5rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize" }} >
                          {avatarPackage.name}
                        </GeneralText>
                        <Flex gap="8px" style={{ alignItems: "center" }}>
                          <img src="/images/magic-avatar/credit.png" alt="credit" style={{ width: "40px", height: "40px" }} />
                          <Flex direction="column" gap="5px" style={{ alignItems: "flex-end" }}>
                            <GeneralText size="clamp(1.2rem,2vw,1.3rem)" color="#ffffff" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", lineHeight: "1" }} >
                              {`${parseFloat(avatarPackage.price).toFixed(0)} Credits`}
                            </GeneralText>
                            <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize", lineHeight: "1" }} >
                              {`~ ${(Number(avatarPackage.price) / 100).toFixed(2)} $`}
                            </GeneralText>
                          </Flex>
                        </Flex>
                      </Flex>
                      <StylesContent>
                        {
                          avatarPackage.styles.map((style) => {
                            return (
                              <StyleImageWrapper key={style.id}>
                                <StyleNumberOfPic>
                                  <GeneralText size="clamp(0.9rem,2vw,0.985rem)" color="#ffffff" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", width: "100%" }} >
                                    {`x${style.number_of_pictures}`}
                                  </GeneralText>
                                </StyleNumberOfPic>
                                <StyleImage key={style.id} src={style.image} alt={style.en_name} />
                                <GeneralText size="clamp(0.9rem,2vw,0.985rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", width: "100%", overflow: "hidden", textOverflow: "ellipsis", }} >
                                  {`${style.en_name}`}
                                </GeneralText>
                              </StyleImageWrapper>
                            )
                          })
                        }
                      </StylesContent>
                    </Flex>
                  </ButtonPackage>
                )
              })
            }

          </PackageContent>
        </TrainYourModelWrapper>
        <Flex style={{ alignSelf: "center" }}>
          <ButtonText type="submit" bg="#E5FF00" borderradius='8px' style={{ width: "fit-content" }}>
            <GeneralText size="clamp(0.985rem,2vw,1rem)" color="" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
              {`${intl.formatMessage({ id: "generate-model", defaultMessage: "Generate Model" })}`}
            </GeneralText>
          </ButtonText>
        </Flex>
      </FormStyled>
    </Flex>
  </>
}

const ArtGallery = ({ setIsOverlapLoading }) => {
  const intl = useIntl()
  const { content } = useTokenAuth()
  const { notify } = useNotifications()
  const yourVideoRef = useRef(null)

  const { onGetTranslation } = useMiddlewareTranslation()
  const { onGetArtGallery: handleGetArtGallery } = useGetArtGallery()
  const [artGalleryList, setArtGalleryList] = useState<jobType[]>([])
  const [path, setPath] = useState<number[]>([])
  const [page, setPage] = useState<pageType>({ currentPage: 1, totalPage: 1 })

  const getArtGallery = useRequest(() => handleGetArtGallery(content.token, page.currentPage, 16), {
    // loadingDelay: 3000000,
    refreshDeps: [content.token, page.currentPage],
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
        const tempArtGalleryList = result.data.data.jobs
        setArtGalleryList(tempArtGalleryList)
        setPage((prevPage) => ({ ...prevPage, totalPage: result.data.max_page }))
      } catch (e) {
        console.error(e)
      }
    },
    onError: (error) => {
      notify(onGetTranslation(error.message), 'error')
    }
  });

  const handleRefreshJobList = async () => {
    try {
      yourVideoRef.current.play()
      if (content?.token)
        getArtGallery.run()
    } catch (e: any) {
      notify(onGetTranslation(e.message), 'error')
    }
  }

  const handleSelectArtOnClick = (newPath: number) => {
    setPath((prevPath) => [...prevPath, newPath])
  }

  const handleBackToPreviousArtOnClick = () => {
    setPath((prevPath) => prevPath.slice(0, prevPath.length - 1))
  }

  return <Flex direction="column" gap="10px" style={{ height: "100%", padding: "0px 0px 20px 0px", overflow: "auto" }}>
    <Flex style={{ width: "100%", justifyContent: "space-between" }}>
      <ButtonIcon minwidth='140px' minheight='30px' icon={<Player
        ref={yourVideoRef}
        src='../../lotties/art-gallery-loader.json'
        className="player"
        style={{ height: '24px', width: '24px' }}
      />} style={{ padding: "0px" }} onClick={() => { handleRefreshJobList() }}>
        <GeneralText size="0.938rem" color="#E5FF00" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", overflow: "hidden", textOverflow: "ellipsis", width: "100%", height: "21px" }} >
          {`${intl.formatMessage({ id: "refresh", defaultMessage: "Refresh" })} `}
        </GeneralText>
      </ButtonIcon>
    </Flex>
    {artGalleryList.length <= 0 ?
      <Flex direction="column" gap="10px" style={{ height: "100%", overflow: "hidden" }}>
        <Flex direction="column" gap="10px" style={{ width: "100%", height: "100%", alignItems: "center" }}>
          <img src='/images/magic-avatar/empty-art-gallery.png' alt="empty-art-gallery" style={{ width: "100%", height: "100%", maxHeight: "400px", maxWidth: "400px" }} />
          <GeneralText size="clamp(1.2rem,2vw,1.3rem)" color="#E5FF00" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "initial", lineHeight: "1", textAlign: "center" }} >
            {`${intl.formatMessage({ id: "select-a-style-to-craft", defaultMessage: "Select a style to craft breathtaking avatar creations." })}`}
          </GeneralText>
        </Flex>
      </Flex>
      :
      <TrainingPhotosContentWrapper style={{ height: "100%", overflowY: "auto" }}>
        <Flex direction="column" gap="10px" style={{ height: "100%", overflowY: "hidden", justifyContent: "space-between", padding: "5px" }}>
          {/* <Flex direction="column" gap="10px" style={{ width: "100%", height: "100%" }}> */}
          {path.length >= 0 &&
            <ButtonArtGalleryBack onClick={handleBackToPreviousArtOnClick} minheight='34px' minwidth='fit-content' padding="0px" disabled={path.length === 0}>
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* <path d="M25.7475 0H8.25254C3.69479 0 0 3.69479 0 8.25254V25.7475C0 30.3052 3.69479 34 8.25254 34H25.7475C30.3052 34 34 30.3052 34 25.7475V8.25254C34 3.69479 30.3052 0 25.7475 0Z" fill="url(#paint0_linear_4322_13706)" /> */}
                <path d="M12.0018 17L19.5004 9L22 11.6679L17.0009 17L22 22.3321L19.5004 25L12 17L12.0018 17Z" />
                {/* <defs>
                  <linearGradient id="paint0_linear_4322_13706" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E5FF00" />
                    <stop offset="0.546875" stopColor="#E5FF00" />
                    <stop offset="1" stopColor="#E5FF00" />
                    <stop offset="1" stopColor="#E5FF00" />
                  </linearGradient>
                </defs> */}
              </svg>
            </ButtonArtGalleryBack>
          }
          <Flex style={{ flex: 1, width: "100%", justifyContent: "center", overflowY: "scroll" }}>
            {(() => {
              switch (path.length) {
                case 0:
                  return <FileListWrapper>
                    {artGalleryList.map((artGallery, index) => {
                      if (artGallery.job.length <= 0) {
                        return <ButtonFile key={artGallery.task_id} onClick={() => handleSelectArtOnClick(index)}>
                          <Flex direction="column" style={{ height: "100%", width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                            <img src="/images/magic-avatar/folder-pending.png" alt="folder-pending" style={{ width: "76px", height: "60px" }} />
                            <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#ffffff" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", overflow: "hidden", textOverflow: "ellipsis", width: "100%" }} >
                              {artGallery.metadata.title}
                            </GeneralText>
                          </Flex>
                        </ButtonFile>

                      }
                      return <ButtonFile key={artGallery.task_id} onClick={() => handleSelectArtOnClick(index)}>
                        <Flex direction="column" style={{ height: "100%", width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                          <img src="/images/magic-avatar/folder-default.png" alt="folder-default" style={{ width: "76px", height: "60px" }} />
                          <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#ffffff" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", overflow: "hidden", textOverflow: "ellipsis", width: "100%" }} >
                            {artGallery.metadata.title}
                          </GeneralText>
                        </Flex>
                      </ButtonFile>
                    })}
                  </FileListWrapper>
                case 1:
                  return <>
                    {artGalleryList[path[0]].job.length > 0 ?
                      <FileListWrapper>
                        {artGalleryList[path[0]].job.map((artGallery, index) => {
                          if (artGallery.status === "pending")
                            return <ButtonFile key={artGallery.style.id} onClick={() => handleSelectArtOnClick(index)}>
                              <Flex direction="column" style={{ height: "100%", width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                                <img src="/images/magic-avatar/folder-pending.png" alt="folder-pending" style={{ width: "76px", height: "60px" }} />
                                <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#ffffff" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", overflow: "hidden", textOverflow: "ellipsis", width: "100%" }} >
                                  {artGallery.style.style_name_en}
                                </GeneralText>
                              </Flex>
                            </ButtonFile>
                          return <ButtonFile key={artGallery.style.id} onClick={() => handleSelectArtOnClick(index)}>
                            <Flex direction="column" style={{ height: "100%", width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                              <img src="/images/magic-avatar/folder-default.png" alt="folder-default" style={{ width: "76px", height: "60px" }} />
                              <GeneralText size="clamp(1rem,2vw,1.1rem)" color="#ffffff" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", overflow: "hidden", textOverflow: "ellipsis", width: "100%" }} >
                                {artGallery.style.style_name_en}
                              </GeneralText>
                            </Flex>
                          </ButtonFile>
                        })}
                      </FileListWrapper>
                      :
                      <Flex direction="column" gap="10px" style={{ height: "100%", overflow: "hidden" }}>
                        <Flex direction="column" gap="10px" style={{ width: "100%", height: "100%", alignItems: "center" }}>
                          <img src='/images/magic-avatar/empty-art-gallery.png' alt="empty-art-gallery" style={{ width: "100%", height: "100%", maxHeight: "300px", maxWidth: "300px" }} />
                          <GeneralText size="clamp(1.2rem,2vw,1.3rem)" color="#E5FF00" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "initial", lineHeight: "1", textAlign: "center" }} >
                            {`${intl.formatMessage({ id: "select-a-style-to-craft", defaultMessage: "Select a style to craft breathtaking avatar creations." })}`}
                          </GeneralText>
                        </Flex>
                      </Flex>
                    }
                  </>
                case 2:
                  return <>
                    <PhotoProvider>
                      {artGalleryList[path[0]].job[path[1]].result && artGalleryList[path[0]].job[path[1]].result.length > 0 ?
                        <FileListWrapper>
                          {artGalleryList[path[0]].job[path[1]].result.map((artGallery, index) => {
                            return <PhotoView key={artGallery} src={artGallery}>
                              <ButtonFile style={{ padding: "0px" }} >
                                <Flex direction="column" style={{ height: "100%", width: "100%", justifyContent: "space-evenly", alignItems: "center" }}>
                                  <img src={artGallery} alt="token" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                </Flex>
                              </ButtonFile>
                            </PhotoView>
                          })}
                        </FileListWrapper>
                        :
                        <Flex direction="column" gap="10px" style={{ height: "100%", overflow: "hidden" }}>
                          <Flex direction="column" gap="10px" style={{ width: "100%", height: "100%", alignItems: "center" }}>
                            <img src='/images/magic-avatar/empty-art-gallery.png' alt="empty-art-gallery" style={{ width: "100%", height: "100%", maxHeight: "300px", maxWidth: "300px" }} />
                            <GeneralText size="clamp(1.2rem,2vw,1.3rem)" color="#E5FF00" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "initial", lineHeight: "1", textAlign: "center" }} >
                              {`${intl.formatMessage({ id: "select-a-style-to-craft", defaultMessage: "Select a style to craft breathtaking avatar creations." })}`}
                            </GeneralText>
                          </Flex>
                        </Flex>
                      }

                    </PhotoProvider>
                  </>
                default:
                  return <>
                  </>
              }
            })()}
          </Flex>

          {/* </Flex> */}
          {
            path.length === 0 && <>
              <Pagination position="center" total={page.totalPage} value={page.currentPage} onChange={(p) => setPage((prevPage) => ({ ...prevPage, currentPage: p }))} styles={(theme) => ({
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
          }
        </Flex>
      </TrainingPhotosContentWrapper>
    }
  </Flex>
}

const MagicAvatar: React.FC = () => {
  const intl = useIntl()
  const navigate = useNavigate()
  const { tokenValidity, content } = useTokenAuth()
  const { notify } = useNotifications()
  const { currentLanguage: { locale: currLang } } = useTranslation()
  const { onGetTranslation } = useMiddlewareTranslation()
  const { onGetModel: handleGetModel } = useGetModel()
  const { onCreateJobwithTrainNInfr: handleCreateJobwithTrainNInfr } = useCreateJobwithTrainNInfr()
  const { onCheckAuth: handleCheckAuth } = useCheckAuth()
  // tab state and ref 
  const [activeTab, setActiveTab] = useState<number>(0)
  const handleChange = newActive => setActiveTab(newActive)
  const [isOverlapLoading, setIsOverlapLoading] = useState<loadingType>({ isLoading: false, title: { id: "", defaultMessage: "" } });

  const [selectedGender, setSelectedGender] = useState<string>("female")
  const [selectedOptionsModel, setSelectedOptionsModel] = useState<modelType>()
  const [optionsModelList, setOptionsModelList] = useState<modelType[]>([])
  const [selectedAvatarPackage, setSelectedAvatarPackage] = useState<packageProps>()
  const [isConfirmOrderModalVisible, setIsConfirmOrderModalVisible] = useState<boolean>(false)
  const [isAddEmailModalVisible, setIsAddEmailModallVisible] = useState<boolean>(false);
  const { getCredit } = useContext(ComponentsContext)

  const formSchema = Yup.object().shape({
    mode: Yup.string().required(intl.formatMessage({ id: "please-select-a-mode", defaultMessage: "Please select a mode" })),
    title: Yup.string()
      .required(intl.formatMessage({ id: "avatar-title-is-required", defaultMessage: "Avatar title is required" }))
      .min(1, intl.formatMessage({ id: "avatar-title-is-too-short", defaultMessage: "Avatar title is too short" }))
      .max(254, intl.formatMessage({ id: "avatar-title-exceeds-the-allowed-length", defaultMessage: "Avatar title exceeds the allowed length" })),
    modelName: Yup.string().when('mode', {
      is: 'upload-new-photo',
      then: (schema) => schema
        .required(intl.formatMessage({ id: "model-title-is-required", defaultMessage: "Model title is required" }))
        .min(1, intl.formatMessage({ id: "model-title-is-too-short", defaultMessage: "Model title is too short" }))
        .max(254, intl.formatMessage({ id: "model-title-exceeds-the-allowed-length", defaultMessage: "Model title exceeds the allowed length" })),
      otherwise: (schema) => schema.strip(),
    }),
    images: Yup.array().when('mode', {
      is: 'upload-new-photo',
      then: (schema) => schema
        .required(intl.formatMessage({ id: "please-upload-at-least-5-image", defaultMessage: "Please upload at least 5 images" }))
        .min(5, intl.formatMessage({ id: "please-upload-at-least-5-image", defaultMessage: "Please upload at least 5 images" }))
        .max(10, intl.formatMessage({ id: "please-upload-less-than-10-image", defaultMessage: "Please upload less than 10 images" }))
        .test({
          name: 'fileSize',
          exclusive: false, // Allow multiple validations to pass
          message: `${intl.formatMessage({ id: "please-upload-a-file-smaller-than-3MB", defaultMessage: "Please upload a file smaller than 3 MB" })}`,
          test: function (files) { // eslint-disable-line
            if (!files) {
              return true; // Skip validation if no files are provided
            }
            const maxSize = 3145728; // 3MB in bytes
            return files.every(file => file.size <= maxSize);
          },
        }),
      otherwise: (schema) => schema,
    }),
    model: Yup.string().when('mode', {
      is: 'existing-model',
      then: (schema) => schema
        .required(intl.formatMessage({ id: "existing-model-is-required", defaultMessage: "Existing model is required" })),
      otherwise: (schema) => schema.strip(),
    }),
  })
  const validationOpt = { resolver: yupResolver(formSchema) }
  const { register, handleSubmit, formState: { errors } } = useForm(validationOpt)
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { title: "", mode: "upload-new-photo", images: [], model: "", modelName: "" },
    validationSchema: formSchema,
    onSubmit: async (data, { resetForm }) => {
      try {
        if (activeTab === 0)
          setActiveTab((prev) => prev + 1);
        else if (activeTab === 1) {
          if (selectedAvatarPackage?.id === undefined) throw new Error("Please select a package")
          const checkAuthResult = await checkAuth(content.token)
          if (!(checkAuthResult.data.isValid)) {
            setIsAddEmailModallVisible(true)
            throw new Error("Please add your email")
          }
          setIsConfirmOrderModalVisible(true)
        }
        return '';
      } catch (error: string | any) {
        setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
        return notify(onGetTranslation(error.message), 'error')
      }
    }
  })

  const isValidToStep2 = useMemo(() => {
    if (formik.values.mode === "upload-new-photo")
      return formik.values.images.length < 5 || !formik.values.title || !formik.values.modelName
    return !formik.values.model || !formik.values.title
  }, [formik])

  const checkAuth = async (token) => {
    try {
      const response = await handleCheckAuth(token)
      if (response.error) throw new Error(response.message)
      const isStringNotEmpty = (str) => !!str && str.trim() !== '';
      const isValid = (Object.keys(response.data).length > 0) && isStringNotEmpty(response.data.email)
      return { error: false, message: '', data: { isValid } }
    } catch (e: any) {
      // console.error(e)
      const { message = "" } = e
      return { error: true, message, data: { isValid: false } }
    }
  }


  const handleAddEmailModalOnConfirm = (token) => {
    setIsAddEmailModallVisible(false)
    setIsConfirmOrderModalVisible(true)
  }

  const handleAddEmailModalOnClose = () => {
    setIsAddEmailModallVisible(false)
  }
  const handleBackToDashboardOnClick = () => {
    navigate('/dashboard')
  }

  const handleConfirmOrderOnClick = async (token) => {
    try {
      setIsConfirmOrderModalVisible(false)
      setIsOverlapLoading({ isLoading: true, title: { id: "", defaultMessage: "" } })
      if (formik.values.mode === "upload-new-photo") {
        const response = await handleCreateJobwithTrainNInfr(token, selectedAvatarPackage.id, formik.values.title, "", formik.values.modelName, formik.values.images)
        if (response.error || response.data.error) throw new Error(response.message)
        formik.resetForm()
      } else if (formik.values.mode === "existing-model") {
        if (selectedAvatarPackage?.id === undefined) throw new Error("Please select a package")
        const response = await handleCreateJobwithTrainNInfr(token, selectedAvatarPackage.id, formik.values.title, formik.values.model)
        if (response.error || response.data.error) throw new Error(response.message)
        formik.resetForm()
      } else {
        throw new Error("Please select a mode")
      }
      notify(`${intl.formatMessage({ id: "congratulation-ur-magic-avatar-is-processed", defaultMessage: "Congratulations, your magic avatar is being processed." })}`, 'success')
      setSelectedOptionsModel(null)
      setSelectedAvatarPackage(null)
      setActiveTab((prev) => prev + 1)
      getCredit.run()
      setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
      return '';
    } catch (error: string | any) {
      setIsOverlapLoading({ isLoading: false, title: { id: "", defaultMessage: "" } })
      return notify(onGetTranslation(error.message), 'error')
    }
  }

  const getModelList = useCallback(async () => {
    const response = await handleGetModel(content.token)
    if (response.error || response.data.error) {
      // error
    }
    const modelList = response.data.data.models
    // const tempArtGalleryList = response.data.data.jobs.filter((job) => job.job.length > 0)
    const modelListByGender = modelList.filter((model) => model.gender === selectedGender)
    setOptionsModelList(modelListByGender)
  }, [content?.token, handleGetModel, setOptionsModelList, selectedGender])

  useEffect(() => {
    if (tokenValidity)
      getModelList()
  }, [tokenValidity, getModelList])

  return (
    <>
      <AddEmailModal show={isAddEmailModalVisible} onClose={() => handleAddEmailModalOnClose()} onConfirm={handleAddEmailModalOnConfirm} />
      <ConfirmOrderModal show={isConfirmOrderModalVisible} onClose={() => { setIsConfirmOrderModalVisible(false); }} onConfirm={handleConfirmOrderOnClick} />
      <ContainerWrapper id="opentalker-container" >
        <Container  style={{ height: "100%", overflowY: "auto" }}>
          <Flex direction="column" gap="5px" style={{ height: "100%", width: "100%", alignItems: "center", overflow: "auto" }}>
            <Flex justify="space-between" style={{ width: "100%" }}>
              <TitleWrapper>
                <ButtonIcon onClick={handleBackToDashboardOnClick} minheight='fit-content' minwidth='fit-content' padding="0px" style={{ order: 1 }}>
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
                </ButtonIcon>
                <GeneralText size="clamp(1.7rem,2vw,1.8rem)" color="#E5FF00" weight="extrabold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase", order: 2 }} >
                  <FormattedMessage id="magic-avatar" defaultMessage="Magic Avatar" values={{ br: <br /> }} />
                </GeneralText>
                <div style={{ order: 3 }} />
              </TitleWrapper>
            </Flex>
            <Flex direction="column" gap="15px" style={{ width: "100%", height: "100%", overflow: "auto" }}>
              <CustomTabsMagicAvatar active={activeTab} onChange={handleChange} formik={formik} isValidToStep2={isValidToStep2}>
                <>
                  <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                    {`${intl.formatMessage({ id: "train-your-model", defaultMessage: "Train Your Model" })} `}
                  </GeneralText>
                </>
                <>
                  <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1     " }} >
                    {`${intl.formatMessage({ id: "choose-your-style", defaultMessage: "Choose your style" })} `}
                  </GeneralText>
                </>
                <>
                  <GeneralText size="clamp(1rem,2vw,1.125rem)" color="#E5FF00" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "capitalize", lineHeight: "1" }} >
                    {`${intl.formatMessage({ id: "art-allery", defaultMessage: "Art Gallery" })} `}
                  </GeneralText>
                </>
              </CustomTabsMagicAvatar>
              <CustomTabMagicAvatar active={activeTab}>
                <>
                  <TrainYourModel setIsOverlapLoading={setIsOverlapLoading} formik={formik} register={register} optionsModelList={optionsModelList} selectedOptionsModel={selectedOptionsModel} setSelectedOptionsModel={setSelectedOptionsModel} setSelectedGender={setSelectedGender} selectedGender={selectedGender} />
                </>
                <>
                  <ChooseYourStyle setIsOverlapLoading={setIsOverlapLoading} formik={formik} selectedAvatarPackage={selectedAvatarPackage} setSelectedAvatarPackage={setSelectedAvatarPackage} selectedGender={selectedGender} />
                </>
                <>
                  <ArtGallery setIsOverlapLoading={setIsOverlapLoading} />
                </>
              </CustomTabMagicAvatar>
            </Flex>
          </Flex>
        </Container >
      </ContainerWrapper >
      {
        isOverlapLoading.isLoading && <PageLoader>
          <GeneralText size="clamp(1.3rem,2vw,1.8rem)" color="#FFFFFF" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "" }} >
            {isOverlapLoading.title.id &&
              <FormattedMessage
                {...isOverlapLoading.title}
                values={{
                  br: <br />
                }}
              />
            }
          </GeneralText>
        </PageLoader>
      }
    </>
  )
}

export default MagicAvatar