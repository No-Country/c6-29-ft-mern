import Pin from '../../../img/Pin.png';

export const PrimaryCards = ({imgURL,productName,productLocation,productPrice}) => {
    return(
        <div className="col-6">
                        <div className="card border border-0 card-main">
                            <img src= {imgURL}  className="card-img-top" alt="product-1"/>
                            <div className="card-body">
                                <h5 className="card-title card-title-donaciones">{productName}</h5>
                                <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">{productLocation}</small></p>    
                                <p className="price card-text">{productPrice}</p>
                            </div>
                        </div>
                    </div>
    )
}

export default PrimaryCards