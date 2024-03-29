import { Flex, FlexProps, Icon } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { IconType } from 'react-icons'

interface INavItemProps extends FlexProps {
    icon: IconType
    isActiveButton?: boolean
    children: ReactNode
}

export const SidebarButton = ({
    icon,
    children,
    isActiveButton,
    ...rest
}: INavItemProps) => {
    return (
        <Flex
            align="center"
            padding="4"
            mx="4"
            borderRadius="lg"
            role="group"
            cursor="pointer"
            bgColor={isActiveButton ? '#1DB954' : 'inherit'}
            _hover={{
                bg: '#1DB954',
                color: 'white',
                transition: '0.2s',
            }}
            {...rest}
        >
            {icon && (
                <Icon
                    color={'white'}
                    mr="4"
                    fontSize="16"
                    _groupHover={{
                        color: 'white',
                    }}
                    as={icon}
                />
            )}
            {children}
        </Flex>
    )
}
