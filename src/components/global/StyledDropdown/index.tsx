import { Box, FormLabel, Select } from "@chakra-ui/react";

export interface IStyledDropdownProps {
    placeholder: string;
    label: string;
    labelColor: string;
    options: any[];
    onUpdated: any;
    value?: string;
}

export const StyledDropdown = ({ placeholder, label, labelColor, options, onUpdated, value, ...rest }: IStyledDropdownProps) => {
    const handleChange = (event: any) => {
        onUpdated(event.target.value)
    }

    return (
        <Box paddingBottom={'16px'}>
            <FormLabel paddingLeft={'16px'} color={labelColor}>{label}</FormLabel>
            <Select
                borderRadius={'20px'}
                bgColor={'white'}
                placeholder={placeholder}
                onChange={handleChange}
                value={value}
                {...rest}
            >
                {options.map((option, index) => (                    
                    <option key={index} value={option.id}>{option.name}</option>
                ))}
            </Select>
        </Box>
    )
}