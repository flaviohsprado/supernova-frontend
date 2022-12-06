import { Button, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { FiDatabase } from "react-icons/fi";
import { useUpdateArtist } from "../../../../hooks/artist/useUpdateArtist";
import StyledInput from "../../../global/StyledInput";
import StyledModal from "../../../global/StyledModal";

export interface IUpdateArtistModalProps {
    artistId: string;
}

export default function UpdateArtistModal({ artistId }: IUpdateArtistModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { name, setName, handleSubmit } = useUpdateArtist(artistId, onClose)

    return (
        <>
            <IconButton
                aria-label="Update Artist"
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
                        label={"Name"}
                        value={name}
                        type={"text"}
                        onUpdated={(value: string) => setName(value)}
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