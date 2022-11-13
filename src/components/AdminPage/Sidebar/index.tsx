import {
    Box, BoxProps, CloseButton,
    Flex, Text,
    useDisclosure
} from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { BiUser } from 'react-icons/bi';
import { FiHome, FiMusic } from 'react-icons/fi';
import { GiMicrophone } from 'react-icons/gi';
import { RiAlbumFill } from 'react-icons/ri';
import { SidebarButton } from '../../global/SidebarButton';
import AlbumPage from '../Album';
import ArtistPage from '../Artist';
import HomePage from '../Home';
import MusicPage from '../Music';
import UserPage from '../User';

interface LinkItemProps {
    name: string;
    icon: IconType;
    page: ReactNode;
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Home', icon: FiHome, page: <HomePage /> },
    { name: 'Users', icon: BiUser, page: <UserPage /> },
    { name: 'Artists', icon: GiMicrophone, page: <ArtistPage /> },
    { name: 'Albums', icon: RiAlbumFill, page: <AlbumPage /> },
    { name: 'Musics', icon: FiMusic, page: <MusicPage /> },
];

export interface ISidebarProps extends BoxProps {
    children?: ReactNode;
    setPage: React.Dispatch<React.SetStateAction<ReactNode>>;
}

export default function AdminSidebar({ children, setPage }: ISidebarProps) {
    const { onClose } = useDisclosure();

    return (
        <>
            <SidebarContent
                onClose={() => onClose}
                setPage={setPage}
                display={{ base: 'none', md: 'block' }}
            />
            <Box ml={{ base: 0, md: 60 }} bgColor={'#252525'} padding={4}>
                {children}
            </Box>
        </>
    );
}

interface SidebarProps extends BoxProps {
    onClose: () => void;
    setPage: React.Dispatch<React.SetStateAction<ReactNode>>;
}

const SidebarContent = ({ onClose, setPage, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={'black'}
            width={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="xl" fontFamily="monospace" fontWeight="bold" color={'white'}>
                    Welcome Administrator!
                </Text>
                <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <SidebarButton key={link.name} icon={link.icon} onClick={() => setPage(link.page)} isActiveButton={false}>
                    <Text fontFamily="monospace" fontWeight="bold" color={'white'}>
                        {link.name}
                    </Text>
                </SidebarButton>
            ))}
        </Box>
    );
};