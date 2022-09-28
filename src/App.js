import background from '../src/images/background.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='background-container'>
        <img src={background} className="App-backgroundImage" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
