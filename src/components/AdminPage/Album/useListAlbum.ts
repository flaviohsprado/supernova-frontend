import { format } from "date-fns";
import { useFindAllAlbumsQuery } from "../../../graphql/generated";

export interface IAlbum {
    __typename?: "Album" | undefined;
    id: string;
    artistId: string;
    title: string;
    releaseDate?: Date | string;
    createdAt: Date | string;
    updatedAt: Date | string;
}

export const useFindAllAlbums = () => {
    const { data } = useFindAllAlbumsQuery()

    const albums: IAlbum[] = data?.findAllAlbum.map((album: IAlbum) => {
        return {
            id: album.id,
            artistId: album.artistId,
            title: album.title,
            releaseDate: format(new Date(String(album.releaseDate)), 'dd/MM/yyyy'),
            createdAt: format(new Date(album.createdAt), 'dd/MM/yyyy HH:mm:ss'),
            updatedAt: format(new Date(album.updatedAt), 'dd/MM/yyyy HH:mm:ss'),
        }
    }) || []

    return { albums };
}