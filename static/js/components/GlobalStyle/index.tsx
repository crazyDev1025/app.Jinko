import React from 'react'
import {
  Text,
  Button,
  TextProps,
  Modal
} from '@nextui-org/react'
import { templateId } from 'utils'
import styled from 'styled-components'

type TextTransforms =
  /* Keyword values */
  | "none"
  | "capitalize"
  | "uppercase"
  | "lowercase"
  | "full-width"
  | "full-size-kana"
  /* Global values */
  | "inherit"
  | "initial"
  | "revert"
  | "unset";

type TextWeights =
  | 'hairline'  // 100,
  | 'thin'  // 200,
  | 'light'  // 300,
  | 'normal'  // 400,
  | 'medium'  // 500,
  | 'semibold'  // 600,
  | 'bold'  // 700,
  | 'extrabold'  // 800,
  | 'black';  // 900

// export const GeneralText: React.FC<{

//   id?: string;
//   size: string | number
//   color: string
//   margin?: string
//   transform?: TextTransforms
//   weight: TextWeights
//   cusColor?: string
//   wordB?: string
//   fontFamily?: string
//   zIndex?: number
// }> = ({ id, size,
//   color, margin,
//   transform, weight, cusColor,
//   wordB, fontFamily, zIndex,
//   children }) => (
//     <Text id={id} size={size} color={cusColor} transform={transform} weight={weight}
//       css={{
//         margin,
//         color,
//         wordBreak: wordB,
//         fontFamily,
//         zIndex
//       }}
//     >
//       {children}
//     </Text>
//   )

type GeneralTextProps = {
  id?: string;
  size: string | number
  color?: string
  margin?: string
  transform?: TextTransforms
  weight: TextWeights
  cusColor?: string
} & TextProps & { children: React.ReactNode }

export const GeneralText: React.FC<GeneralTextProps> = (prop) => {
  const { id, size, color, transform, weight, children } = prop
  return (<Text id={id} size={size} color={color} transform={transform} weight={weight} {...prop}>
    {children}
  </Text>)
}

export const ButtonStyled: React.FC<{
  width?: string
  height?: string
  borderRadius?: string
  isLoading?: boolean
  onClick?: any
  disabled?: boolean
  fSize?: string
  children?: React.ReactNode
}> = ({ width, height, borderRadius, isLoading, onClick, disabled, fSize, children }) => (
  <Button
    rounded={templateId === '1' || templateId === '3'}
    css={{
      background: templateId === '1' ? '#DC70FA' : '#3772FF',
      width,
      height,
      borderRadius,
      fontSize: fSize
    }}
    iconRight={isLoading ? <i className="pi pi-spin pi-sync" style={{ fontSize: '1rem' }} /> : null}
    onPress={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
)

export const TextFieldWithIconStyled = styled.input<{ fontColor: string, bgColor: string }>`
background-color:${({ bgColor }) => bgColor};
color:${({ fontColor }) => fontColor};
border:none;
type:text;
caret-color:white;
:focus{
  border:none;
  outline:none;
  background-color:${({ bgColor }) => bgColor};
}
:hover{
  border:none;
  outline:none;
  background-color:${({ bgColor }) => bgColor};
}
:active{
  border:none;
  outline:none;
  background-color:${({ bgColor }) => bgColor};
}
`

export const ButtonIcon = styled(Button) <{ minwidth?: string, minHeight?: string, padding?: string }>`
min-width:${({ minwidth }) => minwidth};
min-height:${({ minHeight }) => minHeight};
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

// Custom Modal Start

export const ModalContentStyled = styled.div`
// display:flex;
// flex-direction:column;
// width:100%;
// height:100%;
// background:black;
// border-radius: 6px;
// overflow: hidden;
// padding:10px 0px;
`

export const ButtonClose = styled(Button)`
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

export const InputStyled = styled.input`
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

export const TooltipStyled = styled.div`
position: absolute;
right: 0px;
top:-20px;
height:12px;
`

export const Thumbnail = styled.img`
max-width: 80%;
// aspect-ratio: 1;
object-fit: contain;
align-self: center;
`

export const ModalStyled = styled(Modal)`
border: 1px solid rgba(255, 240, 240, 0.50);
padding:0px;
max-width:552px;
background:#16181A;
button>svg{
  color:var(--yellowColor);
}
`

export const ModalHeaderStyled = styled(Modal.Header)`
padding-top: 15px;
padding-bottom: 14px;
`
// Custom Modal End


