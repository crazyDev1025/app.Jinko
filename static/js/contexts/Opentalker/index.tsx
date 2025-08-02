import React, { useCallback, useEffect, useState } from 'react'
// import { useAudioRecorder } from 'react-audio-voice-recorder'
import { useNotifications } from 'reapop'
import { useIntl } from 'react-intl'
import useAudioRecorder from './hooks/useAudioRecorder'

import { StudioContextProvider } from './context'

const OpentalkerProvider = ({ children }) => {
  const intl = useIntl()
  const { notify } = useNotifications()
  const [isAllowMicrophonePermission, setIsAllowMicrophonePermission] = useState(true)
  const handleMicrophonePermission = useCallback(() => {
    notify(`${intl.formatMessage({ id: "kindly-grant-microphone-access-in-your-browser", defaultMessage: "Kindly grant microphone access in your browser settings." })}`, 'warning')
    setIsAllowMicrophonePermission(false)
  }, [notify, intl])
  const {
    startRecording,
    stopRecording,
    // togglePauseResume,
    recordingBlob,
    // isPaused,
    // isRecording,
    recordingTime,
    // mediaRecorder,
  } = useAudioRecorder({ autoGainControl: true, echoCancellation: true, sampleRate: 410000 }, handleMicrophonePermission, { audioBitsPerSecond: 128000, mimeType: 'audio/webm' })

  return (
    <StudioContextProvider startRecording={startRecording} stopRecording={stopRecording} recordingBlob={recordingBlob} recordingTime={recordingTime} isAllowMicrophonePermission={isAllowMicrophonePermission} setIsAllowMicrophonePermission={setIsAllowMicrophonePermission}>
      {children}
    </StudioContextProvider>
  )
}

export default OpentalkerProvider