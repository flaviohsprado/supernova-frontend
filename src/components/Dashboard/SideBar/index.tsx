import { Box, Divider, Text } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'
import { BiHomeAlt, BiLibrary, BiSearch } from 'react-icons/bi'
import { useListPlaylists } from '../../../hooks/playlist/useListPlaylist'
import { SidebarButton } from '../../global/SidebarButton'
import HomePageDashboard from '../../Home'
import ListPlaylist from '../Playlist'
import CreatePlaylist from '../Playlist/create'

interface LinkItemProps {
    name: string
    icon: IconType
    page?: ReactNode
}

const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: BiHomeAlt, page: <HomePageDashboard /> },
    { name: 'Search', icon: BiSearch },
    { name: 'Your Library', icon: BiLibrary },
]

interface ISidebarProps {
    setPage: React.Dispatch<React.SetStateAction<ReactNode>>
    userId: string
}

export default function Sidebar({ userId, setPage }: ISidebarProps) {
    const { playlists } = useListPlaylists(String(userId))

    return (
        <Box
            bg={'black'}
            borderRadius={'10px'}
            width={'auto'}
            height={'100%'}
            paddingTop={'10px'}
        >
            {LinkItems.map((link) => (
                <SidebarButton
                    key={link.name}
                    icon={link.icon}
                    onClick={() => setPage(link.page)}
                >
                    <Text fontWeight="bold" color={'white'}>
                        {link.name}
                    </Text>
                </SidebarButton>
            ))}
            <Box padding={'20px 0 20px 0'} />
            <CreatePlaylist userId={userId} />
            <Box padding={'10px 20px 10px 20px'}>
                <Divider />
            </Box>
            <ListPlaylist playlists={playlists} />
        </Box>
    )
}
