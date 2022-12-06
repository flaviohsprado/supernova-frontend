import { Box, Flex, List, ListItem, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineLock } from 'react-icons/ai'
import { IPlaylist } from '../../../interfaces/playlist.interface'

interface IListPlaylistProps {
    playlists: IPlaylist[]
}

export default function ListPlaylist({ playlists }: IListPlaylistProps) {
    const alphabetizePlaylists = (playlists: IPlaylist[]) => {
        return playlists.sort((a, b) => a.title.localeCompare(b.title))
    }

    const alphabetizedPlaylists = alphabetizePlaylists(playlists)

    return (
        <List spacing={3} paddingLeft={'20px'} paddingBottom={'20px'}>
            {alphabetizedPlaylists.map((playlist, index) => (
                <ListItem key={index}>
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'baseline'}
                    >
                        <Link
                            key={index}
                            href={`/${playlist.title}`}
                            style={{
                                textDecoration: 'none',
                                color: 'white',
                            }}
                        >
                            <Text
                                fontWeight={500}
                                color={'#a6a6a6'}
                                _hover={{
                                    color: 'white',
                                }}
                            >
                                {playlist.title}
                            </Text>
                        </Link>
                        {!playlist.isPublic && (
                            <Box paddingRight={'15px'}>
                                <AiOutlineLock color={'white'} />
                            </Box>
                        )}
                    </Flex>
                </ListItem>
            ))}
        </List>
    )
}
