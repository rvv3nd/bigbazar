import logo from '../img/BB-logo-removebg-preview.png';
import React from 'react';
import {Link} from 'react-router-dom';
import {useAuth} from '../context/authContext';

const Navbar = () => {
    const {logout} = useAuth()
    const {user} = useAuth()
    const handlerLogout= async () => {
        await logout()
    }
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/"><img src={logo} alt="logo"></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bazares"> Bazares</Link> 
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/pedidos">Pedidos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/ayuda">Ayuda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <form className="my-2 my-lg-0 buscador">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Ordenar por...</option>
                            <option value="1">Precio Menor a Mayor</option>
                            <option value="2">Ubicación</option>
                            <option value="3">Talla</option>
                        </select>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick="ordenar()">🔍</button>
                    </form> */}
                    {user && <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={handlerLogout}>Salir</button>}
                    {!user && <Link className="btn btn-outline-success my-2 my-sm-0" to="/login">Ingresar</Link>}
                </nav>
            </div>
        )
};

export default Navbar;