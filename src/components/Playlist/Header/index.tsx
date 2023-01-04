import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import PlaylistCover from './Cover'
import UpdatePlaylist from './update'

export interface IProfileHeaderProps {
    playlistId: string
    title: string
    cover: string
    followers: number
    isPublic: boolean
}

export default function PlaylistHeader({
    playlistId,
    title,
    cover,
    followers,
    isPublic,
}: IProfileHeaderProps) {
    return (
        <Flex
            align={'center'}
            width={'100%'}
            padding={'1.5rem'}
            color={'white'}
            backgroundColor={'black'}
        >
            <PlaylistCover
                playlistId={playlistId}
                title={title}
                coverUrl={cover}
            />
            <Stack paddingLeft={'6'}>
                <Text fontWeight={'bold'}>
                    {isPublic ? 'PUBLIC PLAYLIST' : 'PARTICULAR PLAYLIST'}
                </Text>
                <Flex
                    align={'center'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontWeight={'bold'} fontSize="6xl">
                        {title}
                    </Text>
                    <Box paddingLeft={'1rem'}>
                        <UpdatePlaylist playlistId={playlistId} />
                    </Box>
                </Flex>
                <Text>{followers} followers</Text>
            </Stack>
        </Flex>
    )
}
