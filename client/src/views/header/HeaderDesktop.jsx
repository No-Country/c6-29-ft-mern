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
                            <li className="list__category-items-desktop">Cámaras y accesorios</li>
                            <li className="list__category-items-desktop">Celulares y accesorios</li>
                            <li className="list__category-items-desktop">Computación</li>
                            <li className="list__category-items-desktop">Consolas y videojuegos</li>
                            <li className="list__category-items-desktop">Deportes y fitness</li>
                            <li className="list__category-items-desktop">Electrodomésticos</li>
                            <li className="list__category-items-desktop">Electrónica, audio y video</li>
                            <li className="list__category-items-desktop">Hogar, muebles y jardín</li>
                            <li className="list__category-items-desktop">Instrumentos musicales</li>
                            <li className="list__category-items-desktop">Juegos y juguetes</li>
                            <li className="list__category-items-desktop">Libros, revistas y comics</li>
                            <li className="list__category-items-desktop">Ropa y accesorios</li>
                            <li className="list__category-items-desktop">Otros</li>
                        </ul>
                    </li>
                    

                    <li className="list__items-desktop">Favoritos</li>
                    <li className="list__items-desktop">Novedades</li>
                    <li className="list__items-desktop">Ofertas</li>
                    <li className="list__items-desktop"><b>Donaciones</b></li>
                    </ul>

                    <ul className="desktop-container__list">
                    <li className="list__items-desktop">Crear Publicación</li>
                    <li className="list__items-desktop">Mis Publicaciones</li>
                    </ul>
                 </div>
            
            {/* <div className="nav-menu-desktop__container" data-nav-menu>
                <ul className="desktop-container__list">
                   
                  
                    <li className="list__items"><img className="items__icon" src={LoginIcon}/><Link to='/login'>Iniciar Sesión</Link></li>
                    <li className="list__items"><img className="items__icon" src={RegisterIcon}/><Link to= '/register'>Registrarse</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HomeIcon}/>Inicio</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HistoryIcon}/>Historial</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={NewsIcon}/>Novedades</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={OffersIcon}/>Ofertas</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={DonacionesIcon}/>Donaciones</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HelpIcon}/>Ayuda</Link></li>
                    
                  
                   
                  
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HomeIcon}/>Inicio</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HistoryIcon}/>Historial</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={NewsIcon}/>Novedades</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={OffersIcon}/>Ofertas</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={DonacionesIcon}/>Donaciones</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HelpIcon}/>Ayuda</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={FavIcon}/>Favoritos</Link></li>
                    <li className="list__items"><Link to='/publicar'><img className="items__icon" src={NewPubIcon}/>Crear publicación</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={MyPubsIcon}/>Mis Publicaciones</Link></li>
                    <li className="list__items"><img className="items__icon" src={CloseSessionIcon} onClick={closeSession}/>Cerrar sesión</li>
                
                   
                    
                </ul>
            </div> */}
             
        </div>  
              
    )
}

export default HeaderDesktop