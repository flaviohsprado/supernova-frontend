import { ApolloProvider } from '@apollo/client'
import { ChakraProvider, extendTheme, GlobalStyle } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { client } from '../src/graphql/client'
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
            <ApolloProvider client={client}>
                <ChakraProvider theme={theme}>
                    <Component {...pageProps} />
                </ChakraProvider>
            </ApolloProvider>
        </>
    )
}
