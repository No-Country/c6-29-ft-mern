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


    /// FUNCION QUE MUESTRA Y ANIMA EL MENU HAMBURGUESA

   
        const closeSession = () => {
            localStorage.removeItem("token");
            window.location.reload();
        }
    
    return(
        <div className="header-desktop-container" data-header-container>
            <Link to='/' className="link-logo-desktop"><img src={GsLogo} alt="imagen" className="logo-principal-desktop"/></Link>   
            <BuscadorDesktop/>    
            <div className="desktop-login-icon-container">
                 <img src={UserLogo}  alt="imagen" data-profile/>
                 <p>Mi cuenta</p>
            </div>
       
            
            {/* <div className="nav-menu-desktop__container" data-nav-menu>
                <ul className="desktop-container__list">
                   {!userConnected &&
                   <>
                    <li className="list__items"><img className="items__icon" src={LoginIcon}/><Link to='/login'>Iniciar Sesión</Link></li>
                    <li className="list__items"><img className="items__icon" src={RegisterIcon}/><Link to= '/register'>Registrarse</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HomeIcon}/>Inicio</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HistoryIcon}/>Historial</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={NewsIcon}/>Novedades</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={OffersIcon}/>Ofertas</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={DonacionesIcon}/>Donaciones</Link></li>
                    <li className="list__items"><Link to='/'><img className="items__icon" src={HelpIcon}/>Ayuda</Link></li>
                    
                   </>
                   }
                   {userConnected &&
                   <>
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
                   </>
                    }   
                   
                    
                </ul>
            </div> */}
            

            <div className="nav-menu__container" data-profile-menu> 
                <ul className="container__list">
                    <li className="list__items"><Link to='/login'>Iniciar Sesión</Link></li>
                    <li className="list__items"><Link to= '/register'>Registrarse</Link></li>
                    <li className="list__items"><Link to='/publicar'>Donar</Link></li>
                   <li className="list__items"><Link to='/'>Contacto</Link></li>
                </ul>
            </div>

        </div>        
    )
}

export default HeaderDesktop