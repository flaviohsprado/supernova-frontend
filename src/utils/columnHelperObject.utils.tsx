import { createColumnHelper } from '@tanstack/react-table'
import { ReactNode } from 'react'
import AudioButton from '../components/Datatable/AudioButton'
import DeleteButton from '../components/Datatable/DeleteButton'
import UpdateButton from '../components/Datatable/UpdateButton'

export interface IColumnHelper {
    data: unknown[]
    handleDelete(id: string): void
    updateChildren: ReactNode
}

export default function createColumnHelperObject({
    data,
    updateChildren,
    handleDelete,
}: IColumnHelper) {
    const columns: any[] = []
    const columnHelper = createColumnHelper<typeof data>()

    if (data.length === 0) return columns

    // @ts-ignore
    for (const [key] of Object.entries(data[0])) {
        const accessor = key as any

        if (key === 'file') {
            columns.push(
                columnHelper.display({
                    cell: (info) => {
                        // @ts-ignore
                        const image = String(info.cell.row.original.file)

                        return (
                            <img
                                src={image}
                                alt={image}
                                style={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '5px',
                                }}
                            />
                        )
                    },
                    header: 'file',
                    minSize: 200,
                })
            )
        } else if (key === 'audio') {
            columns.push(
                columnHelper.display({
                    cell: (info) => {
                        // @ts-ignore
                        const audio = String(info.cell.row.original.audio)

                        return <AudioButton src={audio} />
                    },
                    header: 'audio',
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

    columns.push(
        columnHelper.display({
            cell: (info) => {
                const id = String(info.cell.row.getValue('id'))
                return (
                    <UpdateButton
                        id={id}
                        children={updateChildren}
                    ></UpdateButton>
                )
            },
            header: 'Update',
        }),
        columnHelper.display({
            cell: (info) => {
                const id = String(info.cell.row.getValue('id'))
                return (
                    <DeleteButton
                        handleDelete={handleDelete}
                        id={id}
                    ></DeleteButton>
                )
            },
            header: 'Delete',
        })
    )

    return columns
}
