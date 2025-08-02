import React, { useState } from 'react';
import styled from 'styled-components'
import {
    Button
} from '@nextui-org/react'

const CollapseButton = styled(Button)`
border-radius: 8px;
// background: linear-gradient(180deg, #787FFC 0%, #42A8F6 54.69%, #4DDBEE 100%, #4DDBEE 100%);
background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 245, 0, 0.40) 100%);
padding:12px 16px!important;
border:2px solid #E5FF00;
min-height:32px;
width:100%;
color:black;
:hover {
    cursor: pointer;
  }
  > span {
    // width: 100%;
    // justify-content: flex-start!important;

  }
  .nextui-button-text{
    width:100%;
    justify-content: flex-start!important;
  }
`
const CollapseContent = styled.div`
background: #FFFFFF;
border-radius: 8px;
border:1px solid #E6E8EC;
width:100%;
padding:8px 16px;
overflow:hidden scroll;
max-height: 132px;
`

function CustomCollapse({ title, children ,setIsOpen,isOpen}) {

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div style={{ width: "100%" }}>
            <CollapseButton iconRight={<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.2 16.2002L7.19995 10.2002H19.2L13.2 16.2002Z" fill="#E5FF00" />
            </svg>

            } type="button" onClick={toggleCollapse}>{title}</CollapseButton>
            {isOpen && <CollapseContent>{children}</CollapseContent>}
        </div>
    );
}

export default CustomCollapse;
