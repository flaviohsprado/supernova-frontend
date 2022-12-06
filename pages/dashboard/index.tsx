import { Box, Grid, GridItem } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { ReactNode, useContext, useState } from 'react'
import FriendSidebar from '../../src/components/Dashboard/FriendSidebar'
import DashboardHeader from '../../src/components/Dashboard/Header'
import Player from '../../src/components/Dashboard/Player'
import Sidebar from '../../src/components/Dashboard/SideBar'
import HomePageDashboard from '../../src/components/Home'
import { AuthContext } from '../../src/contexts/auth.context'

export default function Dashboard() {
    const { user } = useContext(AuthContext)
    const [page, setPage] = useState<ReactNode>(<HomePageDashboard />)

    return (
        <Grid
            templateAreas={`
                "sidebar header friendbar"
                "sidebar main friendbar"
                "footer footer footer"
            `}
            gridTemplateRows={'1fr 7fr 2fr'}
            gridTemplateColumns={'1fr 4fr 1fr'}
            minH={'100vh'}
            gap="1"
            bgColor={'#252525'}
        >
            <GridItem
                area={'header'}
                backgroundColor={'black'}
                borderRadius={'10px'}
            >
                <DashboardHeader setPage={setPage} />
            </GridItem>
            <GridItem area={'sidebar'} padding={'10px'} height={'79vh'}>
                <Sidebar userId={String(user?.id)} setPage={setPage} />
            </GridItem>
            <GridItem area={'main'}>
                <Box
                    borderRadius={'10px'}
                    maxHeight={'68vh'}
                    whiteSpace={'nowrap'}
                    overflowY={'auto'}
                    _hover={{ overflowY: 'scroll' }}
                    sx={{
                        '&::-webkit-scrollbar': {
                            width: '10px',
                            borderRadius: '8px',
                            backgroundColor: `black`,
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: `#a3a3a3`,
                            borderRadius: '8px',
                        },
                    }}
                >
                    {page}
                </Box>
            </GridItem>
            <GridItem area={'friendbar'} padding={'10px'} height={'79vh'}>
                <FriendSidebar />
            </GridItem>
            <GridItem
                area={'footer'}
                backgroundColor={'black'}
                padding={'10px'}
                borderRadius={'10px'}
            >
                <Player />
            </GridItem>
        </Grid>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { ['nextauth.token']: token } = parseCookies(context)

    if (!token) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }

    return {
        props: {},
    }
}
