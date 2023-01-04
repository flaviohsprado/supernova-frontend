import { ApolloError } from '@apollo/client';
import { Toast, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useFindUserQuery, useUpdateFileMutation } from '../../graphql/generated';

export const useChangeAvatarProfile = (userId: string, avatarUrl: string) => {
    const [avatar, setAvatar] = useState(avatarUrl)
    const [updateAvatar] = useUpdateFileMutation()
    const { refetch } = useFindUserQuery()
    const toast = useToast()

    const handleAvatarChange = async (file: File) => {
        const apolloFile = new File([file], file.name, { type: file.type })

        try {
            await updateAvatar({
                variables: {
                    id: userId,
                    file: apolloFile
                }
            })
    
            await refetch()
    
            toast({
                title: 'Avatar updated!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        } catch (error) {
            Toast({
                title: 'Error on update avatar.',
                description: error instanceof ApolloError ? error?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }

    }    

    return {avatar, setAvatar, handleAvatarChange};
}