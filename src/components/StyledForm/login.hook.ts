import { useState } from "react";
import { useLoginMutation } from "../../graphql/generated";

export const useLoginHook = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [ login, options ] = useLoginMutation()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const { data: dataLogin } = await login({
            variables: {
                username,
                password 
            }
        })

        console.log(dataLogin?.login.accessToken)
  };

  return { handleSubmit, password, username, setUsername, setPassword }
}