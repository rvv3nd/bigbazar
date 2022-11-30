import { useEffect, useState } from "react"
import Swal from "sweetalert2"
import { useAuth } from "../context/authContext"
import { useNavigate } from "react-router-dom" 



export default function Signin(){

    useEffect(() => {
        Swal.fire({
            text: 'Por el momento solo esta disponible el registro para clientes',
            icon: 'info',
            confirmButtonText: 'Cool'
        })
    }, [])

    const [user, setUser] = useState({
        nombre: "",
        email: "",
        password: "",
        telefono: "",
        tipo: "",
    })

    const {signup} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState()

    const handleChange = ({target:{name,value}}) => {
        setUser({...user,[name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(user.nombre === "" || user.email === "" || user.password === "" || user.telefono === "" || user.tipo === ""){
            Swal.fire({
                text: 'Por favor complete todos los campos',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }else{
            try{
                await signup(user.email, user.password, user.nombre, user.telefono, user.tipo)
                    // Signed in 
                    Swal.fire({
                            text: 'Usuario creado con exito',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    navigate("/login")
            }catch(err){
                setError(err.message)
                Swal.fire({
                    text: 'Error al crear el usuario. Razón:'+err.message,
                    icon: 'error',
                    confirmButtonText: 'Ok :('
                })
            }
        }
    }

    return (
        <>
        <div className="wrapper">
            <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="form-signin-heading">Registrate</h1>
                <label class="form-label">
                    Nombre:
                    <input class="form-control" type="text" name="nombre" id="nombre"
                    onChange={handleChange} />
                </label>
                <label htmlFor="email" class="form-label">
                    Email:
                    <input class="form-control" type="email" name="email" id="email"
                    onChange={handleChange}/>
                </label>
                <label class="form-label" htmlFor="password">
                    Password:
                    <input class="form-control" type="password" name="password" id="password"
                    onChange={handleChange}/>
                </label>
                <label class="form-label">
                    Telefono
                    <input class="form-control" type="text" name="telefono" id="telefono"
                    onChange={handleChange}/>
                </label>
                <label class="checkboxes">
                    <label class="checkbox">cliente
                        <input class="form-check-input" type="radio" name="tipo" value="cliente" 
                        onChange={handleChange}/>
                    </label>
                    <label class="checkbox">vendedor
                        <input class="form-check-input" type="radio" name="userType" value="vendedor" disabled="true" />
                    </label>
                </label>
                <button className="btn btn-lg btn-primary send">Enviar</button>                
            </form>
        </div>
        </>
    )
}