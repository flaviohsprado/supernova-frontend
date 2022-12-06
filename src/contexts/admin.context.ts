import React, { Dispatch, SetStateAction } from "react";

interface IAdminContext {
    id: string;
    setId: Dispatch<SetStateAction<string>>
}

export const AdminDashboardContext = React.createContext<IAdminContext>({
    id: '',
    setId: () => {}
})