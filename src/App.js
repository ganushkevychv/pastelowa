import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About';
import Gallery from '../src/pages/Gallery';
import Offers from '../src/pages/Offers';
import './App.css';

function App() {
  return (
    <Router>
   <div className="App">
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Promo" element={<Offers/>}/>
      <Route path="/Galeria" element={<Gallery/>}/>
      </Routes>
    </div>
    </Router>


  );
}

export default App;
