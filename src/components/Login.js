import { useState } from "react"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

export default function Login(){

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const {login} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({target:{name,value}}) => {
        setUser({...user,[name]: value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try{
            let userCredentials = await login(user.email, user.password)
            console.log(userCredentials)
            Swal.fire({
                text: 'Bienvenido',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            navigate("/")
            
        }catch(err){
            setError(err.message)
            Swal.fire({
                text: 'Error al iniciar sesión. Razón:'+err.message,
                icon: 'error',
                confirmButtonText: 'Ok :('
            })
        }
    }

    return (
        <div className="Login wrapper">
            {/* {error && <p>{error}</p>} */}
            <form onSubmit={handleSubmit} className="form-signin">
            <h1 className="form-signin-heading">Login</h1>
                <label class="form-label">
                    Email:
                    <input className="form-control" type="text" name="email" onChange={handleChange}/>
                </label>
                <label class="form-label">
                    Password:
                    <input className="form-control" type="password" name="password" onChange={handleChange} placeholder="******"/>
                </label>
                <button className="btn btn-lg btn-primary" type="submit">Ingresar</button>
                <button className="btn btn-lg btn-light btn-block" onClick={() => navigate("/signin")}>Crear cuenta</button>
            </form>
        </div>
    )
}