import { Box, Button, Flex, FormLabel, useDisclosure } from '@chakra-ui/react'
import { BsPlusSquareFill } from 'react-icons/bs'
import { useCreateplaylist } from '../../../../hooks/playlist/useCreatePlaylist'
import StyledInput from '../../../global/StyledInput'
import StyledModal from '../../../global/StyledModal'
import StyledSwitch from '../../../global/StyledSwitch'

interface ICreatePlaylistProps {
    userId: string
}

export default function CreatePlaylist({ userId }: ICreatePlaylistProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { title, setTitle, isPublic, setIsPublic, handleSubmit } =
        useCreateplaylist(userId, onClose)

    return (
        <Box padding={'0 20px 0 20px'}>
            <Button
                justifyContent={'left'}
                width={'100%'}
                borderRadius={'5px'}
                onClick={onOpen}
                color={'white'}
                backgroundColor={'transparent'}
                _hover={{
                    bg: '#147a38',
                }}
                leftIcon={<BsPlusSquareFill />}
            >
                Create Playlist
            </Button>
            <StyledModal
                title={"Let's create a new Playlist for U!"}
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
                    <FormLabel paddingLeft={'16px'} color={'white'}>
                        Public?
                    </FormLabel>
                    <StyledSwitch
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
        </Box>
    )
}
