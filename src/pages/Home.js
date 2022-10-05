import Menu from '../components/Menu';
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
        <CarouselText className='CarouselText'/>
    </div>
    </div>
  );
}

export default App;