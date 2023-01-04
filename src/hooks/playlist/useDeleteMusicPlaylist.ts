import { ApolloError } from '@apollo/client'
import { Toast, useToast } from '@chakra-ui/react'
import {
    useDeleteMusicFromPlaylistMutation,
    useFindPlaylistQuery,
} from '../../graphql/generated'

export const useDeleteMusicPlaylist = (playlistId: string) => {
    const [deleteMusicPlaylist] = useDeleteMusicFromPlaylistMutation()
    const { refetch } = useFindPlaylistQuery({
        variables: { id: playlistId },
    })
    const toast = useToast()

    const handleDeleteMusicPlaylist = async (
        musicId: string,
        playlistId: string
    ) => {
        try {
            await deleteMusicPlaylist({
                variables: {
                    musicId,
                    playlistId,
                },
            })
            await refetch()

            toast({
                title: 'Removed to playlist!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            Toast({
                title: 'Error on remove music to playlist.',
                description:
                    error instanceof ApolloError
                        ? error?.graphQLErrors[0].message
                        : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return { handleDeleteMusicPlaylist }
}
