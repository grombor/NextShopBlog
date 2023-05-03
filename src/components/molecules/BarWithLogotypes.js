import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';
import styles from './BarWithLogotypes.module.css';
import TrustUsSliderCard from '../atoms/TrusUsSliderCard';


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

function barWithLogotypes({ data }) {
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
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
    <Slider {...settings} className={styles.slider}>
      {Array.from(data).map((slide, index) => (
        <TrustUsSliderCard data={slide} key={`slide${index}`} />
      ))}
    </Slider>
  );
}

export default barWithLogotypes