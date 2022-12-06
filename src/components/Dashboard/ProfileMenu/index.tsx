import { TriangleDownIcon } from '@chakra-ui/icons'
import {
    Avatar,
    Box,
    Button,
    Flex,
    Menu,
    MenuButton,
    MenuDivider,
    MenuGroup,
    MenuItem,
    MenuList,
    Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode } from 'react'
import Me from '../../../../pages/profile/me'

interface IProfileMenuProps {
    setPage: React.Dispatch<React.SetStateAction<ReactNode>>
    username: string
    avatarUrl: string
}

export default function ProfileMenu({
    setPage,
    avatarUrl,
    username,
}: IProfileMenuProps) {
    const decreaseName = (name: string) => {
        if (name.length > 10) return name.slice(0, 10) + '...'

        return name
    }

    return (
        <Menu>
            <MenuButton
                as={Button}
                minW={'170px'}
                maxH={'31px'}
                bgColor={'black'}
                borderRadius={'50px'}
                padding={'initial'}
                _hover={{
                    bgColor: '#171717',
                }}
                _active={{
                    bgColor: '#171717',
                }}
            >
                <Flex justifyContent={'space-between'}>
                    <Avatar
                        paddingLeft={'1px'}
                        name={username}
                        src={avatarUrl}
                        width={'29px'}
                        height={'29px'}
                    />
                    <Text
                        paddingTop={'5px'}
                        fontWeight={'bold'}
                        maxW={'93px'}
                        fontSize="md"
                        color={'white'}
                    >
                        {decreaseName(username)}
                    </Text>
                    <Box paddingRight={'10px'} paddingTop={'2px'}>
                        <TriangleDownIcon
                            alignSelf={'center'}
                            width={'14px'}
                            height={'14px'}
                            color={'white'}
                        />
                    </Box>
                </Flex>
            </MenuButton>
            <MenuList bgColor={'black'} textColor={'white'} border={'none'}>
                <MenuGroup>
                    <MenuItem _hover={{ bgColor: '#474747' }}>Account</MenuItem>
                    <MenuItem
                        _hover={{ bgColor: '#474747' }}
                        onClick={() => setPage(<Me />)}
                    >
                        {/*<Link href={'/profile/me'}>Profile</Link>*/}
                        Profile
                    </MenuItem>
                    <MenuItem _hover={{ bgColor: '#474747' }}>
                        Settings
                    </MenuItem>
                    <MenuItem _hover={{ bgColor: '#474747' }}>
                        <Link href={'/admin/dashboard'}>Admin page</Link>
                    </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                    <MenuItem _hover={{ bgColor: '#474747' }}>Log out</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}
