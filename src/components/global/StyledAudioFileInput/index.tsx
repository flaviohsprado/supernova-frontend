import { Box, Flex, FormLabel, IconButton, Input } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react'
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai'

interface IStyledInputFileProps {
    label: string
    acceptedFileTypes: string
    handleFile: (file: File) => void
}

export default function StyledInputAudioFile({
    label,
    acceptedFileTypes,
    handleFile,
}: IStyledInputFileProps) {
    const [file, setFile] = useState<File>()
    const [playing, setPlaying] = useState(false)
    const audioRef = useRef(new Audio())

    useEffect(() => {
        if (playing) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [playing])

    const handleEditAudio = (event: any) => {
        const target = event.target as HTMLInputElement
        const file = target.files?.[0]

        if (file) {
            setFile(file)
            handleFile(file)
            handleLoadAudio(file)
        }
    }

    const handleLoadAudio = (file: File) => {
        audioRef.current.src = URL.createObjectURL(file)
    }

    const getUrl = (file: File) => {
        return URL.createObjectURL(file)
    }

    return (
        <Box paddingBottom={'10px'}>
            <FormLabel color={'white'} paddingLeft={'16px'}>
                {label}
            </FormLabel>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Input
                    id={'fileInput'}
                    type={'file'}
                    accept={acceptedFileTypes}
                    onChange={handleEditAudio}
                    borderRadius={'50px'}
                />
                <Box paddingLeft={'10px'}>
                    {playing ? (
                        <IconButton
                            borderRadius={'50%'}
                            aria-label="audio"
                            fontSize="40px"
                            icon={<AiFillPauseCircle />}
                            onClick={() => setPlaying(false)}
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
                            icon={<AiFillPlayCircle />}
                            onClick={() => setPlaying(true)}
                            _hover={{
                                background: 'none',
                                color: 'white',
                            }}
                        />
                    )}
                </Box>
                <audio
                    style={{ display: 'none' }}
                    id={'audio'}
                    src={file ? getUrl(file) : ''}
                />
            </Flex>
        </Box>
    )
}
