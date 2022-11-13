import { ApolloError } from "@apollo/client";
import { Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useFindAllArtistsQuery, useUpdateArtistMutation } from "../../../../graphql/generated"

export const useUpdateArtist = (id: string, onClose: () => void) => {
    const [name, setName] = useState('')
    const toast = useToast()

    const [updateArtist] = useUpdateArtistMutation()
    const { refetch } = useFindAllArtistsQuery()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await updateArtist({ variables: { id, name } })
            await refetch()

            toast({
                title: 'Artist update!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            setName('')
            onClose()
        } catch (err) {
            Toast({
                title: 'Error on update artist.',
                description: err instanceof ApolloError ? err?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    };

    return { name, setName, handleSubmit };
}