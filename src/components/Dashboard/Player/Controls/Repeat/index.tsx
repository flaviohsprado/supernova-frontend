import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { FiRepeat } from 'react-icons/fi'
import { PlayerContext } from '../../../../../contexts/player.context'

export default function RepeatButton() {
    const { repeat, handleRepeat } = useContext(PlayerContext)

    return (
        <IconButton
            aria-label={'Play'}
            icon={<FiRepeat color={repeat ? '#1DB954' : 'white'} />}
            background={'none'}
            borderRadius={'50%'}
            fontSize={'1rem'}
            _hover={{ background: '#303030' }}
            onClick={() => handleRepeat()}
        />
    )
}
