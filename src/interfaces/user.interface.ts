import { IFile } from "./file.interface"

export interface IUser {
    id: string
    username: string
    email?: string
    accessToken?: string
    file: IFile
    createdAt: Date | string
    updatedAt: Date | string
}