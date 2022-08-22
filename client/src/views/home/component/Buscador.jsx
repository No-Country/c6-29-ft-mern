import React, { useEffect, useState } from "react";
import PrimaryCards from "./PrimaryCards";
import '../../../Styles/Buscador.css';
import searchIcon from "../../../img/IconoBuscar.svg"
import filterIcon from "../../../img/botonFiltro.png"

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
                searchResults.style.display = "flex"
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
    <div className="componente-buscador__container">
        <div className="search-filter__container">
          <div className="buscador-container">
            <img src={searchIcon} alt="search" className="search-icon"/>
            <input type="text" value={buscar} onChange={handleBuscar} data-search-bar></input>
          </div>
          <div className="filter-button__container">
              <img src={filterIcon} className="filter-button__button" alt="Filtrar" />
          </div>
        </div>
          <div className="resultados-busqueda" data-search-results>
            {data.map((e)=> (<PrimaryCards key={e._id} imgURL={e.imagen[0]} productName={e.nombreArticulo} productLocation={e.ubicacion.longitud + "," + e.ubicacion.latitud} productPrice={"$" + e.precio}/>))}
          </div>
    </div>
    );
}
export default Buscador;