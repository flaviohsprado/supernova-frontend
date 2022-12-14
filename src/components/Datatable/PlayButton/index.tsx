import { IconButton } from '@chakra-ui/react'
import { BsPlayFill } from 'react-icons/bs'
import { IMusicBasicProps } from '../../../interfaces/music.interface'

export interface IPlayButtonProps {
    handlePlay(music: IMusicBasicProps): void
    music: IMusicBasicProps
}

export default function PlayButton({ handlePlay, music }: IPlayButtonProps) {
    return (
        <IconButton
            onClick={() => handlePlay(music)}
            fontSize={'2xl'}
            borderRadius={'50%'}
            aria-label="Play"
            icon={<BsPlayFill color={'black'} />}
            bg={'#1DB954'}
            _hover={{
                bg: '#179142',
                color: 'white',
            }}
        />
    )
}
