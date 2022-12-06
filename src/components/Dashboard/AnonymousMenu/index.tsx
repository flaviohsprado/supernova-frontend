import { Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'

export default function AnonymousMenu() {
    const handleSignin = (event: any) => {
        event.preventDefault()
    }

    return (
        <Flex>
            <Link href={'/login'}>
                <Button
                    onClick={handleSignin}
                    bgColor={'black'}
                    color={'white'}
                    borderRadius={'50px'}
                    _hover={{
                        bgColor: '#1DB954',
                        color: 'white',
                    }}
                >
                    Sign in
                </Button>
            </Link>
        </Flex>
    )
}
