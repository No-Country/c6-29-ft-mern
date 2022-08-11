import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/NavBar' element= { 
          <div>Hello</div> }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

