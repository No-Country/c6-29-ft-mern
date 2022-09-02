import GsLogo from "../../img/gs-logo.png";
import UserLogo from "../../img/Icono-cuenta.png";
import {Link} from 'react-router-dom';
import "../../Styles/header-desktop.css";
import BuscadorDesktop from "../home/component/BuscadorDesktop";

// ICONOS MENU HAMBURGUESA
import HomeIcon from "../../img/burger-menu-icons/home-icon.svg";
import HistoryIcon from "../../img/burger-menu-icons/history-icon.svg";
import FavIcon from "../../img/burger-menu-icons/favorite-icon.svg";
import NewsIcon from "../../img/burger-menu-icons/news-icon.svg";
import OffersIcon from "../../img/burger-menu-icons/offers-icon.svg";
import DonacionesIcon from "../../img/burger-menu-icons/donaciones-icon.svg";
import NewPubIcon from "../../img/burger-menu-icons/crear-publicacion-icon.svg";
import MyPubsIcon from "../../img/burger-menu-icons/mis-publicaciones-icon.svg";
import HelpIcon from "../../img/burger-menu-icons/ayuda-icon.svg";
import CloseSessionIcon from "../../img/burger-menu-icons/close-session-icon.svg";
import CloseMenuIcon from "../../img/burger-menu-icons/close-menu-icon.svg"
import LoginIcon from "../../img/burger-menu-icons/login-icon.svg"
import RegisterIcon from "../../img/burger-menu-icons/registro-icon.svg"



const HeaderDesktop = () => {
    const token = localStorage.getItem("token");
    let userConnected;
    if(token === "" || token === undefined || token == null){
        userConnected = false;
    } else {
        userConnected = true;
    }


    /// FUNCION QUE MUESTRA Y ANIMA EL MENU DE CATEGORIAS

   
    const showCategoriesMenuDesktop = () =>{
        const categorias = document.querySelector("[data-categorias]");
        const categoriasLista = document.querySelector("[data-lista-categorias]")
            if(categoriasLista.style.display !== "flex"){
                categoriasLista.style.display = "flex";
                categorias.style.backgroundColor = "#ffda96"
                categorias.style.width = "150px"
                categorias.style.padding = ".3em 0"
            } else {
                categoriasLista.style.display = "none";
                categorias.style.backgroundColor = "unset";
                categorias.style.width = "auto";
                categorias.style.padding = "0"
            }
            
     
    }

        const setCategoryName = (e) =>{
            localStorage.setItem("categoria",e.target.id);
            if(window.location.pathname === "/catResult"){
                window.reload()
            }
        }

        const setSectionName = (e) =>{
            localStorage.setItem("section",e.target.id);
            if(window.location.pathname === "/sectionResults"){
                window.reload()
            }
        }


// FUNCION PARA CERRAR SESION

        const closeSession = () => {
            localStorage.removeItem("token");
            window.location.reload();
        }


    
    return(
        <div className="header-desktop-component" data-header-container>
            <div className="header-desktop-container">
                <Link to='/' className="link-logo-desktop"><img src={GsLogo} alt="imagen" className="logo-principal-desktop"/></Link>   
                <BuscadorDesktop/>    
                
                <div className="desktop-login-icon-container">
                    <img src={UserLogo}  alt="imagen" data-profile/>
                    <p>Mi cuenta</p>        
                </div>
            </div>

            <div className="nav-menu-desktop__container" data-nav-menu-desktop>
                    <ul className="desktop-container__list" >
                    <li className="list__items-desktop" onClick={showCategoriesMenuDesktop} data-categorias>Categorias ▿
                        <ul className="list__category-desktop" data-lista-categorias>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="63124093caf04c4f8535cdde">Accesorios para Vehiculos</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="631240afcaf04c4f8535cde0">Animales y Mascotas</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="631240dccaf04c4f8535cde2">Cámaras y accesorios</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="63124104caf04c4f8535cde4">Celulares y accesorios</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="63124158caf04c4f8535cde6">Computación</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="663124171caf04c4f8535cde8">Consolas y videojuegos</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="63124186caf04c4f8535cdea">Deportes y fitness</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="6312419dcaf04c4f8535cdec">Electrodomésticos</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="631241b9caf04c4f8535cdee">Electrónica, audio y video</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="631241d4caf04c4f8535cdf0">Hogar, muebles y jardín</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="631241fccaf04c4f8535cdf2">Instrumentos musicales</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="63124212caf04c4f8535cdf4">Juegos y juguetes</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="63124230caf04c4f8535cdf6">Libros, revistas y comics</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="63124246caf04c4f8535cdf8">Ropa y accesorios</li></Link>
                            <Link to='/catResult' onClick={setCategoryName}><li className="list__category-items-desktop" id="63124254caf04c4f8535cdfa">Otros</li></Link>
                        </ul>
                    </li>
                    

                    <li className="list__items-desktop">Favoritos</li>
                    <Link to='/sectionResults' onClick={setSectionName}><li className="list__items-desktop" id="recientes">Novedades</li></Link>
                    <li className="list__items-desktop">Ofertas</li>
                    <Link to='/sectionResults' onClick={setSectionName}><li className="list__items-desktop" id="donaciones">Donaciones</li></Link>
                    </ul>

                    <ul className="desktop-container__list">
                    <li className="list__items-desktop">Crear Publicación</li>
                    <li className="list__items-desktop">Mis Publicaciones</li>
                    </ul>
                 </div>
         
             
        </div>  
              
    )
}

export default HeaderDesktop