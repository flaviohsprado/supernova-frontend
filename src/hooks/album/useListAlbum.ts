import { format } from "date-fns";
import { useFindAlbumsQuery } from "../../graphql/generated";

export interface IAlbum {
    id: string;
    title: string;
    releaseDate?: Date | string;
    createdAt: Date | string;
    updatedAt: Date | string;
    file?: string;
}

export const useFindAllAlbums = () => {
    const { data } = useFindAlbumsQuery()

    const albums: IAlbum[] = data?.findAllAlbum.map((album) => {
        return {
            file: album.file?.url,
            id: album.id,
            title: album.title,
            releaseDate: format(new Date(String(album.releaseDate)), 'dd/MM/yyyy'),
            createdAt: format(new Date(album.createdAt), 'dd/MM/yyyy HH:mm:ss'),
            updatedAt: format(new Date(album.updatedAt), 'dd/MM/yyyy HH:mm:ss'),            
        }
    }) || []

    return { albums };
}