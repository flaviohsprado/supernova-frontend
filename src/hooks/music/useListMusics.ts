import { format } from "date-fns";
import { useFindAllMusicsQuery } from "../../graphql/generated";

export interface IMusic {
    id: string;
    title: string;
    duration: number;
    createdAt: any;
    updatedAt: any;
    album?: string;
    audio?: string;
}

export const useListMusics = () => {
    const { data } = useFindAllMusicsQuery()

    const musics: IMusic[] = data?.findAllMusic.map((music) => {
        return {
            id: music.id,
            title: music.title,
            duration: music.duration,
            album: music.album?.title,            
            createdAt: format(new Date(music.createdAt), 'dd/MM/yyyy HH:mm:ss'),
            updatedAt: format(new Date(music.updatedAt), 'dd/MM/yyyy HH:mm:ss'),
            audio: music.file?.url,
        }
    }) || []

    return { musics };
}