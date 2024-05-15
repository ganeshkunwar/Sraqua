import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAtuh from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAtuh();
    const location = useLocation();
    return (
        auth?.user
            ? <Outlet />
            : <Navigate to='/login' state={{ from: location }} replace />
    )
}

export default RequireAuth
