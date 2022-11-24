function Producto (props) {
    return (
        <>
            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="..." alt="..." />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.producto.producto}</h5>
                                <p className="card-text">{"Esta "+ props.producto.status+", es talla "+ props.producto.talla +" y es "+props.producto.color}</p>
                                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Producto