import { Box, Center, Heading, Image, Stack, Text } from '@chakra-ui/react'

interface IStyledCard {
    title: string
    image?: string
    artistName?: string
}

export default function StyledCard({
    title,
    image,
    artistName,
    ...props
}: IStyledCard) {
    return (
        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'200px'}
                w={'full'}
                bg={'black'}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                _hover={{
                    transition: 'all .15s ease',
                    backgroundColor: '#171717',
                }}
            >
                <Box rounded={'lg'} pos={'relative'} height={'130px'}>
                    {image ? (
                        <Image
                            rounded={'lg'}
                            height={200}
                            width={200}
                            objectFit={'cover'}
                            src={image}
                        />
                    ) : (
                        <Image
                            rounded={'lg'}
                            objectFit={'cover'}
                            src="gibbresh.png"
                            fallbackSrc="https://via.placeholder.com/200"
                        />
                    )}
                </Box>
                <Stack pt={10}>
                    <Heading
                        fontSize={'xl'}
                        fontFamily={'body'}
                        fontWeight={700}
                    >
                        <Text color={'white'}>{title}</Text>
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        <Text
                            color={'#525252'}
                            fontWeight={500}
                            fontSize={'md'}
                        >
                            {artistName}
                        </Text>
                    </Stack>
                </Stack>
            </Box>
        </Center>
    )
}
