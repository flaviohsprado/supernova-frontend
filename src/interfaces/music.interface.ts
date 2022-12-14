import { IAlbum } from "./album.interface"
import { IFile } from "./file.interface"

export interface IMusic {
    id: string
    title: string
    duration?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    album: IAlbum
    file?: IFile
}

export interface IMusicBasicProps {
    id: string
    title: string
    duration?: number
    url?: string
}