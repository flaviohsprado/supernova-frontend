import {
    Box, Flex
} from "@chakra-ui/react";
import FormLogin from "../../src/components/login/Form";

export default function Login() {
    return (        
        <Flex 
            align="center" 
            justifyContent={'center'} 
            alignItems={'center'} 
            minH={'100vh'} 
            backgroundColor={'black'}             
        >
            <Box bg='#3E3E3E' borderRadius='10px' w={'400px'} h={'250px'}>
                <FormLogin/>
            </Box>            
        </Flex>
    )
}