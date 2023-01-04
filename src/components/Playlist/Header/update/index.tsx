import { Button, Flex, IconButton, useDisclosure } from '@chakra-ui/react'
import { AiOutlineEdit } from 'react-icons/ai'
import { useUpdatePlaylist } from '../../../../hooks/playlist/useUpdatePlaylist'
import StyledInput from '../../../global/StyledInput'
import StyledModal from '../../../global/StyledModal'
import StyledSwitch from '../../../global/StyledSwitch'

export interface IUpdateArtistModalProps {
    playlistId: string
}

export default function UpdatePlaylist({
    playlistId,
}: IUpdateArtistModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { title, setTitle, isPublic, setIsPublic, handleSubmit } =
        useUpdatePlaylist(playlistId, onClose)

    return (
        <>
            <IconButton
                onClick={onOpen}
                variant="outline"
                colorScheme="whiteAlpha"
                aria-label="update playlistname"
                icon={<AiOutlineEdit />}
                _hover={{
                    backgroundColor: 'gray',
                    color: 'white',
                }}
            />

            <StyledModal
                title={"Let's update your Playlist to Supernova!"}
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
                    <StyledSwitch
                        label={'Public?'}
                        isChecked={isPublic}
                        onUpdated={(value: boolean) => setIsPublic(value)}
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
