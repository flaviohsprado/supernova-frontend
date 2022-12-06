import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { useCreateMusicMutation, useFindAllMusicsQuery } from "../../graphql/generated"

export const useCreateMusic = (onClose: () => void) => {
    const [title, setTitle] = useState('')
    const [albumId, setAlbumId] = useState('')
    const [ createMusic ] = useCreateMusicMutation()
    const { refetch } = useFindAllMusicsQuery()
    const toast = useToast()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await createMusic({ variables: { title, albumId } })
            await refetch()

            setTitle('')
            setAlbumId('')

            toast({                
                title: 'Album created!',
                description: "We've created a new album for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            onClose()
        } catch (error) {
            toast({                
                title: 'Error!',
                description: "Sorry, We've encountered an error on create music.",
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    return { title, setTitle, albumId, setAlbumId, handleSubmit }
}