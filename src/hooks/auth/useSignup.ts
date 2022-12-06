import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCreateUserMutation } from "../../graphql/generated";

export async function getServerSideProps(context: any) {
  return {
    redirect: {
      permanent: false,
      destination: '/?status=401',
    }
  };
}

export const useSignUpHook = () => {
  const router = useRouter();
  const toast = useToast();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState("");

  const [createUser, options] = useCreateUserMutation()

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Error on signup",
        description: 'Password and confirm password are different',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      })

      return;
    }

    const { data, errors } = await createUser({
      variables: {
        username,
        password,
        email
      }
    })

    if (errors) setErrorMessage(errors[0].message)

    localStorage.setItem("accessToken", String(data?.createUser.accessToken));

    toast({
      title: "We've created your account!",
      description: 'Your account has been created successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    })

    router.push("/dashboard");
  };

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    verifyPassword: confirmPassword,
    setVerifyPassword: setConfirmPassword,
    errorMessage,
    handleSubmit
  }
}