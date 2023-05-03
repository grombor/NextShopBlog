import Layout from '../../components/templates/Layout';
import Bestsellers from '../../components/templates/Bestsellers';
import GalleryOfInspirations from '../../components/templates/GalleryOfInspirations';
import Hero from '../../components/atoms/Hero';
import Category from '../../components/templates/SubCategory';
import axios from "axios";

function index({ pageData, galleryData, trustUs, banner, bestSellers }) {
  return (
    <Layout trustUs={trustUs}>
      <Hero imageURL={"/images/sklep/banery/SKLEP.jpg"} />

      {pageData.sections.map((category, index) => (
        <Category subCategoryData={category} key={`category${index}`} />
      ))}z

      <div className="container">
        <Bestsellers data={bestSellers} />

        <div className="my-5">
          <GalleryOfInspirations data={galleryData} />
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [home, inspiracje, zaufali, bestsellery, urzadzimy] = await axios.all(
      [
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/products/categories'),
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'),
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'),
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo/urzadzimy'),
        axios.get(process.env.NEXT_PUBLIC_API_URL + '/api/products/categories'),
      ]
    );
    return {
      props: {
        pageData: home.data.data,
        galleryData: inspiracje.data.data,
        trustUs: zaufali.data.data,
        bestSellers: bestsellery.data.data,
        banner: urzadzimy.data.data,
      },
      revalidate: 5
    };
  } catch (err) {
    console.log(err);
  }
}

export default index;
