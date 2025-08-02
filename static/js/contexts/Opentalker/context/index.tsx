
import React, { createContext, useEffect, useState, useRef, useContext } from "react";
import { useCookies } from "react-cookie";
import { useMediaQuery } from "react-responsive";

import { useTokenAuth } from "hooks/useTokenAuth";
import { ComponentsContext } from "contexts/ComponentsContext";
import { useCheckAuth } from "hooks/useUserAuth";
import { convertBlobToBase64 } from '../../../utils/fileHelpers'
import { uploadVoiceListDefault } from "../utils/constsAudio";

export interface uploadType {
    uuid: number,
    displayName: string,
    filename: string,
    base64: string | null | ArrayBuffer,
    isSample?: boolean
}

export interface extendUploadVoiceType extends uploadType {
    duration?: number,
}


export type previewVideoType = {
    title: string,
    data: string,
    error: boolean,
    finished: boolean,
    input_audio: string,
    input_image: string,
    job_uuid: string,
    status: string,
    created_at: string
}

export type jobType = {
    id: number,
    is_done: boolean,
    is_failed: boolean,
    status: string,
    metadata: {
        is_visible: boolean,
        title: string,
        params: {
            input_image?: string,
            input_audio?: string,
            input_subtitle_url?: string,
            input_video_url?: string,
            crop_mode?: string,
            face_enhance?: boolean,
            pose_style?: number,
            resolution?: number,
            still_mode?: boolean,
        },
        studio_params?: {
            params?: {
                input_image?: string,
                input_audio?: string,
                crop_mode?: string,
                face_enhance?: boolean,
                pose_style?: number,
                resolution?: number,
                still_mode?: boolean
            },
            is_visible?: boolean,
            title?: string,
        }
    },
    result: Array<string>,
    updated_at: string,
    created_at: string,
}

export type CustomModalProps = {
    show: boolean,
    onClose: () => void,
    onSave?: (videoName?: string) => void,
    jobInfo?: jobType
}

type loadingType = {
    isLoading: boolean,
    title: {
        id: string,
        defaultMessage: string
    }
}

export const StudioContext = createContext({
    isRecording: false,
    setIsRecording: (isRecording: boolean) => undefined,
    username: "",
    setUsername: (username: string) => null,
    isSideMenuOpen: false,
    setIsSideMenuOpen: (isUploadPhotoModalVisible: boolean) => null,
    isCapturedPhotoModalVisible: false,
    setIsCapturedPhotoModalVisible: (isCapturedPhotoModalVisible: boolean) => null,
    isExportModalVisible: false,
    setIsExportModalVisible: (isExportModalVisible: boolean) => null,
    uploadPhotoList: [] as uploadType[],
    setUploadPhotoList: (uploadPhotoList: uploadType[] | any) => null,
    uploadAudioList: [] as extendUploadVoiceType[],
    setUploadAudioList: (uploadAudioList: extendUploadVoiceType[] | any) => null,
    uploadPhoto: null as uploadType,
    setUploadPhoto: (uploadPhoto: uploadType) => null,
    uploadAudio: null as extendUploadVoiceType,
    setUploadAudio: (uploadAudio: extendUploadVoiceType) => null,
    previewVideo: null as jobType,
    setPreviewVideo: (previewVideo: jobType) => null,
    isOverlapLoading: { isLoading: false, title: { id: "", defaultMessage: "" } } as loadingType,
    setIsOverlapLoading: (loading: loadingType) => null,
    isSubtitleBarVisible: false,
    setIsSubtitleBarVisible: (isSubtitleBarVisible: boolean) => null,
    videoSubtitle: null as jobType,
    setVideoSubtitle: (videoSubtitle: jobType) => null,
    activeTab: 0,
    setActiveTab: (activeTab: number) => null,
    frameList: [] as { uuid: number, displayName: string, path: string }[],
    setFrameList: (frameList: { uuid: number, displayName: string, path: string }[]) => null,
    selectedFrame: { uuid: 0, displayName: "No Frame", path: "" },
    setSelectedFrame: (selectedFrame: { uuid: number, displayName: string, path: string }) => null,
    avatarRef: null,
})

