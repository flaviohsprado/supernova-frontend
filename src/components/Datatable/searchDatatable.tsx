import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { chakra, Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'
import SearchContextMenu from './ContextMenu/Search'

export type DataTableProps<Data extends object> = {
    data: Data[]
    columns: ColumnDef<Data, any>[]
}

export function SearchDatatable<Data extends object>({
    data,
    columns,
}: DataTableProps<Data>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const table = useReactTable({
        columns,
        data,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        state: {
            sorting,
        },
    })

    return (
        <Table>
            <Thead
                paddingBottom={2}
                position={'sticky'}
                top={0}
                zIndex={1}
                backgroundColor={'black'}
            >
                {table.getHeaderGroups().map((headerGroup, index) => (
                    <Tr key={index}>
                        <Th
                            fontWeight={'700'}
                            color={'white'}
                            style={{
                                borderBottom:
                                    '0.01em solid rgba(181, 181, 181, .3)',
                            }}
                        >
                            #
                        </Th>
                        {headerGroup.headers.map((header, index) => {
                            // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                            const meta: any = header.column.columnDef.meta
                            return (
                                <Th
                                    fontWeight={'normal'}
                                    color={'white'}
                                    key={index}
                                    onClick={header.column.getToggleSortingHandler()}
                                    isNumeric={meta?.isNumeric}
                                    style={{
                                        borderBottom:
                                            '0.01em solid rgba(181, 181, 181, .3)',
                                    }}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                    <chakra.span pl="4">
                                        {header.column.getIsSorted() ? (
                                            header.column.getIsSorted() ===
                                            'desc' ? (
                                                <TriangleDownIcon aria-label="sorted descending" />
                                            ) : (
                                                <TriangleUpIcon aria-label="sorted ascending" />
                                            )
                                        ) : null}
                                    </chakra.span>
                                </Th>
                            )
                        })}
                    </Tr>
                ))}
            </Thead>
            <Tbody>
                {table.getRowModel().rows.map((row, index) => (
                    <SearchContextMenu musicId={row.getValue('id')} key={index}>
                        {(ref) => (
                            <Tr
                                key={index}
                                bg={'transparent'}
                                color={'white'}
                                _hover={{
                                    bg: 'rgba(181, 181, 181, .1)',
                                    transition: '0.2s',
                                    borderRadius: '10px',
                                }}
                                ref={ref}
                            >
                                <Td
                                    borderTopLeftRadius={'10px'}
                                    borderBottomLeftRadius={'10px'}
                                    borderBottom={'none'}
                                >
                                    {index + 1}
                                </Td>
                                {row.getVisibleCells().map((cell, index) => {
                                    // see https://tanstack.com/table/v8/docs/api/core/column-def#meta to type this correctly
                                    const meta: any = cell.column.columnDef.meta
                                    return (
                                        //if last cell, add border radius
                                        index ===
                                            row.getVisibleCells().length - 1 ? (
                                            <Td
                                                key={index}
                                                isNumeric={meta?.isNumeric}
                                                borderTopRightRadius={'10px'}
                                                borderBottomRightRadius={'10px'}
                                                borderBottom={'none'}
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </Td>
                                        ) : (
                                            <Td
                                                key={index}
                                                isNumeric={meta?.isNumeric}
                                                borderBottom={'none'}
                                            >
                                                {flexRender(
                                                    cell.column.columnDef.cell,
                                                    cell.getContext()
                                                )}
                                            </Td>
                                        )
                                    )
                                })}
                            </Tr>
                        )}
                    </SearchContextMenu>
                ))}
            </Tbody>
        </Table>
    )
}
