import { Box, IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { PlayerContext } from '../../../contexts/player.context'
import { IMusicBasicProps } from '../../../interfaces/music.interface'

export interface IContextPlayButtonProps {
    music: IMusicBasicProps
}

export default function ContextPlayButton({ music }: IContextPlayButtonProps) {
    const { handleLoad } = useContext(PlayerContext)

    return (
        <Box marginRight={'10px'}>
            <IconButton
                borderRadius={'50%'}
                aria-label="audio"
                fontSize="40px"
                icon={<AiFillPlayCircle color={'#32cd32'} />}
                backgroundColor={'black'}
                onClick={() => handleLoad([music])}
                _hover={{
                    backgroundColor: 'white',
                }}
            />
        </Box>
    )
}
