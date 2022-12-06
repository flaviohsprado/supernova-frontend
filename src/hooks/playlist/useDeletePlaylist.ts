import { ApolloError } from "@apollo/client"
import { Toast, useToast } from "@chakra-ui/react"
import { useDeletePlaylistMutation, useFindPlaylistsQuery } from "../../graphql/generated"

export const useDeleteplaylist = () => {
    const [deleteplaylist] = useDeletePlaylistMutation()
    const { refetch } = useFindPlaylistsQuery()
    const toast = useToast()

    const handleDeleteplaylist = async (id: string) => {
        try {
            await deleteplaylist({ variables: { id } })
            await refetch()

            toast({
                title: 'playlist deleted!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            Toast({
                title: 'Error on delete playlist.',
                description: error instanceof ApolloError ? error?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

    }

    return { handleDeleteplaylist }
}