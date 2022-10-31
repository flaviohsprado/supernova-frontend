import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormLabel
} from "@chakra-ui/react";
import { CheckIcon } from '@chakra-ui/icons'

export default function StyledInput(props: { 
  label: string,
  labelColor: string,
  inputColor: string,
  value: string, 
  type: string, 
  onUpdated: any,
  required?: boolean
}) {
  const handleChange = (event: any) => {
    props.onUpdated(event.target.value)
  }

  return (
    <>
        <FormLabel color={props.labelColor}>{props.label}</FormLabel>
        <InputGroup pb='10px'>            
            <Input
                color={props.inputColor}            
                placeholder={`Type your ${props.label}`}
                isRequired={props.required}
                value={props.value}
                type={props.type}
                onChange={handleChange}
            />
            <InputRightElement children={props.value.length ? <CheckIcon color="green.500" /> : <></>} />
        </InputGroup>
    </>
  );
}
