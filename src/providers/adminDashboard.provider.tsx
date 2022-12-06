import { useContext } from "react";
import { AdminDashboardContext } from "../contexts/admin.context";

export const useAdminDashboard = () => useContext(AdminDashboardContext)