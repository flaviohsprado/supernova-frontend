import { Button, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiDatabase } from 'react-icons/fi'
import { useUpdateMusic } from '../../../../hooks/music/useUpdateMusic'
import StyledInputAudioFile from '../../../global/StyledAudioFileInput'
import StyledInput from '../../../global/StyledInput'
import StyledModal from '../../../global/StyledModal'

interface IUpdateMusicProps {
    id: string
}

export default function UpdateMusic({ id }: IUpdateMusicProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { title, setTitle, file, setFile, handleSubmit } = useUpdateMusic(
        id,
        onClose
    )

    return (
        <>
            <IconButton
                aria-label="Update Music"
                onClick={onOpen}
                icon={<FiDatabase />}
                color={'black'}
                _hover={{
                    bg: '#1DB954',
                    color: 'white',
                }}
            />

            <StyledModal
                title={"Let's update this music to Supernova!"}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            >
                <form onSubmit={handleSubmit}>
                    <StyledInput
                        inputColor={'white'}
                        labelColor={'white'}
                        label={'Title'}
                        value={title}
                        type={'text'}
                        onUpdated={(value: string) => setTitle(value)}
                    />
                    <StyledInputAudioFile
                        label={'Song'}
                        acceptedFileTypes={'audio/*'}
                        handleFile={(file: File) => setFile(file)}
                    />
                    <Flex>
                        <Button
                            borderRadius={'20px'}
                            bgColor={'#1DB954'}
                            color={'white'}
                            type={'submit'}
                            _hover={{
                                bg: '#147a38',
                            }}
                        >
                            Save
                        </Button>
                    </Flex>
                </form>
            </StyledModal>
        </>
    )
}
