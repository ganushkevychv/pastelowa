import background from '../src/images/background.webp';
import './App.css';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
     
        <div className='background-container'>
        <Menu/>
        <img src={background} className="App-backgroundImage" alt="logo" />
        </div>
      
    </div>
  );
}

export default App;
