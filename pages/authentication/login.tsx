import {
    Box, Flex
} from "@chakra-ui/react";
import FormLogin from "../../src/components/Authentication/Login/Form";


export default function Login() {
    return (        
        <Flex 
            align="center" 
            justifyContent={'center'} 
            alignItems={'center'} 
            minH={'100vh'} 
            backgroundColor={'black'}             
        >
            <Box bg='#3E3E3E' borderRadius='20px' maxW={'sm'} minH={'70vh'}>
                <FormLogin/>
            </Box>            
        </Flex>
    )
}