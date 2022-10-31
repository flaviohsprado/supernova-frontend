import { Flex } from "@chakra-ui/react";
import StyledButton from "../../StyledButton";
import StyledInput from "../../StyledInput/index";
import { useLoginHook } from "./login.hook";

export default function FormLogin(props: any) {
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
        <Flex
          align="center"
          justifyContent={'center'}
          alignItems={'center'}
        >
            <StyledButton
              label={'Login'}
              color={'#1DB954'}
              type={'submit'}
              fontColor={'white'}
            />
        </Flex>
    </form>
  );
}
