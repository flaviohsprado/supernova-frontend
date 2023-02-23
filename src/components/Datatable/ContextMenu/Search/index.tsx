import { MenuItem, MenuList, Select } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import ContextMenu from '..'
import { AuthContext } from '../../../../contexts/auth.context'
import { useInsertMusicPlaylist } from '../../../../hooks/playlist/useInsertMusicPlaylist'
import { useListMyPlaylists } from '../../../../hooks/playlist/useListMyPlaylist'

interface ISearchContextMenuProps {
    musicId: string
    children: (ref: any) => JSX.Element | null
}

export default function SearchContextMenu({
    musicId,
    children,
}: ISearchContextMenuProps) {
    const { user } = useContext(AuthContext)
    const { playlists } = useListMyPlaylists(user?.id)
    const [playlistIdAux, setPlaylistIdAux] = useState<string>('')
    const { handleInsertMusicPlaylist } = useInsertMusicPlaylist(playlistIdAux)

    const handleShareMusic = () => {}

    const handleAddToPlaylist = (playlistId: string, musicId: string) => {
        setPlaylistIdAux(playlistId)
        handleInsertMusicPlaylist(musicId, playlistId)
    }

    const handleAddToQueue = () => {}

    return (
        <ContextMenu
            renderMenu={() => (
                <MenuList backgroundColor={'black'} border={'none'}>
                    <MenuItem
                        color={'white'}
                        _hover={{
                            backgroundColor: '#525252',
                        }}
                        onClick={handleAddToQueue}
                    >
                        Add To Queue
                    </MenuItem>
                    <MenuItem
                        color={'white'}
                        _hover={{
                            backgroundColor: '#525252',
                        }}
                        onClick={handleShareMusic}
                    >
                        Share this music
                    </MenuItem>
                    <Select
                        border={'none'}
                        placeholder={'Add to Playlist'}
                        color={'white'}
                        _hover={{
                            backgroundColor: '#525252',
                        }}
                        onChange={(e) =>
                            handleAddToPlaylist(String(e.target.value), musicId)
                        }
                    >
                        {playlists.map((playlist) => (
                            <option
                                key={playlist.id}
                                value={playlist.id}
                                style={{
                                    backgroundColor: 'black',
                                }}
                            >
                                {playlist.title}
                            </option>
                        ))}
                    </Select>
                </MenuList>
            )}
        >
            {(ref: any) => children(ref)}
        </ContextMenu>
    )
}
