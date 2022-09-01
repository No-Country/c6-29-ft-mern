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
       

       const novedadesSlider = document.querySelector(".card-container-novedades");

    

       const handlePrev = () => {
      

    }

    const handleNext = () =>{
      
    }
       

    return ( 
        <div className="container-fluid container-desktop__relative">
            <div className="row justify-content-between mt-5">
                <div className="col-9 mb-4">
                    <h2>Novedades</h2>
                </div>
                <div className="col-3">
                    <Link className="text-ver text-center" to='/vermas'>Ver más</Link>
                </div> 
            </div>
            <div className="card-container-novedades desktop-cards-containers">

                {data.map((e)=> (<SecondaryCards key={e._id} imgURL={e.imagen} productName={e.nombreArticulo} productLocation={e.ubicacion.provincia + "," + e.ubicacion.localidad} productPrice={"$" + e.precio} id={e._id}/>))}

            </div>
            <div className="desktop-cards-buttons">
                    <button className="desktop-button-left" onClick={handlePrev}>🡨</button>
                    <button className="desktop-button-right" onClick={handleNext}>🡪</button>
                </div>
        </div>
    );
}
export default Novedades;   

