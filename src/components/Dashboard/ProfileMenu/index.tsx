import { TriangleDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileMenu(props: { avatarUrl: string, username: string }) {
    return (
        <Menu>
            <MenuButton as={Button} minW={'160px'} maxH={'35px'} bgColor={'white'} borderRadius={'50px'} padding={'initial'}>
                <Flex justifyContent={'space-around'}>
                    <Image src={props.avatarUrl} width={'30'} height={'30'} alt={props.username} style={{ borderRadius: '50%' }} />
                    <Text paddingTop={'5px'} fontWeight={'bold'} maxW={'93px'} fontSize='md' color={'black'}>{props.username}</Text>
                    <TriangleDownIcon alignSelf={'center'} />
                </Flex>
            </MenuButton>
            <MenuList bgColor={'black'} textColor={'white'} border={'none'}>
                <MenuGroup>
                    <MenuItem _hover={{ bgColor: '#474747' }}>Account</MenuItem>
                    <MenuItem _hover={{ bgColor: '#474747' }}>Profile</MenuItem>
                    <MenuItem _hover={{ bgColor: '#474747' }}>Settings</MenuItem>
                    <MenuItem _hover={{ bgColor: '#474747' }}><Link href={'/admin/dashboard'}>Admin page</Link></MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup>
                    <MenuItem _hover={{ bgColor: '#474747' }}>Log out</MenuItem>
                </MenuGroup>
            </MenuList>
        </Menu>
    )
}