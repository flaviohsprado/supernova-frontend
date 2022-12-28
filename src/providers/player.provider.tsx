import { ReactNode, useEffect, useRef, useState } from 'react'
import { PlayerContext } from '../contexts/player.context'
import { IMusicBasicProps } from '../interfaces/music.interface'

interface IPlayerProviderProps {
    children: ReactNode
}

export default function PlayerProvider({ children }: IPlayerProviderProps) {
    const [musics, setMusics] = useState<IMusicBasicProps[]>([
        {
            id: '1',
            title: 'SoundHelix Song 1',
            url: '',
        },
    ])
    const [musicIndex, setMusicIndex] = useState(0)
    const [musicProgress, setMusicProgress] = useState(0)
    const [volume, setVolume] = useState(0.5)
    const [random, setRandom] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [playing, setPlaying] = useState(false)
    let { url } = musics[musicIndex]
    const audioRef = useRef(new Audio(String(url)))
    const intervalRef = useRef()
    const isReady = useRef(false)
    const { duration } = audioRef.current

    useEffect(() => {
        if (playing) {
            audioRef.current.play()
            handleStartTimer()
        } else {
            audioRef.current.pause()
        }
    }, [playing])

    // Handles cleanup and setup when changing tracks
    useEffect(() => {
        audioRef.current.pause()

        audioRef.current = new Audio(String(url))
        setMusicProgress(audioRef.current.currentTime)

        if (isReady.current) {
            audioRef.current.play()
            setPlaying(true)
            handleStartTimer()
        } else {
            // Set the isReady ref as true for the next pass
            isReady.current = true
        }
    }, [musicIndex])

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause()
            clearInterval(intervalRef.current)
        }
    }, [])

    const handleLoad = (musics: IMusicBasicProps[]) => {
        setMusics(musics)
        setMusicIndex(0)

        // If random is on, turn it off
        if (random) {
            setRandom(false)
        }

        // If repeat is on, turn it off
        if (repeat) {
            setRepeat(false)
        }

        // If music progress is not 0, set it to 0
        if (musicProgress !== 0) {
            setMusicProgress(0)
        }

        // If music duration is not 0, set it to 0
        if (duration !== 0) {
            audioRef.current.currentTime = 0
        }

        // If audioRef is not paused, pause it
        if (!audioRef.current.paused) {
            audioRef.current.pause()
        }

        // If intervalRef is not cleared, clear it
        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        // play many musics

        url = musics[0].url

        //set music to audioRef
        audioRef.current = new Audio(String(url))

        // play the music
        audioRef.current.play()
    }

    const handleStartTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current)

        //@ts-ignore
        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                handleNextMusic()
            } else {
                setMusicProgress(audioRef.current.currentTime)
            }
            //@ts-ignore
        }, [1000])
    }

    const handleSlide = (value: number) => {
        // Clear any timers already running
        clearInterval(intervalRef.current)
        audioRef.current.currentTime = value
        setMusicProgress(audioRef.current.currentTime)
    }

    const handleSlideToEnd = () => {
        // If not already playing, start
        if (!playing) {
            setPlaying(true)
        }
        handleStartTimer()
    }

    const handlePreviousMusic = () => {
        if (musicIndex - 1 < 0) {
            setMusicIndex(musics.length - 1)
        } else {
            setMusicIndex(musicIndex - 1)
        }
    }

    const handleNextMusic = () => {
        if (musicIndex < musics.length - 1) {
            setMusicIndex(musicIndex + 1)
        } else {
            setMusicIndex(0)
        }
    }

    const handleChangeVolume = (value: number) => {
        audioRef.current.volume = value
        setVolume(value)
    }

    const handleMute = () => {
        audioRef.current.volume = 0
        setVolume(0)
    }

    const handleRandom = () => {
        setRandom(!random)

        if (random) {
            setMusicIndex(Math.floor(Math.random() * musics.length))
        } else {
            setMusicIndex(0)
        }
    }

    const handleRepeat = () => {
        setRepeat(!repeat)

        if (repeat) {
            audioRef.current.loop = true
        } else {
            audioRef.current.loop = false
        }
    }

    return (
        <PlayerContext.Provider
            value={{
                handleLoad,
                musics,
                setMusics,
                playing,
                setPlaying,
                volume,
                handleChangeVolume,
                random,
                handleRandom,
                repeat,
                handleRepeat,
                handleSlide,
                handleSlideToEnd,
                handlePreviousMusic,
                handleNextMusic,
                musicProgress,
                duration,
            }}
        >
            {children}
        </PlayerContext.Provider>
    )
}
