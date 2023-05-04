import { useState } from 'react'
import { IYoutubeServiceResponse } from '../../interfaces/youtube.interface'
import { YoutubeService } from '../../services/google/cloud/youtube'

interface IVideo {
    id: string
    title: string
    thumbnail: string
    artist: string
    url?: string
}

export const useSearchMusicByName = () => {
    const [name, setName] = useState('')
    const [videos, setVideos] = useState<IVideo[]>([{}] as IVideo[])

    const handleSearchMusic = async () => {
        let videosInfo: IVideo[] = []
        const youtubeService = new YoutubeService()
        const videos: IYoutubeServiceResponse[] =
            await youtubeService.getVideosByName(name)

        if (videos.length > 0) {
            videos.map(async (video) => {
                video.snippet.title = video.snippet.title.replace('&#39;', "'")

                const videoInfo = await youtubeService.getVideoInfo(
                    video.id.videoId
                )

                videosInfo.push({
                    id: video.id.videoId,
                    title: video.snippet.title,
                    artist: video.snippet.channelTitle,
                    thumbnail: video.snippet.thumbnails.high.url,
                    url: getVideoUrl(videoInfo.items[0].player.embedHtml),
                })
            })

            console.log(videosInfo)
            setVideos(videosInfo)
        }
    }

    return { name, setName, videos, handleSearchMusic }
}

function getVideoUrl(embedHtml: string) {
    const url = embedHtml
        .split('src="')[1]
        .split('"')[0]
        .replace('embed/', 'watch?v=')

    return url
}
