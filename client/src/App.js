import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './views/home/Home.jsx';
import Login from './views/login/Login.jsx';
import Register from './views/register/Register.jsx'
import VerMas from './views/home/component/VerMas.jsx';
import PublicarArticulo from './views/PublicarArticulo/PublicarArticulo.jsx';
import SearchPage from './views/SearchResults/SearchPage.jsx';
import DetalleArticulo from './views/DetalleArticulo/DetalleArticulo.jsx';

function App() {

  const disableOverFlow = () => {
    const body = document.querySelector("body");
    if(window.location.pathname == "/register"  && window.innerWidth > 1024 || window.location.pathname == "/login"   && window.innerWidth > 1024){
        body.style.overflow = "hidden"
    } else {
        body.style.overflow = "auto"
    }
}

window.addEventListener("load", disableOverFlow)


  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Home/> }></Route>
        <Route path='/login' element= { <Login/>}></Route>
        <Route path='/register' element= { <Register/> }></Route>
        <Route path='/vermas' element= { <VerMas/> }></Route>
        <Route path='/publicar' element= {<PublicarArticulo/>}></Route>
        <Route path='/searchPage' element= {<SearchPage/>}></Route>
        <Route path='/detallearticulo' element= {<DetalleArticulo/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;