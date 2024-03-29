import {
    Box,
    Container,
    Heading,
    IconButton,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

export default function HomeCarousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState<Slider | null>(null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    const cards = [
        {
            title: 'Why Choose Supernova? ',
            text: "because it's totally free, this is a project just for personal portfolio, so there's no charge for you to listen to your little song!",
            image: '/images/slider1.png',
        },
        {
            title: 'Music Free?',
            text: 'Exactly! You can upload your local songs to listen or just type the name of the song because we can download them from external sites (TubeYou)',
            image: '/images/slider2.png',
        },
        {
            title: 'Spofity?',
            text: "Any semblance of Spofity is just a coincidence, this is a project just for personal portfolio, so there's no charge for you to listen to your little song!",
            image: '/images/slider3.jpg',
        },
    ]

    // Settings for the slider
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    }

    return (
        <Box
            position={'relative'}
            height={'600px'}
            width={'full'}
            overflow={'hidden'}
        >
            {/* CSS files for react-slick */}
            <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />
            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
            >
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}
            >
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'6xl'}
                        position="relative"
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        opacity={'0.8'}
                        backgroundImage={`url(${card.image})`}
                    >
                        {/* This is the block you need to change, to customize the caption */}
                        <Container
                            size="container.lg"
                            height="600px"
                            position="relative"
                        >
                            <Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="50%"
                                transform="translate(0, -50%)"
                            >
                                <Heading
                                    color={'white'}
                                    fontSize={{
                                        base: '3xl',
                                        md: '4xl',
                                        lg: '5xl',
                                    }}
                                >
                                    {card.title}
                                </Heading>
                                <Text
                                    fontSize={{ base: 'md', lg: 'lg' }}
                                    color="white"
                                >
                                    {card.text}
                                </Text>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}
