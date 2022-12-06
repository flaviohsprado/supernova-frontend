import { ApolloError } from "@apollo/client";
import { Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useCreateArtistMutation, useFindAllArtistsQuery } from "../../graphql/generated";

export const useCreateArtist = (onClose: () => void) => {
    const [name, setName] = useState('')
    const toast = useToast()

    const [createArtist] = useCreateArtistMutation()
    const { refetch } = useFindAllArtistsQuery()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await createArtist({ variables: { name } })
            await refetch()

            toast({
                title: 'Artist created!',
                description: "We've created a new artist for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            setName('')
            onClose()
        } catch (err) {
            Toast({
                title: 'Error on create artist.',
                description: err instanceof ApolloError ? err?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    };

    return {
        name, setName, handleSubmit
    };
}