import {
    Box,
    Flex,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { PlayerContext } from '../../../../contexts/player.context'

export default function MusicProgress() {
    const { musicProgress, duration, handleSlide, handleSlideToEnd } =
        useContext(PlayerContext)
    return (
        <Box width={'auto'}>
            <Flex justifyContent={'space-between'}>
                <Slider
                    aria-label="progress"
                    step={1}
                    min={0}
                    value={musicProgress}
                    max={duration ? duration : 0}
                    onChange={(value) => handleSlide(value)}
                    onMouseUp={handleSlideToEnd}
                    onKeyUp={handleSlideToEnd}
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
