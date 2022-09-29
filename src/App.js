import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import About from '../src/pages/About';
import './App.css';

function App() {
  return (
    <Router>
   <div className="App">
      <Routes>
      <Route path="/" exact element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      </Routes>
    </div>
    </Router>


  );
}

export default App;
