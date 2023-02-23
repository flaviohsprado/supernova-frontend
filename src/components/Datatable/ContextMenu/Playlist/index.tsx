import { MenuItem, MenuList, Select } from '@chakra-ui/react'
import { MutableRefObject, useContext, useState } from 'react'
import ContextMenu from '..'
import { AuthContext } from '../../../../contexts/auth.context'
import { useDeleteMusicPlaylist } from '../../../../hooks/playlist/useDeleteMusicPlaylist'
import { useInsertMusicPlaylist } from '../../../../hooks/playlist/useInsertMusicPlaylist'
import { useListMyPlaylists } from '../../../../hooks/playlist/useListMyPlaylist'

interface IContextPlaylistMenuProps {
    playlistId: string
    musicId: string
    children: (ref: MutableRefObject<any>) => JSX.Element | null
}

export default function PlaylistContextMenu({
    playlistId,
    musicId,
    children,
}: IContextPlaylistMenuProps) {
    const { user } = useContext(AuthContext)
    const { playlists } = useListMyPlaylists(user?.id)
    const [playlistIdAux, setPlaylistIdAux] = useState<string>('')
    const { handleInsertMusicPlaylist } = useInsertMusicPlaylist(playlistIdAux)
    const { handleDeleteMusicPlaylist } = useDeleteMusicPlaylist(playlistIdAux)

    const handleShareMusic = () => {}

    const handleAddToPlaylist = (playlistId: string, musicId: string) => {
        handleInsertMusicPlaylist(musicId, playlistId)
    }

    const handleDeleteMusic = (playlistId: string, musicId: string) => {
        setPlaylistIdAux(playlistId)
        handleDeleteMusicPlaylist(musicId, playlistId)
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
                        onClick={() => handleDeleteMusic(playlistId, musicId)}
                    >
                        Remove from this Playlist
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
                                onClick={() =>
                                    handleAddToPlaylist(playlist.id, musicId)
                                }
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
