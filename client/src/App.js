import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './views/header/Header.jsx';
import Home from './views/home/Home.jsx';
import Login from './views/login/Login.jsx';
import Register from './views/register/Register.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element= { <Home/> }></Route>
        <Route path='/login' element= { <Login/>}></Route>
        <Route path='/register' element= { <Register/> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;