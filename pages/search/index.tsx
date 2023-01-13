import { Box } from '@chakra-ui/react'
import SearchBar from '../../src/components/Search'
import createSearchColumnHelperObject from '../../src/helpers/searchColumnObject.helper'
import { useListMusics } from '../../src/hooks/music/useListMusics'

export default function SearchPageDashboard() {
    const { musics } = useListMusics()

    const formattedMusics = musics.map((music) => {
        return {
            id: music.id,
            title: music.title,
            duration: music.duration,
            // @ts-ignore
            album: music.album?.title,
            audio: music.audio,
        }
    })

    const columns = createSearchColumnHelperObject({
        data: formattedMusics,
    })

    return (
        <>
            <Box padding={4}>
                <SearchBar />
            </Box>
            <Box bgColor={'black'}></Box>
        </>
    )
}
