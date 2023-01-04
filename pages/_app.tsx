import { ChakraProvider } from '@chakra-ui/react'
import { Figtree } from '@next/font/google'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import ConfiguredApolloProvider from '../src/providers/apollo.provider'
import AuthProvider from '../src/providers/auth.provider'
import '../styles/globals.css'
import theme from '../styles/theme'

const figtree = Figtree({
    weight: '400',
    subsets: ['latin'],
})

export default function App({ Component, pageProps }: AppProps) {
    const DynamicProvider = dynamic(
        () => import('../src/providers/player.provider'),
        {
            ssr: false,
        }
    )

    return (
        <>
            <AuthProvider>
                <ConfiguredApolloProvider>
                    <DynamicProvider>
                        <ChakraProvider theme={theme}>
                            <Head>
                                <link rel="shortcut icon" href="/favicon.ico" />
                                <title>Supernova</title>
                            </Head>
                            <main className={figtree.className}>
                                <Component {...pageProps} />
                            </main>
                        </ChakraProvider>
                    </DynamicProvider>
                </ConfiguredApolloProvider>
            </AuthProvider>
        </>
    )
}
