import Menu from '../components/Menu';
import Background from '../components/Background';
import TextOffer from '../components/TextOffer';
function App() {
  return (
    <div className="App">
    <div className='background-container'>
        <Menu/>
        <Background/>
        <TextOffer/>
    </div>
    </div>
  );
}

export default App;