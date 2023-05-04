import { Button, ButtonProps } from '@chakra-ui/react'

interface IPrimaryButtonProps {
    label: string
    props?: ButtonProps
}

export default function PrimaryButton({ label, props }: IPrimaryButtonProps) {
    return (
        <Button
            backgroundColor={'primary.main'}
            variant={'solid'}
            color={'white'}
            borderRadius={'20px'}
            _hover={{
                backgroundColor: 'primary.light',
            }}
            {...props}
        >
            {label}
        </Button>
    )
}
