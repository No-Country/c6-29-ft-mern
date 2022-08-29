import React from 'react';
import '../../Styles/PublicarArticulo.css';
import Ubicador from '../../img/buscador.png';
import GsLogo from "../../img/gs-logo.png";
import Flecha from "../../img/flecha.png";
import { Link, } from 'react-router-dom';
import Subirimagen from './Subirimagen';
import Categorias from './Categorias';
import { useState } from "react";


const PublicarArticulo = () => {

    const parseJwt = () => {
        try {
          return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
          return null;
        }
      };

const token = localStorage.getItem("token");
const decoded = parseJwt();
console.log(decoded.userId)




const [usuario,setUsuario] = useState (decoded.userId);    

const [nombre,setNombre] = useState ("");
const [fecha,setFecha] = useState (new Date());
const [url,setUrl] = useState ("");
const  [descripcion,setDescripcion]  = useState ("")
const [categoria,setCategoria] = useState ("");
const [precio,setPrecio] = useState ("");
const [provincia,setProvincia] = useState ("");
const [localidad,setLocalidad] = useState ("");
const [alto,setAlto] = useState ("");
const [ancho,setAncho] = useState ("");
const [material,setMaterial] = useState ("");
const [unidades,setUnidades] = useState ("");

    const createArticulo = async (e) => {
       e.preventDefault();
           try {
            const object = {
                usuario: usuario,//aca iria id de usuario que traigo con el token._id,
                nombreArticulo: nombre,
                fechaCreacion: fecha,//aca tendria que tomar la fecha de la compu con date()
                imagen:url,
                descripcion:descripcion,
                categoria: categoria,
                precio: precio,
                ubicacion:{
                    provincia:provincia,
                    localidad:localidad
                },
                dimension:{
                    alto:alto,
                    ancho:ancho
                },
                material:material,
                unidades:unidades,
            };    
               console.log(object)
            const response = await fetch("http://localhost:3001/articulos/", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
                'x-access-token':localStorage.getItem("token"),//traigo el token
              },
                body:JSON.stringify(object),
            });
            const res = await response.json();
            return res;
          } catch (error) {
        
            console.log(error);
          }
         }    

         const  getCategory = () => {
            const selectedCategory = document.querySelector("[data-select-category]").value
            const categoryOption = document.querySelectorAll("option");
            categoryOption.forEach((e) =>{
              if(selectedCategory == e.label){
                setCategoria(e.id)
              }
            } )
           }

          const getImgUrl = () => {
            const imgInput = document.querySelector("[data-img-input]")
            setUrl(imgInput.name)
            console.log(imgInput.name)
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
                        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}className="form-control rounded-pill" placeholder="Ingresar título. Ejemplo: Silla de madera" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-Ubicacion'>
            <div className='col-8 m-2'>
                    <h3 className='title-articule'>Ubicación</h3><img src={Ubicador} alt="search" className="search-icon"/>
                </div>
                <div className='col-12 mt-2'>
                <div className="buscador-container ">
                        

                        <input type="text" value={provincia} onChange={(e)=> setProvincia(e.target.value)}className="form-control rounded-pill" placeholder="Provincia" aria-label="Recipient's username" aria-describedby="button-addon2"/>


                        <input type="text" className="form-control rounded-pill" value={localidad} onChange={(e)=> setLocalidad(e.target.value)}placeholder="Localidad" aria-label="Recipient's username" aria-describedby="button-addon2"/>

                    </div>
                </div>
            </div>
          
            <div className='row row-cols-1 box-Articule-Imagen mt-4'>
            <div className='col-8 m-2'>
                    <h3 className='title-articule'>Imágen</h3>
                </div>
                <div className='col-12 mt-2'>
                    <div>{<Subirimagen url = {url}  getImgUrl={getImgUrl}/>}</div>

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
                            <input type="text" className="form-control rounded-pill" value={ancho} onChange={(e)=> setAncho(e.target.value)}placeholder="Ancho" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                    <div className='col-1  align-self-center mb-2'>
                        <h6>x</h6>
                    </div>
                    <div className='col-4'>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-pill" value={alto} onChange={(e)=> setAlto(e.target.value)}placeholder="Alto" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                </div>
                <div className='row box-material'>
                    <div className='col-3 align-self-center mt-1'>
                        <p className='pd'>Material:</p>
                    </div>
                    <div className='col-9'>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-pill" value={material} onChange={(e)=> setMaterial(e.target.value)}placeholder="Ingresar material" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                </div>
                <div className='row box-Unidades'>
                    <div className='col-7 align-self-center mt-1'>
                        <p className='pd'>Unidades del producto:</p>
                    </div>
                    <div className='col-5'>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control rounded-pill" value={unidades} onChange={(e)=> setUnidades(e.target.value)}placeholder="Unidades" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-description'>
                <div className='col-8 m-2'>
                    <h3>Descripcion</h3>
                </div>
                <div className='col-12'>
                    <input type="text" className="form-control description" value={descripcion} onChange={(e)=> setDescripcion(e.target.value)}placeholder="Ingresar descripción del producto." aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>
                </div>
            </div>
            <div className='row row-cols-1 box-Articule-categoria'>
                <div className='col-8 m-2'>
                    <h3>Categoría</h3>
                </div>
                <div className='col-12'>
                    <Categorias getCategory={getCategory}/>
                </div>
                <div className='row mt-4'>
                <div className='col-1'>
                    <input type="checkbox" name="donacion" />
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
                    <input type="number" value={precio} onChange={(e)=> setPrecio(e.target.value)} className="form-control rounded-pill" placeholder="0" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" data-price-input/>
                </div>
            </div>
            <div className='row row-cols-1 mt-2  justify-content-center box-Articule-button'>
                <div className='col-12 m-3'>
                    <button className='btn  rounded-pill btn-publicar'onClick={createArticulo}>Publicar</button>
                </div>
            </div>
        </div>
        );
}
export default PublicarArticulo;
