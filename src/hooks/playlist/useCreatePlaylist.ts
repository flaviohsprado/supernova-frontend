import { ApolloError } from '@apollo/client'
import { Toast, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { CreatePlaylistDto, useCreatePlaylistMutation, useFindPlaylistsQuery } from '../../graphql/generated'

export const useCreateplaylist = (userId: string, onClose: () => void) => {
    const [title, setTitle] = useState('')    
    const [isPublic, setIsPublic] = useState(false)

    const [createplaylist] = useCreatePlaylistMutation()
    const { refetch } = useFindPlaylistsQuery()

    const toast = useToast()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const playlist: CreatePlaylistDto = {
            userId,
            title,            
            isPublic
        }

        try {
            await createplaylist({ variables: { playlist } })
            await refetch()

            setTitle('')            
            setIsPublic(false)

            toast({
                title: 'playlist created!',
                description: "We've created a new playlist for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            onClose()
        } catch (error) {
            Toast({
                title: 'Error on create playlist.',
                description: error instanceof ApolloError ? error?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return { title, setTitle, isPublic, setIsPublic, handleSubmit }
}