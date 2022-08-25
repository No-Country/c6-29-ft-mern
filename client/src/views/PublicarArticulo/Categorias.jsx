import React, { useEffect, useState } from "react";
import PublicarArticulo from "./PublicarArticulo";

function Categorias ( ) {

  
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

                {data.map((e)=> (<PublicarArticulo key={e._id} categoryName={e.nombre} />))}

            </div>
    );
}
export default Categorias;   
