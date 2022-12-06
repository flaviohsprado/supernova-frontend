import { Avatar, AvatarBadge, Box, Flex, Stack, Text } from '@chakra-ui/react'
import { FiMusic } from 'react-icons/fi'

export interface IFriendOptionProps {
    avatar: string
    username: string
    isOnline: boolean
    musicPlaying: string
}

export default function FriendOption({
    avatar,
    username,
    isOnline,
    musicPlaying,
}: IFriendOptionProps) {
    return (
        <Box padding={'10px'}>
            <Stack
                direction="row"
                spacing={4}
                borderRadius={'5px'}
                padding={'10px'}
                border={'1px solid #1E1E1E'}
                _hover={{
                    backgroundColor: '#1c1c1c',
                }}
            >
                <Avatar src={avatar}>
                    {isOnline ? (
                        <AvatarBadge
                            borderColor={'black'}
                            boxSize="0.9em"
                            bg="green.500"
                        />
                    ) : (
                        <AvatarBadge
                            borderColor={'black'}
                            boxSize="0.9em"
                            bg="red.500"
                        />
                    )}
                </Avatar>
                <Stack direction="column">
                    <Text color={'#cfcccc'} fontWeight={500}>
                        {username}
                    </Text>
                    <Flex alignItems={'baseline'}>
                        <Box paddingRight={'5px'}>
                            <FiMusic color={'white'} />
                        </Box>
                        <Box
                            width={'200px'}
                            height={'30px'}
                            position={'relative'}
                            lineHeight={'30px'}
                            overflow={'hidden'}
                        >
                            <span
                                style={{
                                    position: 'absolute',
                                    whiteSpace: 'nowrap',
                                    transform: 'translateX(0)',
                                    transition: '1s',
                                    transitionDuration: '1s',
                                }}
                            >
                                <Text
                                    color={'#b8b8b8'}
                                    fontWeight={500}
                                    fontSize={'xs'}
                                    textOverflow={'ellipsis'}
                                    _hover={{
                                        transform:
                                            'translateX(calc(200px - 100%))',
                                    }}
                                >
                                    {musicPlaying}
                                </Text>
                            </span>
                        </Box>
                    </Flex>
                </Stack>
            </Stack>
        </Box>
    )
}
