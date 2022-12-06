import { Box } from '@chakra-ui/react'
import { useContext } from 'react'
import ReactPlayer from 'react-player'
import { PlayerContext } from '../../../contexts/player.context'

export default function Player() {
    const { state, handleDuration, handlePlay, handlePause, handleProgress } =
        useContext(PlayerContext)

    return (
        <Box>
            <ReactPlayer
                width="300px"
                height="20px"
                url={String(state.url)}
                playing={state.playing}
                loop={state.loop}
                volume={state.volume}
                muted={state.muted}
                onReady={() => console.log('onReady')}
                onStart={() => console.log('onStart')}
                onPlay={handlePlay}
                onPause={handlePause}
                onSeek={(e) => console.log('onSeek', e)}
                onError={(e) => console.log('onError', e)}
                onProgress={handleProgress}
                onDuration={handleDuration}
            />
        </Box>
    )
}
