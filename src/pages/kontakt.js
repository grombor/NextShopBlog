import Layout from '../components/templates/Layout';
import Hero from '../components/atoms/Hero';
import KontaktTemplate from '../components/templates/KontaktTemplate';
import Bestsellers from '../components/templates/Bestsellers';
import ContactForm from '../components/molecules/ContactForm';
import GalleryOfInspirations from '../components/templates/GalleryOfInspirations';
import FurnitureCategory from '../components/templates/FurnitureCategory';
import axios from "axios";
import axiosWithAuth from "../axios-config";

function kontakt({
  pageData,
  galleryData,
  trustUs,
  bestSellers,
  categoriesData,
}) {
  return (
    <Layout trustUs={trustUs}>
      <Hero imageURL="/images/KONTAKT_BANNER_HERO.png" />
      <div className="container my-6">
        <KontaktTemplate />
      </div>
      <div className="container">
        <span
          id="formularz_kontaktowy"
          style={{ position: 'absolute', marginTop: '-125px' }}
        ></span>
        <ContactForm />
        <div className="my-5">
          <GalleryOfInspirations data={galleryData} />
        </div>
        <Bestsellers data={bestSellers} />
        <FurnitureCategory data={categoriesData} />
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
      },revalidate: 5
    };
  } catch (err) {
    console.log(err);
  }
}

export default kontakt;
