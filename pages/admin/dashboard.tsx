import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { ReactNode, useState } from 'react'
import HomePage from '../../src/components/AdminPage/Home'
import AdminSidebar from '../../src/components/AdminPage/Sidebar'

export default function Dashboard() {
    const [page, setPage] = useState<ReactNode>(<HomePage />)

    return (
        <>
            <AdminSidebar setPage={setPage}>{page}</AdminSidebar>
        </>
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
