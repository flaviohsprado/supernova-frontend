import { Box, Button, Flex, Image } from '@chakra-ui/react'
import Link from 'next/link'
import HomeCarousel from '../src/components/LandingPage/Carousel'

export default function Home() {
    return (
        <>
            <Box w="full" minH={'8vh'} bgColor={'black'}>
                <Flex padding={5} justifyContent={'space-between'}>
                    <Image
                        src={'/images/logo.png'}
                        width={'45px'}
                        height={'45px'}
                    />
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
