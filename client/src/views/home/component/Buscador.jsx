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
              const searchResults = document.querySelector("[data-search-results]")
              if(buscar == "" || buscar.length == 0){
                console.log(searchResults)
                searchResults.style.display = "none"
              } else {
                searchResults.style.display = "block"
              }
            } catch (err) {
              console.log(err);
            }
          };
          fetchData()
       }, [buscar])
       
       //console.log(data)


       const handleBuscar=(e)=>{
        const value = e.target.value
        setBuscar(value)
       
    }


   


    return ( 
        <>
        <input type="text" value={buscar} onChange={handleBuscar} data-search-bar></input>
            <div className="resultados-busqueda" data-search-results>
                {data.map((e)=> (<SecondaryCards key={e._id} imgURL={e.imagen[0]} productName={e.nombreArticulo} productLocation={e.ubicacion.longitud + "," + e.ubicacion.latitud} productPrice={"$" + e.precio}/>))}
            </div>
    </>
    );
}
export default Buscador;