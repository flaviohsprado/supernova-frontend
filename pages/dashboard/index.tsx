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
            gridTemplateRows={'1fr 6fr 2fr'}
            gridTemplateColumns={'1fr 4fr 1fr'}
            maxH={'100vh'}
            gap="1"
            bgColor={'#252525'}
        >
            <GridItem
                area={'header'}
                marginTop={1}
                backgroundColor={'black'}
                borderRadius={'10px'}
            >
                <DashboardHeader setPage={setPage} />
            </GridItem>
            <GridItem area={'sidebar'} marginLeft={2} marginTop={1}>
                <Sidebar userId={String(user?.id)} setPage={setPage} />
            </GridItem>
            <GridItem area={'main'}>
                <Box
                    backgroundColor={'black'}
                    borderRadius={'10px'}
                    maxHeight={'calc(100vh - 32vh)'}
                    whiteSpace={'nowrap'}
                    overflowY={'auto'}
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
            <GridItem area={'friendbar'} marginRight={2} marginTop={1}>
                <FriendSidebar />
            </GridItem>
            <GridItem
                area={'footer'}
                backgroundColor={'black'}
                padding={'10px'}
                borderRadius={'10px'}
                marginBottom={2}
                marginRight={2}
                marginLeft={2}
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
