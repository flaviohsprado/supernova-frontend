import { Button, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { FiDatabase } from "react-icons/fi";
import StyledInput from "../../../global/StyledInput";
import StyledModal from "../../../global/StyledModal";
import { useUpdateAlbum } from "./useUpdateAlbum";

export interface IUpdateArtistModalProps {
    artistId: string;
}

export default function UpdateAlbum({ artistId }: IUpdateArtistModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { title, setTitle, handleSubmit } = useUpdateAlbum(artistId, onClose)

    return (
        <>
            <IconButton
                aria-label="Update Album"
                onClick={onOpen}
                icon={<FiDatabase />}
                color={'black'}
                _hover={{
                    bg: '#1DB954',
                    color: 'white'
                }}
            />

            <StyledModal
                title={"Let's update this artist to Supernova!"}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            >
                <form onSubmit={handleSubmit}>
                    <StyledInput
                        inputColor={'white'}
                        labelColor={'white'}
                        label={"Title"}
                        value={title}
                        type={"text"}
                        onUpdated={(value: string) => setTitle(value)}
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