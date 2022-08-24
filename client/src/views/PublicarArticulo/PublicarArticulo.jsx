import React from 'react';
import '../../Styles/PublicarArticulo.css';
import Ubicador from '../../img/buscador.png';
import GsLogo from "../../img/gs-logo.png";
import Flecha from "../../img/flecha.png";
import PublicarImagen from './PublicarImagen';
import { Link, } from 'react-router-dom';


const PublicarArticulo = ( ) => {


    return (
        <div className='container'>
            <div className='row justify-content-between box-header m-3'>
                <div className='col-3'>
                    <Link to='/' ><img className='img-fluid' src={Flecha} alt="flecha"/></Link>
                </div>
                <div className='col-7'>
                    <img className="img-fluid img-logo-articule" src={GsLogo} alt="logo"/>
                </div>
            </div>
            <hr/>
            <div className='row row-cols-1 box-Articule-tittle mt-4'>
                <div className='col-8 m-2'>
                    <h3>Publicar artículo</h3>
                </div>
                <div className='col-8 m-2'>
                    <h3 className='title-articule'>Título</h3>
                </div>
                <div className='col-12 mt-2'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-pill" placeholder="Ingresar título. Ejemplo: Silla de madera" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-Ubicacion'>
            <div className='col-8 m-2'>
                    <h3 className='title-articule'>Ubicación</h3>
                </div>
                <div className='col-12 mt-2'>
                <div className="buscador-container ">
                        <img src={Ubicador} alt="search" className="search-icon"/>
                        <input type="text" className="form-control rounded-pill" placeholder="Ingresar título. Ejemplo: Silla de madera" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-Telefono mt-4'>
            <div className='col-8 m-2'>
                    <h3 className='title-articule'>Teléfono</h3>
                </div>
                <div className='col-12 mt-2'>
                    <input type="text" className="form-control rounded-pill" placeholder="Código de área + nº. Ejemplo: 011 29330724" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-Imagen mt-4'>
            <div className='col-8 m-2'>
                    <h3 className='title-articule'>Imágenes</h3>
                </div>
                <div className='col-12 mt-2'>
                    <div>{PublicarImagen}</div>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-Imagen mt-4'>
            <div className='col-8 m-2'>
                    <h3 className='title-articule'>Información de producto</h3>
                </div>
                <div className='col-12 mt-2'>
                    <div>box</div>
                </div>
            </div>
        </div>
        );
}
export default PublicarArticulo;
