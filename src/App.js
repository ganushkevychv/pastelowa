import './App.css';
import Menu from './components/Menu';
import Cards from './components/Cards';
import Background from './components/Background';

function App() {
  return (
    <div className="App">
    <div className='background-container'>
        <Menu/>
        <Background/>
    </div>
        <Cards/>
    </div>
  );
}

export default App;
