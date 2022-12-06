import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';
import { parseCookies } from 'nookies';

export const getApolloClient = () => {
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
};