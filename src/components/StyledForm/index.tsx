import { Flex } from "@chakra-ui/react";
import StyledButton from "../StyledButton";
import StyledInput from "../StyledInput/index";
import { useLoginHook } from "./login.hook";

export default function StyledForm(props: any) {
    const { handleSubmit, username, password, setPassword, setUsername } = useLoginHook()

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
          inputColor={'white'}
          labelColor={'white'}
          label={"Password"}
          value={password}
          type={"password"}
          onUpdated={(value: string) => setPassword(value)}
          required={true}
        />
        <Flex align="center" justify="space-between">
            <StyledButton label='Login' color='green' type={'submit'} />
            <StyledButton label='Sign up' color='blue' type={'button'} />
        </Flex>
    </form>
  );
}
