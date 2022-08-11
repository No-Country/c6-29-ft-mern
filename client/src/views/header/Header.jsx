import GsLogo from "../../img/gs-logo.png"
import UserLogo from "../../img/user-logo.png"
import Bars from "../../img/bars-menu.png"
import "../../styles/header.css"

const Header = () => {

    const showNavMenu = () => {
        const navMenu = document.querySelector("[data-nav-menu]")
        const bars = document.querySelector("[data-bars]");
        navMenu.classList.toggle("visible")
        }


    const showProfileMenu = () =>{

    }

    return(
        <div className="header-container" data-header-container>
            <img src={Bars} onClick={showNavMenu} data-bars/>
            <img src={GsLogo}/>
            <img src={UserLogo} data-profile/>
    
            <div class="nav-menu__container" data-nav-menu>
                <ul class="container__list">
                    <li class="list__items">Comprar</li>
                    <li class="list__items">Vender</li>
                    <li class="list__items">Donar</li>
                    <li class="list__items">Contacto</li>
                </ul>
            </div>

        </div>
    )
}

export default Header