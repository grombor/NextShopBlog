import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './GallerySlider.module.css';
import BestsellerCard from '../../atoms/BestsellerCard';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';

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
      className='is-hidden-touch'
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
      className='is-hidden-touch'
    />
  );
}

function SlickSlider({ sliderData }) {
  const generateSlides = Array.from(sliderData).map((slide, index) => (
    <BestsellerCard
      size={220}
      content={slide?.content}
      price={slide?.price}
      buttonTitle={slide?.buttonTitle}
      buttonURL={slide?.buttonLink}
      imageURL={slide?.image}
      dimmensions={slide?.dimmensions}
      nettPrice={slide?.nettPrice}
      grossPrice={slide?.grossPrice}
      key={`slide${slide?.name}${index}`}
    />
  ));

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  return (
    <div className="container my-6">
      <Slider {...settings} className={styles.slider}>
        {sliderData !== undefined ? generateSlides : null}
      </Slider>
    </div>
  );
}

export default SlickSlider;
