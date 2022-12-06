import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import ConfiguredApolloProvider from '../src/providers/apollo.provider'
import AuthProvider from '../src/providers/auth.provider'
import PlayerProvider from '../src/providers/player.provider'
import '../styles/globals.css'

const colors = {
    brand: {
        900: '#1a365d',
        800: '#153e75',
        700: '#2a69ac',
    },
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <AuthProvider>
                <ConfiguredApolloProvider>
                    <PlayerProvider>
                        <ChakraProvider theme={theme}>
                            <Component {...pageProps} />
                        </ChakraProvider>
                    </PlayerProvider>
                </ConfiguredApolloProvider>
            </AuthProvider>
        </>
    )
}
