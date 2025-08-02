import React, { useCallback, useEffect } from 'react'
import Lottie from 'lottie-web'


type WaveformProps = {
  name: string
}

const Waveform: React.FC<WaveformProps> = ({ name }) => {
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
    const { lottieInfo, animation } = lottieInit(`#${name}`, "/lotties/waveform.json", true)
    return () => {
      lottieInfo.destroy(animation.name);
    }

  }, [lottieInit, name])

  return (
    <div id={name} style={{ height: "26px", width: "100%" }} />
  )
}

export default Waveform