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
                                <div className="col-md-4">
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/bf/1a/bf1a808cb073f7a274a4e1eec5642a2d2fd4e9d3.jpg],origin[dam],category[ladies_tops_vests],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-fluid img-card" alt="producto"/>
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
                                <div className="col-md-4">
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/dd/a5/dda58077228b04ae56d4af19f0876590695f9261.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-fluid img-card" alt="producto"/>
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
                    <div className="card mb-3 card-main">
                        <div className="row g-0 ">   
                                <div className="col-md-4 ">
                                <img src="https://lp2.hm.com/hmgoepprod?set=source[/ff/87/ff8787e89c4dc4bb8b2bd944a6e50dd84ac8a87e.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-fluid img-card"  alt="producto"/>
                                </div>
                                <div className="col-md-8 "> 
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