import logo from './logo.svg';
import './App.css';
import Home from './Home/Home';
import About from './About/About';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>

    </div>
  );
}

export default App;