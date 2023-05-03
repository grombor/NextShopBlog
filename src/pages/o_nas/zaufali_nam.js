import Hero from '../../components/atoms/Hero';
import {Header} from '../../components/atoms/Header';
// import Navbar from '../../components/templates/NavBar';
import Footer from '../../components/templates/FooterTemplate';
import GalleryCard from '../../components/atoms/GalleryCard';

const cards = [
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
  {
    imageURL: 'https://fakeimg.pl/360x360/?text=360x360px',
    linkkURL: '#',
    alt: 'lorem',
  },
];

function zaufali_nam() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero imageURL='https://via.placeholder.com/1920x780.png?text=1920x780px' />
      <div className="container">
        <div className="my-6">
          <Header
            size="2"
            redText="zaufali"
            blackText=" nam"
            subHeaderSize="4"
            subHeaderText="INNI BYLI TU PRZED TOBĄ  - ZOBACZ ICH REKOMENDACJE!"
          />
        </div>
        <div className="is-flex is-justify-content-center is-flex-wrap-wrap">
          {cards.map((image, index) => (
            <div className="mx-3 my-3">
              <GalleryCard data={image} key={`image${index}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default zaufali_nam