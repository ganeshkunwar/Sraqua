import axios from "../api/axios";
import useAtuh from "./useAuth";

const useLogout = () => {
    const {setAuth} = useAtuh();

    const logout = async () => {
        setAuth({});
        try{
            const response = await axios.get('/logout', {
                withCredentials: true
            });
        }catch(error){
            console.log(error);
        }
    }

    return logout;
}

export default useLogout;