import { CheckIcon } from '@chakra-ui/icons';
import {
  FormLabel, Input,
  InputGroup, InputRightElement
} from "@chakra-ui/react";

export default function StyledInput(props: {
  label?: string,
  labelColor: string,
  inputColor: string,
  value: string,
  type: string,
  onUpdated: any,
  required?: boolean,
  rest?: any
}) {
  const handleChange = (event: any) => {
    props.onUpdated(event.target.value)
  }

  return (
    <>
      <FormLabel paddingLeft={'16px'} color={props.labelColor}>{props.label}</FormLabel>
      <InputGroup pb='10px'>
        <Input
          color={props.inputColor}
          placeholder={props.label ? `Type your ${props.label}` : 'Type here'}
          isRequired={props.required}
          value={props.value}
          type={props.type}
          onChange={handleChange}
          borderRadius={'20px'}
          {...props.rest}
        />
        <InputRightElement>
          {props.value.length ? <CheckIcon color="green.500" /> : <></>}
        </InputRightElement>
      </InputGroup>
    </>
  );
}
