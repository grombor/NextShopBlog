import Hero from '../components/atoms/Hero';
import ContactForm from '../components/molecules/ContactForm';
import Bestsellers from '../components/templates/Bestsellers';
import GalleryOfInspirations from '../components/templates/GalleryOfInspirations';
import Layout from '../components/templates/Layout';
import Section from '../components/templates/Section';
import axiosWithAuth from "../axios-config";
import axios from "axios";

function urzadzimy({ pageData, galleryData, trustUs, bestSellers }) {
  return (
    <Layout trustUs={trustUs}>
      <Hero imageURL="/images/URZADZIMY_BANNER_BANNER.jpg" />
      <div className="container my-6">
        <div style={{ marginTop: '4rem' }}>
          {pageData?.sections.map((section, index) => (
            <Section data={section} index={index} key={`section${index}`} />
          ))}
        </div>
        <ContactForm />
        <Bestsellers data={bestSellers} />
        <GalleryOfInspirations data={galleryData} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [urzadzimy, inspiracje, zaufali, bestsellery] = await axios.all([
      axiosWithAuth.get(
        process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo/urzadzimy'
      ),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
    ]);
    return {
      props: {
        pageData: urzadzimy.data.data,
        galleryData: inspiracje.data.data,
        trustUs: zaufali.data.data,
        bestSellers: bestsellery.data.data,
      },revalidate: 5
    };

  } catch (error) {
    console.log(error);
  }
}

export default urzadzimy;
