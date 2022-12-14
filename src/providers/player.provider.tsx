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
            url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        },
    ])
    const [musicIndex, setMusicIndex] = useState(0)
    const [musicProgress, setMusicProgress] = useState(0)
    const [volume, setVolume] = useState(0.5)
    const [random, setRandom] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [playing, setPlaying] = useState(false)
    const { url } = musics[musicIndex]
    const audioRef = useRef(new Audio(String(url)))
    const intervalRef = useRef()
    const isReady = useRef(false)
    const { duration } = audioRef.current

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

    return (
        <PlayerContext.Provider
            value={{
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
