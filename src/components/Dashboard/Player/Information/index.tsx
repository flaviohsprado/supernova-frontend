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
                        <Image src={cover} alt={title} borderRadius="lg" />
                        <Stack
                            mt="2"
                            spacing="3"
                            paddingLeft={'3'}
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
