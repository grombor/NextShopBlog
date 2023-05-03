import Layout from '../../components/templates/Layout';
import Bestsellers from '../../components/templates/Bestsellers';
import GalleryOfInspirations from '../../components/templates/GalleryOfInspirations';
import Hero from '../../components/atoms/Hero';
import axios from "axios";
import axiosWithAuth from "../../axios-config";

function index({ galleryData, trustUs, bestSellers }) {
  return (
    <Layout trustUs={trustUs}>
      <Hero imageURL='/images/GALERIA_HERO.png' />
      <div className="container">
        {galleryData?.map((gallery, index) => (
          <GalleryOfInspirations data={gallery} key={`gallery${index}`} />
        ))}
        <Bestsellers data={bestSellers} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [inspiracje, zaufali, bestsellery] = await axios.all([
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/list'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'),
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
    ]);
    return {
      props: {
        galleryData: inspiracje.data.data,
        trustUs: zaufali.data.data,
        bestSellers: bestsellery.data.data,
      },revalidate: 5
    };
  } catch (err) {
    console.log(err);
  }
}

export default index;
