import { createColumnHelper } from '@tanstack/react-table'
import ContextPlayButton from '../components/Datatable/ContextPlayButton'
import { IMusicBasicProps } from '../interfaces/music.interface'

export interface IColumnHelper {
    data: unknown[]
}

export default function createPlaylistColumnHelperObject({
    data,
}: IColumnHelper) {
    const columns: any[] = []
    const columnHelper = createColumnHelper<typeof data>()

    if (data.length === 0) return columns

    // @ts-ignore
    for (const [key] of Object.entries(data[0])) {
        const accessor = key as any

        //if key is id, set it to hidden
        if (key === 'id') {
            columns.push(
                columnHelper.accessor(accessor, {
                    cell: (info) => info.getValue(),
                    header: key,
                })
            )
        } else if (key === 'audio') {
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
                            artist: info.cell.row.original.artist,
                            // @ts-ignore
                            url: info.cell.row.original.audio,
                            // @ts-ignore
                            cover: info.cell.row.original.cover,
                        }

                        return <ContextPlayButton music={music} />
                    },
                    header: 'Play',
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
