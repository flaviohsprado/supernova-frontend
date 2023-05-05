import { Music } from '../graphql/generated'
import { IFile } from './file.interface'
import { IUser } from './user.interface'

export interface IPlaylist {
    id: string
    title: string
    isPublic: boolean
    numberOfSongs?: number
    duration?: number
    user?: IUser
    createdAt?: Date | string
    updatedAt?: Date | string
    musics?: Music[] | null | undefined
    file?: IFile | null | undefined
}
