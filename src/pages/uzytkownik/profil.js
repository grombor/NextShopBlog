import Bestsellers from '../../components/templates/Bestsellers';
import GalleryOfInspirations from '../../components/templates/GalleryOfInspirations';
import Layout from '../../components/templates/Layout';
import ProfileTemplate from '../../components/templates/ProfileTemplate';
import axios from "axios";
import axiosWithAuth from "../../axios-config";

function Profile({ galleryData, trustUs, bestSellers }) {

  return (
    <Layout trustUs={trustUs}>
      <div className="container my-6">
        <ProfileTemplate />
        <Bestsellers data={bestSellers} />
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

export default Profile;
