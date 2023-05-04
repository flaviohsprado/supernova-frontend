import { useDisclosure } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { AuthContext } from '../../../contexts/auth.context'
import PrimaryButton from '../../global/Button/Primary'
import StyledInput from '../../global/StyledInput'
import StyledModal from '../../global/StyledModal'

export default function Signin() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signIn } = useContext(AuthContext)

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        signIn({ email, password })
    }

    return (
        <>
            <PrimaryButton
                label={'Login'}
                props={{
                    type: 'submit',
                    width: '10%',
                    onClick: onOpen,
                }}
            />
            <StyledModal
                title={'Type your credentials to listen !'}
                isOpen={isOpen}
                onClose={onClose}
                onOpen={onOpen}
            >
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
                    <PrimaryButton
                        label={'Login'}
                        props={{
                            type: 'submit',
                            width: '100%',
                        }}
                    />
                </form>
            </StyledModal>
        </>
    )
}
