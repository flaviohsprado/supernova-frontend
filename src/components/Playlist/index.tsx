import { Box } from '@chakra-ui/react'
import createPlaylistColumnHelperObject from '../../helpers/playlistColumnObject.helper'
import { useFindPlaylist } from '../../hooks/playlist/useFindPlaylist'
import { PlaylistDatatable } from '../Datatable/playlistDatatable'
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
            addedAt: 'Coming Soon',
            duration: convertSecondsToTime(Number(music.duration)),
            audio: String(music.file?.url),
        })) || []

    const columns = createPlaylistColumnHelperObject({
        data: musics,
    })

    return (
        <div
            style={{
                height: '100%',
            }}
        >
            <Box>
                <PlaylistHeader
                    playlistId={playlist.id}
                    title={playlist.title}
                    cover={String(playlist.file?.url)}
                    followers={0}
                    isPublic={playlist.isPublic}
                />
            </Box>
            <Box>
                <PlaylistDatatable id={id} columns={columns} data={musics} />
            </Box>
        </div>
    )
}

const convertSecondsToTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60

    return `${minutes}:${secondsLeft}`
}
