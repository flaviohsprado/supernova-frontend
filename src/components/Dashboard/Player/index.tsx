import { Box, Container, Flex, Stack, Text } from "@chakra-ui/react";

export default function Player() {
    return (
        <Box bg={'black'} maxW={'100vw'} height={'auto'}>
            <Flex justifyContent={'space-between'}>
                <Text>© 2022 Chakra Templates. All rights reserved</Text>
                <Stack direction={'row'} spacing={6}>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Service</Text>
                </Stack>
            </Flex>
        </Box >
    )
}