import Menu from '../components/Menu';
import BackgroundSlider from '../components/BackgroundSlider';
import TextOffer from '../components/TextOffer';
import CarouselText from '../components/CarouselText';
function App() {
  return (
    <div className="App">
    <div className='background-container'>
        <Menu/>
        <BackgroundSlider/>
        <CarouselText/>
        {/* <TextOffer/> */}
    </div>
    </div>
  );
}

export default App;