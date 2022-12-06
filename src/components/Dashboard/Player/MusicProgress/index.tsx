import {
    Box,
    Flex,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
} from '@chakra-ui/react'

interface IMusicProgress {
    duration: number
    currentTime: number
    setCurrentTime: (value: number) => void
}

export default function MusicProgress({
    duration,
    currentTime,
    setCurrentTime,
}: IMusicProgress) {
    return (
        <Box width={'300px'}>
            <Flex justifyContent={'space-between'}>
                <Slider
                    aria-label="slider-ex-4"
                    defaultValue={0}
                    max={duration}
                    onChange={(value) => setCurrentTime(value)}
                >
                    <SliderTrack bg={'white'}>
                        <SliderFilledTrack bg={'#1DB954'} />
                    </SliderTrack>
                    <SliderThumb boxSize={3} />
                </Slider>
            </Flex>
        </Box>
    )
}
