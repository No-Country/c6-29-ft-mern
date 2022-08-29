import React from 'react'

import '../../Styles/DetalleArticulo.css';
import corazon from '../../img/Heart.png';
import ScrollImg from './components/ScrollImg'
import Ubicador from '../../img/Pin.png'
import Header from '../header/Header'

function DetalleArticulo() {

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
       

    const handleWhatsAppButton = () => {
        // const boton = document.querySelector("[data-WS-button]");
        window.location = "https://wa.me/5492284663573/?text=Hola,%20me%20gustaria%20contactar%20contigo%20por%20este%20articulo:%20(ARTICULO__AQUI))"
    }

  return (
    <div>
        <Header/>
        <div className='container m-2   '>
            <div className='row-cols-1 justify-content-start'>
                <div className='col-5'>
                    <h3 className='text-bold'>Silla fija Berno</h3>
                </div>
                <div className='row'>
                    <div className='col-1'>
                        <img src={Ubicador} alt="search" className="search-icon"/>
                    </div>
                    <div className='col-8'>
                        <p className='ph'>Colegialas</p>
                    </div>
                </div>
                <div className='col-11'>
                    <ScrollImg/>
                </div>
                <div className='row justify-content-end'>
                <div className='col-2 mt-3'>
                    <img src={corazon} alt='favorito'/>
                </div>
                </div>
                <div className='row'>
                    <div className='col-9'>
                        <h4>Informacion del producto</h4>
                    </div>
                    <div className='col-10 mt-1'>
                        <p className='instrucciones'>Dimensiones (Alto x Ancho): <b>90 x 60 cm</b> </p>
                    </div>
                    <hr/>
                    <div className='col-10'>
                        <p className='instrucciones'>Material: <b>Ecocuero</b> </p>
                    </div>
                    <hr/>
                    <div className='col-8 mb-2'>
                        <p className='instrucciones'>Unidades: <b>1</b> </p>
                    </div>
                    <hr/>
                    <div className='row'>
                        <div className='col'>
                            <p className='instrucciones__precio'>Precio</p>
                            <p className='price'><b>$5.800</b></p>
                        </div>
                        <div className='col'>
                            <button onClick={handleWhatsAppButton} data-WS-button>WhatsApp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetalleArticulo