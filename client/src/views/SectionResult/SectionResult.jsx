import { useState,useEffect } from "react";
import PrimaryCards from "../home/component/PrimaryCards";
import "../../Styles/category-results.css"
import HeaderDesktop from "../header/HeaderDesktop";

export const SectionResult = () => {

    const [data,setData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {

              const section = localStorage.getItem("section")
                  
              const response = await fetch(
                `http://localhost:3001/articulos/${section}`,{
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
      <>
      <HeaderDesktop/>
        <div className="category-result__container">
            {data.map((e) => (<PrimaryCards key={e._id} imgURL={e.imagen} productName={e.nombreArticulo} productLocation={e.ubicacion.provincia + "," + e.ubicacion.localidad} productPrice={e.precio}id={e._id}/>))}
        </div>
        </>
    )
}

export default SectionResult