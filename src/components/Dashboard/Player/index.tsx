import { Box, Flex, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import PlayerControls from './Controls'
import PlayerInformation from './Information'
import MusicProgress from './MusicProgress'
import SoundControls from './SoundControls'

export default function Player() {
    const [playing, setPlaying] = useState(false)
    const [paused, setPaused] = useState(false)
    const [random, setRandom] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [previous, setPrevious] = useState(false)
    const [next, setNext] = useState(false)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(0.3)

    const handleProgress = (state: any) => {
        setProgress(state.played)
        console.log('progress', state.played)
        setCurrentTime(state.playedSeconds)
        console.log('current time', state.playedSeconds)
    }

    return (
        <Box backgroundColor={'black'} padding={'5'}>
            <Flex justifyContent={'space-between'}>
                <PlayerInformation />
                <Stack spacing={6} width={'30%'}>
                    <Flex justifyContent={'center'}>
                        <PlayerControls
                            random={random}
                            setRandom={setRandom}
                            setPrevious={setPrevious}
                            playing={playing}
                            setPlaying={setPlaying}
                            setPaused={setPaused}
                            setNext={setNext}
                            repeat={repeat}
                            setRepeat={setRepeat}
                        />
                    </Flex>

                    <MusicProgress
                        duration={duration}
                        currentTime={currentTime}
                        setCurrentTime={setCurrentTime}
                    />
                </Stack>
                <SoundControls />
            </Flex>
        </Box>
    )
}
