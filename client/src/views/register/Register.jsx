import Separador from "../../img/Separador.svg"
import FacebookLogo from "../../img/facebook-logo.png"
import GoogleLogo from "../../img/google-logo.png"
import GsLogo from "../../img/gs-logo.png"
import { useState } from "react";

const Register = () => {

const [name,setName] = useState ("");
const [email,setEmail] = useState ("");
const [pass,setPass] = useState ("");
const [doublePass,setDoublePass] = useState ("");

const form = document.querySelector("[data-register-form]");

    const createUser = (e) => {
       e.preventDefault();
       if(pass !=== doublePass){
        console.log("contraseñas no coinciden");
       } else {
        const object = {
            nombre: name,
            mail: email,
            pass: pass,
        };    
           console.log(object)
    
           fetch("http://localhost:3001/usuarios/%22,%7B",{
    
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({form: object})
            })
            }
       }     


    return(
        <div className="login__container">
            <div className="login__logo-container">
                <img className="logo__item" src={GsLogo}/>
            </div>
            <h2 className="container__title">Creá tu <span>cuenta</span></h2>
            <form className="input__container" data-register-form onSubmit={createUser}>
                <input type="email" className="input-container__item"  placeholder="Correo electrónico" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                <input type="text" className="input-container__item" id="user-input" placeholder="Nombre de usuario" value={name}  onChange={(e)=> setName(e.target.value)}required/>
                <input type="password" className="input-container__item" id="pass-input" placeholder="Contraseña" value={pass}  onChange={(e)=> setPass(e.target.value)} required/>
                <input type="password" className="input-container__item" id="second-pass-input" placeholder="Repetir contraseña" value={doublePass}  onChange={(e)=> setDoublePass(e.target.value)} required/>
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