import { Box, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import HomeCarousel from '../src/components/LandingPage/Carousel'

export default function Home() {
    return (
        <>
            <Box position="relative" w="full" minH={'8.7vh'} bgColor={'black'}>
                <Flex padding={'8px'} justifyContent={'end'}>
                    <Button
                        borderRadius={'20px'}
                        bgColor={'#1DB954'}
                        color={'white'}
                        _hover={{
                            bg: '#147a38',
                        }}
                    >
                        <Link href={'/authentication/login'}>Login</Link>
                    </Button>
                </Flex>
            </Box>
            <HomeCarousel />
        </>
    )
}
