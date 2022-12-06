import { Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useSignUpHook } from "../../../../hooks/auth/useSignup";
import StyledInput from "../../../global/StyledInput";
import SignUpButton from "../Button/index";

export default function FormSignUp(props: any) {
  const { username, setUsername, email, setEmail, password, setPassword, verifyPassword, setVerifyPassword, handleSubmit, errorMessage } = useSignUpHook()

  return (
    <form style={{ padding: '20px' }} onSubmit={handleSubmit}>
      <StyledInput
        label={"Username"}
        inputColor={'white'}
        labelColor={'white'}
        value={username}
        type={"text"}
        onUpdated={(value: string) => setUsername(value)}
        required={true}
      />
      <StyledInput
        label={"Email"}
        inputColor={'white'}
        labelColor={'white'}
        value={email}
        type={"email"}
        onUpdated={(value: string) => setEmail(value)}
        required={true}
      />
      <StyledInput
        inputColor={'white'}
        labelColor={'white'}
        label={"Password"}
        value={password}
        type={"password"}
        onUpdated={(value: string) => setPassword(value)}
        required={true}
      />
      <StyledInput
        inputColor={'white'}
        labelColor={'white'}
        label={"Confirm Password"}
        value={verifyPassword}
        type={"password"}
        onUpdated={(value: string) => setVerifyPassword(value)}
        required={true}
      />
      <Flex
        paddingTop={'7'}
        align="center"
        justifyContent={'center'}
        alignItems={'center'}
      >
        <SignUpButton
          label={'Sign Up'}
          color={'#FFF'}
          type={'submit'}
          fontColor={'black'}
          width={'lg'}
        />
      </Flex>
      <Stack pt={6}>
        <Flex justifyContent={'center'}>
          <Text color={'white'} align={'center'} paddingRight={'5px'}>Already a user?</Text>
          <Link href={'/authentication/login'}>
            <Text color={'#1DB954'} align={'center'}>Login</Text>
          </Link>
        </Flex>
      </Stack>
    </form>
  );
}
