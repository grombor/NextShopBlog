import axios from 'axios';
import Layout from '../components/templates/Layout';
import Bestsellers from '../components/templates/Bestsellers';
import FurnitureCategory from '../components/templates/FurnitureCategory';
import Section from '../components/templates/Section';
import GalleryOfInspirations from '../components/templates/GalleryOfInspirations';
import HomeHero from '../components/molecules/Slider/HomeHero';
import axiosWithAuth from "../axios-config";

const sliderData = [
  {
    imageUrl: 'https://fakeimg.pl/2115x780/?text=Slide1-2115x780px',
    blackHeader: 'blackHeader',
    redHeader: 'redHeader',
    subheader: 'subheader',
  },
  {
    imageUrl: 'https://fakeimg.pl/2115x780/?text=Slide2-2115x780px',
    blackHeader: 'blackHeader2',
    redHeader: 'redHeader2',
    subheader: 'subheader2',
  },
  {
    imageUrl: 'https://fakeimg.pl/2115x780/?text=Slide3-2115x780px',
    blackHeader: 'blackHeader3',
    redHeader: 'redHeader3',
    subheader: 'subheader3',
  },
];

function index({
  pageData,
  galleryData,
  trustUs,
  bestSellers,
  categoriesData,
}) {
  return (
    <Layout trustUs={trustUs}>
      <HomeHero sliderData={sliderData} />
      <div className="container">
        <Bestsellers data={bestSellers} />
        <FurnitureCategory data={categoriesData} />
        <div style={{ marginTop: '9rem' }}>
          {pageData?.sections.map((section, index) => (
            <Section data={section} index={index} key={`section${index}`} />
          ))}
        </div>
        <div className="my-5">
          <GalleryOfInspirations data={galleryData} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [home, inspiracje, zaufali, bestsellery, kategorie] = await axios.all(
      [
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo/home'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/products/categories'),
      ]
    );
    return {
      props: {
        pageData: home.data.data,
        galleryData: inspiracje.data.data,
        trustUs: zaufali.data.data,
        bestSellers: bestsellery.data.data,
        categoriesData: kategorie.data.data,
      },
      revalidate: 5,
    };
  } catch (err) {
    console.log(err);
  }
}

export default index;
