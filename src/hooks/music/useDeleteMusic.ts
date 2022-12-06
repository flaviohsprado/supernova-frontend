import { ApolloError } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { useDeleteMusicMutation, useFindAllMusicsQuery } from "../../graphql/generated";

export const useDeleteMusic = () => {
    const toast = useToast()
    const [ deleteMusic ] = useDeleteMusicMutation()
    const { refetch } = useFindAllMusicsQuery()

    const handleDeleteMusic = async (id: string) => {
        try {
            await deleteMusic({ variables: { id } })
            await refetch()

            toast({
                title: 'Music deleted!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })            
        } catch (error) {
            toast({
                title: 'Error on delete music.',
                description: error instanceof ApolloError ? error?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return { handleDeleteMusic };
}