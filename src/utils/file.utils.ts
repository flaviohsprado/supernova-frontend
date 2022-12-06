export class FileUtils {
    static createApolloFile(file: File): File {
        return new File([file], file.name, { type: file.type })
    }

    static getBase64(file: File): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () => resolve(reader.result as string)
            reader.onerror = error => reject(error)
        })
    }
}