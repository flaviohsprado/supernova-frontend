import { IFile } from "./file.interface"
import { IMusic } from "./music.interface"
import { IUser } from "./user.interface"

export interface IPlaylist {
    id: string
    title: string
    isPublic: boolean
    numberOfSongs?: number
    duration?: number
    user?: IUser
    createdAt?: Date | string
    updatedAt?: Date | string
    musics?: IMusic[] | null | undefined
    file?: IFile | null | undefined
}