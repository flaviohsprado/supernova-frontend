import { Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { PlayerContext } from '../../../../contexts/player.context'
import NextButton from './Next'
import PauseButton from './Pause'
import PlayButton from './Play'
import PreviousButton from './Previous'
import RandomButton from './Random'
import RepeatButton from './Repeat'

interface IPlayerControlsProps {
    random: boolean
    setRandom: (value: boolean) => void
    setPrevious: (value: boolean) => void
    playing: boolean
    setPlaying: (value: boolean) => void
    setPaused: (value: boolean) => void
    setNext: (value: boolean) => void
    repeat: boolean
    setRepeat: (value: boolean) => void
}

export default function PlayerControls() {
    const { playing } = useContext(PlayerContext)

    return (
        <Flex justifyContent={'space-between'} width={'auto'}>
            <RandomButton />
            <PreviousButton />
            {playing ? <PauseButton /> : <PlayButton />}
            <NextButton />
            <RepeatButton />
        </Flex>
    )
}
