import background from '../src/images/background.webp';
import './App.css';
import Menu from './components/Menu';
import Cards from './components/Cards';

function App() {
  return (
    <div className="App">
     
        <div className='background-container'>
        <Menu/>
        <img src={background} className="App-backgroundImage" alt="logo" />
        </div>
      <div className='cards-container'>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
