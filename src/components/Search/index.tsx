import { CheckIcon } from '@chakra-ui/icons'
import {
    Box,
    Flex,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import createSearchColumnHelperObject from '../../helpers/searchColumnObject.helper'
import { useListMusics } from '../../hooks/music/useListMusics'
import { useSearchMusicByName } from '../../hooks/youtube/useSearchMusicByName'
import { SearchDatatable } from '../Datatable/searchDatatable'
import SearchCard from './Card'

export default function SearchBar() {
    const { name, setName, videos, handleSearchMusic } = useSearchMusicByName()
    const { musics } = useListMusics()

    useEffect(() => {}, [videos])

    const columns = createSearchColumnHelperObject({
        data: musics,
    })

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
                                //Remove comment above to enable search on enter
                                //await handleSearchMusic()
                            }
                        }}
                    />
                    <InputRightElement>
                        {name.length ? <CheckIcon color="green.500" /> : <></>}
                    </InputRightElement>
                </InputGroup>
            </Box>
            <Stack>
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
                <SearchDatatable columns={columns} data={musics} />
            </Stack>
        </>
    )
}

function shortenVideoName(name: string) {
    return name.substring(0, 20) + '...'
}
