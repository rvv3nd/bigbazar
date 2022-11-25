import logo from '../img/BB-logo-removebg-preview.png';
import React from 'react';
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Bazares from './Bazares';
import Ayuda from './Ayuda';
import Catalogo from './Catalogo';
import { render } from "react-dom";
import Contacto from './Contacto';
import { Dropdown } from 'bootstrap';
const root = document.getElementById("root");
const Navbar = () => {
    render (
        <Router>
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
                            <li className="nav-item">
                                <Link className="nav-link" to="/ayuda">Ayuda</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="my-2 my-lg-0 buscador">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Ordenar por...</option>
                            <option value="1">Precio Menor a Mayor</option>
                            <option value="2">Ubicación</option>
                            <option value="3">Talla</option>
                        </select>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick="ordenar()">🔍</button>
                    </form>
                </nav>

                <Routes>
                    <Route exact path="/bazares" element={<Bazares/>}>
                    </Route>
                    <Route exact path="/ayuda" element={<Ayuda/>}>
                    </Route>
                    <Route exact path="/contacto" element={<Contacto/>}>
                    </Route>
                    <Route exact path="/" element={<Catalogo/>}>
                    </Route>
                </Routes>
            </div>
        </Router>
    ,root);
};

export default Navbar;