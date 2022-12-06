import { IFile } from "./file.interface"

export interface IMusic {
    id: string
    albumId?: string
    playlistId?: string
    title: string
    duration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    file?: IFile
}