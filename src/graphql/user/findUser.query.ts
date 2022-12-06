import { gql } from "@apollo/client";
import { getApolloClient } from "../../utils/getApolloClient.utils";

export const findUserQuery = async () => {    
    const client = getApolloClient()

    const { data } = await client.query({
        query: gql `
            query FindUser {
                findUser {
                    id
                    username
                    file {
                        url
                    }
                }
            }
        `
    })

    return data
}