import Menu from '../components/Menu';
import BackgroundSlider from '../components/BackgroundSlider';
import CarouselText from '../components/CarouselText';
import BackgroundCarousel from '../components/BackgroundCarousel';
import BackgroundCarouselMobile from '../components/BackgroundCarouselMobile';
function App() {
  return (
    <div className="App">
    <div className='background-container'>
        <Menu/>
        <BackgroundCarousel className='BackgroundCarousel'/>
        <BackgroundCarouselMobile className='BackgroundCarouselMobile'/>
        {/* <BackgroundSlider/> */}
        <CarouselText className='CarouselText'/>
    </div>
    </div>
  );
}

export default App;