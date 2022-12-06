import { IconButton } from '@chakra-ui/react'
import { AiFillPlayCircle } from 'react-icons/ai'

interface IPlayButtonProps {
    setPlaying: (value: boolean) => void
}

export default function PlayButton({ setPlaying }: IPlayButtonProps) {
    return (
        <IconButton
            aria-label={'Play'}
            icon={<AiFillPlayCircle color={'white'} />}
            background={'none'}
            borderRadius={'50%'}
            fontSize={'2rem'}
            _hover={{ background: '#303030' }}
        />
    )
}
