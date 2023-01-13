import { CheckIcon } from '@chakra-ui/icons'
import {
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'

interface IStyledInputProps {
    label: string
    value: string
    type: string
    onUpdated: any
    labelColor?: string
    inputColor?: string
    required?: boolean
    rest?: any
}

export default function StyledInput({
    label,
    value,
    type,
    onUpdated,
    inputColor,
    labelColor,
    required,
    rest,
}: IStyledInputProps) {
    const handleChange = (event: any) => {
        onUpdated(event.target.value)
    }

    return (
        <>
            <FormLabel
                paddingLeft={'16px'}
                color={labelColor ? labelColor : 'white'}
            >
                {label}
            </FormLabel>
            <InputGroup pb="10px">
                <Input
                    color={inputColor ? inputColor : 'white'}
                    placeholder={label ? `Type your ${label}` : 'Type here'}
                    isRequired={required}
                    value={value}
                    type={type}
                    onChange={handleChange}
                    borderRadius={'20px'}
                    {...rest}
                />
                <InputRightElement>
                    {value.length ? <CheckIcon color="green.500" /> : <></>}
                </InputRightElement>
            </InputGroup>
        </>
    )
}
