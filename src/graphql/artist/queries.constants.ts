import { gql } from "@apollo/client";

export const FIND_ALL_ARTISTS = gql`
    query FindAllArtists { 
        findAllArtist { 
            id, 
            name, 
            monthlyListeners 
        }
    }`;
