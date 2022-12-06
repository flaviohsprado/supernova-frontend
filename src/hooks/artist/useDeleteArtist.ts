import { ApolloError } from "@apollo/client";
import { Toast, useToast } from "@chakra-ui/react";
import { useDeleteArtistMutation, useFindAllArtistsQuery } from "../../graphql/generated";

export const useDeleteArtist = () => {
    const [deleteArtist] = useDeleteArtistMutation()
    const { refetch } = useFindAllArtistsQuery()
    const toast = useToast()

    const handleDelete = async (id: string) => {
        try {
            await deleteArtist({ variables: { id } })
            await refetch()

            toast({
                title: 'Artist deleted!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (err) {
            Toast({
                title: 'Error on delete artist.',
                description: err instanceof ApolloError ? err?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    };

    return { handleDelete };
}
