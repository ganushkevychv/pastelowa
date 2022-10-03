import Menu from '../components/Menu';
import BackgroundSlider from '../components/BackgroundSlider';
import CarouselText from '../components/CarouselText';

function App() {
  return (
    <div className="App">
    <div className='background-container'>
        <Menu/>
        <BackgroundSlider/>
        <CarouselText className='CarouselText'/>
    </div>
    </div>
  );
}

export default App;