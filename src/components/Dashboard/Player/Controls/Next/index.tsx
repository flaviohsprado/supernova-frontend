import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { BiSkipNext } from 'react-icons/bi'
import { PlayerContext } from '../../../../../contexts/player.context'

export default function NextButton() {
    const { handleNextMusic } = useContext(PlayerContext)

    return (
        <IconButton
            aria-label={'Next'}
            icon={<BiSkipNext color={'white'} />}
            background={'none'}
            borderRadius={'50%'}
            fontSize={'2rem'}
            _hover={{ background: '#303030' }}
            onClick={() => handleNextMusic()}
        />
    )
}
