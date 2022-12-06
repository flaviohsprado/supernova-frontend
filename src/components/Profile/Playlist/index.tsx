import { Flex } from '@chakra-ui/react'
import { useListPlaylists } from '../../../hooks/playlist/useListPlaylist'
import StyledCard from '../../global/StyledCard'

interface IPlaylistProfile {
    userId: string
}

export default function PlaylistProfile({ userId }: IPlaylistProfile) {
    const { playlists } = useListPlaylists(String(userId))

    return (
        <Flex
            justifyContent={'space-evenly'}
            alignItems={'center'}
            backgroundColor={'#404040'}
        >
            {playlists.map((playlist) => (
                <StyledCard key={playlist.id} title={playlist.title} />
            ))}
        </Flex>
    )
}
