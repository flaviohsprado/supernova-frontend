import { IAlbum } from "./album.interface"
import { IFile } from "./file.interface"

export interface IMusic {
    id: string
    title: string
    duration?: number | null | undefined
    createdAt?: Date | string
    updatedAt?: Date | string
    album?: IAlbum
    file?: IFile | null | undefined
}

export interface IMusicBasicProps {
    id: string
    title: string
    duration?: number
    url?: string
}