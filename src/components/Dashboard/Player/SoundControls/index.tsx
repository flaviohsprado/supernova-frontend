import {
    Box,
    Flex,
    IconButton,
    Slider,
    SliderFilledTrack,
    SliderThumb,
    SliderTrack,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { BsSoundwave } from 'react-icons/bs'
import {
    ImVolumeHigh,
    ImVolumeLow,
    ImVolumeMedium,
    ImVolumeMute,
    ImVolumeMute2,
} from 'react-icons/im'
import { PlayerContext } from '../../../../contexts/player.context'

export default function SoundControls() {
    const { state, handleVolumeChange } = useContext(PlayerContext)

    const returnIconSound = () => {
        if (state.muted) return <ImVolumeMute2 color={'white'} />

        if (state.volume === 0) {
            return <ImVolumeMute color={'white'} />
        } else if (Number(state.volume) <= 0.3) {
            return <ImVolumeLow color={'white'} />
        } else if (Number(state.volume) > 0.3 && Number(state.volume) <= 0.6) {
            return <ImVolumeMedium color={'white'} />
        } else if (Number(state.volume) > 0.6) {
            return <ImVolumeHigh color={'white'} />
        } else {
            return <ImVolumeMute color={'white'} />
        }
    }

    return (
        <Box width={'300px'}>
            <Flex justifyContent={'space-between'}>
                <IconButton
                    aria-label={'mute/with sound'}
                    icon={returnIconSound()}
                    background={'none'}
                    borderRadius={'50%'}
                    _hover={{ background: '#303030' }}
                />
                <Slider
                    value={state.volume}
                    onChange={(value) => handleVolumeChange(value)}
                    aria-label="volume"
                    defaultValue={0.3}
                    min={0}
                    max={1}
                    step={0.01}
                >
                    <SliderTrack bg={'green.200'}>
                        <SliderFilledTrack bg={'#1DB954'} />
                    </SliderTrack>
                    <SliderThumb boxSize={5}>
                        <Box color={'black'} as={BsSoundwave} />
                    </SliderThumb>
                </Slider>
            </Flex>
        </Box>
    )
}
