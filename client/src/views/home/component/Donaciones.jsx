import React , { useEffect, useState } from "react";
//import Pin from '../../../img/Pin.png';
import Corazon from '../../../img/corazon.png';
//import Prueba2 from '../../../img/Prueba2.png'
import '../../../Styles/Donaciones.css'
import PrimaryCards from "./PrimaryCards";

function Donaciones () {
    
    const [data,setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                "http://localhost:3001/articulos/donaciones",{
                  method:'GET',
                  headers: {
                    'Content-type': 'application/json',
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
       
       console.log(data)
       
    return ( 
        <div className="row justify-content-center box-donaciones">
            <div className="col-12 mt-2">
                <div className="row justify-content-center donaciones-start">
                    <div className="col-1">
                        <img src= { Corazon } alt="corazon"/>
                    </div>
                    <div className="col-7">
                        <h3>Donaciones</h3>
                    </div>
                    <div className="col-3">o o o</div>
                </div>
                <div className="donation__cards-container   ">
                {data.map((e)=> (<PrimaryCards key={e._id} imgURL={e.imagen[0]} productName={e.nombreArticulo} productLocation={e.ubicacion.longitud + "," + e.ubicacion.latitud}/>))}
                </div>
            </div>
        </div>


    )
}

export default Donaciones ;

/* <div className="col-6">
<div className="card border border-0 card-main">
    <img src= { Prueba2}  className="card-img-top" alt="product-1"/>
    <div className="card-body">
        <h5 className="card-title card-title-donaciones">Card title</h5>
        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
    </div>
</div>
</div>
<div className="col-6">
<div className="card border border-0 card-main">
    <img src= { Prueba2}  className="card-img-top" alt="product-1"/>
    <div className="card-body">
        <h5 className="card-title card-title-donaciones">Card title</h5>
        <p className="card-text "><img src={ Pin } alt="pin"/><small className="ubication">Ubication</small></p>    
    </div>
</div>
</div>*/