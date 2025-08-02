import { set } from "lodash";
import { useState, useCallback, useEffect, useMemo } from "react";
import Recorder from 'opus-recorder';
import encoderPath from "opus-recorder/dist/encoderWorker.min";

export interface recorderControls {
    startRecording: () => void;
    stopRecording: () => void;
    togglePauseResume: () => void;
    recordingBlob?: Blob;
    isRecording: boolean;
    isPaused: boolean;
    recordingTime: number;
    mediaRecorder?: MediaRecorder;
}

export type MediaAudioTrackConstraints = Pick<
    MediaTrackConstraints,
    | "deviceId"
    | "groupId"
    | "autoGainControl"
    | "channelCount"
    | "echoCancellation"
    | "noiseSuppression"
    | "sampleRate"
    | "sampleSize"
>;

/**
 * @returns Controls for the recording. Details of returned controls are given below
 *
 * @param `audioTrackConstraints`: Takes a {@link https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackSettings#instance_properties_of_audio_tracks subset} of `MediaTrackConstraints` that apply to the audio track
 * @param `onNotAllowedOrFound`: A method that gets called when the getUserMedia promise is rejected. It receives the DOMException as its input.
 *
 * @details `startRecording`: Calling this method would result in the recording to start. Sets `isRecording` to true
 * @details `stopRecording`: This results in a recording in progress being stopped and the resulting audio being present in `recordingBlob`. Sets `isRecording` to false
 * @details `togglePauseResume`: Calling this method would pause the recording if it is currently running or resume if it is paused. Toggles the value `isPaused`
 * @details `recordingBlob`: This is the recording blob that is created after `stopRecording` has been called
 * @details `isRecording`: A boolean value that represents whether a recording is currently in progress
 * @details `isPaused`: A boolean value that represents whether a recording in progress is paused
 * @details `recordingTime`: Number of seconds that the recording has gone on. This is updated every second
 * @details `mediaRecorder`: The current mediaRecorder in use
 */
const useAudioRecorder: (
    audioTrackConstraints?: MediaAudioTrackConstraints,
    onNotAllowedOrFound?: (exception: DOMException) => any,
    mediaRecorderOptions?: MediaRecorderOptions
) => recorderControls = (
    audioTrackConstraints,
    onNotAllowedOrFound,
    mediaRecorderOptions
) => {
        const [isRecording, setIsRecording] = useState(false);
        const [isPaused, setIsPaused] = useState(false);
        const [recordingTime, setRecordingTime] = useState(0);
        const [timerInterval, setTimerInterval] = useState<any>();
        const [recordingBlob, setRecordingBlob] = useState<Blob>();

        const _startTimer: () => void = useCallback(() => {
            const interval = setInterval(() => {
                setRecordingTime((time) => time + 1);
            }, 1000);
            setTimerInterval(interval);
        }, [setRecordingTime, setTimerInterval]);

        const _stopTimer: () => void = useCallback(() => {
            timerInterval != null && clearInterval(timerInterval); //eslint-disable-line
            setTimerInterval(undefined);
        }, [timerInterval, setTimerInterval]);

        /**
         * Calling this method would result in the recording to start. Sets `isRecording` to true
         */
        const recorder = useMemo(() => {
            return new Recorder({
                monitorGain: 0,
                recordingGain: 1,
                numberOfChannels: 1,
                encoderSampleRate: 48000,
                encoderPath
            })
        }, []);
        const startRecording: () => void = useCallback(() => {
            if (timerInterval != null) return;
            try {
                recorder.start().then(() => {
                    _startTimer();
                    setIsRecording(true);
                }).catch((err) => {
                    onNotAllowedOrFound?.(err);
                });
            } catch (err: any) {
                onNotAllowedOrFound?.(err);
            }
        }, [
            timerInterval,
            _startTimer,
            recorder,
            onNotAllowedOrFound,
            // audioTrackConstraints
        ]);

        /**
         * Calling this method results in a recording in progress being stopped and the resulting audio being present in `recordingBlob`. Sets `isRecording` to false
         */
        const stopRecording: () => void = useCallback(async () => {
            if (recorder?.state === "inactive") return;
            recorder.stop().then(() => {
                _stopTimer();
                setRecordingTime(0);
                setIsRecording(false);
            }).catch((err) => {
                console.log(err)
                onNotAllowedOrFound?.(err);
            })
        }, [recorder, _stopTimer, onNotAllowedOrFound]);

        useEffect(() => {
            recorder.ondataavailable = (e) => {
                const dataBlob = new Blob([e], { type: 'audio/wav' });
                setRecordingBlob(dataBlob);
            }
        }, [recorder])
        /**
         * Calling this method would pause the recording if it is currently running or resume if it is paused. Toggles the value `isPaused`
         */
        const togglePauseResume: () => void = useCallback(() => {
            if (isPaused) {
                setIsPaused(false);
                recorder.resume();
                _startTimer();
            } else {
                setIsPaused(true);
                _stopTimer();
                recorder.pause();
            }
        }, [recorder, setIsPaused, _startTimer, _stopTimer, isPaused]);

        return {
            startRecording,
            stopRecording,
            togglePauseResume,
            recordingBlob,
            isRecording,
            isPaused,
            recordingTime,
        };
    };

export default useAudioRecorder;