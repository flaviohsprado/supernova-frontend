import { ReactNode, useState } from "react";
import HomePage from "../../src/components/AdminPage/Home";
import AdminSidebar from "../../src/components/AdminPage/Sidebar";
import { AdminDashboardContext } from "../../src/contexts/album.context";

export default function Dashboard() {
    const [page, setPage] = useState<ReactNode>(<HomePage />);

    return (
        <>
            <AdminDashboardContext.Provider value={{ ownerId: '' }}>
                <AdminSidebar setPage={setPage}>
                    {page}
                </AdminSidebar>
            </AdminDashboardContext.Provider>
        </>
    )
}