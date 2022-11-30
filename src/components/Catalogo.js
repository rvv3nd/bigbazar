import Producto from './Producto';
/*
    Componente que recibe la respuesta del servicio "getProductos"
    para mostrar los productos en el catálogo
    El servicio puede variar con filtros que pueden venir en el props
*/
import {useEffect, useState} from 'react';
import Footer from './Footer';

function Catalogo() {
    const [productos, setProductos] = useState([]);
    async function getProductos() {
        const respuesta = await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/productos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                },
                });
        const data = await respuesta.json();
        setProductos(data);
    }
    async function getProductosPorTalla(talla) {
        const respuesta = await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/productos/porTalla', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                },
                });
        let productos = []
        respuesta.forEach(element => {
            element.productos.forEach(producto => {
                if(producto.talla === talla) {
                    productos.push(producto)
                }
            });    
        });
        return productos;
    }
    async function getProductosPrecioMayorAMenor() {
        const respuesta = await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/productos/porPrecioMayorAMenor');
        let productos = []
        respuesta.forEach(element => {
            element.productos.forEach(producto => {
                productos.push(producto)
            });    
        });
        productos.sort((a, b) => (a.precio > b.precio) ? -1 : 1)
        return productos;
    }
    
    async function getProductosPrecioMenorAMayor() {
        const respuesta = await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/productos/porPrecioMenorAMayor');
        let productos = []
        respuesta.forEach(element => {
            element.productos.forEach(producto => {
                productos.push(producto)
            });
        });
        productos.sort((a, b) => (a.precio > b.precio) ? 1 : -1)
        return productos;
    }


    useEffect( () => {
        async function fetchProductos(){
            await getProductos();
        }
        fetchProductos();
      },[]);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {
                            productos.map(item =>(
                                <Producto producto={item}/>
                            )) 
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default Catalogo;