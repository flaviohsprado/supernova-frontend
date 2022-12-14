import { useFindMyPlaylistsQuery } from "../../graphql/generated";

export interface IPlaylist {
    id: string;
    title: string;
    isPublic: boolean;
    cover?: string;
}

export const useListMyPlaylists = (userId?: string) => {
    const { data, loading } = useFindMyPlaylistsQuery(userId ? { variables: { userId } } : undefined);

    const playlists: IPlaylist[] = data?.findAllPlaylist.map((playlist) => {
        return {
            id: playlist.id,
            title: playlist.title,
            isPublic: playlist.isPublic,
            // @ts-ignore
            cover: String(playlist.musics[0]?.file?.url),
        }
    }) || []

    return { playlists, loading };
}