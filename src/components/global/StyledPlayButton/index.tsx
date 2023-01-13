import { Box, IconButton } from '@chakra-ui/react'
import { useContext } from 'react'
import { AiFillPlayCircle } from 'react-icons/ai'
import { PlayerContext } from '../../../contexts/player.context'
import { IMusicBasicProps } from '../../../interfaces/music.interface'

export interface IContextPlayButtonProps {
    music: IMusicBasicProps
}

export default function StyledPlayButton({ music }: IContextPlayButtonProps) {
    const { handleLoad } = useContext(PlayerContext)

    return (
        <Box marginRight={'10px'} backgroundColor={'transparent '}>
            <IconButton
                borderRadius={'50%'}
                border={'none'}
                aria-label="audio"
                fontSize="45px"
                icon={<AiFillPlayCircle color={'#32cd32'} />}
                backgroundColor={'transparent'}
                onClick={() => handleLoad([music])}
                _hover={{
                    transform: 'scale(1.07)',
                }}
            />
        </Box>
    )
}
