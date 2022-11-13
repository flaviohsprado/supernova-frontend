import { Box, Flex, Image, Text } from "@chakra-ui/react";

export interface IFriendOptionProps {
    avatar: string;
    username: string;
    isOnline: boolean;
    musicPlaying: string;
}

export default function FriendOption({ avatar, username, isOnline, musicPlaying }: IFriendOptionProps) {
    return (
        <Box borderRadius={'5px'} bgColor={'#252525'} padding={'10px'}>
            <Flex justifyContent={'space-between'}>
                <Image src={avatar} width={'30'} height={'30'} alt={username} style={{ borderRadius: '50%' }} />
                <Text color={'white'}>{username}</Text>
                {isOnline && <Box bg={'green'} width={'10px'} height={'10px'} borderRadius={'50%'} />}
            </Flex>
            <Text>{musicPlaying}</Text>
        </Box>
    );
}