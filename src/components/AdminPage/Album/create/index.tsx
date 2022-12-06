import { Button, Flex, useDisclosure } from "@chakra-ui/react"
import { useCreateAlbum } from "../../../../hooks/album/useCreateAlbum"
import { useFindAllArtists } from "../../../../hooks/artist/useListArtists"
import { StyledDropdown } from "../../../global/StyledDropdown"
import StyledInput from "../../../global/StyledInput"
import StyledModal from "../../../global/StyledModal"

export default function CreateAlbum() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { artistId, setArtistId, title, setTitle, releaseDate, setReleaseDate, handleSubmit } = useCreateAlbum(onClose)
    const { artists } = useFindAllArtists()

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
                Create Album
            </Button>
            <StyledModal
                title={"Let's create a new album to Supernova!"}
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
                    <StyledInput
                        inputColor={'white'}
                        labelColor={'white'}
                        label={"Release Date"}
                        value={releaseDate}
                        type={"date"}
                        onUpdated={(value: string) => setReleaseDate(value)}
                        required={true}
                    />
                    <StyledDropdown
                        label={"Artist"}
                        labelColor={"white"}
                        options={artists}
                        placeholder={"Select an artist"}
                        value={artistId}
                        onUpdated={(value: string) => setArtistId(value)}
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