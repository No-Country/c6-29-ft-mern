import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
//import Pin from '../../../img/Pin.png';
//import Prueba from '../../../img/product.png'

import '../../../Styles/Novedades.css';
//import PrimaryCards from "./PrimaryCards";
import SecondaryCards from "./SecondaryCards";

function Novedades ( ) {

    const [data,setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                "http://localhost:3001/articulos/recientes",{
                  method:'GET',
                  headers: {
                    'Content-type': 'application/json',
                    "x-access-token":localStorage.getItem("token")
                },
                }
              );
      
              const res= await response.json()
              setData(res)
                
            } catch (err) {
              console.log(err);
            }
          };
          fetchData()
       }, [])
       
     
       

    return ( 
        <div className="container-fluid">
            <div className="row justify-content-between mt-5">
                <div className="col-9 mb-4">
                    <h2>Novedades</h2>
                </div>
                <div className="col-3">
                    <Link className="text-ver text-center" to='/vermas'>Ver más</Link>
                </div> 
            </div>
            <div className="card-container-novedades">

                {data.map((e)=> (<SecondaryCards key={e._id} imgURL={e.imagen} productName={e.nombreArticulo} productLocation={e.ubicacion.provincia + "," + e.ubicacion.localidad} productPrice={"$" + e.precio}/>))}

            </div>
        </div>
    );
}
export default Novedades;   

/* <div className="col-6 mb-3 box__card bg-white rounded-2">
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
                <div className="col-6 mb-3 box__card bg-white rounded-2">
                                <div className="row row-cols-1">
                                    <div className="col-5 card-main">
                                    <img src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-card" alt="producto"/>
                            </div>
                            <div className="col-7 ms-0">

                                    <h6 className="card-title">Nombre del producto</h6>
                                    <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                                    <p className="price card-text">Price$</p>
                            </div>
                        </div>
                </div>
                <div className="col-6 mb-3 box__card bg-white rounded-2">
                                <div className="row row-cols-1">
                                    <div className="col-5 card-main">
                                    <img src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-card" alt="producto"/>
                            </div>
                            <div className="col-7 ms-0">

                                    <h6 className="card-title">Nombre del producto</h6>
                                    <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                                    <p className="price card-text">Price$</p>
                            </div>
                        </div>
                </div>
                <div className="col-6 mb-3 box__card bg-white rounded-2">
                                <div className="row row-cols-1">
                                    <div className="col-5 card-main">
                                    <img src="https://lp2.hm.com/hmgoepprod?set=source[/99/38/99380ebf278be1c548eddc9f5a0a3894a6acc91c.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]" className="img-card" alt="producto"/>
                            </div>
                            <div className="col-7 ms-0">
                                    <h6 className="card-title">Nombre del producto</h6>
                                    <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
                                    <p className="price card-text">Price$</p>
                            </div>
                        </div>
                </div> */