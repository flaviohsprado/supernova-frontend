import { createColumnHelper } from '@tanstack/react-table'
import PlayButton from '../components/Datatable/PlayButton'
import { IMusicBasicProps } from '../interfaces/music.interface'

export interface IColumnHelper {
    data: unknown[]
    handlePlay: (music: IMusicBasicProps) => void
}

export default function createMusicColumnHelperObject({
    data,
    handlePlay,
}: IColumnHelper) {
    const columns: any[] = []
    const columnHelper = createColumnHelper<typeof data>()

    if (data.length === 0) return columns

    // @ts-ignore
    for (const [key] of Object.entries(data[0])) {
        const accessor = key as any

        if (key === 'audio') {
            columns.push(
                columnHelper.display({
                    cell: (info) => {
                        // @ts-ignore
                        const src: string = String(info.cell.row.original.audio)

                        return <PlayButton src={src} />
                    },
                    header: 'Play',
                })
            )
        } else if (key === 'addedAt') {
            columns.push(
                columnHelper.display({
                    cell: (info) => {
                        // @ts-ignore
                        const date = new Date(info.cell.row.original.addedAt)

                        return date.toLocaleDateString('en-US', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                        })
                    },
                    header: 'Added At',
                })
            )
        } else {
            columns.push(
                columnHelper.accessor(accessor, {
                    cell: (info) => info.getValue(),
                    header: key,
                })
            )
        }
    }

    return columns
}
