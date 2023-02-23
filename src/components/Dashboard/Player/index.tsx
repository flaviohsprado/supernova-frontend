import { Box, Flex, Stack } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { PlayerContext } from '../../../contexts/player.context'
import { IMusicBasicProps } from '../../../interfaces/music.interface'
import PlayerControls from './Controls'
import PlayerInformation from './Information'
import MusicProgress from './MusicProgress'
import SoundControls from './SoundControls'

export default function Player() {
    const { musics } = useContext(PlayerContext)
    const [currentMusic, setCurrentMusic] = useState({} as IMusicBasicProps)

    useEffect(() => {
        if (!musics) return

        setCurrentMusic(musics[0])
    }, [musics])

    return (
        <Box backgroundColor={'black'} padding={'5'}>
            <Flex justifyContent={'space-around'}>
                <Box width={'33%'}>
                    <PlayerInformation
                        title={currentMusic.title}
                        artist={currentMusic.artist}
                        cover={String(currentMusic.cover)}
                    />
                </Box>
                <Stack spacing={12} width={'33%'} justifyContent={'center'}>
                    <PlayerControls />
                    <MusicProgress />
                </Stack>
                <Box width={'33%'}>
                    <SoundControls />
                </Box>
            </Flex>
        </Box>
    )
}
