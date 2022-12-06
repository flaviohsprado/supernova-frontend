import { Button, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { AiOutlineEdit } from 'react-icons/ai';
import { useUpdateUser } from "../../../../hooks/user/useUpdateUser";
import StyledInput from "../../../global/StyledInput";
import StyledModal from "../../../global/StyledModal";

export interface IUpdateArtistModalProps {
    userId: string;
}

export default function UpdateProfile({ userId }: IUpdateArtistModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { username, setUsername, handleUpdateUser } = useUpdateUser(userId, onClose)

    return (
        <>
            <IconButton
                onClick={onOpen}
                variant='outline'
                colorScheme='whiteAlpha'
                aria-label='update username'
                icon={<AiOutlineEdit/>}
                _hover={{
                    backgroundColor: 'gray',
                    color: 'white'
                }}
            />

            <StyledModal
                title={"Let's update your infos to Supernova!"}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            >
                <form onSubmit={handleUpdateUser}>
                    <StyledInput
                        inputColor={'white'}
                        labelColor={'white'}
                        label={"Username"}
                        value={username}
                        type={"text"}
                        onUpdated={(value: string) => setUsername(value)}
                        required={true}
                    />
                    <Flex>
                        <Button
                            borderRadius={'20px'}
                            bgColor={'#1DB954'}
                            color={'white'}
                            type={'submit'}
                            _hover={{
                                bg: '#147a38'
                            }}
                        >Save</Button>
                    </Flex>
                </form>
            </StyledModal>
        </>
    )
}