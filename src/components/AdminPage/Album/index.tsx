import { Box, Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import createColumnHelperObject from "../../../utils/columnHelperObject.utils";
import { DataTable } from "../../Datatable/datatable";
import CreateAlbum from "./create";
import { useDeleteAlbum } from "./delete/useDeleteAlbum";
import UpdateAlbum from "./update";
import { useFindAllAlbums } from "./useListAlbum";

export default function AlbumPage() {
    const { albums } = useFindAllAlbums()

    const { handleDeleteAlbum } = useDeleteAlbum()

    const columns = createColumnHelperObject({
        data: albums,
        handleDelete: handleDeleteAlbum,
        updateColumn: <UpdateAlbum artistId={''} />
    })

    return (
        <Box height={'100vh'}>
            <Flex>
                <CreateAlbum />
            </Flex>
            <Box minH={'20px'}></Box>
            <Box bgColor={'#4a4a4a'} borderRadius={'5px'}>
                <DataTable
                    columns={columns}
                    data={albums}
                />
            </Box>
        </Box>
    );
}