import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useRefresh from "../hooks/useRefresh";
import useAtuh from "../hooks/useAuth";

const PresistLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefresh();
    const { auth } = useAtuh();

    useEffect(() => {
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
        !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    }, [])

    useEffect(() => {
        console.log(`isLoading: ${isLoading}`);
        console.log(`aT: ${JSON.stringify(auth?.accessToken)}`);
    }, [isLoading])

    return (
        <>
            {
                isLoading
                    ? <p>Loading ...</p>
                    : <Outlet />
            }
        </>
    )
}

export default PresistLogin;