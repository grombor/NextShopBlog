import React from 'react';
import Layout from '../../../../components/templates/Layout';

import NewBannerTemplate from '../../../../components/templates/NewBannerTemplate';
import axios from "axios";
import axiosWithAuth from "../../../../axios-config";

function NewBanner({
  trustUs,
  homePage,
  urzadzimyPage,
  biznesPage,
  oNasPage,
  wiedzaPage,
  bestSellers,
  galleryPage,
  categoriesPage
}) {

  const data = {
    home: homePage?.sections,
    urzadzimy: urzadzimyPage?.sections,
    biznes: biznesPage?.sections,
    oNas: oNasPage?.sections,
    wiedza: wiedzaPage?.sections,
    bestsellery: bestSellers,
    gallery: galleryPage,
    categories: categoriesPage
  };

  return (
    <Layout trustUs={trustUs}>
      <div className="container my-6">
        <div className="py-6">
          <NewBannerTemplate data={data} label='galerie' />
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const [home, urzadzimy, biznes, oNas, wiedza, bestsellery, galleries, categories] =
      await axios.all([
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/home'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/urzadzimy'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/biznes'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/o_nas'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/wiedza'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/list'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution'),
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
        categoriesPage: categories.data.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default NewBanner