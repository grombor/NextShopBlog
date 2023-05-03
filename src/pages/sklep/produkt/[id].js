import Layout from '../../../components/templates/Layout';
import GalleryOfInspirations from '../../../components/templates/GalleryOfInspirations';
// import SimilarProducts from '../../../components/templates/SimilarProducts';
import Bestsellers from '../../../components/templates/Bestsellers';
import ProductTemplate from '../../../components/templates/ProductTemplate';
import axiosWithAuth from "../../../axios-config";
import axios from "axios";

function index({ pageData, galleryData, trustUs, bestSellers }) {
  getAllProducts();
  return (
    <Layout trustUs={trustUs}>
      <div className="container my-6 pt-4">
        <ProductTemplate productData={pageData} />
        <Bestsellers data={bestSellers} />
      </div>
      <div className="container my-5">
        <GalleryOfInspirations data={galleryData} />
      </div>
    </Layout>
  );
}

export async function getAllProducts() {
  try {
    const result = await axiosWithAuth.get(
      process.env.NEXT_PUBLIC_API_URL + '/api/products/all-products'
    );
    const paths = result?.data.data.map((path) => {
      return { params: { id: path } };
    });
    return paths;
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticPaths() {
  const paths = await getAllProducts();
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const id = params?.id;
  const [home, inspiracje, zaufali, bestsellery] = await axios.all([
    axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/products/product/' + id),
    axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'),
    axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'),
    axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
  ]);
  return {
    props: {
      pageData: home.data.data,
      galleryData: inspiracje.data.data,
      trustUs: zaufali.data.data,
      bestSellers: bestsellery.data.data,
    }, revalidate: 5
  };
}

export default index;
