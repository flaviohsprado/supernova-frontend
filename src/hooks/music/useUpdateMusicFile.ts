import { useUpdateMusicFileMutation } from "../../graphql/generated"
import { FileUtils } from '../../utils/file.utils'

export const useUpdateMusicFile = () => {
    const [ updateMusicFile ] = useUpdateMusicFileMutation()

    const handleSubmitUpdateMusicFile = async (id: string, file: File) => {
        if (!file) return
        
        const apolloFile = FileUtils.createApolloFile(file)

        await updateMusicFile({ variables: { id, file: apolloFile } })
    }

    return { handleSubmitUpdateMusicFile }
}