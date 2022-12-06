import { Button, Flex, useDisclosure } from "@chakra-ui/react"
import { useCreateArtist } from "../../../../hooks/artist/useCreateArtist"
import StyledInput from "../../../global/StyledInput"
import StyledModal from "../../../global/StyledModal"

export default function CreateArtist() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { name, setName, handleSubmit } = useCreateArtist(onClose)

    return (
        <>
            <Button
                borderRadius={'20px'}
                onClick={onOpen}
                bgColor={'#1DB954'}
                color={'white'}
                _hover={{
                    bg: '#147a38'
                }}
            >
                Create Artist
            </Button>
            <StyledModal
                title={"Let's create a new artist to Supernova!"}
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