export class DateTimeUtils {
    static pad(string: string | number) {
        return ('0' + string).slice(-2)
    }

    static getFormattedDuration(seconds: number): string {
        const date = new Date(seconds * 1000)
        const hh = date.getUTCHours()
        const mm = date.getUTCMinutes()
        const ss = DateTimeUtils.pad(date.getUTCSeconds())
        if (hh) {
          return `${hh}:${DateTimeUtils.pad(mm)}:${ss}`
        }
        return `${mm}:${ss}`
    }
}