import { useUpdateAlbumCoverMutation } from "../../graphql/generated"
import { FileUtils } from '../../utils/file.utils'

export const useUpdateAlbumCover = () => {
    const [updateAlbumCover] = useUpdateAlbumCoverMutation()

    const handleSubmitUpdateCover = async (id: string, file: File) => {
        if (!file) return
        
        const apolloFile = FileUtils.createApolloFile(file)

        await updateAlbumCover({ variables: { id, file: apolloFile } })
    }

    return { handleSubmitUpdateCover }
}