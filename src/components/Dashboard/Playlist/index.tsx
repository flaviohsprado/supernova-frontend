import { Button, List, ListItem } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FiLock } from 'react-icons/fi'
import { IPlaylist } from '../../../interfaces/playlist.interface'
import Playlist from '../../Playlist'

interface IListPlaylistProps {
    playlists: IPlaylist[]
    setPage: React.Dispatch<React.SetStateAction<ReactNode>>
}

export default function ListPlaylist({
    playlists,
    setPage,
}: IListPlaylistProps) {
    const alphabetizePlaylists = (playlists: IPlaylist[]) => {
        return playlists.sort((a, b) => a.title.localeCompare(b.title))
    }

    const alphabetizedPlaylists = alphabetizePlaylists(playlists)

    return (
        <List spacing={3} padding={2}>
            {alphabetizedPlaylists.map((playlist, index) => (
                <ListItem key={index}>
                    <Button
                        onClick={() => setPage(<Playlist id={playlist.id} />)}
                        rightIcon={
                            !playlist.isPublic ? (
                                <FiLock color={'white'} />
                            ) : (
                                <></>
                            )
                        }
                        width={'100%'}
                        variant={'ghost'}
                        color={'white'}
                        justifyContent={'space-between'}
                        _hover={{
                            background: 'gray.600',
                            color: 'gray.300',
                        }}
                    >
                        {playlist.title}
                    </Button>
                </ListItem>
            ))}
        </List>
    )
}
