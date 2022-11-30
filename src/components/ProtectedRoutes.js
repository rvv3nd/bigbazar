import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export function ProtectedRoutes({ children }) {
    const {user, loading} = useAuth()
    const navigate = useNavigate()
    if(loading){
        return <div>Loading...</div>
    }
    if(!user){
        navigate('/login')
        return null
    }
    return <>{children}</> 
}