import { format } from "date-fns";
import { useFindAllArtistsQuery } from "../../graphql/generated";

export interface IArtist {
    id: string;
    name: string;
    monthlyListeners?: number | null | undefined;
    createdAt: Date | string;
    updatedAt: Date | string;    
}

export const useFindAllArtists = () => {
    const { data } = useFindAllArtistsQuery()

    const artists: IArtist[] = data?.findAllArtist.map((artist: IArtist) => {
        return {
            id: artist.id,
            name: artist.name,
            monthlyListeners: artist.monthlyListeners,
            createdAt: format(new Date(artist.createdAt), 'dd/MM/yyyy HH:mm:ss'),
            updatedAt: format(new Date(artist.updatedAt), 'dd/MM/yyyy HH:mm:ss'),
        }
    }) || []

    return { artists };
}