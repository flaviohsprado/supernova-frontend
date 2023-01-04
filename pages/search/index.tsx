import { Box } from '@chakra-ui/react'
import { SearchDatatable } from '../../src/components/Datatable/searchDatatable'
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

    //TODO: Add a search bar to search for musics with delay of 0.5 second
    return (
        <Box bgColor={'#4a4a4a'} borderRadius={'5px'} height={'68vh'}>
            <SearchDatatable columns={columns} data={formattedMusics} />
        </Box>
    )
}
