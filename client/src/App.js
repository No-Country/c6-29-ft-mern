import './App.css';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Login from './Views/Login';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='btn-group'>
          <Link to='/login' className='btn btn-dark'>
            Login
          </Link>
        </div>
      </div>
      <Routes>
      <Route path='/' element= { <Home/> }></Route>
        <Route path='/otro' element= { <div>Otras cosas</div> }></Route>
        <Route path='/login' element= { <Login/>}></Route>
        <Route path='/contact' element= { <div>Contact.....</div> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

