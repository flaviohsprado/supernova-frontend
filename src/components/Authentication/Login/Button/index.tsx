import { Button } from '@chakra-ui/react'

export default function LoginButton(props: { 
    label?: string, 
    color: string,
    fontColor: string,
    type: "button" | "submit" | "reset" | undefined, 
    width?: string, 
    height?: string,
    hoverColor?: string
}) {
    return (
        <Button            
            type={props.type}
            bgColor={props.color}
            color={props.fontColor}
            w={props.width}
            h={props.height}
            borderRadius={20}
            _hover={{
                bg: props.hoverColor ? props.hoverColor : '#147a38'
            }}
        >
            {props.label}
        </Button>
    )
}