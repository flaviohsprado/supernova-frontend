import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import UpdateArtistModal from "../AdminPage/Artist/update";

export interface ITableProps {
    data: any[];
    isUpdate: boolean;
    isDelete: boolean;
    childrenHeader?: React.ReactNode;
    childrenBody?: React.ReactNode;
}

export default function DatatableChakra({ data, isUpdate, isDelete, childrenHeader, childrenBody }: ITableProps) {
    return (
        <TableContainer>
            <Table size='sm'>
                {data.length > 0 && (
                    <Thead>
                        <Tr>
                            {Object.keys(data[0]).map((key) => (
                                typeof data[0][key] === "number" ?
                                    <Th color={'white'} key={key} isNumeric textAlign={'right'}>{key}</Th> :
                                    <Th color={'white'} key={key}>{key}</Th>
                            ))}
                            {childrenHeader}
                            {isUpdate && <Th color={'white'} textAlign={'center'}>Update</Th>}
                            {isDelete && <Th color={'white'} textAlign={'center'}>Delete</Th>}
                        </Tr>
                    </Thead>
                )}
                <Tbody borderRadius={'10px'}>
                    {data.map((row, index) => (
                        <Tr key={index} bg={'black'} borderRadius={'10px'} _hover={{
                            bg: 'gray.700',
                            transition: '0.2s',
                        }}>
                            {Object.keys(row).map((key, index) => (
                                typeof row[key] === 'number' ?
                                    <Td color={'white'} isNumeric key={index}>{row[key]}</Td> :
                                    <Td color={'white'} key={index}>{row[key]}</Td>
                            ))}
                            {childrenBody}
                            {/*isUpdate && <Td textAlign={'center'}><IconButton
                                onClick={() => handleUpdate(row.id)}
                                bgColor={'#252525'}
                                color={'white'}
                                aria-label='Update'
                                icon={<FiDatabase />}
                                _hover={{
                                    color: 'black',
                                    bg: 'white',
                                }}
                            /></Td>*/}
                            {isUpdate && <UpdateArtistModal artistId={row.id} />}
                            {/*isDelete && <Td textAlign={'center'}><IconButton
                                onClick={() => console.log('delete id: ', row.id)}
                                bgColor={'#252525'}
                                color={'white'}
                                aria-label='Delete'
                                icon={<FiDelete />}
                                _hover={{
                                    color: 'black',
                                    bg: 'white',
                                }}
                            /></Td>*/}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}