import { gql } from "@apollo/client";
import { getApolloClient } from "../../utils/getApolloClient.utils";

interface ICredentials {
    email: string;
    password: string
}

export const loginMutation = async ({ email, password }: ICredentials) => {
    const client = getApolloClient()

    const { data } = await client.mutate({
        mutation: gql `
            mutation Login($email: String!, $password: String!) {
                login(authCredentials: {
                    email: $email
                    password: $password
                }) {
                    accessToken
                }
            }
        `,
        variables: {
            email,
            password
        }
    })

    return data
}