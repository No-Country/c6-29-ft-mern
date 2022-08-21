import Pin from '../../../img/Pin.png';
import "../../../Styles/Secondary-cards.css"

export const SecondaryCards = ({imgURL,productName,productLocation,productPrice}) => {
    return(
                            <div className="card-container">
                                    <div className="card__img-container">
                                        <img src= {imgURL} className="img-container__img" alt="producto"/>
                                    </div>
                                    
                                    <div className="card__text-container">
                                        <h6 className="card-title">{productName}</h6>
                                        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">{productLocation}</small></p>    
                                        <p className="price card-text">{productPrice}</p>
                                    </div>
                            </div>
               
    )
};

export default SecondaryCards