import { Card, CardBody } from '@chakra-ui/card'
import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'

interface IStyledHorizontalCardProps {
    title: string
    image?: string
    additionalInfo?: string
}

export default function StyledHorizontalCard({
    title,
    image,
    additionalInfo,
}: IStyledHorizontalCardProps) {
    const defaultImage =
        'https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'

    return (
        <Box padding={2}>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow="hidden"
                variant="outline"
                backgroundColor={'#454545'}
                borderRadius={'5px'}
                minWidth={'20vw'}
                cursor={'pointer'}
            >
                <Image
                    objectFit="cover"
                    maxW={{ base: '100%', sm: '100px' }}
                    maxH={{ base: '100px', sm: '100%' }}
                    src={defaultImage}
                />
                <Stack>
                    <CardBody padding={2}>
                        <Heading size="sm" color={'white'}>
                            {title}
                        </Heading>

                        <Text py="2" color={'#919191'}>
                            {additionalInfo}
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </Box>
    )
}
