import React from 'react'
import styled from '@emotion/styled'
import Page from 'components/Layout/Page'
import { Player } from '@lottiefiles/react-lottie-player'

const Wrapper = styled(Page)`
  top: 0;
  right: 0;
  display: flex;
  position: fixed;
  z-index: 503;
  width: 100%;
  justify-content: center;
  align-items: center;
  background: #000000bd;
  height:100%;
  flex-direction: column;
  text-align-last: center;
  gap: 1rem;
  text-align: center;
`

const PageLoader: React.FC<{ children: React.ReactNode | null }> = ({ children }) => {

  return (
    <Wrapper>
      <Player
        src='../../lotties/loading-icon.json'
        className="player"
        loop
        autoplay
        // style={{ height: '350px', width: '350px' }}
      />
      {children}
    </Wrapper>
  )
}

export default PageLoader