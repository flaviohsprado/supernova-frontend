import { IAlbum } from "./album.interface"

export interface IArtist {
    id: string
    name: string
    monthlyListeners: number
    createdAt: Date | string
    updatedAt: Date | string
    albums: IAlbum[]
}