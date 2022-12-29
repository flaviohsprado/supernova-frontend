import { Box } from '@chakra-ui/react'
import { DataTable } from '../../src/components/Datatable/datatable'
import createSearchColumnHelperObject from '../../src/helpers/searchColumnObject.helper'
import { useListMusics } from '../../src/hooks/music/useListMusics'

export default function SearchPageDashboard() {
    const { musics } = useListMusics()

    const formattedMusics = musics.map((music) => {
        return {
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
        <Box bgColor={'#4a4a4a'} borderRadius={'5px'} height={'68vh'}>
            <DataTable columns={columns} data={formattedMusics} />
        </Box>
    )
}