export const StudioContextProvider = ({ startRecording, stopRecording, recordingBlob, recordingTime, isAllowMicrophonePermission, setIsAllowMicrophonePermission, children }) => {
    const { content } = useTokenAuth()
    const isMobile = useMediaQuery({ query: `(max-width: 992px)` })
    const { onCheckAuth: handleCheckAuth } = useCheckAuth()
    const [cookie, setCookie, removeCookie] = useCookies(["_acc"]);
    const { durationLimit } = useContext(ComponentsContext)

    const avatarRef = useRef<any>(null);
    const recordingTimeRef = useRef<number>(0);
    const recordVoiceId = useRef<number>(0);
    const [isRecording, setIsRecording] = useState<boolean>(false)
    const [username, setUsername] = useState<string>("");
    const [activeTab, setActiveTab] = useState<number>(() => {
        if (isMobile)
            return -1
        return 0
    });

    const [isSideMenuOpen, setIsSideMenuOpen] = useState(() => {
        if (isMobile)
            return false;
        return true;
    })

    const [isOverlapLoading, setIsOverlapLoading] = useState<loadingType>({ isLoading: false, title: { id: "", defaultMessage: "" } });
    const [isCapturedPhotoModalVisible, setIsCapturedPhotoModalVisible] = useState<boolean>(false);
    const [isExportModalVisible, setIsExportModalVisible] = useState<boolean>(false);

    const [uploadPhotoList, setUploadPhotoList] = useState<uploadType[]>([]);
    const [uploadAudioList, setUploadAudioList] = useState<extendUploadVoiceType[]>([]);

    const [uploadPhoto, setUploadPhoto] = useState<uploadType>(null);
    const [uploadAudio, setUploadAudio] = useState<extendUploadVoiceType>(null);

    const [frameList, setFrameList] = useState<{ uuid: number, displayName: string, path: string }[]>([
        { uuid: 0, displayName: "No Frame", path: "/images/opentalker/frames/updated-frame-000.png" },
        // { uuid: 1, displayName: "Frame 1", path: "/images/opentalker/frames/updated-frame-001.png" },
        // { uuid: 2, displayName: "Frame 2", path: "/images/opentalker/frames/updated-frame-002.png" },
        { uuid: 3, displayName: "Frame 3", path: "/images/opentalker/frames/updated-frame-003.png" },
        { uuid: 4, displayName: "Frame 4", path: "/images/opentalker/frames/updated-frame-004.png" },
        { uuid: 5, displayName: "Frame 5", path: "/images/opentalker/frames/updated-frame-005.png" },
        // { uuid: 6, displayName: "Frame 6", path: "/images/opentalker/frames/updated-frame-006.png" },
    ])
    const [selectedFrame, setSelectedFrame] = useState({ uuid: 0, displayName: "No Frame", path: "" })

    const [previewVideo, setPreviewVideo] = useState<jobType>(
        {
            id: 0,
            is_done: false,
            is_failed: false,
            status: "",
            metadata: {
                is_visible: false,
                title: "",
                params: {
                    input_subtitle_url: "",
                    input_video_url: "",
                    input_image: "",
                    input_audio: "",
                    crop_mode: "",
                    face_enhance: false,
                    pose_style: 0,
                    resolution: 0,
                    still_mode: false
                },
                studio_params: {
                    params: {
                        input_image: "",
                        input_audio: "",
                        crop_mode: "",
                        face_enhance: false,
                        pose_style: 0,
                        resolution: 0,
                        still_mode: false
                    },
                    is_visible: false,
                    title: ""
                }
            },
            result: [],
            updated_at: "",
            created_at: ""
        }
    );

    // set is subtitle bar visible
    const [isSubtitleBarVisible, setIsSubtitleBarVisible] = useState<boolean>(false)
    // choose video to add subtitle in subtitle menu
    const [videoSubtitle, setVideoSubtitle] = useState<jobType>(
        {
            id: 0,
            is_done: false,
            is_failed: false,
            status: "",
            metadata: {
                is_visible: false,
                title: "",
                params: {
                    input_subtitle_url: "",
                    input_video_url: "",
                    input_image: "",
                    input_audio: "",
                    crop_mode: "",
                    face_enhance: false,
                    pose_style: 0,
                    resolution: 0,
                    still_mode: false
                },
                studio_params: {
                    params: {
                        input_image: "",
                        input_audio: "",
                        crop_mode: "",
                        face_enhance: false,
                        pose_style: 0,
                        resolution: 0,
                        still_mode: false
                    },
                    is_visible: false,
                    title: ""
                }
            },
            result: [],
            updated_at: "",
            created_at: ""
        }
    )

    // set is side menu open when change screen size
    useEffect(() => {
        if (isMobile) {
            setIsSideMenuOpen(false)
            setActiveTab(-1)
        } else {
            setIsSideMenuOpen(true)
            setActiveTab(0)
        }
    }, [isMobile])

    // get user details from middleware
    useEffect(() => {
        const getUsername = async () => {
            const response = await handleCheckAuth(content.token)
            if (!response.error)
                setUsername(response.data.username)
            else {
                removeCookie("_acc");
            }
        }
        if (content && content.token) {
            getUsername()
        }
    }, [content, handleCheckAuth, removeCookie])

    // handle microphone permission
    useEffect(() => {
        setIsRecording(false);
        setIsAllowMicrophonePermission(true);
    }, [isAllowMicrophonePermission, setIsAllowMicrophonePermission])

    useEffect(() => {
        if (isRecording) {
            startRecording()
        } else {
            stopRecording()
        }
    }, [isRecording, recordingTime, startRecording, stopRecording])

    // convert blob to base64
    useEffect(() => {
        const updateAudio = async () => {
            if (recordingBlob) {
                recordVoiceId.current += 1;
                const audio = await convertBlobToBase64(recordingBlob)
                const extensionMatch = /\/(?:([^/]+?))?(?:;|$)/.exec(recordingBlob.type);
                const extension = extensionMatch ? extensionMatch[1] || recordingBlob.type : recordingBlob.type;
                const tempAudio = { uuid: Date.now(), displayName: `Record Voice ${recordVoiceId.current}`, filename: `voice.${extension}`, base64: audio, duration: recordingTimeRef.current + 1 }
                recordingTimeRef.current = 0;
                setUploadAudioList((prevArray) => {
                    return [...prevArray, tempAudio]
                });
                setUploadAudio(tempAudio);
            }
        }
        updateAudio();
    }, [recordingBlob])

    // stop recording when recording time is over 90s
    useEffect(() => {
        if (recordingTime > durationLimit) {
            stopRecording();
            setIsRecording(false);
        }
    }, [recordingTime, stopRecording, durationLimit])


    useEffect(() => {
        if (recordingTime > 0) {
            recordingTimeRef.current = recordingTime;
        }
    }, [recordingTime])

    return (
        <StudioContext.Provider value={{
            isOverlapLoading, setIsOverlapLoading,
            isRecording, setIsRecording,
            username, setUsername,
            isSideMenuOpen, setIsSideMenuOpen,
            isCapturedPhotoModalVisible, setIsCapturedPhotoModalVisible,
            isExportModalVisible, setIsExportModalVisible,
            uploadPhotoList, setUploadPhotoList,
            uploadAudioList, setUploadAudioList,
            uploadPhoto, setUploadPhoto,
            uploadAudio, setUploadAudio,
            previewVideo, setPreviewVideo,
            isSubtitleBarVisible, setIsSubtitleBarVisible,
            videoSubtitle, setVideoSubtitle,
            activeTab, setActiveTab,
            frameList, setFrameList,
            selectedFrame, setSelectedFrame,
            avatarRef
        }}>
            {children}
        </StudioContext.Provider>
    );
};


