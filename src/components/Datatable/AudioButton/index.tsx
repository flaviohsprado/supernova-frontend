import { IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'

interface IAudioButtonProps {
    src: string
}

export default function AudioButton({ src }: IAudioButtonProps) {
    const [playing, setPlaying] = useState(false)

    const handlePlayAudio = async () => {
        const player = new Audio(src)
        player.addEventListener('canplaythrough', function () {
            player.play()
        })

        setPlaying(true)
    }

    const handlePauseAudio = () => {
        const player = new Audio(src)
        player.pause()

        setPlaying(false)
    }

    const getAudioExtension = (src: string) => {
        return src.split('.').pop()
    }

    return (
        <>
            {playing ? (
                <IconButton
                    borderRadius={'50%'}
                    aria-label="audio"
                    fontSize="40px"
                    icon={<AiFillPauseCircle color={'black'} />}
                    onClick={handlePauseAudio}
                    _hover={{
                        background: 'none',
                        color: 'white',
                    }}
                />
            ) : (
                <IconButton
                    borderRadius={'50%'}
                    aria-label="audio"
                    fontSize="40px"
                    icon={<AiFillPlayCircle color={'black'} />}
                    onClick={handlePlayAudio}
                    _hover={{
                        background: 'none',
                        color: 'white',
                    }}
                />
            )}
        </>
    )
}
