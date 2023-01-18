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
    const { volume, handleChangeVolume } = useContext(PlayerContext)

    const returnIconSound = () => {
        if (volume === 0) return <ImVolumeMute2 color={'white'} />

        if (volume === 0) {
            return <ImVolumeMute color={'white'} />
        } else if (Number(volume) <= 0.3) {
            return <ImVolumeLow color={'white'} />
        } else if (Number(volume) > 0.3 && Number(volume) <= 0.6) {
            return <ImVolumeMedium color={'white'} />
        } else if (Number(volume) > 0.6) {
            return <ImVolumeHigh color={'white'} />
        } else {
            return <ImVolumeMute color={'white'} />
        }
    }

    return (
        <Box maxW={'20em'} marginLeft={'12em'}>
            <Flex justifyContent={'space-between'}>
                <IconButton
                    aria-label={'mute/with sound'}
                    icon={returnIconSound()}
                    background={'none'}
                    borderRadius={'50%'}
                    _hover={{ background: '#303030' }}
                />
                <Slider
                    aria-label="volume"
                    value={volume}
                    onChange={(value) => handleChangeVolume(value)}
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
