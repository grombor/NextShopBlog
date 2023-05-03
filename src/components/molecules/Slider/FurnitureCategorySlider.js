// http://kenwheeler.github.io/slick/

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './GallerySlider.module.css';
import SliderCard from '../../atoms/SliderCard';
import {RiArrowLeftSLine, RiArrowRightSLine} from "react-icons/ri";


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

const anchorStyling = {
  position: 'absolute',
  marginTop: '-185px'
}

function FurnitureCategorySlider(categoriesData) {
  const categories = categoriesData?.data.data.sections
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
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
        breakpoint: 880,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <div className="container my-3">
      <span id='kategorie' style={anchorStyling}></span>
      <Slider {...settings} className={styles.slider}>
        { Array.from(categories).map(category => {
          return (
            <span key={category?.name}>
            <SliderCard
              size={275}
              content={`${category?.header.headerRed}${category?.header.headerBlack}`}
              buttonTitle={category?.header.buttonTitle}
              buttonURL={category?.header.buttonLink}
              imageURL={category?.header?.squareImage}
              key={category?.name}
            />
          </span>
          )
        }) }
      </Slider>
    </div>
  );
}

export default FurnitureCategorySlider;
