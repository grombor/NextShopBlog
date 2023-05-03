// http://kenwheeler.github.io/slick/

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './GallerySlider.module.css';
import GallerySliderCard from '../../atoms/GallerySliderCard';
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

// function SlickSlider({ data }) {
//   const settings = {
//     arrows: true,
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 975,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   return (
//     <div className='my-6'>
//     <Slider {...settings} className={styles.slider}>
//       {data?.map((slide, index) => (
//         <GallerySliderCard data={`/images/gallery/${slide}`} key={`slide${index}`} />
//       ))}
//     </Slider>
//     </div>
//   );
// }

function SlickSlider({ data }) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 975,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='my-6'>
      <Slider {...settings} className={styles.slider}>
        {data.images?.map((image, index) => (
          <GallerySliderCard data={image.expectedImage} key={`slide${index}`} />
        ))}
      </Slider>
    </div>
  );
}

export default SlickSlider;
