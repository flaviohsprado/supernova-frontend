import { useFindPlaylistsQuery } from "../../graphql/generated";

export interface IPlaylist {
    id: string;
    title: string;
    isPublic: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

export const useListPlaylists = (userId?: string) => {
    const { data, loading } = useFindPlaylistsQuery(userId ? { variables: { userId } } : undefined);

    const playlists: IPlaylist[] = data?.findAllPlaylist.map((playlist) => {
        return {
            id: playlist.id,
            title: playlist.title,
            isPublic: playlist.isPublic,
        }
    }) || []

    return { playlists, loading };
}