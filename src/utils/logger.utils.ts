export class StandardError extends Error {
    private statusCode: number
    private error: any

    constructor(statusCode: number, message: string, error?: any) {
        super()
        this.statusCode = statusCode
        this.message = message
        this.error = error

        console.error(`[ERROR] ${message}`)
    }
}
