import Header from "../header/Header";
import Anuncio from "./component/Anuncio";
import Buscador from "./component/Buscador";

const Home = () => {
    return(
        <div className="home__container">
            <Header/>
            <Buscador/>
            <Anuncio/>
        </div>
    )
}

export default Home;