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

    return (
        <Box backgroundColor={'black'} padding={'5'}>
            <Flex justifyContent={'space-around'}>
                <PlayerInformation />
                <Stack spacing={12} width={'30%'} justifyContent={'center'}>
                    <PlayerControls />
                    <MusicProgress />
                </Stack>
                <SoundControls />
            </Flex>
        </Box>
    )
}
