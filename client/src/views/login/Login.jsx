import Separador from "../../img/Separador.svg"
import FacebookLogo from "../../img/facebook-logo.png"
import GoogleLogo from "../../img/google-logo.png"
import GsLogo from "../../img/gs-logo.png"
import "./login.css"

const Login = () => {
    return(
        <div className="login__container">
            <div className="login__logo-container">
                <img className="logo__item" src={GsLogo}/>
            </div>
            <h2 className="container__title">Ingresá a tu <span>cuenta</span></h2>
            <form className="input__container">
                <input type="text" className="input-container__item" id="email-input" placeholder="Correo electrónico" />
                <input type="password" className="input-container__item" id="pass-input" placeholder="Contraseña" />
                <a href="#" className="input-container__link">¿Olvidaste tu contraseña?</a>
                <button className="input-container__button">Iniciar sesión</button>
            </form>
            <img src={Separador} alt="" className="login__separador"/>
            <div className="redes__container">
                <div className="redes__img-container">
                    <img src={FacebookLogo} alt="Facebook"  />
                </div>
                <div className="redes__img-container">
                    <img src={GoogleLogo} alt="Google"  />
                </div>
            </div>
            <p className="login__crear-cuenta">¿No tienes cuenta? <a href="#" className="crear-cuenta__link">Creala gratis acá</a></p>
        </div>
    )
}

export default Login