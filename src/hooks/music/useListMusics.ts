import { format } from 'date-fns'
import { useFindAllMusicsQuery } from '../../graphql/generated'

export interface IMusic {
    id: string
    title: string
    duration: string
    createdAt: any
    updatedAt: any
    album?: string
    audio?: string
}

export const useListMusics = () => {
    const { data } = useFindAllMusicsQuery()

    const musics: IMusic[] =
        data?.findAllMusic.map((music) => {
            return {
                id: music.id,
                title: music.title,
                duration: convertSecondsToTime(music.duration),
                album: music.album?.title,
                //artist: music.album?.artist?.name,
                createdAt: format(
                    new Date(music.createdAt),
                    'dd/MM/yyyy HH:mm:ss'
                ),
                updatedAt: format(
                    new Date(music.updatedAt),
                    'dd/MM/yyyy HH:mm:ss'
                ),
                audio: music.file?.url,
            }
        }) || []

    return { musics }
}

const convertSecondsToTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
    const secondsLeft = seconds % 60

    return `${minutes}:${secondsLeft}`
}
