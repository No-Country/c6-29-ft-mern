import Separador from "../../img/Separador.svg"
import FacebookLogo from "../../img/facebook-logo.png"
import GoogleLogo from "../../img/google-logo.png"
import GsLogo from "../../img/gs-logo.png"


const Register = () => {

const form = document.querySelector("[data-register-form]");

    const createUser = () => {
        fetch("http://localhost:3001/usuarios/%22,%7B",{

            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(form)
        })
    }
       

    return(
        <div className="login__container">
            <div className="login__logo-container">
                <img className="logo__item" src={GsLogo}/>
            </div>
            <h2 className="container__title">Creá tu <span>cuenta</span></h2>
            <form className="input__container" data-register-form>
                <input type="email" className="input-container__item" id="email-input" placeholder="Correo electrónico" required/>
                <input type="text" className="input-container__item" id="user-input" placeholder="Nombre de usuario" required/>
                <input type="password" className="input-container__item" id="pass-input" placeholder="Contraseña" required/>
                <input type="password" className="input-container__item" id="second-pass-input" placeholder="Repetir contraseña" required/>
                <button className="input-container__button">Crear cuenta</button>
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
        </div>
    )
}

export default Register