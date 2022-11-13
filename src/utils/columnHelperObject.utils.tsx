import { createColumnHelper } from "@tanstack/react-table";
import { exit } from "process";
import { ReactNode } from "react";
import DeleteButton from "../components/Datatable/DeleteButton";

export interface IColumnHelper {
    data: unknown[];
    updateColumn: ReactNode;
    handleDelete(id: string): void;
}

export default function createColumnHelperObject({ data, updateColumn, handleDelete }: IColumnHelper) {
    const columns: any[] = []
    const columnHelper = createColumnHelper<typeof data>();

    if (data.length === 0) return columns

    for (const [key] of Object.entries(data[0])) {
        const accessor = key as any

        columns.push(columnHelper.accessor(accessor, {
            cell: (info) => info.getValue(),
            header: key
        }))
    }

    columns.push(
        columnHelper.display({
            cell: (info) => updateColumn,
            header: "Update"
        }),
        columnHelper.display({
            cell: (info) => <DeleteButton handleDelete={() => handleDelete(String(info.cell.row.getValue('id')))} id={String(info.cell.row.getValue('id'))} />,
            header: "Delete"
        }),
    )



    return columns
}