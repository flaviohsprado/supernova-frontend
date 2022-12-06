import { Box, Flex, IconButton } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { FiDelete } from "react-icons/fi";
import { useDeleteArtist } from "../../../hooks/artist/useDeleteArtist";
import { IArtist, useFindAllArtists } from "../../../hooks/artist/useListArtists";
import { DataTable } from "../../Datatable/datatable";
import CreateArtist from "./create";
import UpdateArtistModal from "./update";

function createColumns() {
    const { handleDelete } = useDeleteArtist()
    const columnHelper = createColumnHelper<IArtist>();

    return [
        columnHelper.accessor('id', {
            cell: (info) => info.getValue(),
            header: "Id"
        }),
        columnHelper.accessor('name', {
            cell: (info) => info.getValue(),
            header: "Name"
        }),
        columnHelper.accessor("monthlyListeners", {
            cell: (info) => info.getValue(),
            header: "Monthly Listeners",
            meta: {
                isNumeric: true
            }
        }),
        columnHelper.accessor("createdAt", {
            cell: (info) => info.getValue(),
            header: "Created At",
        }),
        columnHelper.accessor("updatedAt", {
            cell: (info) => info.getValue(),
            header: "Updated At",
        }),
        columnHelper.display({
            cell: (info) => <UpdateArtistModal artistId={String(info.cell.row.getValue('id'))} />,
            header: "Update"
        }),
        columnHelper.display({
            cell: (info) => <IconButton
                onClick={() => handleDelete(String(info.cell.row.getValue('id')))}
                aria-label="Delete Artist"
                icon={<FiDelete />}
                color={'black'}
                _hover={{
                    bg: '#1DB954',
                    color: 'white'
                }}
            />,
            header: "Delete"
        }),
    ];
}

export default function ArtistPage() {
    const { artists } = useFindAllArtists()

    const columns = createColumns()

    return (
        <Box height={'100vh'}>
            <Flex>
                <CreateArtist />
            </Flex>
            <Box minH={'20px'} ></Box>
            <Box bgColor={'#4a4a4a'} borderRadius={'5px'}>
                <DataTable
                    columns={columns}
                    data={artists}
                />
            </Box>
        </Box>
    );
}