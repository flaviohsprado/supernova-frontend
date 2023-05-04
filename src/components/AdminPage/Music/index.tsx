import { Box, Flex } from '@chakra-ui/react'
import createColumnHelperObject from '../../../helpers/columnObject.helper'
import { useDeleteMusic } from '../../../hooks/music/useDeleteMusic'
import { useListMusics } from '../../../hooks/music/useListMusics'
import { DataTable } from '../../Datatable/datatable'
import CreateMusic from './create'
import UpdateMusic from './update'

export default function MusicPage() {
    const { musics } = useListMusics()
    const { handleDeleteMusic } = useDeleteMusic()

    const columns = createColumnHelperObject({
        data: musics,
        handleDelete: handleDeleteMusic,
        updateChildren: <UpdateMusic id={''} />,
    })

    return (
        <Box height={'100vh'}>
            <Flex>
                <CreateMusic />
            </Flex>
            <Box minH={'20px'}></Box>
            <Box bgColor={'#4a4a4a'} borderRadius={'5px'}>
                <DataTable columns={columns} data={musics} />
            </Box>
        </Box>
    )
}
