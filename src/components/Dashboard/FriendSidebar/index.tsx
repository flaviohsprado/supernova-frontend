import { Box, Divider, List, Text } from '@chakra-ui/react'
import { TiUserAddOutline } from 'react-icons/ti'
import { SidebarButton } from '../../global/SidebarButton'
import FriendOption from '../FriendOption'

const friendsMock = [
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'flaviohsprado',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun dadasdasdadasdasdadsa',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: false,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: false,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
    {
        avatar: 'https://github.com/flaviohsprado.png',
        username: 'jao',
        isOnline: true,
        musicPlaying: 'The Beatles - Here Comes The Sun',
    },
]

export default function FriendSidebar() {
    return (
        <Box height={'100%'} padding={'0.5rem'}>
            <SidebarButton icon={TiUserAddOutline}>
                <Text fontWeight="bold" color={'white'}>
                    Add New friends!
                </Text>
            </SidebarButton>
            <Box padding={'10px 20px 10px 20px'}>
                <Divider />
            </Box>
            <List
                maxH={'65vh'}
                overflowY={'auto'}
                _hover={{ overflowY: 'scroll' }}
                sx={{
                    '&::-webkit-scrollbar': {
                        width: '10px',
                        borderRadius: '8px',
                        backgroundColor: `black`,
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: `#a3a3a3`,
                        borderRadius: '8px',
                    },
                }}
            >
                {friendsMock.map((friend, index) => (
                    <FriendOption key={index} {...friend} />
                ))}
            </List>
        </Box>
    )
}
