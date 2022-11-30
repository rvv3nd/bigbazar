import { useAuth } from "../context/authContext"
import { useEffect, useState } from "react";
export default function Pedidos(){
    const {user} = useAuth()
    const userID = user.reloadUserInfo.localId;
    async function getProductos (){
    const productos = await fetch('https://us-central1-big-bazar-d807c.cloudfunctions.net/bazarServices/pedidos/'+userID, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            },
            });
    const data = await productos.json();
    console.log(data);
    return data;
    }

    useEffect(() => {
        getProductos();
    }, [])

    return (
        <>
        <h1>Pedidos</h1>
          {/* {pedidos.map((pedido) => (
            <div className="card">
                <h1>Tus pedidos: {pedido.idCliente}</h1>
                <div className="card-body">
                    <h5 className="card-title">{pedido.idProducto}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{pedido.idVendedor}</h6>
                    <p className="card-text">{pedido.status}</p>
                </div>
            </div>
            ))} */}
        </>
    )
}

