import { Box, Flex } from "@chakra-ui/react";
import { useDeleteAlbum } from "../../../hooks/album/useDeleteAlbum";
import { IAlbum, useFindAllAlbums } from "../../../hooks/album/useListAlbum";
import createColumnHelperObject from "../../../utils/columnHelperObject.utils";
import { DataTable } from "../../Datatable/datatable";
import CreateAlbum from "./create";
import UpdateAlbum from "./update";

interface IAlbumColumn extends IAlbum {
    deleteAction?: string;
    updateAction?: string;
    fixed?: string;
}

export default function AlbumPage() {
    const { albums } = useFindAllAlbums()
    const { handleDeleteAlbum } = useDeleteAlbum()

    const columns = createColumnHelperObject({
        data: albums,
        handleDelete: handleDeleteAlbum,
        updateChildren: <UpdateAlbum id={''}/>
    })

    return (
        <Box minH={'95.2vh'}>
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