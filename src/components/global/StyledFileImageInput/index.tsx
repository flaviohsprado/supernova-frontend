import { Box, FormLabel, IconButton, Image, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'

interface IStyledInputFileProps {
    label: string
    acceptedFileTypes: string
    handleFile: (file: File) => void
}

export default function StyledInputImageFile({
    label,
    acceptedFileTypes,
    handleFile,
}: IStyledInputFileProps) {
    const [file, setFile] = useState<File>()
    const handleEditAvatar = () => {
        const avatarInput = document.getElementById('avatarInput')

        avatarInput?.click()

        avatarInput?.addEventListener('change', (e) => {
            const target = e.target as HTMLInputElement
            const file = target.files?.[0]

            if (file) {
                setFile(file)
                handleFile(file)
            }
        })
    }

    const getUrl = (file: File) => {
        return URL.createObjectURL(file)
    }

    return (
        <Box paddingBottom={'10px'}>
            <Input
                id={'avatarInput'}
                display={'none'}
                type={'file'}
                accept={acceptedFileTypes}
            />
            <FormLabel color={'white'} paddingLeft={'16px'}>
                {label}
            </FormLabel>
            <Image
                src={file ? getUrl(file) : 'https://bit.ly/sage-adebayo'}
                width={'80px'}
                height={'80px'}
                borderRadius={'5px'}
            />
            <IconButton
                width={'80px'}
                height={'80px'}
                borderRadius={'5px'}
                variant="outline"
                colorScheme={'white'}
                aria-label="Edit Avatar"
                fontSize="60px"
                icon={<AiOutlineEdit />}
                position={'absolute'}
                margin={'-80px auto 0'}
                opacity={0}
                onClick={handleEditAvatar}
                _hover={{
                    opacity: 0.5,
                    backgroundColor: 'white',
                }}
            />
        </Box>
    )
}
