import { Album } from '../graphql/generated'
import { IFile } from './file.interface'

export interface IMusic {
    id: string
    title: string
    duration?: number | null | undefined
    createdAt?: Date | string
    updatedAt?: Date | string
    album?: Album
    file?: IFile | null | undefined
}

export interface IMusicBasicProps {
    id: string
    title: string
    artist: string
    duration?: number
    url?: string
    cover?: string
}
