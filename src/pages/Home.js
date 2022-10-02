import Menu from '../components/Menu';
import BackgroundSlider from '../components/BackgroundSlider';
import TextOffer from '../components/TextOffer';
function App() {
  return (
    <div className="App">
    <div className='background-container'>
        <Menu/>
        <BackgroundSlider/>
        <TextOffer/>
    </div>
    </div>
  );
}

export default App;