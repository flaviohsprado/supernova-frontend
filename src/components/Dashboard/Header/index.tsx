import { Flex } from '@chakra-ui/react'
import { ReactNode, useContext } from 'react'
import { AuthContext } from '../../../contexts/auth.context'
import AnonymousMenu from '../AnonymousMenu'
import Navigator from '../Navigator'
import ProfileMenu from '../ProfileMenu'

interface IDashboardHeader {
    setPage: React.Dispatch<React.SetStateAction<ReactNode>>
    avatarUrl?: string
    username?: string
}

export default function DashboardHeader({ setPage }: IDashboardHeader) {
    const { user, isAuthenticated } = useContext(AuthContext)

    return (
        <Flex
            padding={3}
            align="center"
            justifyContent={'space-between'}
            width={'60vw'}
        >
            <Navigator />
            {isAuthenticated ? (
                <ProfileMenu
                    setPage={setPage}
                    avatarUrl={String(user?.avatar)}
                    username={String(user?.username)}
                />
            ) : (
                <AnonymousMenu />
            )}
        </Flex>
    )
}
