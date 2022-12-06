import { useFindPLaylistQuery } from "../../graphql/generated";
import { IPlaylist } from "../../interfaces/playlist.interface";

export const useFindPlaylists = (id: string) => {
    console.log('id', id)
    const { data } = useFindPLaylistQuery({ variables: { id } })

    if (!data) return { playlist: {} as IPlaylist }

    const playlist: IPlaylist = {
        id: String(data?.findOnePlaylist.id),
        title: String(data?.findOnePlaylist.title),
        isPublic: Boolean(data?.findOnePlaylist.isPublic),
        //musics: data?.findOnePlaylist.musics || [],
        duration: Number(data?.findOnePlaylist.duration),
        numberOfSongs: Number(data?.findOnePlaylist.numberOfSongs),
    }

    console.log(data?.findOnePlaylist)

    return { playlist }
}