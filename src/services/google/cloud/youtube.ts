import * as axios from 'axios'
import { GoogleCloudConfiguration } from './configuration'

interface IError {
    message: string
    domain: string
    reason: string
}

interface IYoutubeApiError {
    code: number
    message: string
    errors: IError[]
}

export class YoutubeService extends GoogleCloudConfiguration {
    constructor() {
        super()
    }

    public async getVideosByName(name: string) {
        const url =
            this.getGoogleCloudApiUrl +
            '/search?key=' +
            this.getGoogleCloudApiKey

        try {
            const response = await axios.default.get(url, {
                params: {
                    part: 'snippet',
                    q: name,
                    type: 'video',
                },
            })

            return response.data.items
        } catch (error: any) {
            console.error('[ERROR] ' + error.response.data.error.message)
            return []
        }
    }

    public async getVideoInfo(videoId: string) {
        const url =
            this.getGoogleCloudApiUrl +
            '/videos?part=player&id=' +
            videoId +
            '&key=' +
            this.getGoogleCloudApiKey

        const response = await axios.default.get(url)

        return response.data
    }
}
