import { ApolloError } from "@apollo/client";
import { Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useFindAllAlbumsQuery, useUpdateAlbumMutation } from "../../../../graphql/generated";

export const useUpdateAlbum = (id: string, onClose: () => void) => {
    const [title, setTitle] = useState('')

    const toast = useToast()

    const [updateAlbum] = useUpdateAlbumMutation()
    const { refetch } = useFindAllAlbumsQuery()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await updateAlbum({ variables: { id, title } })
            await refetch()

            toast({
                title: 'Album updated!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            setTitle('')
            onClose()
        } catch (err) {
            Toast({
                title: 'Error on update album.',
                description: err instanceof ApolloError ? err?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    };

    return { title, setTitle, handleSubmit };
}