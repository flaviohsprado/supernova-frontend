import { ApolloError } from "@apollo/client"
import { Toast, useToast } from "@chakra-ui/react"
import { useDeleteAlbumMutation, useFindAlbumsQuery } from "../../graphql/generated"

export const useDeleteAlbum = () => {
    const [deleteAlbum] = useDeleteAlbumMutation()
    const { refetch } = useFindAlbumsQuery()
    const toast = useToast()

    const handleDeleteAlbum = async (id: string) => {
        try {
            await deleteAlbum({ variables: { id } })
            await refetch()

            toast({
                title: 'Album deleted!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            Toast({
                title: 'Error on delete album.',
                description: error instanceof ApolloError ? error?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

    }

    return { handleDeleteAlbum }
}