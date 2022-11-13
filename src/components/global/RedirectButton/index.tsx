import { Button } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function RedirectButton(props: {
    url: string,
    label?: string, 
    color: string,
    fontColor: string,
    type: "button" | "submit" | "reset" | undefined, 
    width?: string, 
    height?: string,
    hoverColor?: string
}) {    
    return (
        <NextLink href={props.url} passHref>
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
        </NextLink>
    )    
}