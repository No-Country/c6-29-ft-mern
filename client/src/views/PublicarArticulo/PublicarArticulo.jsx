import React from 'react';
import '../../Styles/PublicarArticulo.css';
import Ubicador from '../../img/buscador.png';
import GsLogo from "../../img/gs-logo.png";
import Flecha from "../../img/flecha.png";
import { Link, } from 'react-router-dom';
import Subirimagen from './Subirimagen';

const PublicarArticulo = ( ) => {
    const url = (result) =>{
        console.log(result);
    }

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


                        <input type="text" className="form-control rounded-pill" placeholder="Seleccionar" aria-label="Recipient's username" aria-describedby="button-addon2"/>

                    </div>
                </div>
            </div>
            {/* <div className='row row-cols-1 box-Articule-Telefono mt-4'>
            <div className='col-8 m-2'>
                    <h3 className='title-articule'>Teléfono</h3>
                </div>
                <div className='col-12 mt-2'>
                    <input type="text" className="form-control rounded-pill" placeholder="Código de área + nº. Ejemplo: 011 29330724" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                </div>
            </div> */}
            <div className='row row-cols-1 box-Articule-Imagen mt-4'>
            <div className='col-8 m-2'>
                    <h3 className='title-articule'>Imágenes</h3>
                </div>
                <div className='col-12 mt-2'>
                    <div>{<Subirimagen url = {url} />}</div>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-Imagen mt-4'>
                <div className='col-8 m-2'>
                    <h3 className='title-articule'>Información de producto</h3>
                </div>
                <div className='row box-dimensiones'>
                    <div className='col-3 align-self-center mt-1'>
                        <p className='pd'>Dimensión:</p>
                    </div>
                    <div className='col-4'>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-pill" placeholder="Ancho" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                    <div className='col-1  align-self-center mb-2'>
                        <h6>x</h6>
                    </div>
                    <div className='col-4'>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-pill" placeholder="Alto" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                </div>
                <div className='row box-material'>
                    <div className='col-3 align-self-center mt-1'>
                        <p className='pd'>Material:</p>
                    </div>
                    <div className='col-9'>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-pill" placeholder="Ingresar material" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                </div>
                <div className='row box-Unidades'>
                    <div className='col-7 align-self-center mt-1'>
                        <p className='pd'>Unidades del producto:</p>
                    </div>
                    <div className='col-5'>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-pill" placeholder="Ingresar material" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-description'>
                <div className='col-8 m-2'>
                    <h3>Publicar artículo</h3>
                </div>
                <div className='col-12'>
                    <input type="text" class="form-control description" placeholder="Ingresar descripción del producto." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-categoria'>
                <div className='col-8 m-2'>
                    <h3>Categoría</h3>
                </div>
                <div className='col-12'>
                    <select class="form-select rounded-pill" id="inputGroupSelect01" aria-label="Sizing example input">
                        <option selected>Seleccionar categoría</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className='row mt-4'>
                <div className='col-1'>
                    <input type="checkbox" name="vehicle1" value="Bike"/>
                </div>
                <div className='col-8 mt-1'>
                    <p className='pd'>Quiero donar este producto</p>
                </div> 
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-precio'>
                <div className='col-8 m-2'>
                    <h3>Precio</h3>
                </div>
                <div className='col-12'>
                    <input type="text" class="form-control rounded-pill" placeholder="Ingresar precio sin puntos ni comas" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>
            </div>
            <div className='row row-cols-1 mt-2  justify-content-center box-Articule-button'>
                <div className='col-12 m-3'>
                    <button className='btn  rounded-pill btn-publicar'>Publicar</button>
                </div>
            </div>
        </div>
        );
}
export default PublicarArticulo;
