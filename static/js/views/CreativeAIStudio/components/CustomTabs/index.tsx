import React from 'react'
import styled from '@emotion/styled'

import { GeneralText } from 'components/GlobalStyle'


const CustomTabStyled = styled.li`
margin-bottom:0px;
display:flex;
flex-direction:column;
align-items:center;
padding:0px 10px;
cursor:pointer;
// gap:5px;
height:100%;
background-color:transparent;
`


export const CustomTab = ({ active, children }) => {
  if(children.length === 1 || children.length === undefined){
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

export const CustomTabs = ({ active, onChange, children, ...props }) => {
  if (children.length === 1 || children.length === undefined) {
    return (
      <>
        <CustomTabStyled >
          {children.props.children}
          <div style={{ borderBottom: "3px solid var(--primaryColor)", width: "50%" }} />
        </CustomTabStyled>
      </>
    );
  }
  return (
    <>
      {children.map((c, index) => (
        <CustomTabStyled onClick={() => onChange(index)} >
          {c.props.children}
          <div style={{ borderBottom: index === active ? "3px solid var(--primaryColor)" : "1px solid transparent", width: "50%" }} />
        </CustomTabStyled>
      ))}
    </>
  );
}
