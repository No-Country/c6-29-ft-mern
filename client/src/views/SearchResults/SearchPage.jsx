import Buscador from "../home/component/Buscador"
import SearchResults from "./SearchResults";
import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import Header from "../header/Header";
import HeaderDesktop from "../header/HeaderDesktop";

export const SearchPage = () => {
    const localValue = window.localStorage.getItem("searchValue");
    const [data,setData] = useState([]);
    const [buscar,setBuscar] = useState(localValue)

    
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

       const handleBuscar=(e)=>{
        const value = e.target.value
        setBuscar(value)
       
    }

    const showResults = () => {
      render(<SearchResults data={data}/>)
    }

    const getLocalValue = () => {
       const localValue = window.localStorage.getItem("searchValue");
        const input = document.querySelector("[data-search-bar]")
        console.log(input)
        setTimeout(()=>{
            input.value = localValue;
        },400)
    }
    
    return(
    <div>
        {window.innerWidth < 1024? <Header/> : <HeaderDesktop/>}
        {window.innerWidth < 1024? <Buscador buscar={buscar} showResults={showResults} handleBuscar={handleBuscar} /> : null}
        <SearchResults data={data}/>
    </div>
    )
    
}

export default SearchPage