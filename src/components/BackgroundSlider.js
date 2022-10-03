import { useState } from "react"
import { useEffect } from "react"

import logoMono from '../images/logoMono300x228.png'
import background from '../images/background.webp';
import backgroundOne from "../images/backgroundOne.webp"
import backgroundTwo from '../images/backgroundTwo.webp';
import backgroundThree from '../images/backgroundThree.webp';


const BackgroundSlider = () => {

const images = [
    background,
    backgroundOne,
    backgroundTwo,
    backgroundThree
];
const [image, setImage] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
      if (image === images - 1) {
        setImage(0);
      } else {
        setImage(image + 1);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [image]);
  
    return (
        <div className="background">
          <img src={images[image]} className="App-backgroundImage" alt="background" />
        <div className="centered">
          <img src={logoMono} className="logo-mono" alt="logoMono"/>
        </div>
        </div>
      );
  
}
export default BackgroundSlider;