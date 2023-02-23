interface IId {
    kind: string
    videoId: string
}

interface IDefault {
    height: number
    url: string
    width: number
}

interface High {
    height: number
    url: string
    width: number
}

interface Medium {
    height: number
    url: string
    width: number
}

interface Thumbnails {
    default: IDefault
    high: High
    medium: Medium
}

interface ISnippet {
    channelId: string
    channelTitle: string
    description: string
    liveBroadcastContent: string
    publishTime: Date
    publishedAt: Date
    thumbnails: Thumbnails
    title: string
}

export interface IYoutubeServiceResponse {
    etag: string
    id: IId
    kind: string
    snippet: ISnippet
}
