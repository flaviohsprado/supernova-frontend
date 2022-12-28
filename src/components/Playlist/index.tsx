import { Box } from '@chakra-ui/react'
import { useFindPlaylist } from '../../hooks/playlist/useFindPlaylist'
import createMusicColumnHelperObject from '../../utils/musicColumnHelperObject.utils'
import { MusicDatatable } from '../Datatable/musicDatatable'
import PlaylistHeader from './Header'

interface IPlaylistProps {
    id: string
}

interface IMusic {
    id?: string
    title: string
    album: string
    addedAt: string | Date | undefined
    duration: number | string
    audio: string
}

export default function Playlist({ id }: IPlaylistProps) {
    const { playlist } = useFindPlaylist(id)

    const musics: IMusic[] =
        playlist?.musics?.map((music) => ({
            id: music.id,
            title: music.title,
            album: String(music.album?.title),
            addedAt: music.createdAt,
            duration: String(music.duration),
            audio: String(music.file?.url),
        })) || []

    const columns = createMusicColumnHelperObject({
        data: musics,
        handlePlay: () => {},
    })

    return (
        <>
            <Box position={'sticky'} top={0} zIndex={1}>
                <PlaylistHeader
                    playlistId={playlist.id}
                    title={playlist.title}
                    cover={String(playlist.file?.url)}
                    followers={0}
                    isPublic={playlist.isPublic}
                />
            </Box>
            <Box>
                <MusicDatatable columns={columns} data={musics} />
            </Box>
        </>
    )
}
