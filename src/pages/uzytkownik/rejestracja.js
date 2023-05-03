import Layout from '../../components/templates/Layout';
import RegisterTemplate from '../../components/templates/RegisterTemplate';
import GalleryOfInspirations from '../../components/templates/GalleryOfInspirations';
import Bestsellers from '../../components/templates/Bestsellers';
import axios from "axios";
import axiosWithAuth from "../../axios-config";


function Register({ galleryData, trustUs, bestSellers }) {
  return (
    <Layout trustUs={trustUs}>
      <RegisterTemplate />
      <Bestsellers data={bestSellers} />
      <div className='container'>
              <GalleryOfInspirations data={galleryData} />
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const [inspiracje, zaufali, bestsellery] = await axios.all([
      axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'),
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
  } catch (error) {
    console.log(error);
  }
}

export default Register;
