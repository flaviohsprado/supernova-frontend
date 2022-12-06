import { useFindUserQuery } from "../../graphql/generated";

interface IUserInfo {
    id: string;
    username: string;
    avatarUrl: string;
}

export const useGetUserInfo = () => {
    const { data } = useFindUserQuery()

    const userInfo: IUserInfo = {
        id: data?.findUser.id || '',
        username: data?.findUser.username || '',
        avatarUrl: data?.findUser.file?.url || ''
    }

    return { userInfo };
}