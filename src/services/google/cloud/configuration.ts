export class GoogleCloudConfiguration {
    private static readonly GOOGLE_CLOUD_API_KEY =
        process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_KEY
    private static readonly GOOGLE_CLOUD_API_URL =
        process.env.NEXT_PUBLIC_GOOGLE_CLOUD_API_URL
    private static readonly GOOGLE_CLOUD_CLIENT_ID =
        process.env.NEXT_PUBLIC_GOOGLE_CLOUD_CLIENT_ID
    private static readonly GOOGLE_CLOUD_CLIENT_SECRET =
        process.env.NEXT_PUBLIC_GOOGLE_CLOUD_CLIENT_SECRET

    protected get getGoogleCloudApiKey() {
        return GoogleCloudConfiguration.GOOGLE_CLOUD_API_KEY
    }

    protected get getGoogleCloudApiUrl(): string {
        return String(GoogleCloudConfiguration.GOOGLE_CLOUD_API_URL)
    }

    protected get getGoogleCloudClientId() {
        return GoogleCloudConfiguration.GOOGLE_CLOUD_CLIENT_ID
    }

    protected get getGoogleCloudClientSecret() {
        return GoogleCloudConfiguration.GOOGLE_CLOUD_CLIENT_SECRET
    }
}
