import { Button, Flex, useDisclosure } from '@chakra-ui/react'
import { useFindAllAlbums } from '../../../../hooks/album/useListAlbum'
import { useCreateMusic } from '../../../../hooks/music/useCreateMusic'
import StyledInputAudioFile from '../../../global/StyledAudioFileInput'
import { StyledDropdown } from '../../../global/StyledDropdown'
import StyledInput from '../../../global/StyledInput'
import StyledModal from '../../../global/StyledModal'

export default function CreateAlbum() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {
        albumId,
        setAlbumId,
        title,
        setTitle,
        duration,
        setDuration,
        setFile,
        handleSubmit,
    } = useCreateMusic(onClose)
    const { albums } = useFindAllAlbums()
    const options = albums.map((album) => ({ id: album.id, name: album.title }))

    return (
        <>
            <Button
                borderRadius={'20px'}
                onClick={onOpen}
                bgColor={'#1DB954'}
                color={'white'}
                _hover={{
                    bg: '#147a38',
                }}
            >
                Create Music
            </Button>
            <StyledModal
                title={"Let's create a new music to Supernova!"}
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
                        required={true}
                    />
                    <StyledInput
                        inputColor={'white'}
                        labelColor={'white'}
                        label={'Duration'}
                        value={duration}
                        type={'time'}
                        onUpdated={(value: string) => setDuration(value)}
                        required={true}
                    />
                    <StyledDropdown
                        label={'Album'}
                        labelColor={'white'}
                        options={options}
                        placeholder={'Select an album'}
                        value={albumId}
                        onUpdated={(value: string) => setAlbumId(value)}
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
