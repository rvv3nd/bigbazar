function Bazar(props) {
    return (
        <>
            <div className="container">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.bazar.nombre}</h5>
                                <p className="card-text">{"📍"+ props.bazar.location.edo +", "+ props.bazar.location.mpo}</p>
                                <a href={"http://instagram.com/"+props.bazar.nombre} className="btn btn-primary">Visitar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Bazar;