import { Box, IconButton } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'

export interface IPlayButtonProps {
    src: string
}

export default function PlayButton({ src }: IPlayButtonProps) {
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef(new Audio())

    useEffect(() => {
        audioRef.current.src = src

        if (playing) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [playing])

    return (
        <Box marginRight={'10px'}>
            {playing ? (
                <IconButton
                    borderRadius={'50%'}
                    aria-label="audio"
                    fontSize="40px"
                    icon={<AiFillPauseCircle color={'primary.main'} />}
                    backgroundColor={'black'}
                    onClick={() => setPlaying(false)}
                    _hover={{
                        backgroundColor: 'white',
                        transform: 'scale(1.05)',
                    }}
                />
            ) : (
                <IconButton
                    borderRadius={'50%'}
                    aria-label="audio"
                    fontSize="40px"
                    icon={<AiFillPlayCircle color={'primary.main'} />}
                    backgroundColor={'black'}
                    onClick={() => setPlaying(true)}
                    _hover={{
                        backgroundColor: 'white',
                        transform: 'scale(1.05)',
                    }}
                />
            )}
        </Box>
    )
}
