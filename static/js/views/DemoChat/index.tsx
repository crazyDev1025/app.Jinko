import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Lottie from 'lottie-web'
import { Container, Flex } from '@mantine/core'
import { Button } from '@nextui-org/react'
import { useIntl } from 'react-intl';

import { GeneralText } from 'components/GlobalStyle'
import { useMediaQuery } from 'react-responsive'

const ContainerGenderMenuWrapper = styled.div`
background-image: url(/images/background-ellipse.png);
background-position-x: right;
background-size: contain;
background-repeat: no-repeat;
`

const MenuWrapper = styled.div`
display:flex;
gap:20px;
justify-content:space-between;
flex-direction:column;
background-color:transparent;
width:100%;
height:100%;
align-items:center;
padding:0px 0px 5px 0px;
`

const GenderSelectorWrapper = styled.div`
display:flex;
width:100%;
height:100%;
@media only screen and (max-width: 991px) {
  align-items:end;
  gap:50px;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  background-color:transparent;
  align-items:center;
}
@media only screen and (min-width: 992px) {
  align-items:end;
  gap:50px;
  justify-content:center;
  align-items:center;
  flex-direction:row;
  background-color:transparent;
  align-items:center;
}
 `

const GenderSelector = styled(Flex)`
border-radius:10px;
min-height: 180px;
min-width: 255px;
height:100%;
width:100%;
max-height:200px;
max-width:350px;
position: relative;
cursor: pointer;
`

const GenderAngle = styled.div<{ bottom: number, right: number }>`
width: 50%;
height: 100px;
background: var(--yellowColor);
clip-path: polygon(100% 0%, 0% 100%, 100% 100%);
bottom:${({ bottom }) => bottom};
right:${({ right }) => right};
position: absolute;
border-bottom-right-radius: 10px;
z-index:2;
  // width: 100%;
  // height: 100%;
  // overflow: hidden;
  // position: relative;
  // bottom:0px;
  // right:0px;

  // ::after {
  // content: '';
  // background: var(--yellowColor);
  // width: 130%;
  // height: 100%;
  // position: absolute;
  // transform: rotate(242deg) translate(-71%,0);
}
`

const ButtonText = styled(Button) <{ height: number, width: number, bg: string }>`
height: ${({ height }) => height};
width: ${({ width }) => width};
padding: 10px 15px;
border-radius: 20px;
background-color: ${({ bg }) => bg}!important;
min-width: 255px;
max-width:350px;

:hover {
    cursor: pointer;
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

const ButtonIcon = styled(Button) <{ minwidth?: string, minheight?: string, padding?: string }>`
min-width:${({ minwidth }) => minwidth};
min-height:${({ minheight }) => minheight};
max-width:${({ minwidth }) => minwidth};
// min-width:fit-content;
padding:${({ padding }) => padding || ""};
background: transparent;
// border: none;
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

