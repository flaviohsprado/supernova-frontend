import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import { DataTable } from '../../src/components/Datatable/datatable'
import { PlayerContext } from '../../src/contexts/player.context'
import { useListMusics } from '../../src/hooks/music/useListMusics'
import { IMusicBasicProps } from '../../src/interfaces/music.interface'
import createSimpleColumnHelperObject from '../../src/utils/simpleColumnHelperObject.utils'

export default function SearchPageDashboard() {
    const { musics } = useListMusics()
    const { setMusics } = useContext(PlayerContext)

    const handlePlayer = (music: IMusicBasicProps) => {
        if (music) {
            setMusics([music])
        }
    }

    const formattedMusics = musics.map((music) => {
        return {
            title: music.title,
            duration: music.duration,
            // @ts-ignore
            album: music.album?.title,
            audio: music.audio,
        }
    })

    const columns = createSimpleColumnHelperObject({
        data: formattedMusics,
        handlePlay: handlePlayer,
    })

    return (
        <Box bgColor={'#4a4a4a'} borderRadius={'5px'} height={'68vh'}>
            <DataTable columns={columns} data={formattedMusics} />
        </Box>
    )
}
