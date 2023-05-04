import { Box, Flex, Image } from '@chakra-ui/react'
import Signin from '../src/components/Authentication/Login'
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
                    <Signin />
                </Flex>
            </Box>
            <HomeCarousel />
        </>
    )
}
