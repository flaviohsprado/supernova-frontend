import { Button, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import { FiDatabase } from 'react-icons/fi'
import { useUpdateAlbum } from '../../../../hooks/album/useUpdateAlbum'
import StyledFileInput from '../../../global/StyledFileImageInput'
import StyledInput from '../../../global/StyledInput'
import StyledModal from '../../../global/StyledModal'

export interface IUpdateArtistModalProps {
    id: string
}

export default function UpdateAlbum({ id }: IUpdateArtistModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { title, setTitle, setFile, handleSubmit } = useUpdateAlbum(
        id,
        onClose
    )

    const handleEditAlbumCover = (file: File) => {
        setFile(file)
    }

    return (
        <>
            <IconButton
                aria-label="Update Album"
                onClick={onOpen}
                icon={<FiDatabase />}
                color={'black'}
                _hover={{
                    bg: '#1DB954',
                    color: 'white',
                }}
            />

            <StyledModal
                title={"Let's update this album to Supernova!"}
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
                    <StyledFileInput
                        label={'Cover'}
                        handleFile={handleEditAlbumCover}
                        acceptedFileTypes={'image/*'}
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
