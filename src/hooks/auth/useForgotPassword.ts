import { useState } from "react";

export const useForgotPasswordHook = () => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isEmailSent, setIsEmailSent] = useState(false);

    //const [ forgotPassword, options ] = useForgotPasswordMutation()

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        /*const { data, errors } = await forgotPassword({
            variables: {
                email
            }
        })*/

        //if (errors) setErrorMessage(errors[0].message)

        //if (data?.forgotPassword) setIsEmailSent(true)
  };

  return { handleSubmit, email, setEmail, errorMessage, isEmailSent }
}