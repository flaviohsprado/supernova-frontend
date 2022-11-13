import {
  Box, Divider, List, Text
} from '@chakra-ui/react';
import { TiUserAddOutline } from 'react-icons/ti';
import { SidebarButton } from '../../global/SidebarButton';
import FriendOption from '../FriendOption';

const friendsMock = [
  {
    avatar: "https://github.com/flaviohsprado.png",
    username: "flaviohsprado",
    isOnline: true,
    musicPlaying: "The Beatles - Here Comes The Sun"
  },
  {
    avatar: "https://github.com/flaviohsprado.png",
    username: "jao",
    isOnline: true,
    musicPlaying: "The Beatles - Here Comes The Sun"
  },
  {
    avatar: "https://github.com/flaviohsprado.png",
    username: "polengo",
    isOnline: true,
    musicPlaying: "The Beatles - Here Comes The Sun",
  },
  {
    avatar: "https://github.com/flaviohsprado.png",
    username: "alele",
    isOnline: true,
    musicPlaying: "The Beatles - Here Comes The Sun",
  },
]

export default function FriendSidebar() {
  return (
    <Box
      bg={'black'}
      borderRadius={'10px'}
      width={'auto'}
      minH={'76.5vh'}
      maxH={'76.5vh'}
      paddingTop={'10px'}
    >
      <SidebarButton icon={TiUserAddOutline}>
        <Text fontWeight="bold" color={'white'}>New friends!</Text>
      </SidebarButton>
      <Box padding={'10px 20px 10px 20px'}>
        <Divider />
      </Box>
      <List spacing={3} paddingLeft={'20px'} paddingBottom={'20px'}>
        {friendsMock.map((friend, index) => (
          <FriendOption key={index} {...friend} />
        ))}
      </List>
    </Box >
  );
};