import { ApolloError } from '@apollo/client'
import { Toast, useToast } from '@chakra-ui/react'
import { useState } from 'react'
import { useCreateAlbumMutation, useFindAllAlbumsQuery } from '../../../../graphql/generated'

export const useCreateAlbum = (onClose: () => void) => {
    const [title, setTitle] = useState('')
    const [releaseDate, setReleaseDate] = useState('')
    const [artistId, setArtistId] = useState('')

    const [createAlbum] = useCreateAlbumMutation()
    const { refetch } = useFindAllAlbumsQuery()

    const toast = useToast()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await createAlbum({ variables: { title, releaseDate, artistId } })
            await refetch()

            setTitle('')
            setReleaseDate('')
            setArtistId('')

            toast({
                title: 'Album created!',
                description: "We've created a new album for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            onClose()
        } catch (error) {
            Toast({
                title: 'Error on create album.',
                description: error instanceof ApolloError ? error?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }

    return { title, setTitle, releaseDate, setReleaseDate, artistId, setArtistId, handleSubmit }
}