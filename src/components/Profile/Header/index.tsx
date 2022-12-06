import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import ProfileAvatar from './Avatar'
import UpdateProfile from './update'

export interface IProfileHeaderProps {
    userId: string
    username: string
    avatar: string
    publicPlaylists: number
    followers: number
    following: number
}

export default function ProfileHeader({
    userId,
    username,
    avatar,
    publicPlaylists,
    followers,
    following,
}: IProfileHeaderProps) {
    return (
        <Flex
            align={'center'}
            justify={'flex-start'}
            padding={'1.5rem'}
            color={'white'}
            backgroundColor={'black'}
        >
            <ProfileAvatar userId={userId} name={username} avatarUrl={avatar} />
            <Stack paddingLeft={'6'}>
                <Text fontWeight={'bold'}>PROFILE</Text>
                <Flex
                    align={'center'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontWeight={'bold'} fontSize="6xl">
                        {username}
                    </Text>
                    <Box paddingLeft={'1rem'}>
                        <UpdateProfile userId={userId} />
                    </Box>
                </Flex>
                <Text>
                    {publicPlaylists} public Playlists • {followers} followers •{' '}
                    {following} following
                </Text>
            </Stack>
        </Flex>
    )
}
