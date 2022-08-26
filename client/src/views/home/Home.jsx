import Header from "../header/Header";
import Anuncio from "./component/Anuncio";
import Buscador from "./component/Buscador";
import Novedades from "./component/Novedades";

import '../../Styles/Home.css';
import Donaciones from "./component/Donaciones";

const Home = () => {
    return(
        <div className="home__container">
            <Header/>
            <Buscador/>
            <Anuncio/>
            <Novedades/> 
            <Donaciones/>
        </div>
    )
}

export default Home;