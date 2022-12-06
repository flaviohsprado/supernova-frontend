import { gql } from "@apollo/client";
import { useContext } from "react";
import { ApolloContext } from "../../contexts/apollo.context";

interface ICredentials {
    email: string;
    password: string
}

export const useLoginAux = () => {
    const handleSubmitLogin = async ({ email, password }: ICredentials) => {
        const auth = useContext(ApolloContext)

        const client = auth.createApolloClient()

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

        return data?.login?.accessToken
    }

    return { handleSubmitLogin }
}