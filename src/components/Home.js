import Catalogo from './Catalogo';
import {useAuth} from '../context/authContext';


export function Home(){
    const {user, loading} = useAuth()
    console.log(user)
    if(loading){
        return <div>Loading...</div>
    }
    return (
        <>
        <div className="Home">
            <Catalogo/>
        </div>
        </>
    )
}