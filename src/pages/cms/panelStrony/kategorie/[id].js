// import React from 'react';
// import { Button } from '../../../../components/atoms/Button';
// import Layout from '../../../../components/templates/Layout';
// import NewCategoryTemplate from '../../../../components/templates/NewCategoryTemplate';

// function nowa() {
//   return (
//     <Layout>
// <div className="container my-6">
//   <div className="py-6">
//     <div>
//       <div className="is-size-4 is-uppercase has-text-weight-semibold my-6">
//         Edytuj kategorie
//       </div>
//       <div className="columns is-multiline">
//         <div className="column is-full">
//           Nazwij kategorię. Pamiętaj, że wprowadzone zmiany są
//           nieodwracalne. Przemyśl przed zapisaniem.
//         </div>
//         <div className="column is-half">
//           <input
//             type="text"
//             className="input"
//             placeholder="NAZWA KATEGORII"
//           ></input>
//         </div>
//         <div className="column is-half">
//           <input type="text" className="input"></input>
//         </div>
//         <div className="column is-full">
//           Wpisz krótki opis,w którym przekarzesz co jakich produktów można
//           spodziewać się w kategorii. (XXX znaków MAX)
//         </div>
//         <div className="column">
//           <input type="text" className="input"></input>
//         </div>
//         <div className="column is-full">
//           Prześlij plik, który ma zostać bannerem kategorii. Preferowany
//           rozmiair i proporcje XX:XX XXXXxXXXX
//         </div>
//         <div className="column is-full">
//           <span className="is-flex">
//             <input type="text" className="input"></input>
//             <button className="button is-primary ml-5 px-6">
//               PRZEŚLIJ
//             </button>
//           </span>
//         </div>
//         <div className="column is-10">
//           <progress className="progress is-medium"></progress>
//         </div>
//         <div className="has-text-centered my-6">
//           <Button type='danger'>zapisz</Button>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
//     </Layout>
//   );
// }

// export default nowa;

import React, {useState} from 'react';

import Layout from '../../../../components/templates/Layout';
import {useRouter} from 'next/router';
import {Button} from '../../../../components/atoms/Button';
import ProfileLinks from '../../../../components/molecules/ProfileLinks';
import PanelTemplate from '../../../../components/templates/PanelStrony/PanelTemplate';
import H1 from '../../../../components/atoms/CMS/H1';
import axiosWithAuth from "../../../../axios-config";
import axios from "axios";

function index({
  homePage,
  urzadzimyPage,
  biznesPage,
  oNasPage,
  wiedzaPage,
  bestSellers,
  galleryPage,
  categoriesPage,
  id,
}) {
  const data = {
    home: homePage?.sections,
    urzadzimy: urzadzimyPage?.sections,
    biznes: biznesPage?.sections,
    oNas: oNasPage?.sections,
    wiedza: wiedzaPage?.sections,
    bestsellery: bestSellers,
    gallery: galleryPage,
    categories: categoriesPage,
  };
  const label = 'kategorie';
  const category = categoriesPage.find((cat) => cat.name === id);
  const subcategories = category ? category.subcategories : [];
  const router = useRouter();
  const [categories, setCategories] = useState(subcategories);
  const [isDisabled, setIsDisabled] = useState(true);
  const [item, setItem] = useState(categoriesPage.filter(item => item.name === id)[0])

  const handleRemove = (id) => {
    categories?.map((cat) => {
      if (cat.name === id) {
        const newArray = categories.filter((obj) => obj.name !== id);
        setCategories(newArray);
      }
    });
  };

console.log(item)

  return (
    <Layout>
      <div className="container">
        <div className="py-4">
          <ProfileLinks isActive="panel" />
          <PanelTemplate data={data}>
            <H1>Edytuj {label} {id}</H1>
            <div>
              <div className="columns is-multiline">
                <div className="column is-full">
                  Nazwij kategorię. Przemyśl przed zapisaniem.
                </div>
                <div className="column">
                  <input type="text" className="input" defaultValue={item.name.toUpperCase()}></input>
                </div>
                <div className="column is-full">
                  Wpisz krótki opis,w którym przekarzesz co jakich produktów
                  można spodziewać się w kategorii. (XXX znaków MAX)
                </div>
                <div className="column">
                  <input type="text" className="input"></input>
                </div>
                <div className="column is-full">
                  Prześlij plik, który ma zostać bannerem kategorii. Preferowany
                  rozmiair i proporcje XX:XX XXXXxXXXX
                </div>
                <div className="column is-full">
                  <span className="is-flex">
                    <input type="text" className="input"></input>
                    <button className="button is-primary ml-5 px-6">
                      PRZEŚLIJ
                    </button>
                  </span>
                </div>
                <div className="column is-full">
                  <progress className="progress is-medium"></progress>
                </div>
                <div className="has-text-centered my-6">
                  <Button type="danger">zapisz</Button>
                </div>
              </div>
            </div>
          </PanelTemplate>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const result = await axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution');
  const categories = result.data.data;
  const paths = categories.reduce((acc, cur) => {
    cur.subcategories.forEach((subcategory) => {
      acc.push({ params: { id: subcategory.name.toString() } });
    });
    return acc;
  }, []);
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  try {
    const [
      home,
      urzadzimy,
      biznes,
      oNas,
      wiedza,
      bestsellery,
      galleries,
      categories,
    ] = await axios.all([
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
        id: id,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default index;
