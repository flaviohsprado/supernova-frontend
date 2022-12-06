import { ApolloError } from "@apollo/client";
import { Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { UpdatePlaylistDto, useFindPlaylistsQuery, useUpdatePlaylistMutation } from "../../graphql/generated";

export const useUpdatePlaylist = (id: string, onClose: () => void) => {
    const [title, setTitle] = useState('')    
    const [isPublic, setIsPublic] = useState(false)

    const toast = useToast()

    const [updatePlaylist] = useUpdatePlaylistMutation()
    const { refetch } = useFindPlaylistsQuery()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const playlist: UpdatePlaylistDto = {
            title,
            isPublic
        }

        try {            
            await updatePlaylist({ variables: { id, playlist } })
            await refetch()

            toast({
                title: 'Playlist updated!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            setTitle('')
            onClose()
        } catch (err) {
            Toast({
                title: 'Error on update Playlist.',
                description: err instanceof ApolloError ? err?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    };

    return { title, setTitle, isPublic, setIsPublic, handleSubmit };
}