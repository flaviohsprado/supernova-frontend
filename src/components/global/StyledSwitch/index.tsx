import { Switch } from '@chakra-ui/react'

interface IStyledSwitchProps {
    isRequired?: boolean
    onUpdated: any
    isChecked: boolean
}

export default function StyledSwitch({
    isRequired,
    onUpdated,
    isChecked,
}: IStyledSwitchProps) {
    const handleChange = (event: any) => {
        onUpdated(event.target.checked)
    }

    return (
        <Switch
            paddingBottom={'10px'}
            colorScheme={'green'}
            isRequired={isRequired}
            onChange={handleChange}
            isChecked={isChecked}
        />
    )
}
