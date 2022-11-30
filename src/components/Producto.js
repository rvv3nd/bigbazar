import Swal from 'sweetalert2'
import { useAuth } from "../context/authContext"
// import $ from 'jquery'
function Producto (props) {
    const {user, loading} = useAuth()
    async function unirseEspera(bazarID,producto) {
        // $('#loading').show()
        const bazar = await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/bazares/'+bazarID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                },
                });
        const data = await bazar.json();
        //console.log(data);
        const bazarNumero = data.telefono;
        console.log(bazarNumero);
        const productoIndex = data.productos.findIndex((prod) => prod.producto === producto);
        const productoNombre = producto.split(' ').join('+');
        const respuesta = await fetch("https://api.ultramsg.com/instance24348/messages/chat?token=g2170nw4892b6iis&to=+52"+bazarNumero+"&body=Hola+estoy+interesado+en+el+producto+"+productoNombre+"+&priority=10"); 
        const resp = await respuesta.json();
        if(resp.sent === 'true') {
            await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/update/'+bazarID+"/"+productoIndex, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });
            await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/pedido/none/'+(bazarID+productoIndex), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });
                // $('#loading').hide()
            Swal.fire({
                    icon: 'success',
                    title: '¡Listo!',
                    text: 'Te has unido a la espera, en caso de que el vendedor no concrete la venta se te informará',
                })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Algo salio mal',
            })
        }
    }

    async function comprarProducto(bazarID,producto) {
        // const bazar = await getBazarPorID(bazarID);
        // $('#loading').show()
        const bazar = await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/bazares/'+bazarID, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                },
                });
        const data = await bazar.json();
        //console.log(data);
        //const bazarNumero = data.telefono;
        const vendedorID = data.userID;
        //console.log(user.email)
        const clienteID = user.reloadUserInfo.localId;
        //console.log(bazarNumero);
        const productoIndex = data.productos.findIndex((prod) => prod.producto === producto);
        //const productoNombre = producto.split(' ').join('+');
        // const respuesta = await fetch("https://api.ultramsg.com/instance24348/messages/chat?token=g2170nw4892b6iis&to=+52"+bazarNumero+"&body=Hola+estoy+interesado+en+el+producto+"+productoNombre+"+&priority=10"); 
        // const resp = await respuesta.json();
        // if(resp.sent === 'true') {
            await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/update/'+bazarID+"/"+productoIndex, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });
            await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/pedido/'+clienteID+'/'+vendedorID+'/'+productoIndex, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    },
                });
            console.log('Mensaje enviado');
            // $('#loading').hide()
            Swal.fire({
                icon: 'success',
                title: '¡Listo!',
                text: 'Hemos informado el vendedor que estás interesado en el producto. El status cambiará a "En trato" y el vendedor se pondrá en contacto contigo.',
            })
            // .then(() => {
            //     window.location.reload();
            // })
        // }else{
        //     Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: 'Algo salio mal',
        //     })
        // }
    }
    let botonComprar = ""
    if(props.producto.status === "disponible") {
        botonComprar = <button className={"btn btn-primary"} onClick={() => {comprarProducto(props.producto.bazarID,props.producto.producto);}}>Comprar </button>
    }else if(props.producto.status === "en trato") {
        botonComprar = <button className={"btn btn-warning"} onClick={() => {unirseEspera(props.producto.bazarID,props.producto.producto);}}>Unirse a lista de espera</button>
    }else{
        botonComprar = <button className={"btn btn-secondary"} disabled>Comprar </button>
    }
    
    return (
        <>
            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="img-container" src={props.producto.img} alt={"product_img_"} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.producto.producto}</h5>
                                <p className="card-text">{"Esta "+ props.producto.status+", es talla "+ props.producto.talla}</p>
                                <p className="card-text"><small className="text-muted">{"$"+props.producto.precio+"MXN"}</small></p>
                                <p className="card-text"><small className="text-muted">{}</small></p>
                                {botonComprar}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Producto