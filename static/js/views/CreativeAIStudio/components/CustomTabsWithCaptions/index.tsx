import React from 'react'
import styled from '@emotion/styled'
import gsap from 'gsap'

import { GeneralText } from 'components/GlobalStyle'
import { Button } from '@nextui-org/react'
import { useIntl } from 'react-intl'
import { Flex, NativeSelect, Select } from '@mantine/core'


const CustomTab = styled.li`
margin-bottom:0px;
display:flex;
flex-direction:column;
align-items:start;
padding:0px 10px;
cursor:pointer;
// gap:5px;
height:100%;
`


const ButtonText = styled(Button) <{ bg: string, borderradius: string }>`
border-radius: ${({ borderradius }) => borderradius};
background: ${({ bg }) => bg}!important;
padding:3px 8px!important;
// height:32px;
// min-width:110px;
:hover {
    cursor: pointer;
  }
:disabled {
  background-image: linear-gradient(180deg, #9596B2 0%, #BCC6CE 54.69%, #CBDBDD 100%)!important;
  animation-name: none;
}
`
const CustomTabStyled = styled(Flex)`
  cursor:pointer;
`

const ShowPopup = styled(Flex) <{ isShow: boolean }>`
 width: 233px;
 height: 116px;
 background: black;
 position: absolute;
 top: 25px;
 z-index:201;
 right: 0px;
 padding: 10px;
 box-shadow: 0px 0px 15px 0px rgba(52, 70, 233, 0.25);
border: 1px solid #777E90;
`

// const SelectStyled = styled(Select)`

// >div>div>input{
//   background:red;
//   border-color:white;
// }
// `
export const CustomTabWithCaptions = ({ active, children }) => {
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

export const CustomTabsWithCaptions = ({ active, onChange, children, ...props }) => {
  const intl = useIntl()
  const [isShow, setIsShow] = React.useState(false)

  return (
    <Flex direction="column" style={{ position: "relative", width: "100%" }}>
      <CustomTabStyled align="center" style={{ placeContent: "space-between", width: "100%" }}>
        {/* {children[active]} */}
        <div />
        <Flex gap="10px" align="center" onClick={() => {
          setIsShow(!isShow)
        }}>
          <GeneralText size="clamp(0.85rem,2vw,0.875rem)" color="white" weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize", lineHeight: "clamp(0.9rem,2vw,0.938rem)" }} >
            {`${intl.formatMessage({ id: "filter-by", defaultMessage: "Filter By" })}`}
          </GeneralText>
          <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.00078 4.8H0.800781L4.40078 0L8.00078 4.8ZM0.800781 7.2H8.00078L4.40078 12L0.800781 7.2Z" fill="#E5FF00" />
          </svg>

        </Flex>
        {/* <NativeSelect
          data={[
            { value: 'eur', label: 'EUR' },
            { value: 'usd', label: ' USD' },
            { value: 'cad', label: 'CAD' },
            { value: 'gbp', label: 'GBP' },
            { value: 'aud', label: 'AUD' },
          ]}
          rightSectionWidth={28}
          styles={{
            input: {
              fontWeight: 500,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            },
          }}
        /> */}
        {/* </ButtonText> */}
      </CustomTabStyled>
      {
        isShow &&
        <ShowPopup direction="column" isShow={isShow}>
          {
            children.map((c, index) => (
              <Flex role="button" align="center" onClick={() => {
                onChange(index); setIsShow(!isShow)
              }} style={{ padding: "12px", cursor: "pointer", justifyContent: "space-between", minHeight: "48px" }}>
                <GeneralText size="clamp(0.85rem,2vw,0.875rem)" color={index === active ? "#E5FF00" : "##444A50"} weight="bold" css={{ fontFamily: "var(--fontFamily3)", textTransform: "capitalize", lineHeight: "clamp(0.9rem,2vw,0.938rem)" }} >
                  {c.props.children.props.children.props.children}
                </GeneralText>
                {
                  index === active &&
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.5 6.41L8.5 18.41L3 12.91L4.41 11.5L8.5 15.58L19.09 5L20.5 6.41Z" fill="#E5FF00" />
                  </svg>
                }
              </Flex>
            ))
          }
        </ShowPopup>
      }
    </Flex>
  );
}
