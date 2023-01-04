import { ApolloError } from '@apollo/client'
import { Toast, useToast } from '@chakra-ui/react'
import {
    useFindPlaylistQuery,
    useInsertMusicIntoPlaylistMutation,
} from '../../graphql/generated'

export const useInsertMusicPlaylist = (playlistId: string) => {
    const [insertMusicPlaylist] = useInsertMusicIntoPlaylistMutation()
    const { refetch } = useFindPlaylistQuery({
        variables: { id: playlistId },
    })
    const toast = useToast()

    const handleInsertMusicPlaylist = async (
        musicId: string,
        playlistId: string
    ) => {
        try {
            await insertMusicPlaylist({
                variables: {
                    musicId,
                    playlistId,
                },
            })
            await refetch()

            toast({
                title: 'Added to playlist!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            Toast({
                title: 'Error on add music to playlist.',
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

    return { handleInsertMusicPlaylist }
}
