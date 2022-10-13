import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import background from '../images/background.webp';
import backgroundOne from "../images/backgroundOne.webp"
import backgroundTwo from '../images/backgroundTwo.webp';
import backgroundThree from '../images/backgroundThree.webp';
import logoMono from '../images/logoMono300x228.png'

const items = [
  {
    src: background,
    key: 1,
  },
  {
    src: backgroundOne,
    key: 2,
  },
  {
    src: backgroundTwo,
    key: 3,
  },
  {
    src: backgroundThree,
    key: 4,
  }
];

const BackgroundCarousel = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
        
      <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      ><div className="background">
        <img src={item.src}  alt='corousel with images' className="App-backgroundImage" />
        
        <CarouselCaption 
          captionText={item.caption}
          captionHeader={item.caption}
        />
        <div className="centered"><img src={logoMono} className="logo-mono" alt="logoMono"/></div>
         </div>
      </CarouselItem>
      
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default BackgroundCarousel;