import { Flex } from "@chakra-ui/react";
import ForgotPasswordForm from "../../src/components/Authentication/Forgot";

   
  export default function ForgotPassword(): JSX.Element {
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={'black'}>
            <ForgotPasswordForm/>
      </Flex>
    );
  }