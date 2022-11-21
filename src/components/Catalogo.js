import Producto from './Producto';
/*
    Componente que recibe la respuesta del servicio "getProductos"
    para mostrar los productos en el catálogo
    El servicio puede variar con filtros que pueden venir en el props
*/
const respuesta = [
    {
        nombre: "Producto 1",
        precio: 100,
        imagen: "imagen1.jpg",
        color: "rojo",
        talla: "L",
    },
    {
        nombre: "Producto 2",
        precio: 200,
        imagen: "imagen2.jpg",
        color: "azul",
        talla: "M",
    }
]

function Catalogo() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {
                        respuesta.map(item =>(
                            <Producto producto={item}/>
                        )) 
                    }
                </div>
            </div>
        </div>
    );
}

export default Catalogo;