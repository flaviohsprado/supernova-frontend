import { FormLabel, Switch } from '@chakra-ui/react'

interface IStyledSwitchProps {
    label: string
    isRequired?: boolean
    onUpdated: any
    isChecked: boolean
}

export default function StyledSwitch({
    label,
    isRequired,
    onUpdated,
    isChecked,
}: IStyledSwitchProps) {
    const handleChange = (event: any) => {
        onUpdated(event.target.checked)
    }

    return (
        <>
            <FormLabel paddingLeft={'16px'} color={'white'}>
                {label}
            </FormLabel>
            <Switch
                paddingBottom={'10px'}
                colorScheme={'green'}
                isRequired={isRequired}
                onChange={handleChange}
                isChecked={isChecked}
            />
        </>
    )
}
