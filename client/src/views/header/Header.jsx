import GsLogo from "../../img/gs-logo.png"
import UserLogo from "../../img/user-logo.png"
import Bars from "../../img/bars-menu.png"
import {Link} from 'react-router-dom';
import "../../Styles/header.css"

const Header = () => {


    /// FUNCION QUE MUESTRA Y ANIMA EL MENU HAMBURGUESA

    const showNavMenu = () => {
        const navMenu = document.querySelector("[data-nav-menu]");
        // const bars = document.querySelector("[data-bars]");
        
        if(navMenu.classList.contains("visible")){
            
            navMenu.style.opacity = 0
            setTimeout(() => {
                navMenu.classList.remove("visible");
            },400)
        } else {
            navMenu.classList.add("visible")
            setTimeout(() => {
                navMenu.style.opacity = 1
            },100)
        }
        
        }

    /// FUNCION QUE MUESTRA Y ANIMA EL MENU PROFILE

    const showProfileMenu = () =>{
        const profileMenu = document.querySelector("[data-profile-menu]");

        if(profileMenu.classList.contains("visible")){
            
            profileMenu.style.opacity = 0
            setTimeout(() => {
                profileMenu.classList.remove("visible");
            },1000)
        } else {
            profileMenu.classList.add("visible")
            setTimeout(() => {
                profileMenu.style.opacity = 1
            },100)
        }
        
        }

    return(
        <div className="header-container" data-header-container>
            <img src={Bars} onClick={showNavMenu} alt="imagen" data-bars/>
            <Link to='/'><img src={GsLogo} alt="imagen"/></Link>
            <img src={UserLogo} onClick={showProfileMenu} alt="imagen" data-profile/>
            
            <div className="nav-menu__container" data-nav-menu>
                <ul className="container__list">
                    <li className="list__items"><Link to='/login'>Inicio</Link></li>
                    <li className="list__items"><Link to='/'>Vender</Link></li>
                    <li className="list__items"><Link to='/'>Donar</Link></li>
                    <li className="list__items"><Link to='/'>Contacto</Link></li>
                </ul>
            </div>
            
            <div className="nav-menu__container" data-profile-menu> 
                <ul className="container__list">
                    <li className="list__items"><Link to='/login'>Iniciar Sesión</Link></li>
                    <li className="list__items"><Link to= '/register'>Registrarse</Link></li>
                    <li className="list__items"><Link to='/'>Donar</Link></li>
                    <li className="list__items"><Link to='/'>Contacto</Link></li>
                </ul>
            </div>
        </div>        
    )
}

export default Header