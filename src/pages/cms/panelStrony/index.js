import ProfileLinks from '../../../components/molecules/ProfileLinks';
import Bestsellers from '../../../components/templates/Bestsellers';
import Layout from '../../../components/templates/Layout';
import PanelTemplate from '../../../components/templates/PanelStrony/PanelTemplate';
import axios from "axios";
import axiosWithAuth from "../../../axios-config";

function PagePanel({
  trustUs,
  homePage,
  urzadzimyPage,
  biznesPage,
  oNasPage,
  wiedzaPage,
  bestSellers,
  galleryPage,
}) {
  const data = {
    home: homePage?.sections,
    urzadzimy: urzadzimyPage?.sections,
    biznes: biznesPage?.sections,
    oNas: oNasPage?.sections,
    wiedza: wiedzaPage?.sections,
    bestsellery: bestSellers,
    gallery: galleryPage,
  };
  return (
    <Layout trustUs={trustUs}>
      <div className="container my-6">
        <div className="py-6">
          <div className="my-6">
            <ProfileLinks isActive="panel" />
          </div>
          <PanelTemplate data={data} />
        </div>
        <Bestsellers data={bestSellers} />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const [home, urzadzimy, biznes, oNas, wiedza, bestsellery, galleries] =
      await axios.all([
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/home'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/urzadzimy'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/biznes'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/o_nas'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/wiedza'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/list'),
      ]);
    return {
      props: {
        homePage: home.data.data,
        urzadzimyPage: urzadzimy.data.data,
        biznesPage: biznes.data.data,
        oNasPage: oNas.data.data,
        wiedzaPage: wiedza.data.data,
        bestSellers: bestsellery.data.data,
        galleryPage: galleries.data.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default PagePanel;
