import { Button, color } from '@chakra-ui/react'

export default function SignUpButton(props: { 
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
                bg: props.hoverColor ? props.hoverColor : '#d9dbda'
            }}
        >
            {props.label}
        </Button>
    )
}