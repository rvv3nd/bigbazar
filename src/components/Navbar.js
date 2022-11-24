import logo from '../img/BB-logo-clean.png';
import React from 'react';
import {Link, BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Bazares from './Bazares';
import Ayuda from './Ayuda';
import Catalogo from './Catalogo';
import { render } from "react-dom";
import Contacto from './Contacto';
const root = document.getElementById("root");
const Navbar = () => {
    render (
        <Router>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/"><img src={logo} alt="logo"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/bazares"> Bazares</Link> 
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/ayuda">Ayuda</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                    </div>
                    <form class="my-2 my-lg-0 buscador">
                        <input class="form-control mr-sm-2" type="search" placeholder="Buscar..." aria-label="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">🔍</button>
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