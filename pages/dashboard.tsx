import { Grid, GridItem } from "@chakra-ui/react";
import FriendSidebar from "../src/components/Dashboard/FriendSidebar";
import DashboardHeader from "../src/components/Dashboard/Header";
import Player from "../src/components/Dashboard/Player";
import Sidebar from "../src/components/Dashboard/SideBar";

export default function Dashboard() {
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
            gap='1'
            bgColor={'#252525'}
        >
            <GridItem area={'header'}>
                <DashboardHeader />
            </GridItem>
            <GridItem area={'sidebar'} padding={'10px'}>
                <Sidebar />
            </GridItem>
            <GridItem bg='green.300' area={'main'}>
                Main
            </GridItem>
            <GridItem area={'friendbar'} padding={'10px'}>
                <FriendSidebar />
            </GridItem>
            <GridItem bg='blue.300' area={'footer'}>
                <Player />
            </GridItem>
        </Grid>
    )
}