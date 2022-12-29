import { createColumnHelper } from '@tanstack/react-table'
import ContextPlayButton from '../components/Datatable/ContextPlayButton/indext'
import { IMusicBasicProps } from '../interfaces/music.interface'

export interface IColumnHelper {
    data: any[]
}

export default function createSearchColumnHelperObject({
    data,
}: IColumnHelper) {
    const columns: any[] = []
    const columnHelper = createColumnHelper<typeof data>()

    if (data.length === 0) return columns

    for (const [key] of Object.entries(data[0])) {
        const accessor = key as any

        if (key === 'audio') {
            columns.push(
                columnHelper.display({
                    cell: (info) => {
                        const music: IMusicBasicProps = {
                            // @ts-ignore
                            id: info.cell.row.original.id,
                            // @ts-ignore
                            title: info.cell.row.original.title,
                            // @ts-ignore
                            duration: info.cell.row.original.duration,
                            // @ts-ignore
                            url: info.cell.row.original.audio,
                        }

                        return <ContextPlayButton music={music} />
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
