import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { createContext } from "react";

interface IApolloContextProps {
    createApolloClient: () => ApolloClient<NormalizedCacheObject>
}

export const ApolloContext = createContext<IApolloContextProps>({} as IApolloContextProps);