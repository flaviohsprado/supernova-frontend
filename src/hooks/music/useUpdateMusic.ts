import { ApolloError } from "@apollo/client"
import { Toast, useToast } from "@chakra-ui/react"
import { useState } from "react"
import { UpdateMusicDto, useFindAllMusicsQuery, useUpdateMusicMutation } from "../../graphql/generated"
import { useUpdateMusicFile } from "./useUpdateMusicFile"

export const useUpdateMusic = (id: string, onClose: () => void) => {
    const [title, setTitle] = useState('')
    const [duration, setDuration] = useState('')
    const [file, setFile] = useState<File | null>(null)

    const toast = useToast()

    const [ updateMusic ] = useUpdateMusicMutation()
    const { handleSubmitUpdateMusicFile } = useUpdateMusicFile()
    const { refetch } = useFindAllMusicsQuery()

    const music: UpdateMusicDto = {
        title,
        duration: convertTimeToSeconds(duration)
    } 

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            if (file) await handleSubmitUpdateMusicFile(id, file)

            await updateMusic({ variables: { id, music } })
            await refetch()

            toast({
                title: 'Music updated!',
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

    return { title, setTitle, duration, setDuration, file, setFile, handleSubmit };
}

const convertTimeToSeconds = (time: string) => {
    const [minutes, seconds] = time.split(':')
    return parseInt(minutes) * 60 + parseInt(seconds)
}