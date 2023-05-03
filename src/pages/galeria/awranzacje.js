import Layout from '../../components/templates/Layout';
import Hero from '../../components/atoms/Hero';
import {Header} from '../../components/atoms/Header';
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


function aranzacje() {
  return (
    <Layout>
      <Hero imageURL="https://via.placeholder.com/1920x780.png?text=1920x780px" />
      <div className="container">
        <div className="my-6">
          <Header
            size="2"
            redText="nasze"
            blackText=" aranżacje"
            subHeaderSize="4"
            subHeaderText="ZDJĘCIA PRZESTRZENI WYPOSAŻONEJ W MEBLE MALOW"
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

    </Layout>
  );
}

export default aranzacje;
