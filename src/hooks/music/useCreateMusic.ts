import { useToast } from "@chakra-ui/react"
import { useState } from "react"
import { CreateMusicDto, useCreateMusicMutation, useFindAllMusicsQuery } from "../../graphql/generated"

export const useCreateMusic = (onClose: () => void) => {
    const [title, setTitle] = useState('')
    const [albumId, setAlbumId] = useState('')
    const [duration, setDuration] = useState('')
    const [file, setFile] = useState<File | null>(null)

    const toast = useToast()

    const [ createMusic ] = useCreateMusicMutation()
    const { refetch } = useFindAllMusicsQuery()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const newMusic: CreateMusicDto = {
            title,
            albumId,
            duration: convertTimeToSeconds(duration),
        }

        try {
            await createMusic({ variables: { music: newMusic, file } })
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

    return { title, setTitle, duration, setDuration, albumId, file, setFile, setAlbumId, handleSubmit }
}

const convertTimeToSeconds = (time: string): number => {
    const [minutes, seconds] = time.split(':')
    return parseInt(minutes) * 60 + parseInt(seconds)
}