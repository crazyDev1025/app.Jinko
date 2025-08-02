import React from 'react'
import styled from '@emotion/styled'

const StyledPage = styled.div`
  box-sizing: border-box;
  // min-height: calc(100vh - 76px);
  height:100%;
  max-width: 100%;
`

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return (
    <StyledPage {...props}>{children}</StyledPage>
  )
}

export default Page