import {
  Box, Divider, List, ListItem, Text, useDisclosure
} from '@chakra-ui/react';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { BiHomeAlt, BiSearch, BiLibrary } from 'react-icons/bi';
import { SidebarButton } from '../../global/SidebarButton';

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: BiHomeAlt },
  { name: 'Search', icon: BiSearch },
  { name: 'Your Library', icon: BiLibrary },
];

const playlistsMock = [
  { name: 'Rock' },
  { name: 'Black' },
  { name: 'Funk' },
  { name: '[G]old' },
]

export default function Sidebar() {
  //Pega as playlists do hook
  const alphabetizedPlaylists = alphabetizePlaylists(playlistsMock);

  return (
    <Box
      bg={'black'}
      borderRadius={'10px'}
      width={'auto'}
      minH={'76.5vh'}
      maxH={'76.5vh'}
      paddingTop={'10px'}
    >
      {LinkItems.map((link) => (
        <SidebarButton key={link.name} icon={link.icon}>
          <Text fontWeight="bold" color={'white'}>
            {link.name}
          </Text>
        </SidebarButton>
      ))}
      <Box padding={'10px 20px 10px 20px'}>
        <Divider />
      </Box>
      <List spacing={3} paddingLeft={'20px'} paddingBottom={'20px'}>
        {alphabetizedPlaylists.map((linkItem, index) => (
          <ListItem key={index} >
            <Link key={index} href={`/${linkItem}`}
              style={{
                textDecoration: 'none',
                color: 'white',
              }}
            >
              {linkItem.name}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

function alphabetizePlaylists(playlists: any[]) {
  return playlists.sort((a, b) => a.name.localeCompare(b.name));
}