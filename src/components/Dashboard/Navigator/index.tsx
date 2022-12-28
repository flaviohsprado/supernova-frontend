import { Flex, IconButton } from '@chakra-ui/react'
import { GrNext, GrPrevious } from 'react-icons/gr'

export default function Navigator() {
    const handlePreviousContent = () => {
        console.log('previous')
    }

    const handleNextContent = () => {
        console.log('next')
    }

    return (
        <Flex justifyContent={'space-around'} width={'7vw'}>
            <IconButton
                borderRadius={'20px'}
                bgColor={'#aba9a9'}
                aria-label="Previous page"
                icon={<GrPrevious />}
                onClick={handlePreviousContent}
            />
            <IconButton
                borderRadius={'20px'}
                bgColor={'#aba9a9'}
                aria-label="Next page"
                icon={<GrNext />}
                onClick={handleNextContent}
            />
        </Flex>
    )
}
