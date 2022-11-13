import { Flex } from "@chakra-ui/react";
import Navigator from "../Navigator";
import ProfileMenu from "../ProfileMenu";

export default function DashboardHeader(props: { avatarUrl?: string, username?: string }) {
    return (
        <Flex
            padding={'10px'}
            align="center"
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <Navigator />
            <ProfileMenu avatarUrl="https://github.com/flaviohsprado.png" username="Flávio Prado" />
        </Flex>
    )
}