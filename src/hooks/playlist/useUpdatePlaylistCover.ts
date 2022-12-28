import { ApolloError } from '@apollo/client';
import { Toast, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useFindPlaylistQuery, useUpdatePlaylistCoverMutation } from '../../graphql/generated';

export const useUpdatePlaylistCover = (playlistId: string, src: string) => {
    const [cover, setCover] = useState(src)
    const [updateCover] = useUpdatePlaylistCoverMutation()
    const { refetch } = useFindPlaylistQuery({ variables: { id: playlistId } })
    const toast = useToast()

    const handleCoverChange = async (file: File) => {
        const apolloFile = new File([file], file.name, { type: file.type })

        try {
            await updateCover({
                variables: {
                    playlistId,
                    file: apolloFile
                }
            })
    
            await refetch()
    
            toast({
                title: 'Cover updated!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            Toast({
                title: 'Error on update cover.',
                description: error instanceof ApolloError ? error?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

    }    

    return {cover, setCover, handleCoverChange};
}