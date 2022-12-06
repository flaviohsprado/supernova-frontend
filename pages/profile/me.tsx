import ProfileHeader from '../../src/components/Profile/Header'
import PlaylistProfile from '../../src/components/Profile/Playlist'
import { useGetUserInfo } from '../../src/hooks/user/useGetUserInfo'

export default function Me() {
    const { userInfo } = useGetUserInfo()

    return (
        <>
            <ProfileHeader
                userId={userInfo.id}
                username={userInfo.username}
                avatar={userInfo.avatarUrl}
                followers={18}
                following={24}
                publicPlaylists={28}
            />
            <PlaylistProfile userId={userInfo.id} />
            <PlaylistProfile userId={userInfo.id} />
            <PlaylistProfile userId={userInfo.id} />
            <PlaylistProfile userId={userInfo.id} />
        </>
    )
}
