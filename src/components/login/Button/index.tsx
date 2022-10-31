import { Button } from '@chakra-ui/react'

export default function LoginButton(props: { 
    label: string, 
    color: string,
    fontColor: string,
    type: "button" | "submit" | "reset" | undefined, 
    width?: string, 
    height?: string 
}) {
    return (
        <Button
            type={props.type}
            bgColor={props.color}
            color={props.fontColor}            
            w={props.width}
            h={props.height}
        >
            {props.label}
        </Button>
    )
}