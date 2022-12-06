import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { createUploadLink } from 'apollo-upload-client'
import { parseCookies } from 'nookies'
import { ApolloContext } from '../contexts/apollo.context'

export default function ConfiguredApolloProvider({ children }: any) {
    function createApolloClient() {
        const { 'nextauth.token': accessToken } = parseCookies()

        const link = createUploadLink({
            uri: 'http://localhost:3010/graphql',
            headers: {
                authorization: `Bearer ${accessToken}`,
            },
        })

        return new ApolloClient({
            link,
            cache: new InMemoryCache(),
        })
    }

    return (
        <ApolloContext.Provider value={{ createApolloClient }}>
            <ApolloProvider client={createApolloClient()}>
                {children}
            </ApolloProvider>
        </ApolloContext.Provider>
    )
}
