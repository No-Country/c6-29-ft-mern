import Header from "../header/Header";
import Buscador from "./component/Buscador";

const Home = () => {
    return(
        <div className="home__container">
            <Header/>
            <Buscador/>
        </div>
    )
}

export default Home;