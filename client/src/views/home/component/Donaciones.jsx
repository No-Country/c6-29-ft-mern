import React from "react";
import Pin from '../../../img/Pin.png';
import Prueba2 from '../../../img/Prueba2.png'
import '../../../Styles/Donaciones.css'

function Donaciones ( ) {
    return ( 
        <div className="row justify-content-center">
            <div className="col-5">
                <div className="card border border-0 card-main">
                    <img src= { Prueba2}  className="card-img-top" alt="product-1"/>
                    <div className="card-body">
                        <h5 className="card-title card-title-donaciones">Card title</h5>
                        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                    </div>
                </div>
            </div>
            <div className="col-5">
                <div className="card border border-0 card-main">
                    <img src= { Prueba2}  className="card-img-top" alt="product-1"/>
                    <div className="card-body">
                        <h5 className="card-title card-title-donaciones">Card title</h5>
                        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Donaciones ;