import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth.context'
import HomePlaylist from './playlists'

export default function HomePageDashboard() {
    const { user } = useContext(AuthContext)
    const salutation = (): string => {
        const date = new Date()
        const hour = date.getHours()
        if (hour < 12) {
            return 'Good morning'
        } else if (hour < 18) {
            return 'Good afternoon'
        } else {
            return 'Good evening'
        }
    }

    return (
        <Box
            backgroundColor={'black'}
            padding={5}
            minHeight={'68vh'}
            maxWidth={'70vw'}
        >
            <Stack>
                <Text fontSize={'2xl'} color={'white'} fontWeight={700}>
                    {salutation()}
                </Text>
                <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                    <HomePlaylist userId={String(user?.id)} />
                </Flex>
            </Stack>
        </Box>
    )
}
