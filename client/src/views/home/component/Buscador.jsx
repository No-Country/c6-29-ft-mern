import React from "react";

import IconBuscador from '../../../img/IconoBuscar.png';
import filtro from '../../../img/Botón-filtro.png'

import '../../../Styles/Buscador.css';

function Buscador ( ) {
    return ( 
        <div className="container-fluid">
            <div className="row justify-content-center mb-4 mt-4">
                <div className="col-9 col-md-10 box-input border border-1 rounded-pill me-md-2">
                    <div className="row">
                        <div className="col-1 me-2">
                            <span className="" id="basic-addon1"> <button className="btn btn-Buscador" type="button" id="button-addon1"><img src= {IconBuscador} alt="Icon-Buscador"/></button></span>
                        </div>
                        <div className="col-7">
                            <input type="text" className="form-control text-start border border-0 rounded-pill" placeholder="Buscar" aria-describedby="button-addon1" aria-label="Buscador"/>
                        </div>
                    </div>
                </div>
                <div className="col-2 col-md-1 ms-xs-1">
                    <img src= {filtro} alt ="filtre"/>
                </div>
            </div>
        </div>
    );
}
export default Buscador;