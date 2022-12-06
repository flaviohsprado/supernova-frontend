import {
  FormControl, Heading, Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useForgotPasswordHook } from '../../../hooks/auth/useforgotPassword';
import SecondaryButton from '../../global/StyledButton';
import StyledInput from '../../global/StyledInput';

export default function ForgotPasswordForm(): JSX.Element {
  const { email, errorMessage, handleSubmit, setEmail, isEmailSent } = useForgotPasswordHook()

  return (
    <Stack
      spacing={4}
      w={'full'}
      maxW={'md'}
      bg={useColorModeValue('white', 'gray.700')}
      rounded={'xl'}
      boxShadow={'lg'}
      p={6}
      my={12}>
      <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
        Forgot your password?
      </Heading>
      <Text
        fontSize={{ base: 'sm', sm: 'md' }}
        color={`black`}>
        You&apos;ll get an email with a reset link
      </Text>
      <FormControl id="email" onSubmit={handleSubmit}>
        <StyledInput
          inputColor={'black'}
          labelColor={'black'}
          value={email}
          type={"text"}
          onUpdated={(value: string) => setEmail(value)}
          required={true}
        />
      </FormControl>
      <Stack spacing={6}>
        <SecondaryButton
          label={'Reset'}
          color={'#1DB954'}
          type={'submit'}
          fontColor={'white'}
          width={'sm'}
        />
      </Stack>
    </Stack>
  );
}