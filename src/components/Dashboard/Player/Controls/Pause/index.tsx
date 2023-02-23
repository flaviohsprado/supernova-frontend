import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { AiFillPauseCircle } from 'react-icons/ai'
import { PlayerContext } from '../../../../../contexts/player.context'

export default function PauseButton() {
    const { setPlaying } = useContext(PlayerContext)

    return (
        <IconButton
            aria-label={'Play'}
            icon={<AiFillPauseCircle color={'white'} />}
            background={'none'}
            borderRadius={'50%'}
            fontSize={'3rem'}
            _hover={{ background: '#303030' }}
            onClick={() => setPlaying(false)}
        />
    )
}
