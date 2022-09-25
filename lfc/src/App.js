import logo from './assets/bible-verses1.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './NavbarComp';

function App() {
  return (
    <div className='App'>
      <img src={logo} alt='logo' />
      <NavbarComp />
    </div>
  );
}

export default App;
