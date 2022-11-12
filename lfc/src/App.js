import logo from './assets/bible-verses1.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './Components/About'
import Activities from './Components/Activities'
import Contact from './Components/Contact'
import Home from './Components/Home'
import NavbarComp from './NavbarComp';
import Navbar from './Components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/activities' element={<Activities />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
