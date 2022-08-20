import React, { useEffect, useState } from "react";
import SecondaryCards from "./SecondaryCards";
import '../../../Styles/Buscador.css';

function Buscador ( ) {
    const [data,setData] = useState([]);
    const [buscar,setBuscar] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                "http://localhost:3001/articulos/buscarnombre/?buscar="+buscar,{
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
       }, [buscar])
       
       console.log(data)


       const handleBuscar=(e)=>{
        const value = e.target.value
        setBuscar(value)
    }
    return ( 
        <>
        <input type="text" value={buscar} onChange={handleBuscar}></input>
            <div>
                <row>
                {data.map((e)=> (<SecondaryCards key={e._id} imgURL={e.imagen[0]} productName={e.nombreArticulo} productLocation={e.ubicacion.longitud + "," + e.ubicacion.latitud} productPrice={"$" + e.precio}/>))}
                </row>
            </div>
    </>
    );
}
export default Buscador;