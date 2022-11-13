import { Button } from '@chakra-ui/react'

export default function StyledButton(props: {
    label: string,
    color: string,
    fontColor: string,
    type: "button" | "submit" | "reset" | undefined,
    width?: string,
    height?: string,
    hoverColor?: string
    padding?: string
}) {
    return (
        <Button
            type={props.type}
            bgColor={props.color}
            color={props.fontColor}
            w={props.width}
            h={props.height}
            borderRadius={20}
            padding={props.padding}
            _hover={{
                bg: props.hoverColor ? props.hoverColor : '#147a38'
            }}
        >
            {props.label}
        </Button>
    )
}