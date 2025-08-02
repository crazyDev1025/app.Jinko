import React, { useCallback, useEffect } from 'react'
import styled from '@emotion/styled'
import Page from 'components/Layout/Page'
import Lottie from 'lottie-web'

const Wrapper = styled(Page)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PageLoader: React.FC = () => {
  // Initialize Lottie
  const lottieInit = useCallback((elemId: string, path: string, loop = false, autoplay = true) => {
    const target = document.querySelector(elemId)
    const animation = Lottie.loadAnimation({
      name:elemId,
      container: target,
      renderer: 'canvas',
      loop,
      autoplay,
      path,
      rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
    })
    return { lottieInfo: Lottie, animation }
  }, [])

  useEffect(() => {
    const { lottieInfo, animation } = lottieInit("#page-loading-icon", "/lotties/loading-icon.json", true)
    return () => {
      lottieInfo.destroy(animation.name);
    }
  }, [lottieInit])

  return (
    <Wrapper>
      {/* <Loading
        loadingCss={{ $$loadingSize: "100px", $$loadingBorder: "10px" }}
      /> */}
      <div id='page-loading-icon' style={{ height: "150px", width: "250px" }} />
    </Wrapper>
  )
}

export default PageLoader