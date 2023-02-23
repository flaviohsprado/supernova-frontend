import { Card, CardBody } from '@chakra-ui/card'
import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

interface IPlayerInformationProps {
    title: string
    artist: string
    cover: string
}

export default function PlayerInformation({
    title,
    artist,
    cover,
}: IPlayerInformationProps) {
    return (
        <Box width={'60%'}>
            <Card maxW={'7em'} maxH={'5em'}>
                <CardBody>
                    <Flex>
                        <Image
                            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            alt="Green double couch with wooden legs"
                            borderRadius="lg"
                        />
                        <Stack
                            mt="2"
                            spacing="3"
                            paddingLeft={'2'}
                            width={'100px'}
                        >
                            <Heading size={'sm'} color={'white'}>
                                {title}
                            </Heading>
                            <Text fontSize={'sm'} color={'white'}>
                                {artist}
                            </Text>
                        </Stack>
                    </Flex>
                </CardBody>
            </Card>
        </Box>
    )
}
