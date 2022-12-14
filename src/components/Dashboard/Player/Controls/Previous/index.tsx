import { IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { BiSkipPrevious } from 'react-icons/bi'
import { PlayerContext } from '../../../../../contexts/player.context'

export default function PreviousButton() {
    const { handlePreviousMusic } = useContext(PlayerContext)

    return (
        <IconButton
            aria-label={'Previous'}
            icon={<BiSkipPrevious color={'white'} />}
            background={'none'}
            borderRadius={'50%'}
            fontSize={'2rem'}
            _hover={{ background: '#303030' }}
            onClick={() => handlePreviousMusic()}
        />
    )
}
