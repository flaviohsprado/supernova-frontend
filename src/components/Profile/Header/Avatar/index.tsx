import { Avatar, IconButton, Input } from "@chakra-ui/react";
import { AiOutlineEdit } from "react-icons/ai";
import { useChangeAvatarProfile } from "./useChangeAvatarProfile.hook";

export interface IAvatarProps {
    userId: string,
    name: string,
    avatarUrl: string,
}

export default function ProfileAvatar({ userId, name, avatarUrl }: IAvatarProps) {
    const { avatar, handleAvatarChange } = useChangeAvatarProfile(userId, avatarUrl)

    const handleEditAvatar = () => {
        const avatarInput = document.getElementById('avatarInput')

        avatarInput?.click()

        avatarInput?.addEventListener('change', (e)=> {
            const target = e.target as HTMLInputElement
            const file = target.files?.[0]

            if (file)                
                handleAvatarChange(file)
        })
    }

    return (
        <>
            <Input id={'avatarInput'} display={'none'} type={'file'} value={avatar}/>
            <Avatar
                name={name}
                src={avatarUrl}
                width={'200px'}
                height={'200px'}
            />
            <IconButton
                width={'200px'}
                height={'200px'}
                borderRadius={'100%'}
                variant='outline'
                colorScheme={'white'}
                aria-label='Edit Avatar'
                fontSize='60px'
                icon={<AiOutlineEdit/>}
                position={'absolute'}
                opacity={0}
                onClick={handleEditAvatar}
                _hover={{
                    opacity: 0.5,
                    backgroundColor: 'black',                 
                }}
            />
        </>        
    )
}