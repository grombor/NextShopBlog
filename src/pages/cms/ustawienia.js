import {useRouter} from 'next/router';
import {useEffect} from 'react';
import ProfileLinks from '../../components/molecules/ProfileLinks';
import Bestsellers from '../../components/templates/Bestsellers';
import GalleryOfInspirations from '../../components/templates/GalleryOfInspirations';
import Layout from '../../components/templates/Layout';
import AuthService from '../../services/AuthService';
import axiosWithAuth from "../../axios-config";
import axios from "axios";


function Settings({ galleryData, trustUs, bestSellers }) {
  const router = useRouter();

  useEffect(() => {
    if (AuthService.refresh() !== 200 ) {
      router.push('/uzytkownik/logowanie')
    }
  }, []);

  return (
    <Layout trustUs={trustUs}>
      <div className="container my-6">
        <div className="py-6">
          <ProfileLinks isActive="setti" />
          Settings
        </div>
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
    console.log(error.response);
  }
}

export default Settings;
