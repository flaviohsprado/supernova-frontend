import { ApolloError } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useLoginMutation } from "../../../../graphql/generated";

export const useLoginHook = () => {
    const toast = useToast()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const [ login ] = useLoginMutation()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: {
                    username,
                    password 
                }
            })   
            
            localStorage.setItem("accessToken", String(data?.login.accessToken));

            router.push("/dashboard");
        } catch (err) {            
            toast({
                title: 'Error on login',
                description: err instanceof ApolloError ?  err?.graphQLErrors[0].message : 'An unexpected error has occurred',
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
  };

  return { handleSubmit, password, username, setUsername, setPassword }
}