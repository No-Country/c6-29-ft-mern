import React from 'react'

import ScrollImg from './components/ScrollImg'
import '../../Styles/DetalleArticulo.css'
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
            </div>
        </div>
    </div>
  )
}

export default DetalleArticulo