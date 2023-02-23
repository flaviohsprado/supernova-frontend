import { Card, CardBody } from '@chakra-ui/card'
import {
    Badge,
    Box,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import StyledPlayButton from '../../global/StyledPlayButton'

interface ISearchCardProps {
    id: string
    cover: string
    title: string
    artist: string
    type: string
}

export default function SearchCard({
    id,
    cover,
    title,
    artist,
    type,
}: ISearchCardProps) {
    return (
        <Card
            margin={'10px'}
            borderRadius={'5px'}
            key={id}
            direction={{ base: 'column', sm: 'row' }}
            variant="outline"
            backgroundColor={useColorModeValue('#2b2b2b', '#8a8a8a')}
            maxWidth={'350px'}
            minWidth={'350px'}
            maxHeight={'250px'}
            minHeight={'175px'}
            role={'group'}
            _hover={{
                backgroundColor: '#3d3d3d',
                transform: 'scale(1.05)',
                transition: 'all 0.2s',
            }}
        >
            <Stack justifyContent={'space-between'} width={'100%'}>
                <Image
                    borderRadius={'10px'}
                    padding={'5px'}
                    objectFit={'fill'}
                    maxW={{ base: '100%', sm: '150px' }}
                    maxH={{ base: '100%', sm: '150px' }}
                    src={cover}
                    alt={title}
                />
                <CardBody padding={2}>
                    <Flex justifyContent={'space-between'}>
                        <Box paddingLeft={'1'}>
                            <Heading
                                size={'md'}
                                flexWrap={'wrap'}
                                color={'white'}
                            >
                                {title}
                            </Heading>

                            <Text fontSize={'sm'} py={'2'} color={'#c2c2c2'}>
                                {artist}
                            </Text>

                            <Badge
                                colorScheme={'whiteAlpha'}
                                borderRadius={'25px'}
                                padding={'2px 7px'}
                                fontSize={'0.6em'}
                            >
                                {type}
                            </Badge>
                        </Box>
                        <Box
                            _groupHover={{
                                display: 'flex',
                            }}
                            display={'none'}
                            transition={'all 0.5s'}
                            paddingLeft={'39'}
                        >
                            <StyledPlayButton
                                music={{
                                    id,
                                    title,
                                    duration: 0,
                                    url: '',
                                }}
                            />
                        </Box>
                    </Flex>
                </CardBody>
            </Stack>
        </Card>
    )
}
