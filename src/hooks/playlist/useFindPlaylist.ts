import { useFindPlaylistQuery } from '../../graphql/generated'
import { IPlaylist } from '../../interfaces/playlist.interface'

export const useFindPlaylist = (id: string) => {
    const { data } = useFindPlaylistQuery({ variables: { id } })

    if (!data) return { playlist: {} as IPlaylist }

    const playlist: IPlaylist = {
        id: String(data?.findOnePlaylist.id),
        title: String(data?.findOnePlaylist.title),
        isPublic: Boolean(data?.findOnePlaylist.isPublic),
        duration: Number(data?.findOnePlaylist.duration),
        numberOfSongs: Number(data?.findOnePlaylist.numberOfSongs),
        musics: data?.findOnePlaylist.musics,
        file: data?.findOnePlaylist.file,
    }

    return { playlist }
}
