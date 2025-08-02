import React, { useCallback, useEffect } from 'react'
import Lottie from 'lottie-web'


type LoaderProps = {
  name: string,
  width?: string,
  height?: string
}

const Loader: React.FC<LoaderProps> = ({ name, width = "250px", height = "150px" }) => {
  // Initialize Lottie
  const lottieInit = useCallback((elemId: string, path: string, loop = false, autoplay = true) => {
    const target = document.querySelector(elemId)
    const animation = Lottie.loadAnimation({
      name: elemId,
      container: target,
      renderer: 'svg',
      loop,
      autoplay,
      path,
      rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
    })
    return { lottieInfo: Lottie, animation }
  }, [])

  useEffect(() => {
    const { lottieInfo, animation } = lottieInit(`#${name}`, "/lotties/loading-icon.json", true)
    return () => {
      lottieInfo.destroy(animation.name);
    }

  }, [lottieInit, name])

  return (
    <div id={name} style={{ height, width }} />
  )
}

export default Loader