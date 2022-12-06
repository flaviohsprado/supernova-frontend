import {
    Checkbox,
    Flex,
    HStack,
    IconButton,
    Stack,
    Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useContext, useState } from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../../../contexts/auth.context'
import RedirectButton from '../../../global/RedirectButton'
import StyledInput from '../../../global/StyledInput'
import LoginButton from '../Button/index'

export default function FormLogin(props: any) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        signIn({ email, password })
    }

    return (
        <form style={{ padding: '20px' }} onSubmit={handleSubmit}>
            <StyledInput
                label={'Email'}
                inputColor={'white'}
                labelColor={'white'}
                value={email}
                type={'email'}
                onUpdated={(value: string) => setEmail(value)}
                required={true}
            />
            <StyledInput
                inputColor={'white'}
                labelColor={'white'}
                label={'Password'}
                value={password}
                type={'password'}
                onUpdated={(value: string) => setPassword(value)}
                required={true}
            />
            <Flex
                paddingTop={2}
                align="center"
                justifyContent={'center'}
                alignItems={'center'}
            >
                <LoginButton
                    label={'Login'}
                    color={'#1DB954'}
                    type={'submit'}
                    fontColor={'white'}
                    width={'lg'}
                />
            </Flex>
            <Flex align={'start'} justify={'space-between'} paddingTop={'5'}>
                <Checkbox color={'white'}>Remember me</Checkbox>
                <Link href={'/authentication/forgotPassword'}>
                    <Text color={'#FFF'} align={'center'}>
                        Forgot password?
                    </Text>
                </Link>
            </Flex>
            <Flex
                padding={5}
                align="center"
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Stack spacing={3}>
                    <Text fontSize="sm" color={'white'}>
                        Or Sign Up Using
                    </Text>
                </Stack>
            </Flex>
            <Flex
                align="center"
                justifyContent={'center'}
                alignItems={'center'}
            >
                <HStack>
                    <IconButton
                        aria-label="Login with Facebook"
                        borderRadius={20}
                        colorScheme="facebook"
                        icon={<FaFacebook />}
                    />
                    <IconButton
                        aria-label="Login with Facebook"
                        borderRadius={20}
                        bgColor={'white'}
                        icon={<FcGoogle />}
                    />
                </HStack>
            </Flex>
            <Flex
                paddingTop={'7'}
                align="center"
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Stack spacing={3}>
                    <Text fontSize="sm" color={'white'}>
                        Or Sign Up Using
                    </Text>
                </Stack>
            </Flex>
            <Flex
                paddingTop={'7'}
                align="center"
                justifyContent={'center'}
                alignItems={'center'}
            >
                <RedirectButton
                    url="/authentication/signup"
                    label={'Sign Up'}
                    color={'#FFF'}
                    type={'button'}
                    fontColor={'black'}
                    width={'100px'}
                    hoverColor={'#d9dbda'}
                />
            </Flex>
        </form>
    )
}
