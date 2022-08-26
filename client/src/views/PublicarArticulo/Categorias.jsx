import React, { useEffect, useState } from "react";


function Categorias ({getCategory}) {

  
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
       
     
    

   
    return ( 

            <div>
              <select className="form-select rounded-pill" id="inputGroupSelect01" aria-label="Sizing example input" value="Categoria" onChange={getCategory} data-select-category>
                {data.map((e)=> <option key={e._id} id={e._id} defaultValue={e._id}>{e.nombre}</option>)}
              </select>
            </div>
    );
}
export default Categorias;   
