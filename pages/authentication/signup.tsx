import {
    Box, Flex, Stack, Text
} from "@chakra-ui/react";
import FormSignUp from "../../src/components/Authentication/Signup/Form";

export default function SignUp() {
    return (        
        <Flex 
            align="center" 
            justifyContent={'center'} 
            alignItems={'center'} 
            minH={'100vh'} 
            backgroundColor={'black'}             
        >
            <Box bg='#3E3E3E' borderRadius='20px' maxW={'sm'} minH={'70vh'}>
                <Flex
                    padding={5}
                    align="center"
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Stack spacing={3}>
                        <Text fontSize='xl' color={'white'}>Sign up</Text>
                    </Stack>
                </Flex>
                <FormSignUp/>
            </Box>            
        </Flex>
    )
}