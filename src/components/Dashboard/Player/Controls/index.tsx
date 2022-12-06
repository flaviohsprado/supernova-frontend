import { Box, Flex, IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import { FaRandom } from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'
import { PlayerContext } from '../../../../contexts/player.context'

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

export default function PlayerControls({
    random,
    setRandom,
    setPrevious,
    playing,
    setPlaying,
    setPaused,
    setNext,
    repeat,
    setRepeat,
}: IPlayerControlsProps) {
    const { handlePlay, handlePause, state } = useContext(PlayerContext)
    const buttons = [
        {
            name: 'Random',
            icon: <FaRandom color={'white'} />,
            onClick: () => setRandom(true),
        },
        {
            name: 'Previous',
            icon: <BiSkipPrevious color={'white'} />,
            onClick: () => setPrevious(true),
            fontSize: '2rem',
        },
        {
            name: 'Play',
            icon: <AiFillPlayCircle color={'white'} />,
            onClick: () => handlePlay,
            display: state.playing ? 'none' : 'block',
            fontSize: '2rem',
        },
        {
            name: 'Pause',
            icon: <AiFillPauseCircle color={'white'} />,
            onClick: () => handlePause,
            display: state.playing ? 'block' : 'none',
            fontSize: '2rem',
        },
        {
            name: 'Next',
            icon: <BiSkipNext color={'white'} />,
            onClick: () => setNext(true),
            fontSize: '2rem',
        },
        {
            name: 'Repeat',
            icon: <FiRepeat color={'white'} />,
            onClick: () => setRepeat(true),
        },
    ]

    return (
        <Box width={'300px'}>
            <Flex justifyContent={'space-between'}>
                {buttons.map((button, index) => (
                    <IconButton
                        key={index}
                        aria-label={button.name}
                        icon={button.icon}
                        background={'none'}
                        borderRadius={'50%'}
                        fontSize={button.fontSize}
                        display={button.display}
                        onClick={button.onClick}
                        _hover={{ background: '#303030' }}
                    />
                ))}
            </Flex>
        </Box>
    )
}
