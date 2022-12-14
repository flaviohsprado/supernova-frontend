import {
    IPlaylist,
    useListMyPlaylists,
} from '../../../hooks/playlist/useListMyPlaylist'
import StyledHorizontalCard from '../../global/StyledHorizontalCard'

interface IPlaylistProfile {
    userId: string
}

export default function HomePlaylist({ userId }: IPlaylistProfile) {
    const { playlists } = useListMyPlaylists(String(userId))

    return (
        <>
            {playlists.map((playlist: IPlaylist, index: number) => (
                <StyledHorizontalCard
                    key={index}
                    title={playlist.title}
                    image={playlist.cover}
                    additionalInfo={'Somewhere'}
                />
            ))}
        </>
    )
}
