import Layout from '../../components/templates/Layout';
import LoginTemplate from '../../components/templates/LoginTemplate';
import GalleryOfInspirations from '../../components/templates/GalleryOfInspirations';
import Hero from '../../components/atoms/Hero';
import Bestsellers from '../../components/templates/Bestsellers';
import FurnitureCategory from '../../components/templates/FurnitureCategory';
import axiosWithAuth from "../../axios-config";
import axios from "axios";

function Login({
  pageData,
  galleryData,
  trustUs,
  bestSellers,
  categoriesData,
}) {
  return (
    <Layout trustUs={trustUs}>
      <Hero imageURL={pageData?.heroImage} />
      <LoginTemplate />
      <Bestsellers data={bestSellers} />
      <FurnitureCategory data={categoriesData} />
      <div className="container">
        <GalleryOfInspirations data={galleryData} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [home, inspiracje, zaufali, bestsellery, kategorie] = await axios.all(
      [
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo/urzadzimy'),
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
  } catch (error) {
    console.log(error);
  }
}

export default Login;
