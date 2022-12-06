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
  Upload: any;
};

export type Album = {
  __typename?: 'Album';
  artistId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  file?: Maybe<File>;
  id: Scalars['String'];
  musics: Array<Music>;
  releaseDate?: Maybe<Scalars['DateTime']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type AlbumPresenter = {
  __typename?: 'AlbumPresenter';
  artist?: Maybe<Artist>;
  createdAt: Scalars['DateTime'];
  duration?: Maybe<Scalars['Float']>;
  file?: Maybe<File>;
  id: Scalars['String'];
  musics?: Maybe<Array<Music>>;
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
  monthlyListeners?: Maybe<Scalars['Float']>;
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
  email: Scalars['String'];
  password: Scalars['String'];
};

export type AuthPresenter = {
  __typename?: 'AuthPresenter';
  accessToken: Scalars['String'];
};

export type CreateAlbumDto = {
  artistId: Scalars['String'];
  file?: InputMaybe<CreateFileDto>;
  id?: InputMaybe<Scalars['String']>;
  releaseDate: Scalars['DateTime'];
  title: Scalars['String'];
};

export type CreateArtistDto = {
  name: Scalars['String'];
};

export type CreateFileDto = {
  buffer: Scalars['Upload'];
  encoding?: InputMaybe<Scalars['String']>;
  fieldname?: InputMaybe<Scalars['String']>;
  key?: InputMaybe<Scalars['String']>;
  mimetype?: InputMaybe<Scalars['String']>;
  originalname?: InputMaybe<Scalars['String']>;
  ownerId?: InputMaybe<Scalars['String']>;
  ownerType?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export type CreateMusicDto = {
  albumId: Scalars['String'];
  duration?: InputMaybe<Scalars['Float']>;
  file?: InputMaybe<CreateFileDto>;
  id?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
};

export type CreatePlaylistDto = {
  isPublic: Scalars['Boolean'];
  title: Scalars['String'];
  userId: Scalars['String'];
};

export type CreateUserDto = {
  email?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<CreateFileDto>;
  id?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
  username: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  buffer: Scalars['Upload'];
  id: Scalars['String'];
  key: Scalars['String'];
  originalname: Scalars['String'];
  ownerId?: Maybe<Scalars['String']>;
  ownerType?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type Music = {
  __typename?: 'Music';
  albumId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  duration?: Maybe<Scalars['Float']>;
  file?: Maybe<File>;
  id: Scalars['String'];
  playlistId: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type MusicPresenter = {
  __typename?: 'MusicPresenter';
  album: Album;
  createdAt: Scalars['DateTime'];
  duration: Scalars['Float'];
  file: File;
  id: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAlbum: AlbumPresenter;
  createArtist: ArtistPresenter;
  createMusic: MusicPresenter;
  createPlaylist: PlaylistPresenter;
  createUser: UserPresenter;
  deleteAlbum: AlbumPresenter;
  deleteArtist: Artist;
  deleteMusic: MusicPresenter;
  deletePlaylist: PlaylistPresenter;
  deleteUser: User;
  login: AuthPresenter;
  updateAlbum: AlbumPresenter;
  updateAlbumFile: AlbumPresenter;
  updateArtist: Artist;
  updateMusic: MusicPresenter;
  updateMusicFile: MusicPresenter;
  updatePlaylist: PlaylistPresenter;
  updateUser: User;
  updateUserFile: User;
};


export type MutationCreateAlbumArgs = {
  album: CreateAlbumDto;
  file?: InputMaybe<Scalars['Upload']>;
};


export type MutationCreateArtistArgs = {
  artist: CreateArtistDto;
};


export type MutationCreateMusicArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  music: CreateMusicDto;
};


export type MutationCreatePlaylistArgs = {
  playlist: CreatePlaylistDto;
};


export type MutationCreateUserArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  user: CreateUserDto;
};


export type MutationDeleteAlbumArgs = {
  id: Scalars['String'];
};


export type MutationDeleteArtistArgs = {
  id: Scalars['String'];
};


export type MutationDeleteMusicArgs = {
  id: Scalars['String'];
};


export type MutationDeletePlaylistArgs = {
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


export type MutationUpdateAlbumFileArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  id: Scalars['String'];
};


export type MutationUpdateArtistArgs = {
  artist: UpdateArtistDto;
  id: Scalars['String'];
};


export type MutationUpdateMusicArgs = {
  id: Scalars['String'];
  music?: InputMaybe<UpdateMusicDto>;
};


export type MutationUpdateMusicFileArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  id: Scalars['String'];
};


export type MutationUpdatePlaylistArgs = {
  id: Scalars['String'];
  playlist: UpdatePlaylistDto;
};


export type MutationUpdateUserArgs = {
  id: Scalars['String'];
  user?: InputMaybe<UpdateUserDto>;
};


export type MutationUpdateUserFileArgs = {
  file?: InputMaybe<Scalars['Upload']>;
  id: Scalars['String'];
};

export type PlaylistPresenter = {
  __typename?: 'PlaylistPresenter';
  createdAt: Scalars['DateTime'];
  duration?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  isPublic: Scalars['Boolean'];
  musics?: Maybe<Array<Music>>;
  numberOfSongs?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  findAllAlbum: Array<AlbumPresenter>;
  findAllArtist: Array<Artist>;
  findAllMusic: Array<MusicPresenter>;
  findAllPlaylist: Array<PlaylistPresenter>;
  findAllUser: Array<User>;
  findOneAlbum: AlbumPresenter;
  findOneArtist: Artist;
  findOneMusic: MusicPresenter;
  findOnePlaylist: PlaylistPresenter;
  findOneUser: User;
  findUser: User;
};


export type QueryFindAllPlaylistArgs = {
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryFindOneAlbumArgs = {
  id: Scalars['String'];
};


export type QueryFindOneArtistArgs = {
  id: Scalars['String'];
};


export type QueryFindOneMusicArgs = {
  id: Scalars['String'];
};


export type QueryFindOnePlaylistArgs = {
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

export type UpdateMusicDto = {
  albumId?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Float']>;
  file?: InputMaybe<CreateFileDto>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdatePlaylistDto = {
  isPublic?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type UpdateUserDto = {
  email?: InputMaybe<Scalars['String']>;
  file?: InputMaybe<CreateFileDto>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  file?: Maybe<File>;
  id: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserPresenter = {
  __typename?: 'UserPresenter';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  file?: Maybe<File>;
  id?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
};

export type CreateAlbumMutationVariables = Exact<{
  album: CreateAlbumDto;
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type CreateAlbumMutation = { __typename?: 'Mutation', createAlbum: { __typename?: 'AlbumPresenter', id: string, title: string, releaseDate?: any | null } };

export type DeleteAlbumMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteAlbumMutation = { __typename?: 'Mutation', deleteAlbum: { __typename?: 'AlbumPresenter', title: string } };

export type FindAlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAlbumsQuery = { __typename?: 'Query', findAllAlbum: Array<{ __typename?: 'AlbumPresenter', id: string, title: string, releaseDate?: any | null, createdAt: any, updatedAt: any, file?: { __typename?: 'File', url: string } | null }> };

export type FindAlbumQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindAlbumQuery = { __typename?: 'Query', findOneAlbum: { __typename?: 'AlbumPresenter', title: string, releaseDate?: any | null, numberOfSongs?: number | null, duration?: number | null, file?: { __typename?: 'File', url: string } | null, musics?: Array<{ __typename?: 'Music', title: string, duration?: number | null, file?: { __typename?: 'File', url: string } | null }> | null } };

export type UpdateAlbumMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
}>;


export type UpdateAlbumMutation = { __typename?: 'Mutation', updateAlbum: { __typename?: 'AlbumPresenter', title: string, releaseDate?: any | null } };

export type UpdateAlbumCoverMutationVariables = Exact<{
  id: Scalars['String'];
  file?: InputMaybe<Scalars['Upload']>;
}>;


export type UpdateAlbumCoverMutation = { __typename?: 'Mutation', updateAlbumFile: { __typename?: 'AlbumPresenter', id: string, title: string, file?: { __typename?: 'File', url: string } | null } };

export type CreateArtistMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateArtistMutation = { __typename?: 'Mutation', createArtist: { __typename?: 'ArtistPresenter', id: string, name: string, createdAt: any } };

export type DeleteArtistMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteArtistMutation = { __typename?: 'Mutation', deleteArtist: { __typename?: 'Artist', name: string } };

export type FindAllArtistsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllArtistsQuery = { __typename?: 'Query', findAllArtist: Array<{ __typename?: 'Artist', id: string, name: string, monthlyListeners?: number | null, createdAt: any, updatedAt: any }> };

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
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPresenter', accessToken: string } };

export type CreateMusicMutationVariables = Exact<{
  albumId: Scalars['String'];
  title: Scalars['String'];
}>;


export type CreateMusicMutation = { __typename?: 'Mutation', createMusic: { __typename?: 'MusicPresenter', id: string, title: string, duration: number, album: { __typename?: 'Album', title: string } } };

export type DeleteMusicMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteMusicMutation = { __typename?: 'Mutation', deleteMusic: { __typename?: 'MusicPresenter', id: string } };

export type FindAllMusicsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllMusicsQuery = { __typename?: 'Query', findAllMusic: Array<{ __typename?: 'MusicPresenter', id: string, title: string, duration: number, createdAt: any, updatedAt: any, file: { __typename?: 'File', url: string }, album: { __typename?: 'Album', title: string } }> };

export type FindOneMusicQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindOneMusicQuery = { __typename?: 'Query', findOneMusic: { __typename?: 'MusicPresenter', id: string, title: string, duration: number, album: { __typename?: 'Album', title: string, file?: { __typename?: 'File', url: string } | null }, file: { __typename?: 'File', url: string } } };

export type UpdateMusicMutationVariables = Exact<{
  id: Scalars['String'];
  music: UpdateMusicDto;
}>;


export type UpdateMusicMutation = { __typename?: 'Mutation', updateMusic: { __typename?: 'MusicPresenter', id: string, title: string } };

export type UpdateMusicFileMutationVariables = Exact<{
  id: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type UpdateMusicFileMutation = { __typename?: 'Mutation', updateMusicFile: { __typename?: 'MusicPresenter', id: string, title: string, file: { __typename?: 'File', url: string } } };

export type CreatePlaylistMutationVariables = Exact<{
  playlist: CreatePlaylistDto;
}>;


export type CreatePlaylistMutation = { __typename?: 'Mutation', createPlaylist: { __typename?: 'PlaylistPresenter', title: string } };

export type DeletePlaylistMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeletePlaylistMutation = { __typename?: 'Mutation', deletePlaylist: { __typename?: 'PlaylistPresenter', id: string, title: string } };

export type FindPlaylistsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']>;
}>;


export type FindPlaylistsQuery = { __typename?: 'Query', findAllPlaylist: Array<{ __typename?: 'PlaylistPresenter', id: string, title: string, isPublic: boolean }> };

export type FindPLaylistQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindPLaylistQuery = { __typename?: 'Query', findOnePlaylist: { __typename?: 'PlaylistPresenter', id: string, title: string, isPublic: boolean, numberOfSongs?: number | null, duration?: number | null, user?: { __typename?: 'User', username: string, file?: { __typename?: 'File', url: string } | null } | null, musics?: Array<{ __typename?: 'Music', id: string, title: string, duration?: number | null, file?: { __typename?: 'File', url: string } | null }> | null } };

export type UpdatePlaylistMutationVariables = Exact<{
  id: Scalars['String'];
  playlist: UpdatePlaylistDto;
}>;


export type UpdatePlaylistMutation = { __typename?: 'Mutation', updatePlaylist: { __typename?: 'PlaylistPresenter', title: string } };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserPresenter', id?: string | null, username?: string | null, accessToken?: string | null } };

export type DeleteMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteMutation = { __typename?: 'Mutation', deleteUser: { __typename?: 'User', username: string } };

export type FindAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllUserQuery = { __typename?: 'Query', findAllUser: Array<{ __typename?: 'User', id: string, username: string, email: string }> };

export type FindOneQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type FindOneQuery = { __typename?: 'Query', findOneUser: { __typename?: 'User', username: string, file?: { __typename?: 'File', url: string } | null } };

export type FindUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindUserQuery = { __typename?: 'Query', findUser: { __typename?: 'User', id: string, username: string, file?: { __typename?: 'File', url: string } | null } };

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  username?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, username: string } };

export type UpdateFileMutationVariables = Exact<{
  id: Scalars['String'];
  file: Scalars['Upload'];
}>;


export type UpdateFileMutation = { __typename?: 'Mutation', updateUserFile: { __typename?: 'User', file?: { __typename?: 'File', url: string } | null } };


export const CreateAlbumDocument = gql`
    mutation CreateAlbum($album: CreateAlbumDTO!, $file: Upload) {
  createAlbum(album: $album, file: $file) {
    id
    title
    releaseDate
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
 *      album: // value for 'album'
 *      file: // value for 'file'
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
export const FindAlbumsDocument = gql`
    query FindAlbums {
  findAllAlbum {
    id
    title
    releaseDate
    file {
      url
    }
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useFindAlbumsQuery__
 *
 * To run a query within a React component, call `useFindAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<FindAlbumsQuery, FindAlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAlbumsQuery, FindAlbumsQueryVariables>(FindAlbumsDocument, options);
      }
export function useFindAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAlbumsQuery, FindAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAlbumsQuery, FindAlbumsQueryVariables>(FindAlbumsDocument, options);
        }
export type FindAlbumsQueryHookResult = ReturnType<typeof useFindAlbumsQuery>;
export type FindAlbumsLazyQueryHookResult = ReturnType<typeof useFindAlbumsLazyQuery>;
export type FindAlbumsQueryResult = Apollo.QueryResult<FindAlbumsQuery, FindAlbumsQueryVariables>;
export const FindAlbumDocument = gql`
    query FindAlbum($id: String!) {
  findOneAlbum(id: $id) {
    title
    releaseDate
    numberOfSongs
    duration
    file {
      url
    }
    musics {
      title
      duration
      file {
        url
      }
    }
  }
}
    `;

/**
 * __useFindAlbumQuery__
 *
 * To run a query within a React component, call `useFindAlbumQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAlbumQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAlbumQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindAlbumQuery(baseOptions: Apollo.QueryHookOptions<FindAlbumQuery, FindAlbumQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAlbumQuery, FindAlbumQueryVariables>(FindAlbumDocument, options);
      }
export function useFindAlbumLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAlbumQuery, FindAlbumQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAlbumQuery, FindAlbumQueryVariables>(FindAlbumDocument, options);
        }
export type FindAlbumQueryHookResult = ReturnType<typeof useFindAlbumQuery>;
export type FindAlbumLazyQueryHookResult = ReturnType<typeof useFindAlbumLazyQuery>;
export type FindAlbumQueryResult = Apollo.QueryResult<FindAlbumQuery, FindAlbumQueryVariables>;
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
export const UpdateAlbumCoverDocument = gql`
    mutation UpdateAlbumCover($id: String!, $file: Upload) {
  updateAlbumFile(id: $id, file: $file) {
    id
    title
    file {
      url
    }
  }
}
    `;
export type UpdateAlbumCoverMutationFn = Apollo.MutationFunction<UpdateAlbumCoverMutation, UpdateAlbumCoverMutationVariables>;

/**
 * __useUpdateAlbumCoverMutation__
 *
 * To run a mutation, you first call `useUpdateAlbumCoverMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAlbumCoverMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAlbumCoverMutation, { data, loading, error }] = useUpdateAlbumCoverMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateAlbumCoverMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAlbumCoverMutation, UpdateAlbumCoverMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAlbumCoverMutation, UpdateAlbumCoverMutationVariables>(UpdateAlbumCoverDocument, options);
      }
export type UpdateAlbumCoverMutationHookResult = ReturnType<typeof useUpdateAlbumCoverMutation>;
export type UpdateAlbumCoverMutationResult = Apollo.MutationResult<UpdateAlbumCoverMutation>;
export type UpdateAlbumCoverMutationOptions = Apollo.BaseMutationOptions<UpdateAlbumCoverMutation, UpdateAlbumCoverMutationVariables>;
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
    mutation Login($email: String!, $password: String!) {
  login(authCredentials: {email: $email, password: $password}) {
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
 *      email: // value for 'email'
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
export const CreateMusicDocument = gql`
    mutation CreateMusic($albumId: String!, $title: String!) {
  createMusic(music: {albumId: $albumId, title: $title}) {
    id
    title
    duration
    album {
      title
    }
  }
}
    `;
export type CreateMusicMutationFn = Apollo.MutationFunction<CreateMusicMutation, CreateMusicMutationVariables>;

/**
 * __useCreateMusicMutation__
 *
 * To run a mutation, you first call `useCreateMusicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMusicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMusicMutation, { data, loading, error }] = useCreateMusicMutation({
 *   variables: {
 *      albumId: // value for 'albumId'
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateMusicMutation(baseOptions?: Apollo.MutationHookOptions<CreateMusicMutation, CreateMusicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMusicMutation, CreateMusicMutationVariables>(CreateMusicDocument, options);
      }
export type CreateMusicMutationHookResult = ReturnType<typeof useCreateMusicMutation>;
export type CreateMusicMutationResult = Apollo.MutationResult<CreateMusicMutation>;
export type CreateMusicMutationOptions = Apollo.BaseMutationOptions<CreateMusicMutation, CreateMusicMutationVariables>;
export const DeleteMusicDocument = gql`
    mutation DeleteMusic($id: String!) {
  deleteMusic(id: $id) {
    id
  }
}
    `;
export type DeleteMusicMutationFn = Apollo.MutationFunction<DeleteMusicMutation, DeleteMusicMutationVariables>;

/**
 * __useDeleteMusicMutation__
 *
 * To run a mutation, you first call `useDeleteMusicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMusicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMusicMutation, { data, loading, error }] = useDeleteMusicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteMusicMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMusicMutation, DeleteMusicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteMusicMutation, DeleteMusicMutationVariables>(DeleteMusicDocument, options);
      }
export type DeleteMusicMutationHookResult = ReturnType<typeof useDeleteMusicMutation>;
export type DeleteMusicMutationResult = Apollo.MutationResult<DeleteMusicMutation>;
export type DeleteMusicMutationOptions = Apollo.BaseMutationOptions<DeleteMusicMutation, DeleteMusicMutationVariables>;
export const FindAllMusicsDocument = gql`
    query FindAllMusics {
  findAllMusic {
    id
    title
    duration
    createdAt
    updatedAt
    file {
      url
    }
    album {
      title
    }
  }
}
    `;

/**
 * __useFindAllMusicsQuery__
 *
 * To run a query within a React component, call `useFindAllMusicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllMusicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllMusicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllMusicsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllMusicsQuery, FindAllMusicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllMusicsQuery, FindAllMusicsQueryVariables>(FindAllMusicsDocument, options);
      }
export function useFindAllMusicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllMusicsQuery, FindAllMusicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllMusicsQuery, FindAllMusicsQueryVariables>(FindAllMusicsDocument, options);
        }
export type FindAllMusicsQueryHookResult = ReturnType<typeof useFindAllMusicsQuery>;
export type FindAllMusicsLazyQueryHookResult = ReturnType<typeof useFindAllMusicsLazyQuery>;
export type FindAllMusicsQueryResult = Apollo.QueryResult<FindAllMusicsQuery, FindAllMusicsQueryVariables>;
export const FindOneMusicDocument = gql`
    query FindOneMusic($id: String!) {
  findOneMusic(id: $id) {
    id
    title
    duration
    album {
      title
      file {
        url
      }
    }
    file {
      url
    }
  }
}
    `;

/**
 * __useFindOneMusicQuery__
 *
 * To run a query within a React component, call `useFindOneMusicQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindOneMusicQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindOneMusicQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindOneMusicQuery(baseOptions: Apollo.QueryHookOptions<FindOneMusicQuery, FindOneMusicQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindOneMusicQuery, FindOneMusicQueryVariables>(FindOneMusicDocument, options);
      }
export function useFindOneMusicLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindOneMusicQuery, FindOneMusicQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindOneMusicQuery, FindOneMusicQueryVariables>(FindOneMusicDocument, options);
        }
export type FindOneMusicQueryHookResult = ReturnType<typeof useFindOneMusicQuery>;
export type FindOneMusicLazyQueryHookResult = ReturnType<typeof useFindOneMusicLazyQuery>;
export type FindOneMusicQueryResult = Apollo.QueryResult<FindOneMusicQuery, FindOneMusicQueryVariables>;
export const UpdateMusicDocument = gql`
    mutation UpdateMusic($id: String!, $music: UpdateMusicDTO!) {
  updateMusic(id: $id, music: $music) {
    id
    title
  }
}
    `;
export type UpdateMusicMutationFn = Apollo.MutationFunction<UpdateMusicMutation, UpdateMusicMutationVariables>;

/**
 * __useUpdateMusicMutation__
 *
 * To run a mutation, you first call `useUpdateMusicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMusicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMusicMutation, { data, loading, error }] = useUpdateMusicMutation({
 *   variables: {
 *      id: // value for 'id'
 *      music: // value for 'music'
 *   },
 * });
 */
export function useUpdateMusicMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMusicMutation, UpdateMusicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMusicMutation, UpdateMusicMutationVariables>(UpdateMusicDocument, options);
      }
export type UpdateMusicMutationHookResult = ReturnType<typeof useUpdateMusicMutation>;
export type UpdateMusicMutationResult = Apollo.MutationResult<UpdateMusicMutation>;
export type UpdateMusicMutationOptions = Apollo.BaseMutationOptions<UpdateMusicMutation, UpdateMusicMutationVariables>;
export const UpdateMusicFileDocument = gql`
    mutation UpdateMusicFile($id: String!, $file: Upload!) {
  updateMusicFile(id: $id, file: $file) {
    id
    title
    file {
      url
    }
  }
}
    `;
export type UpdateMusicFileMutationFn = Apollo.MutationFunction<UpdateMusicFileMutation, UpdateMusicFileMutationVariables>;

/**
 * __useUpdateMusicFileMutation__
 *
 * To run a mutation, you first call `useUpdateMusicFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMusicFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMusicFileMutation, { data, loading, error }] = useUpdateMusicFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateMusicFileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMusicFileMutation, UpdateMusicFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMusicFileMutation, UpdateMusicFileMutationVariables>(UpdateMusicFileDocument, options);
      }
export type UpdateMusicFileMutationHookResult = ReturnType<typeof useUpdateMusicFileMutation>;
export type UpdateMusicFileMutationResult = Apollo.MutationResult<UpdateMusicFileMutation>;
export type UpdateMusicFileMutationOptions = Apollo.BaseMutationOptions<UpdateMusicFileMutation, UpdateMusicFileMutationVariables>;
export const CreatePlaylistDocument = gql`
    mutation CreatePlaylist($playlist: CreatePlaylistDTO!) {
  createPlaylist(playlist: $playlist) {
    title
  }
}
    `;
export type CreatePlaylistMutationFn = Apollo.MutationFunction<CreatePlaylistMutation, CreatePlaylistMutationVariables>;

/**
 * __useCreatePlaylistMutation__
 *
 * To run a mutation, you first call `useCreatePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPlaylistMutation, { data, loading, error }] = useCreatePlaylistMutation({
 *   variables: {
 *      playlist: // value for 'playlist'
 *   },
 * });
 */
export function useCreatePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePlaylistMutation, CreatePlaylistMutationVariables>(CreatePlaylistDocument, options);
      }
export type CreatePlaylistMutationHookResult = ReturnType<typeof useCreatePlaylistMutation>;
export type CreatePlaylistMutationResult = Apollo.MutationResult<CreatePlaylistMutation>;
export type CreatePlaylistMutationOptions = Apollo.BaseMutationOptions<CreatePlaylistMutation, CreatePlaylistMutationVariables>;
export const DeletePlaylistDocument = gql`
    mutation DeletePlaylist($id: String!) {
  deletePlaylist(id: $id) {
    id
    title
  }
}
    `;
export type DeletePlaylistMutationFn = Apollo.MutationFunction<DeletePlaylistMutation, DeletePlaylistMutationVariables>;

/**
 * __useDeletePlaylistMutation__
 *
 * To run a mutation, you first call `useDeletePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePlaylistMutation, { data, loading, error }] = useDeletePlaylistMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<DeletePlaylistMutation, DeletePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePlaylistMutation, DeletePlaylistMutationVariables>(DeletePlaylistDocument, options);
      }
export type DeletePlaylistMutationHookResult = ReturnType<typeof useDeletePlaylistMutation>;
export type DeletePlaylistMutationResult = Apollo.MutationResult<DeletePlaylistMutation>;
export type DeletePlaylistMutationOptions = Apollo.BaseMutationOptions<DeletePlaylistMutation, DeletePlaylistMutationVariables>;
export const FindPlaylistsDocument = gql`
    query FindPlaylists($userId: String) {
  findAllPlaylist(userId: $userId) {
    id
    title
    isPublic
  }
}
    `;

/**
 * __useFindPlaylistsQuery__
 *
 * To run a query within a React component, call `useFindPlaylistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPlaylistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPlaylistsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFindPlaylistsQuery(baseOptions?: Apollo.QueryHookOptions<FindPlaylistsQuery, FindPlaylistsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPlaylistsQuery, FindPlaylistsQueryVariables>(FindPlaylistsDocument, options);
      }
export function useFindPlaylistsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPlaylistsQuery, FindPlaylistsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPlaylistsQuery, FindPlaylistsQueryVariables>(FindPlaylistsDocument, options);
        }
export type FindPlaylistsQueryHookResult = ReturnType<typeof useFindPlaylistsQuery>;
export type FindPlaylistsLazyQueryHookResult = ReturnType<typeof useFindPlaylistsLazyQuery>;
export type FindPlaylistsQueryResult = Apollo.QueryResult<FindPlaylistsQuery, FindPlaylistsQueryVariables>;
export const FindPLaylistDocument = gql`
    query FindPLaylist($id: String!) {
  findOnePlaylist(id: $id) {
    id
    title
    isPublic
    numberOfSongs
    duration
    user {
      username
      file {
        url
      }
    }
    musics {
      id
      title
      duration
      file {
        url
      }
    }
  }
}
    `;

/**
 * __useFindPLaylistQuery__
 *
 * To run a query within a React component, call `useFindPLaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPLaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPLaylistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindPLaylistQuery(baseOptions: Apollo.QueryHookOptions<FindPLaylistQuery, FindPLaylistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPLaylistQuery, FindPLaylistQueryVariables>(FindPLaylistDocument, options);
      }
export function useFindPLaylistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPLaylistQuery, FindPLaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPLaylistQuery, FindPLaylistQueryVariables>(FindPLaylistDocument, options);
        }
export type FindPLaylistQueryHookResult = ReturnType<typeof useFindPLaylistQuery>;
export type FindPLaylistLazyQueryHookResult = ReturnType<typeof useFindPLaylistLazyQuery>;
export type FindPLaylistQueryResult = Apollo.QueryResult<FindPLaylistQuery, FindPLaylistQueryVariables>;
export const UpdatePlaylistDocument = gql`
    mutation UpdatePlaylist($id: String!, $playlist: UpdatePlaylistDTO!) {
  updatePlaylist(id: $id, playlist: $playlist) {
    title
  }
}
    `;
export type UpdatePlaylistMutationFn = Apollo.MutationFunction<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>;

/**
 * __useUpdatePlaylistMutation__
 *
 * To run a mutation, you first call `useUpdatePlaylistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePlaylistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePlaylistMutation, { data, loading, error }] = useUpdatePlaylistMutation({
 *   variables: {
 *      id: // value for 'id'
 *      playlist: // value for 'playlist'
 *   },
 * });
 */
export function useUpdatePlaylistMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>(UpdatePlaylistDocument, options);
      }
export type UpdatePlaylistMutationHookResult = ReturnType<typeof useUpdatePlaylistMutation>;
export type UpdatePlaylistMutationResult = Apollo.MutationResult<UpdatePlaylistMutation>;
export type UpdatePlaylistMutationOptions = Apollo.BaseMutationOptions<UpdatePlaylistMutation, UpdatePlaylistMutationVariables>;
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
    file {
      url
    }
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
export const FindUserDocument = gql`
    query FindUser {
  findUser {
    id
    username
    file {
      url
    }
  }
}
    `;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindUserQuery(baseOptions?: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: String!, $username: String, $password: String, $email: String) {
  updateUser(
    id: $id
    user: {username: $username, password: $password, email: $email}
  ) {
    id
    username
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
export const UpdateFileDocument = gql`
    mutation UpdateFile($id: String!, $file: Upload!) {
  updateUserFile(id: $id, file: $file) {
    file {
      url
    }
  }
}
    `;
export type UpdateFileMutationFn = Apollo.MutationFunction<UpdateFileMutation, UpdateFileMutationVariables>;

/**
 * __useUpdateFileMutation__
 *
 * To run a mutation, you first call `useUpdateFileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFileMutation, { data, loading, error }] = useUpdateFileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUpdateFileMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFileMutation, UpdateFileMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFileMutation, UpdateFileMutationVariables>(UpdateFileDocument, options);
      }
export type UpdateFileMutationHookResult = ReturnType<typeof useUpdateFileMutation>;
export type UpdateFileMutationResult = Apollo.MutationResult<UpdateFileMutation>;
export type UpdateFileMutationOptions = Apollo.BaseMutationOptions<UpdateFileMutation, UpdateFileMutationVariables>;