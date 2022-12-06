import { useRouter } from 'next/router'
import { parseCookies, setCookie } from 'nookies'
import { ReactNode, useEffect, useState } from 'react'
import { AuthContext, IUser } from '../contexts/auth.context'
import { loginMutation } from '../graphql/auth/login.mutation'
import { findUserQuery } from '../graphql/user/findUser.query'
import { JwtUtils } from '../utils/jwt.utils'

interface IAuthProviderProps {
    children: ReactNode
}

interface ICredentials {
    email: string
    password: string
}

export default function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser | null>(null)
    const isAuthenticated = !!user
    const router = useRouter()

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()

        if (token) {
            const fetchData = async () => await findUserQuery()

            fetchData().then((data) => {
                const { findUser } = data

                if (findUser) {
                    setUser({
                        id: findUser.id,
                        username: findUser.username,
                        avatar: String(findUser.file?.url),
                    })
                }
            })
        }
    }, [])

    async function signIn({ email, password }: ICredentials) {
        try {
            const data = await loginMutation({ email, password })

            const accessToken = data?.login.accessToken

            setCookie(undefined, 'nextauth.token', String(accessToken), {
                maxAge: 60 * 60 * 24, // 1 day
            })

            const tokenDecoded = (await JwtUtils.decode(accessToken)) as IUser

            setUser({
                id: tokenDecoded?.id,
                username: tokenDecoded?.username,
                avatar: tokenDecoded?.avatar,
            })

            router.push('/dashboard')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, signIn }}>
            {children}
        </AuthContext.Provider>
    )
}
