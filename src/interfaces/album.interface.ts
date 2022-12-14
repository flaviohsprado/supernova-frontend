import { IArtist } from "./artist.interface"
import { IFile } from "./file.interface"
import { IMusic } from "./music.interface"

export interface IAlbum {
    id: string
    title: string
    releaseDate: Date | string
    numberOfSongs: number
    duration: number
    artist: IArtist
    createdAt: Date | string
    updatedAt: Date | string
    file: IFile
    musics: IMusic[]
}