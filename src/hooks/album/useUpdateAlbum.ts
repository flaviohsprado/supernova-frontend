import { ApolloError } from "@apollo/client";
import { Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useFindAlbumsQuery, useUpdateAlbumMutation } from "../../graphql/generated";
import { useUpdateAlbumCover } from "./useUpdateAlbumCover";

export const useUpdateAlbum = (id: string, onClose: () => void) => {
    const [title, setTitle] = useState('')
    const [file, setFile] = useState<File | null>(null)
    const { handleSubmitUpdateCover } = useUpdateAlbumCover()

    const toast = useToast()

    const [updateAlbum] = useUpdateAlbumMutation()
    const { refetch } = useFindAlbumsQuery()

    const handleSubmit = async (event: any) => {
        event.preventDefault();        

        try {
            if (file) await handleSubmitUpdateCover(id, file)
            
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

    return { title, setTitle, setFile, handleSubmit };
}