const DemoChat: React.FC = () => {
  const intl = useIntl();
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` })
  const [selectedGender, setSelecterGender] = useState<string>("");

  // Initialize Lottie
  const lottieInit = useCallback((elemId: string, path: string, loop = false, autoplay = true) => {
    const target = document.getElementById(elemId)
    const animation = Lottie.loadAnimation({
      name: elemId,
      container: target,
      renderer: 'canvas',
      loop,
      autoplay,
      path,
      // rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
    })
    // return animation
    const handleLottiesOnLoad = () => {
      if (Lottie.play() === undefined) {
        const getImg = document.getElementById(`${elemId}-prev`);
        if (getImg) {
          getImg.remove();
          target.style.display = null;
          animation.resize();
        }
      }
    };

    animation.addEventListener(`loaded_images`, handleLottiesOnLoad);

    // Clean up the event listener on component unmount
    return () => {
      animation.removeEventListener(`loaded_images`, handleLottiesOnLoad);
    };
  }, [])

  useEffect(() => {
    if (isMobile) {
      return undefined;
    }
    lottieInit("male-idle-lottie", "/lotties/male-idle.json", true)
    lottieInit("female-idle-lottie", "/lotties/female-idle.json", true)
    return () => {
      Lottie.destroy("male-idle-lottie")
      Lottie.destroy("female-idle-lottie")
    }
  }, [lottieInit, isMobile])


  // solve android and ios viewport issue
  // useEffect(() => {
  //   // Handle window resize event to update the window size
  //   const doc = document.documentElement;
  //   const handleResize = () => {
  //     doc.style.setProperty("--i-window-height", `100vh`)
  //   };

  //   window.addEventListener('resize', handleResize);

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [])

  const handleSelectGenderButton = useCallback((gender: string) => {
    setSelecterGender(gender);
    // const scrollingElement = (document.scrollingElement || document.body);
    // window.scrollTo({
    //   top: scrollingElement.scrollHeight,
    //   behavior: 'smooth',
    // })
  }, [])

  const handleContinueButton = useCallback(() => {
    if (selectedGender)
      navigate(`../chat/${selectedGender}`);
  }, [selectedGender, navigate])

  const handleBackTxoDashboardOnClick = () => {
    navigate('/dashboard')
  }
  
  return (
    <ContainerGenderMenuWrapper style={{ height: "100%" }}>
      <Container style={{ height: "100%", padding: "5px 0px 0px 0px" }}>
        <MenuWrapper>
          {/* <TitleWrapper> */}
          {/* <ButtonIcon onClick={handleBackToDashboardOnClick} minheight='fit-content' minwidth='fit-content' padding="0px" style={{ order: 1 }}>
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
            </ButtonIcon> */}
          <GeneralText size="clamp(1.7rem, 2vw, 1.8rem)" color="var(--yellowColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase" }} >
            {`${intl.formatMessage({ id: "choose-a-gender", defaultMessage: "Choose A Gender" })}`}
          </GeneralText>
          {/* <div style={{ order: 3 }} /> */}

          {/* </TitleWrapper> */}
          <GenderSelectorWrapper>
            <GenderSelector align="start" direction="row" onClick={() => { handleSelectGenderButton("male") }} style={{ background: selectedGender === "male" ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 245, 0, 0.4) 100%)" : "linear-gradient(180deg, rgba(54, 56, 41, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)" }}>
              <Flex align="start" direction="row" style={{ width: "100%", height: "100%", position: "absolute", border: "1px solid var(--yellowColor)", borderRadius: "10px" }}>
                <Flex align="start" direction="column" style={{ alignSelf: "end", padding: "0px 0px 0px 0px", height: "120%", width: "100%", maxWidth: "230px" }}>
                  {/* {
                    isMobile ?
                      <img id="male-idle-lottie-prev1" alt='male' src="/images/male-avatar.png" style={{ height: "100%" }} />
                      :
                      <> */}
                  <img id="male-idle-lottie-prev" alt='male' src="/images/male-avatar.png" style={{ height: "100%", width: "100%" }} />
                  <div id='male-idle-lottie' style={{ height: "100%", width: "100%", display: "none" }} />
                  {/* </>
                  } */}
                </Flex>
                <Flex align="flex-end" direction="column" wrap="wrap" style={{ flex: "1", placeContent: "space-between", height: "100%", position: "relative", padding: "20px 25px 15px 0px", alignContent: "flex-end" }}>
                  <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M57.1252 1.1875H42.8752C42.4277 1.1875 41.9985 1.36529 41.682 1.68176V1.68176C41.3655 1.99823 41.1877 2.42745 41.1877 2.875C41.1877 3.32255 41.3655 3.75178 41.682 4.06824C41.9985 4.38471 42.4277 4.5625 42.8752 4.5625H53.0531L38.9408 18.672C34.5193 14.855 28.808 12.8539 22.9596 13.0851C16.9529 13.3226 11.2763 15.896 7.13908 20.2572C3.00184 24.6183 0.730933 30.4225 0.810108 36.4334C0.889284 42.4442 3.31228 48.1866 7.56296 52.4373C11.8136 56.6879 17.556 59.1109 23.5669 59.1901C29.5777 59.2693 35.3819 56.9984 39.7431 52.8611C44.1042 48.7239 46.6776 43.0473 46.9151 37.0407C47.1463 31.1922 45.1453 25.481 41.3282 21.0594L55.4377 6.94992V17.125C55.4377 17.5726 55.6155 18.0018 55.932 18.3182C56.2485 18.6347 56.6777 18.8125 57.1252 18.8125C57.5728 18.8125 58.002 18.6347 58.3185 18.3182C58.6349 18.0018 58.8127 17.5726 58.8127 17.125V2.875C58.8127 2.42745 58.6349 1.99823 58.3185 1.68176C58.002 1.36529 57.5728 1.1875 57.1252 1.1875ZM37.7921 50.0545C35.0386 52.807 31.5308 54.6814 27.7121 55.4406C23.8932 56.1997 19.935 55.8095 16.3379 54.3193C12.7408 52.829 9.66639 50.3056 7.50335 47.0682C5.3403 43.8307 4.18579 40.0245 4.18579 36.1309C4.18579 32.2374 5.3403 28.4312 7.50335 25.1937C9.66639 21.9562 12.7408 19.4328 16.3379 17.9426C19.935 16.4523 23.8932 16.0621 27.7121 16.8213C31.5308 17.5805 35.0386 19.4548 37.7921 22.2074C41.4798 25.9028 43.551 30.9103 43.551 36.1309C43.551 41.3516 41.4798 46.3591 37.7921 50.0545Z" fill="url(#paint0_linear_1339_3146)" stroke="#E5FF00" />
                    <defs>
                      <linearGradient id="paint0_linear_1339_3146" x1="29.8104" y1="1.6875" x2="29.8104" y2="58.6921" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FEFB80" />
                        <stop offset="1" stopColor="#FBF7BD" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <GeneralText size="clamp(1.1rem,2vw,1.2rem)" color="var(--blackColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", zIndex: 3, margin: "0px", textTransform: "uppercase" }} >
                    {`${intl.formatMessage({ id: "male", defaultMessage: "Male" })}`}
                  </GeneralText>
                </Flex>
              </Flex>
              <GenderAngle bottom="0px" right="0px" />
            </GenderSelector>
            <GenderSelector align="start" direction="row" onClick={() => { handleSelectGenderButton("female") }} style={{ background: selectedGender === "female" ? "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 245, 0, 0.4) 100%)" : "linear-gradient(180deg, rgba(54, 56, 41, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)" }}>
              <Flex align="start" direction="row" style={{ width: "100%", height: "100%", position: "absolute", border: "1px solid var(--yellowColor)", borderRadius: "10px" }}>
                <Flex align="start" direction="column" style={{ alignSelf: "end", padding: "0px 0px 0px 0px", height: "120%", width: "100%", maxWidth: "230px" }}>
                  {/* {
                    isMobile ?
                      <img id="female-idle-lottie-prev1" alt='female' src="/images/female-avatar.png" style={{ height: "100%" }} />
                      :
                      <> */}
                  <img id="female-idle-lottie-prev" alt='female' src="/images/female-avatar.png" style={{ height: "100%", width: "100%" }} />
                  <div id='female-idle-lottie' style={{ height: "100%", width: "100%", display: "none" }} />
                  {/* </>
                  } */}
                </Flex>
                <Flex align="flex-end" direction="column" wrap="wrap" style={{ flex: "1", placeContent: "space-between", height: "100%", position: "relative", padding: "20px 25px 15px 0px", alignContent: "flex-end" }}>
                  <svg width="48" height="69" viewBox="0 0 48 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.625 23.5644V23.5639C46.6253 19.0542 45.3034 14.6434 42.8229 10.8771C40.3424 7.11092 36.8121 4.15459 32.6688 2.37392C28.5256 0.593251 23.9512 0.066384 19.5116 0.858508C15.072 1.65063 10.9621 3.72699 7.69032 6.83067C4.41855 9.93435 2.12851 13.9292 1.10356 18.3208C0.078599 22.7125 0.363695 27.3083 1.92357 31.5396C3.48345 35.771 6.24965 39.4521 9.87993 42.1276C13.3828 44.7092 17.5417 46.2452 21.875 46.5631V55.1263H11.6875C11.24 55.1263 10.8107 55.3041 10.4943 55.6206C10.1778 55.9371 10 56.3663 10 56.8138C10 57.2614 10.1778 57.6906 10.4943 58.0071C10.8107 58.3235 11.24 58.5013 11.6875 58.5013H21.875V66.3138C21.875 66.7614 22.0528 67.1906 22.3693 67.5071C22.6857 67.8235 23.115 68.0013 23.5625 68.0013C24.0101 68.0013 24.4393 67.8235 24.7557 67.5071C25.0722 67.1906 25.25 66.7614 25.25 66.3138V58.5013H35.4375C35.8851 58.5013 36.3143 58.3235 36.6307 58.0071C36.9472 57.6906 37.125 57.2614 37.125 56.8138C37.125 56.3663 36.9472 55.9371 36.6307 55.6206C36.3143 55.3041 35.8851 55.1263 35.4375 55.1263H25.25V46.5626C30.9688 46.137 36.3313 43.5971 40.286 39.4287C44.3496 35.1456 46.618 29.4685 46.625 23.5644ZM3.875 23.5636C3.87506 19.6698 5.02971 15.8636 7.19295 12.626C9.35624 9.38845 12.431 6.86506 16.0284 5.37496C19.6258 3.88486 23.5843 3.49498 27.4033 4.25463C31.2223 5.01427 34.7303 6.88933 37.4837 9.64267C40.237 12.396 42.1121 15.904 42.8717 19.723C43.6314 23.542 43.2415 27.5005 41.7514 31.0979C40.2613 34.6953 37.7379 37.7701 34.5003 39.9334C31.2628 42.0966 27.4567 43.2512 23.563 43.2513C18.3431 43.246 13.3385 41.17 9.64742 37.4789C5.95641 33.7879 3.88043 28.7834 3.875 23.5636Z" fill="url(#paint0_linear_1339_3154)" stroke="#E5FF00" />
                    <defs>
                      <linearGradient id="paint0_linear_1339_3154" x1="23.5625" y1="0.999939" x2="23.5625" y2="67.5013" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FEFB80" />
                        <stop offset="1" stopColor="#FBF7BD" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <GeneralText size="clamp(1.1rem,2vw,1.2rem)" color="var(--blackColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", zIndex: 3, margin: "0px", textTransform: "uppercase" }} >
                    {`${intl.formatMessage({ id: "female", defaultMessage: "Female" })}`}
                  </GeneralText>
                </Flex>
              </Flex>
              <GenderAngle bottom="0px" right="0px" />
            </GenderSelector>
          </GenderSelectorWrapper>
          <ButtonText width="100%" height="48px" bg="var(--yellowColor)" onClick={() => {
            handleContinueButton();
          }}>
            <GeneralText size="clamp(0.8rem,2vw,0.9rem)" color="var(--blackColor)" weight="bold" css={{ fontFamily: "var(--fontFamily1)", textTransform: "uppercase" }} >
              {`${intl.formatMessage({ id: "continue", defaultMessage: "Continue" })}`}
            </GeneralText>
          </ButtonText>
        </MenuWrapper>
      </Container>
    </ContainerGenderMenuWrapper >
  )
}

export default DemoChat