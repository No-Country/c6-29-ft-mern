import React, { useEffect, useState } from "react";
import PublicarArticulo from "./PublicarArticulo";

function Categorias () {

  
    const [data,setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await fetch(
                "http://localhost:3001/categorias/",{
                  method:'GET',
                  headers: {
                    'Content-type': 'application/json'
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
       
     
     console.log(data);  

    return ( 

            <div>
              <select className="form-select rounded-pill" id="inputGroupSelect01" aria-label="Sizing example input" defaultValue="Categoria">
                {data.map((e)=> <option key={e._id} defaultValue={e._id}>{e.nombre}</option>)}
              </select>
            </div>
    );
}
export default Categorias;   
