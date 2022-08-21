import Pin from '../../../img/Pin.png';
import "../../../Styles/Primary-cards.css"

export const PrimaryCards = ({imgURL,productName,productLocation}) => {
    return(

                        <div className="primary__card-container">
                            <div className='primary__card__img-container'>
                                 <img src= {imgURL}  className="primary__img-container__img" alt="product-1"/>
                            </div>
                            
                            <div className="primary__card__text-container">
                                <h5 className="text-container__title">{productName}</h5>
                                <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">{productLocation}</small></p> 
                            </div>
                        </div>

    )
}

export default PrimaryCards