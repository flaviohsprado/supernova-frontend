import { Avatar, IconButton, Input } from '@chakra-ui/react'
import { AiOutlineEdit } from 'react-icons/ai'
import { useUpdatePlaylistCover } from '../../../../hooks/playlist/useUpdatePlaylistCover'

export interface IPlaylistCoverProps {
    playlistId: string
    title: string
    coverUrl: string
}

export default function PlaylistCover({
    playlistId,
    title,
    coverUrl,
}: IPlaylistCoverProps) {
    const { handleCoverChange } = useUpdatePlaylistCover(playlistId, coverUrl)

    const handleEditCover = () => {
        console.log('handleEditCover passou')
        const coverInput = document.getElementById('coverInput')

        coverInput?.click()

        coverInput?.addEventListener('change', (e) => {
            const target = e.target as HTMLInputElement
            const file = target.files?.[0]

            if (file) handleCoverChange(file)
        })
    }

    return (
        <>
            <Input id={'coverInput'} display={'none'} type={'file'} />
            <Avatar
                name={title}
                src={coverUrl || '/images/no-image.png'}
                width={'200px'}
                height={'200px'}
                borderRadius={'5px'}
            />
            <IconButton
                width={'200px'}
                height={'200px'}
                borderRadius={'5px'}
                variant="outline"
                colorScheme={'white'}
                aria-label="Edit Cover"
                fontSize="60px"
                icon={<AiOutlineEdit />}
                position={'absolute'}
                opacity={0}
                onClick={handleEditCover}
                _hover={{
                    opacity: 0.5,
                    backgroundColor: 'black',
                }}
            />
        </>
    )
}
