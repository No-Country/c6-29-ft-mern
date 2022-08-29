import React from 'react'
import '../../Styles/DetalleArticulo.css';
import corazon from '../../img/Heart.png';
import ScrollImg from './components/ScrollImg'
import Ubicador from '../../img/Pin.png'
import Header from '../header/Header'

function DetalleArticulo() {
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
                            <button>WhatsApp</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DetalleArticulo