const SecondaryCards = () => {
    return(
        <div className="col-6 mb-3 box__card bg-white rounded-2">
                                <div className="row row-cols-1">
                                    <div className="col-5 card-main">
                                    <img src= {Prueba} className="img-card" alt="producto"/>
                            </div>
                            <div className="col-7 ms-0">
                                    <h6 className="card-title">Iphone 7 32GB</h6>
                                    <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Belgrano</small></p>    
                                    <p className="price card-text">$94.390</p>
                            </div>
                        </div>
                </div>
    )
}