import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { FaRandom } from 'react-icons/fa'
import { PlayerContext } from '../../../../../contexts/player.context'

export default function RandomButton() {
    const { random, handleRandom } = useContext(PlayerContext)

    return (
        <IconButton
            aria-label={'Play'}
            icon={<FaRandom color={random ? '#1DB954' : 'white'} />}
            background={'none'}
            borderRadius={'50%'}
            fontSize={'1rem'}
            _hover={{ background: '#303030' }}
            onClick={() => handleRandom()}
        />
    )
}
