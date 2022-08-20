import Pin from '../../../img/Pin.png';

export const SecondaryCards = ({imgURL,productName,productLocation,productPrice}) => {
    return(
        <div className="col-6 mb-3 box__card bg-white rounded-2">
                                <div className="row row-cols-1">
                                    <div className="col-5 card-main">
                                    <img src= {imgURL} className="img-card" alt="producto"/>
                            </div>
                            <div className="col-7 ms-0">
                                    <h6 className="card-title">{productName}</h6>
                                    <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">{productLocation}</small></p>    
                                    <p className="price card-text">{productPrice}</p>
                            </div>
                        </div>
                </div>
    )
};

export default SecondaryCards