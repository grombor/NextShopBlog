import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './GallerySlider.module.css';
import ItemCard from '../../atoms/ItemCard';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';
import { useEffect, useState } from 'react';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RiArrowRightSLine
      size={64}
      style={{
        display: 'block',
        position: 'absolute',
        top: '40%',
        right: '-4em',
        zIndex: '1',
      }}
      onClick={onClick}
      className="is-hidden-touch"
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <RiArrowLeftSLine
      size={64}
      style={{
        display: 'block',
        position: 'absolute',
        top: '40%',
        left: '-4em',
        zIndex: '1',
      }}
      onClick={onClick}
      className="is-hidden-touch"
    />
  );
}


function SlickSlider({ sliderData }) {
useEffect(() => {
  let slidesLenght = Array.from(sliderData).length;
  if (slidesLenght < 5) {
    setNumberSlidesToShow(Array.from(sliderData).length)
  } else {setNumberSlidesToShow}
}, [])

  const [numberSlidesToShow, setNumberSlidesToShow] = useState(5)
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: numberSlidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const generateSlides = Array.from(sliderData).map((slide, index) => (
    <ItemCard
      size={220}
      content={slide?.content}
      price={slide?.price}
      buttonTitle={slide?.buttonTitle}
      buttonURL={slide?.buttonLink}
      imageHoverURL={slide?.hoverImage}
      // imageURL={slide?.hoverImage.length >= slide?.image.length ? slide?.hoverImage : slide?.image}
      imageURL={slide?.image}
      dimmensions={slide?.dimmensions}
      nettPrice={slide?.nettPrice}
      grossPrice={slide?.grossPrice}
      key={`slide${slide?.name}${index}`}
    />
  ));

  const generateSlider = (
    <Slider {...settings} className={styles.slider}>
      {sliderData !== undefined ? generateSlides : null}
    </Slider>
  );

  return (
    <div className="container my-6">
      {generateSlider}
      {/* {Array.from(sliderData).length > 4 ? generateSlider : generateFlexbox} */}
    </div>
  );
}

export default SlickSlider;
