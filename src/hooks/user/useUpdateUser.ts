import { ApolloError } from "@apollo/client";
import { Toast, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useFindUserQuery, useUpdateUserMutation } from "../../graphql/generated";

export const useUpdateUser = (id: string, onClose: () => void) => {
    const [username, setUsername] = useState('')

    const toast = useToast()

    const [ updateUser ] = useUpdateUserMutation()
    const { refetch } = useFindUserQuery()

    const handleUpdateUser = async (event: any) => {
        event.preventDefault();

        try {
            await updateUser({ variables: { id, username } })
            await refetch()

            toast({
                title: 'You got updated!',
                status: 'success',
                duration: 3000,
                isClosable: true,
            })

            setUsername('')
            onClose()
        } catch (err) {
            Toast({
                title: 'Error on update.',
                description: err instanceof ApolloError ? err?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    };

    return { username, setUsername, handleUpdateUser };
}