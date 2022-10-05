
import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Card,
  CardBody,
  CardText
} from 'reactstrap';

const items = [
  {
    id: 1,
    caption: 'Organizujesz imprezę w domu lub ogrodzie?',
  },
  {
    id: 2,
    caption: 'Szukasz cateringu na bankiet firmowy?',
  },
  {
    id: 3,
    header: 'Finger food',
    caption: "Czyli przekąski na raz podajemy na złotych tackach bądź też w czarnych zamykanych pojemnikach które można śmiało wyłożyć na stół.",
    captionOne:" Dania mięsne oraz dodatki przywozimy Wam w specjalnych termo – boxach które utrzymują ciepło przez wiele godzin.",
    captionTwo:'W termo boxach znajdują się G/N które można bez problemu włożyć do piekarnika.',
    captionThree:' Sałateczki podajemy w szklanych miskach.',
    captionFour:' Minimum zamówienia z dowozem na terenie gminy Żukowo to 150 zł',
    captionFive:'Dowozimy również do Kartuz i okolic a także do trójmiasta lecz wówczas min. Logistyczne musi wynosić 500 zł.',
    captionSix:' Istnieje również możliwość odbioru własnego zamówionego carteringu.'
  },
];

const CarouselText = (props) => {
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
        className="custom-tag"
        tag="div"
        // key={item.caption}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <Card className='carousel-text mobile'>
        <CardBody>
        <CardText>
        <CardText className='carousel-text-card'>{item.header}</CardText>
        <CardText className='carousel-text-card'>{item.caption}</CardText>
        <CardText className='carousel-text-card'>{item.captionOne}</CardText>
        <CardText className='carousel-text-card'>{item.captionTwo}</CardText>
        <CardText className='carousel-text-card'>{item.captionThree}</CardText>
        <CardText className='carousel-text-card'>{item.captionFour}</CardText>
        <CardText className='carousel-text-card'>{item.captionFive}</CardText>
        <CardText className='carousel-text-card'>{item.captionSix}</CardText>
        </CardText>
        </CardBody>
        </Card>
        <CarouselCaption/>
        
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous} interval="5000">
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
    </div>
  );
}

export default CarouselText;
