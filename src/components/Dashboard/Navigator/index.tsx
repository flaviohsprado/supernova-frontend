import { Flex, IconButton } from "@chakra-ui/react";
import { GrNext, GrPrevious } from 'react-icons/gr';

export default function Navigator() {
    return (
        <Flex
            minW={'7vw'}
            maxW={'12vw'}
            justifyContent={'space-between'}
        >
            <IconButton
                borderRadius={'20px'}
                bgColor={'#aba9a9'}
                aria-label='Previous page'
                icon={<GrPrevious />}
            />
            <IconButton
                borderRadius={'20px'}
                bgColor={'#aba9a9'}
                aria-label='Next page'
                icon={<GrNext />}
            />
        </Flex> 
    )
}