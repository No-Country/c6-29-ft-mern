import React from "react";
import IconBuscador from '../../../img/Iconobuscar.svg';
import '../../../Styles/Buscador.css';

function Buscador ( ) {
    return ( 
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-9 col-md-11 col-lg-11">
                    <div className="input-group mb-3 rounded-pill border border-2">
                        <span className="" id="basic-addon1"> <button className="btn btn-Buscador" type="button" id="button-addon1"><img src= {IconBuscador} alt="Icon-Buscador"/></button></span>
                        <input type="text" className="form-control text-start border border-0 rounded-pill" placeholder="Buscar" aria-describedby="button-addon1" aria-label="Buscador"/>
                    </div>
                </div>
                <div className="col-2 col-md-1 col-lg-1">
                    <div className="filtre rounded-circle ms-3">
                        <span className="span-one"></span>
                        <span className="span-two"></span>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Buscador;