import { ReactNode, useState } from 'react'
import { IPlayerConfiguration, PlayerContext } from '../contexts/player.context'

interface IPlayerProviderProps {
    children: ReactNode
}

export default function PlayerProvider({ children }: IPlayerProviderProps) {
    const [state, setState] = useState<IPlayerConfiguration>({
        url: null,
        pip: false,
        playing: false,
        controls: false,
        light: false,
        volume: 0.8,
        muted: false,
        played: 0,
        loaded: 0,
        duration: 0,
        playbackRate: 1.0,
        loop: false,
    })

    const load = (url: string) => {
        setState({
            url,
            played: 0,
            loaded: 0,
            pip: false,
        })
    }

    const handlePlayPause = () => {
        setState({ playing: !state.playing })
    }

    const handleStop = () => {
        setState({ url: null, playing: false })
    }

    const handleToggleLoop = () => {
        setState({ loop: !state.loop })
    }

    const handleVolumeChange = (event: any) => {
        setState({ volume: parseFloat(event.value) })
    }

    const handleToggleMuted = () => {
        setState({ muted: !state.muted })
    }

    const handlePlay = () => {
        console.log('onPlay')
        setState({ playing: true })
    }

    const handlePause = () => {
        console.log('onPause')
        setState({ playing: false })
    }

    /*const handleSeekMouseDown = (event: any) => {
        setState({ seeking: true })
    }*/

    const handleSeekChange = (event: any) => {
        setState({ played: parseFloat(event.value) })
    }

    /*const handleSeekMouseUp = (event: any) => {
        setState({ seeking: false })
        player.seekTo(parseFloat(event.target.value))
    }*/

    const handleProgress = (state: any) => {
        console.log('onProgress', state)
        // We only want to update time slider if we are not currently seeking
        if (!state.seeking) {
            setState(state)
        }
    }

    const handleDuration = (duration: any) => {
        console.log('onDuration', duration)
        setState({ duration })
    }

    return (
        <PlayerContext.Provider
            value={{
                state,
                load,
                handleDuration,
                handlePause,
                handlePlay,
                handlePlayPause,
                handleProgress,
                handleSeekChange,
                handleStop,
                handleToggleLoop,
                handleToggleMuted,
                handleVolumeChange,
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}
