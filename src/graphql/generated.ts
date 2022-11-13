import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Album = {
  __typename?: 'Album';
  artistId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  releaseDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AlbumPresenter = {
  __typename?: 'AlbumPresenter';
  createdAt: Scalars['DateTime'];
  duration?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  numberOfSongs?: Maybe<Scalars['Float']>;
  releaseDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Artist = {
  __typename?: 'Artist';
  albums: Array<Album>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  monthlyListeners: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type ArtistPresenter = {
  __typename?: 'ArtistPresenter';
  albums: Array<Album>;
  createdAt: Scalars['DateTime'];
  id: Scalars['String'];
  monthlyListeners: Scalars['Float'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AuthDto = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AuthPresenter = {
  __typename?: 'AuthPresenter';
  accessToken: Scalars['String'];
};

export type CreateAlbumDto = {
  artistId: Scalars['String'];
  releaseDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type CreateArtistDto = {
  name: Scalars['String'];
};

export type CreateUserDto = {
  email?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: AlbumPresenter;
  createArtist: ArtistPresenter;
  createUser: UserPresenter;
  deleteAlbum: Album;
  deleteArtist: Artist;
  deleteUser: User;
  login: AuthPresenter;
  updateAlbum: Album;
  updateArtist: Artist;
  updateUser: User;
};


export type MutationCreateAlbumArgs = {
  album: CreateAlbumDto;
};


export type MutationCreateArtistArgs = {
  artist: CreateArtistDto;
};


export type MutationCreateUserArgs = {
  user: CreateUserDto;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['String'];
};


export type MutationDeleteArtistArgs = {
  id: Scalars['String'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  authCredentials: AuthDto;
};


export type MutationUpdateAlbumArgs = {
  album: UpdateAlbumDto;
  id: Scalars['String'];
};


export type MutationUpdateArtistArgs = {
  artist: UpdateArtistDto;
  id: Scalars['String'];
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  user: UpdateUserDto;
};

export type Query = {
  __typename?: 'Query';
  findAllAlbum: Array<Album>;
  findAllArtist: Array<Artist>;
  findAllUser: Array<User>;
  findOneAlbum: Album;
  findOneArtist: Artist;
  findOneUser: User;
};


export type QueryFindOneAlbumArgs = {
  id: Scalars['String'];
};


export type QueryFindOneArtistArgs = {
  id: Scalars['String'];
};


export type QueryFindOneUserArgs = {
  id: Scalars['String'];
};

export type UpdateAlbumDto = {
  title: Scalars['String'];
};

export type UpdateArtistDto = {
  name: Scalars['String'];
};

export type UpdateUserDto = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserPresenter = {
  __typename?: 'UserPresenter';
  accessToken: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type CreateAlbumMutationVariables = Exact<{
  artistId: Scalars['String'];
  title: Scalars['String'];
  releaseDate: Scalars['DateTime'];
}>;


export type CreateAlbumMutation = { __typename?: 'Mutation', createAlbum: { __typename?: 'AlbumPresenter', id: string, title: string, numberOfSongs?: number | null, duration?: number | null, releaseDate?: any | null, createdAt: any, updatedAt: any } };

export type DeleteAlbumMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteAlbumMutation = { __typename?: 'Mutation', deleteAlbum: { __typename?: 'Album', title: string } };

export type FindAllAlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllAlbumsQuery = { __typename?: 'Query', findAllAlbum: Array<{ __typename?: 'Album', id: string, artistId: string, title: string, releaseDate?: any | null, createdAt: any, updatedAt: any }> };

export type FindOneAlbumQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindOneAlbumQuery = { __typename?: 'Query', findOneAlbum: { __typename?: 'Album', id: string, artistId: string, title: string, releaseDate?: any | null } };

export type UpdateAlbumMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
}>;


export type UpdateAlbumMutation = { __typename?: 'Mutation', updateAlbum: { __typename?: 'Album', title: string, releaseDate?: any | null } };

export type CreateArtistMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateArtistMutation = { __typename?: 'Mutation', createArtist: { __typename?: 'ArtistPresenter', id: string, name: string, createdAt: any } };

export type DeleteArtistMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteArtistMutation = { __typename?: 'Mutation', deleteArtist: { __typename?: 'Artist', name: string } };

export type FindAllArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllArtistsQuery = { __typename?: 'Query', findAllArtist: Array<{ __typename?: 'Artist', id: string, name: string, monthlyListeners: number, createdAt: any, updatedAt: any }> };

export type FindOneArtistQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindOneArtistQuery = { __typename?: 'Query', findOneArtist: { __typename?: 'Artist', name: string } };

export type UpdateArtistMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateArtistMutation = { __typename?: 'Mutation', updateArtist: { __typename?: 'Artist', name: string } };

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPresenter', accessToken: string } };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserPresenter', id: string, username: string, accessToken: string } };

export type DeleteMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', username: string } };

export type FindAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUserQuery = { __typename?: 'Query', findAllUser: Array<{ __typename?: 'User', id: string, username: string, email: string }> };

export type FindOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindOneQuery = { __typename?: 'Query', findOneUser: { __typename?: 'User', username: string } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username: string, email: string } };


export const CreateAlbumDocument = gql`
    mutation CreateAlbum($artistId: String!, $title: String!, $releaseDate: DateTime!) {
  createAlbum(
    album: {artistId: $artistId, title: $title, releaseDate: $releaseDate}
  ) {
    id
    title
    numberOfSongs
    duration
    releaseDate
    createdAt
    updatedAt
  }
}
    `;
export type CreateAlbumMutationFn = Apollo.MutationFunction<CreateAlbumMutation, CreateAlbumMutationVariables>;

/**
 * __useCreateAlbumMutation__
 *
 * To run a mutation, you first call `useCreateAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAlbumMutation, { data, loading, error }] = useCreateAlbumMutation({
 *   variables: {
 *      artistId: // value for 'artistId'
 *      title: // value for 'title'
 *      releaseDate: // value for 'releaseDate'
 *   },
 * });
 */
export function useCreateAlbumMutation(baseOptions?: Apollo.MutationHookOptions<CreateAlbumMutation, CreateAlbumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAlbumMutation, CreateAlbumMutationVariables>(CreateAlbumDocument, options);
      }
export type CreateAlbumMutationHookResult = ReturnType<typeof useCreateAlbumMutation>;
export type CreateAlbumMutationResult = Apollo.MutationResult<CreateAlbumMutation>;
export type CreateAlbumMutationOptions = Apollo.BaseMutationOptions<CreateAlbumMutation, CreateAlbumMutationVariables>;
export const DeleteAlbumDocument = gql`
    mutation DeleteAlbum($id: String!) {
  deleteAlbum(id: $id) {
    title
  }
}
    `;
export type DeleteAlbumMutationFn = Apollo.MutationFunction<DeleteAlbumMutation, DeleteAlbumMutationVariables>;

/**
 * __useDeleteAlbumMutation__
 *
 * To run a mutation, you first call `useDeleteAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAlbumMutation, { data, loading, error }] = useDeleteAlbumMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAlbumMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAlbumMutation, DeleteAlbumMutationVariables>(DeleteAlbumDocument, options);
      }
export type DeleteAlbumMutationHookResult = ReturnType<typeof useDeleteAlbumMutation>;
export type DeleteAlbumMutationResult = Apollo.MutationResult<DeleteAlbumMutation>;
export type DeleteAlbumMutationOptions = Apollo.BaseMutationOptions<DeleteAlbumMutation, DeleteAlbumMutationVariables>;
export const FindAllAlbumsDocument = gql`
    query FindAllAlbums {
  findAllAlbum {
    id
    artistId
    title
    releaseDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useFindAllAlbumsQuery__
 *
 * To run a query within a React component, call `useFindAllAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllAlbumsQuery, FindAllAlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllAlbumsQuery, FindAllAlbumsQueryVariables>(FindAllAlbumsDocument, options);
      }
export function useFindAllAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllAlbumsQuery, FindAllAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllAlbumsQuery, FindAllAlbumsQueryVariables>(FindAllAlbumsDocument, options);
        }
export type FindAllAlbumsQueryHookResult = ReturnType<typeof useFindAllAlbumsQuery>;
export type FindAllAlbumsLazyQueryHookResult = ReturnType<typeof useFindAllAlbumsLazyQuery>;
export type FindAllAlbumsQueryResult = Apollo.QueryResult<FindAllAlbumsQuery, FindAllAlbumsQueryVariables>;
export const FindOneAlbumDocument = gql`
    query FindOneAlbum($id: String!) {
  findOneAlbum(id: $id) {
    id
    artistId
    title
    releaseDate
  }
}
    `;

/**
 * __useFindOneAlbumQuery__
 *
 * To run a query within a React component, call `useFindOneAlbumQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneAlbumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneAlbumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneAlbumQuery(baseOptions: Apollo.QueryHookOptions<FindOneAlbumQuery, FindOneAlbumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneAlbumQuery, FindOneAlbumQueryVariables>(FindOneAlbumDocument, options);
      }
export function useFindOneAlbumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneAlbumQuery, FindOneAlbumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneAlbumQuery, FindOneAlbumQueryVariables>(FindOneAlbumDocument, options);
        }
export type FindOneAlbumQueryHookResult = ReturnType<typeof useFindOneAlbumQuery>;
export type FindOneAlbumLazyQueryHookResult = ReturnType<typeof useFindOneAlbumLazyQuery>;
export type FindOneAlbumQueryResult = Apollo.QueryResult<FindOneAlbumQuery, FindOneAlbumQueryVariables>;
export const UpdateAlbumDocument = gql`
    mutation UpdateAlbum($id: String!, $title: String!) {
  updateAlbum(id: $id, album: {title: $title}) {
    title
    releaseDate
  }
}
    `;
export type UpdateAlbumMutationFn = Apollo.MutationFunction<UpdateAlbumMutation, UpdateAlbumMutationVariables>;

/**
 * __useUpdateAlbumMutation__
 *
 * To run a mutation, you first call `useUpdateAlbumMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAlbumMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAlbumMutation, { data, loading, error }] = useUpdateAlbumMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useUpdateAlbumMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAlbumMutation, UpdateAlbumMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAlbumMutation, UpdateAlbumMutationVariables>(UpdateAlbumDocument, options);
      }
export type UpdateAlbumMutationHookResult = ReturnType<typeof useUpdateAlbumMutation>;
export type UpdateAlbumMutationResult = Apollo.MutationResult<UpdateAlbumMutation>;
export type UpdateAlbumMutationOptions = Apollo.BaseMutationOptions<UpdateAlbumMutation, UpdateAlbumMutationVariables>;
export const CreateArtistDocument = gql`
    mutation CreateArtist($name: String!) {
  createArtist(artist: {name: $name}) {
    id
    name
    createdAt
  }
}
    `;
export type CreateArtistMutationFn = Apollo.MutationFunction<CreateArtistMutation, CreateArtistMutationVariables>;

/**
 * __useCreateArtistMutation__
 *
 * To run a mutation, you first call `useCreateArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArtistMutation, { data, loading, error }] = useCreateArtistMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateArtistMutation(baseOptions?: Apollo.MutationHookOptions<CreateArtistMutation, CreateArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateArtistMutation, CreateArtistMutationVariables>(CreateArtistDocument, options);
      }
export type CreateArtistMutationHookResult = ReturnType<typeof useCreateArtistMutation>;
export type CreateArtistMutationResult = Apollo.MutationResult<CreateArtistMutation>;
export type CreateArtistMutationOptions = Apollo.BaseMutationOptions<CreateArtistMutation, CreateArtistMutationVariables>;
export const DeleteArtistDocument = gql`
    mutation DeleteArtist($id: String!) {
  deleteArtist(id: $id) {
    name
  }
}
    `;
export type DeleteArtistMutationFn = Apollo.MutationFunction<DeleteArtistMutation, DeleteArtistMutationVariables>;

/**
 * __useDeleteArtistMutation__
 *
 * To run a mutation, you first call `useDeleteArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteArtistMutation, { data, loading, error }] = useDeleteArtistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteArtistMutation(baseOptions?: Apollo.MutationHookOptions<DeleteArtistMutation, DeleteArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteArtistMutation, DeleteArtistMutationVariables>(DeleteArtistDocument, options);
      }
export type DeleteArtistMutationHookResult = ReturnType<typeof useDeleteArtistMutation>;
export type DeleteArtistMutationResult = Apollo.MutationResult<DeleteArtistMutation>;
export type DeleteArtistMutationOptions = Apollo.BaseMutationOptions<DeleteArtistMutation, DeleteArtistMutationVariables>;
export const FindAllArtistsDocument = gql`
    query FindAllArtists {
  findAllArtist {
    id
    name
    monthlyListeners
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useFindAllArtistsQuery__
 *
 * To run a query within a React component, call `useFindAllArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllArtistsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllArtistsQuery, FindAllArtistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllArtistsQuery, FindAllArtistsQueryVariables>(FindAllArtistsDocument, options);
      }
export function useFindAllArtistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllArtistsQuery, FindAllArtistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllArtistsQuery, FindAllArtistsQueryVariables>(FindAllArtistsDocument, options);
        }
export type FindAllArtistsQueryHookResult = ReturnType<typeof useFindAllArtistsQuery>;
export type FindAllArtistsLazyQueryHookResult = ReturnType<typeof useFindAllArtistsLazyQuery>;
export type FindAllArtistsQueryResult = Apollo.QueryResult<FindAllArtistsQuery, FindAllArtistsQueryVariables>;
export const FindOneArtistDocument = gql`
    query FindOneArtist($id: String!) {
  findOneArtist(id: $id) {
    name
  }
}
    `;

/**
 * __useFindOneArtistQuery__
 *
 * To run a query within a React component, call `useFindOneArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneArtistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneArtistQuery(baseOptions: Apollo.QueryHookOptions<FindOneArtistQuery, FindOneArtistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneArtistQuery, FindOneArtistQueryVariables>(FindOneArtistDocument, options);
      }
export function useFindOneArtistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneArtistQuery, FindOneArtistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneArtistQuery, FindOneArtistQueryVariables>(FindOneArtistDocument, options);
        }
export type FindOneArtistQueryHookResult = ReturnType<typeof useFindOneArtistQuery>;
export type FindOneArtistLazyQueryHookResult = ReturnType<typeof useFindOneArtistLazyQuery>;
export type FindOneArtistQueryResult = Apollo.QueryResult<FindOneArtistQuery, FindOneArtistQueryVariables>;
export const UpdateArtistDocument = gql`
    mutation UpdateArtist($id: String!, $name: String!) {
  updateArtist(id: $id, artist: {name: $name}) {
    name
  }
}
    `;
export type UpdateArtistMutationFn = Apollo.MutationFunction<UpdateArtistMutation, UpdateArtistMutationVariables>;

/**
 * __useUpdateArtistMutation__
 *
 * To run a mutation, you first call `useUpdateArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateArtistMutation, { data, loading, error }] = useUpdateArtistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateArtistMutation(baseOptions?: Apollo.MutationHookOptions<UpdateArtistMutation, UpdateArtistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateArtistMutation, UpdateArtistMutationVariables>(UpdateArtistDocument, options);
      }
export type UpdateArtistMutationHookResult = ReturnType<typeof useUpdateArtistMutation>;
export type UpdateArtistMutationResult = Apollo.MutationResult<UpdateArtistMutation>;
export type UpdateArtistMutationOptions = Apollo.BaseMutationOptions<UpdateArtistMutation, UpdateArtistMutationVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(authCredentials: {username: $username, password: $password}) {
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $password: String!, $email: String) {
  createUser(user: {username: $username, password: $password, email: $email}) {
    id
    username
    accessToken
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteDocument = gql`
    mutation Delete($id: String!) {
  deleteUser(id: $id) {
    username
  }
}
    `;
export type DeleteMutationFn = Apollo.MutationFunction<DeleteMutation, DeleteMutationVariables>;

/**
 * __useDeleteMutation__
 *
 * To run a mutation, you first call `useDeleteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMutation, { data, loading, error }] = useDeleteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMutation, DeleteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMutation, DeleteMutationVariables>(DeleteDocument, options);
      }
export type DeleteMutationHookResult = ReturnType<typeof useDeleteMutation>;
export type DeleteMutationResult = Apollo.MutationResult<DeleteMutation>;
export type DeleteMutationOptions = Apollo.BaseMutationOptions<DeleteMutation, DeleteMutationVariables>;
export const FindAllUserDocument = gql`
    query FindAllUser {
  findAllUser {
    id
    username
    email
  }
}
    `;

/**
 * __useFindAllUserQuery__
 *
 * To run a query within a React component, call `useFindAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllUserQuery(baseOptions?: Apollo.QueryHookOptions<FindAllUserQuery, FindAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllUserQuery, FindAllUserQueryVariables>(FindAllUserDocument, options);
      }
export function useFindAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllUserQuery, FindAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllUserQuery, FindAllUserQueryVariables>(FindAllUserDocument, options);
        }
export type FindAllUserQueryHookResult = ReturnType<typeof useFindAllUserQuery>;
export type FindAllUserLazyQueryHookResult = ReturnType<typeof useFindAllUserLazyQuery>;
export type FindAllUserQueryResult = Apollo.QueryResult<FindAllUserQuery, FindAllUserQueryVariables>;
export const FindOneDocument = gql`
    query FindOne($id: String!) {
  findOneUser(id: $id) {
    username
  }
}
    `;

/**
 * __useFindOneQuery__
 *
 * To run a query within a React component, call `useFindOneQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneQuery(baseOptions: Apollo.QueryHookOptions<FindOneQuery, FindOneQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneQuery, FindOneQueryVariables>(FindOneDocument, options);
      }
export function useFindOneLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneQuery, FindOneQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneQuery, FindOneQueryVariables>(FindOneDocument, options);
        }
export type FindOneQueryHookResult = ReturnType<typeof useFindOneQuery>;
export type FindOneLazyQueryHookResult = ReturnType<typeof useFindOneLazyQuery>;
export type FindOneQueryResult = Apollo.QueryResult<FindOneQuery, FindOneQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: String!, $username: String, $password: String, $email: String) {
  updateUser(
    id: $id
    user: {username: $username, password: $password, email: $email}
  ) {
    id
    username
    email
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;