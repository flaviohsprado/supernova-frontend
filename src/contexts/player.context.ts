import { createContext } from "react";

export interface IPlayerConfiguration {
    url?: string | null
    pip?: boolean
    playing?: boolean
    controls?: boolean
    light?: boolean
    volume?: number
    muted?: boolean
    played?: number
    loaded?: number
    duration?: number
    playbackRate?: number
    loop?: boolean
    seeking?: boolean
}

export type PlayerContextType = {
    state: IPlayerConfiguration,
    load: (url: string) => void,
    handlePlayPause: () => void,
    handleStop: () => void,
    handleToggleLoop: () => void,
    handleVolumeChange: (event: any) => void,
    handleToggleMuted: () => void,
    handlePlay: () => void,
    handlePause: () => void,
    handleSeekChange: (event: any) => void,
    handleProgress: (state: any) => void,
    handleDuration: (duration: any) => void,
}


export const PlayerContext = createContext<PlayerContextType>({} as PlayerContextType);