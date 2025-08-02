import React, { useReducer, useState, useRef, useEffect } from 'react'
import styled from '@emotion/styled'
import gsap from 'gsap'
import Sheet from 'react-modal-sheet';

import { GeneralText } from 'components/GlobalStyle'
import { Button } from '@nextui-org/react'
import { useIntl } from 'react-intl'
import { Flex, NativeSelect, Select } from '@mantine/core'
import { useMediaQuery } from 'react-responsive'


const CustomTabStyled = styled(Flex)`
  cursor:pointer;
  width:fit-content;
  border:1px solid #E5FF00;
  border-radius:8px;
  padding:6px 12px;
`

const ButtonTabMobile = styled(Button)`
border: none;
display:flex;
min-height: 70px;
min-width: 100%;
height:70px;
width:100%;
background: transparent;
padding: 20px!important;
>span{
  background-image: transparent;
  width: 100%;
  height: 100%;
}
:hover {
    cursor: pointer;
}
:disabled {
  color:grey;
}
`

const SelectorMagicAvatar = styled(Flex)`
width:100%;
justify-content:center;
& div:nth-of-type(n){
  border-right:2px solid #777E90;
  border-radius:0px;
}
& div:nth-last-of-type(1){
  border-right:none;
}
`

const ButtonTabDesktopWrapper = styled(Flex)`
width:fit-content;
height:fit-content;
border-radius:0px;
`

const ButtonTabDesktop = styled(Button)`
width:172px;
background:transparent;
height:fit-content;
border-radius:0px;

:disabled{
  cursor:not-allowed;
  color:grey;
}

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

export const CustomTabMagicAvatar = ({ active, children }) => {
  const intl = useIntl()

  if (children.length === 1 || children.length === undefined) {
    return (
      <>
        {children}
      </>
    );
  }
  return (
    <>
      {children[active]}
    </>
  );
}

export const CustomTabsMagicAvatar = ({ active, onChange, formik, isValidToStep2, children, ...props }) => {
  const intl = useIntl()
  const isMobile = useMediaQuery({ query: `(max-width: 992px)` })
  const sheetRef = useRef<any>()
  const [isSheetVisible, setIsSheetVisibleDispatch] = useReducer(reducer, { isVisible: false, job: null })
  const handleVideoButtonOptionsOnClick = (job) => {
    setIsSheetVisibleDispatch({ type: 'open', payload: job });
  }

  const handleSheetClose = () => {
    setIsSheetVisibleDispatch({ type: 'close', payload: null })
  }

  const handleSheetOpen = () => {
    setIsSheetVisibleDispatch({ type: 'open', payload: null })
  }
  const handleChange = (index) => {
    onChange(index)
    setIsSheetVisibleDispatch({ type: 'close', payload: null })
  }

  if (isMobile)
    return (
      <Flex direction="column" style={{ position: "relative", width: "100%" }}>
        <CustomTabStyled align="center" >
          <Flex gap="10px" align="center" onClick={
            handleSheetOpen
          }>
            {children[active]}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 4.91315H12.7394L8.8263 1M13 8.17411H1.26055L5.1737 12.0873" stroke="#E5FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Flex>
        </CustomTabStyled>


        <Sheet isOpen={isSheetVisible.isVisible} onClose={handleSheetClose}
          ref={sheetRef}
          detent="content-height"
        >
          <Sheet.Container style={{ background: "#000000", borderTop: "2px solid #777E90", borderRight: "2px solid #777E90", borderLeft: "2px solid #777E90" }}>
            <Sheet.Header />
            <Sheet.Content>
              <Flex direction="column" >
                {
                  children.map((child, index) => {
                    return <ButtonTabMobile onClick={() => handleChange(index)} disabled={isValidToStep2 && index === 1}>
                      <Flex align="center" gap="10px" style={{ width: "100%" }}>
                        <GeneralText size="clamp(0.9rem,2vw,0.9375rem)" color={active === index ? "#E5FF00" : ""} weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                          {child.props.children.props.children}
                        </GeneralText>
                      </Flex>
                    </ButtonTabMobile>
                  })
                }
              </Flex>
            </Sheet.Content>
          </Sheet.Container>
          <Sheet.Backdrop onTap={handleSheetClose} />
        </Sheet>
      </Flex>
    );

  return (<>
    <SelectorMagicAvatar>
      {
        children.map((child, index) => {
          return <ButtonTabDesktopWrapper>
            <ButtonTabDesktop onClick={() => handleChange(index)} disabled={isValidToStep2 && index === 1}>
              <Flex align="center" gap="10px" style={{ width: "100%" }}>
                {
                  active === index &&
                  <svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1L2 9.5L8 18" stroke="#E5FF00" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                }
                <GeneralText size="clamp(0.9rem,2vw,0.9375rem)" color={active === index ? "#E5FF00" : ""} weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize" }} >
                  {child.props.children.props.children}
                </GeneralText>
                {
                  active === index &&
                  <svg width="9" height="19" viewBox="0 0 9 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 9.5L1 18" stroke="#E5FF00" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                }
              </Flex>
            </ButtonTabDesktop>
          </ButtonTabDesktopWrapper>

        })
      }
    </SelectorMagicAvatar>
  </>)
}
