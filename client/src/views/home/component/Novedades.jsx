import React from "react";
import {Link} from 'react-router-dom';
import Pin from '../../../img/Pin.png';
import '../../../Styles/Novedades.css';

function Novedades ( ) {
    return ( 
        <div className="container">
            <div className="row justify-content-between mt-5">
                <div className="col-9 mb-4">
                    <h2>Novedades</h2>
                </div>
                <div className="col-3">
                    <Link className="text-ver text-center" to='/vermas'>Ver más</Link>
                </div>  
                <div className="col-6">
                    <div className="card-main card mb-3">
                        <div className="row g-0">
                                <div className="col-md-2">
                                    <img src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-fluid img-card" alt="producto"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title">Nombre del producto</h6>
                                        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                                        <p className="price card-text">Price$</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card-main card mb-3">
                        <div className="row g-0">
                                <div className="col-md-2">
                                    <img src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-fluid img-card" alt="producto"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title">Nombre del producto</h6>
                                        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                                        <p className="price card-text">Price$</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card-main card mb-3">
                        <div className="row g-0">
                                <div className="col-md-2">
                                    <img src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-fluid img-card" alt="producto"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title">Nombre del producto</h6>
                                        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                                        <p className="price card-text">Price$</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div className="card-main card mb-3">
                        <div className="row g-0">
                                <div className="col-md-2">
                                    <img src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-fluid img-card" alt="producto"/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h6 className="card-title">Nombre del producto</h6>
                                        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                                        <p className="price card-text">Price$</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Novedades;