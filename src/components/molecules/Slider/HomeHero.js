import styles from './HomeHero.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {RiArrowLeftSLine, RiArrowRightSLine} from 'react-icons/ri';
import HomeHeroSlide from './HomeHeroSlide';

function HomeHero({ sliderData }) {
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <RiArrowRightSLine
        size={64}
        style={{
          display: 'block',
          position: 'absolute',
          top: '40%',
          right: '0.5em',
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
          left: '0.5em',
          zIndex: '10',
        }}
        onClick={onClick}
        className="is-hidden-touch"
      />
    );
  }

  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <>
      <Slider {...settings}>
        {sliderData?.map((slide, index) => {
          return (
            <section className={`hero ${styles.hero}`} key={`main-section-${index}`}>
              <HomeHeroSlide props={slide}  key={`main-homeheroslide-${index}`}/>
            </section>
          );
        })}
      </Slider>
    </>
  );
}

export default HomeHero;
