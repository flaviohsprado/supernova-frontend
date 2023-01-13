import { CheckIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSearchMusicByName } from '../../hooks/youtube/useSearchMusicByName'
import SearchCard from './Card'

export default function SearchBar() {
    const { name, setName, videos, handleSearchMusic } = useSearchMusicByName()

    useEffect(() => {}, [videos])

    return (
        <>
            <Box>
                <FormLabel paddingLeft={'16px'} color={'white'}>
                    Search
                </FormLabel>
                <InputGroup pb="10px">
                    <Input
                        color={'white'}
                        placeholder={'Type here'}
                        value={name}
                        type={'text'}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        borderRadius={'20px'}
                        onKeyUp={async (e) => {
                            if (e.key === 'Enter' && name.length) {
                                await handleSearchMusic()
                            }
                        }}
                    />
                    <InputRightElement>
                        {name.length ? <CheckIcon color="green.500" /> : <></>}
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                {videos.map((video, index) => (
                    <SearchCard
                        key={index}
                        id={video.id}
                        cover={video.thumbnail}
                        title={shortenVideoName(String(video.title))}
                        artist={video.artist}
                        type={'music'}
                    />
                ))}
            </Flex>
        </>
    )
}

function shortenVideoName(name: string) {
    return name.substring(0, 20) + '...'
}
