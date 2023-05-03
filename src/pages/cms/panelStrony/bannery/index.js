import React from 'react';
import EditCategoryTemplate from '../../../../components/templates/EditCategoryTemplate';

import Layout from '../../../../components/templates/Layout';
import {useRouter} from 'next/router';
import axiosWithAuth from "../../../../axios-config";
import axios from "axios";

function EditBanners({
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

  const router = useRouter()

  return (
    <Layout trustUs={trustUs}>
      <div className="container my-6">
        <div className="py-6">
          <EditCategoryTemplate data={data} label='bannery' />
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

export default EditBanners;



// import React from 'react';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import EditCategoryTemplate from '../../../../components/templates/EditCategoryTemplate';
//  
// import Layout from '../../../../components/templates/Layout';
// import { useRouter } from 'next/router';

// function EditBanners({
// trustUs,
// homePage,
// urzadzimyPage,
// biznesPage,
// oNasPage,
// wiedzaPage,
// bestSellers,
// galleryPage,
// categoriesPage
// }) {

// const data = {
// home: homePage?.sections,
// urzadzimy: urzadzimyPage?.sections,
// biznes: biznesPage?.sections,
// oNas: oNasPage?.sections,
// wiedza: wiedzaPage?.sections,
// bestsellery: bestSellers,
// gallery: galleryPage,
// categories: categoriesPage
// };

// const router = useRouter()

// function handleOnDragEnd(result) {
// if (!result.destination) return;
// // Reorder data array
// const items = Array.from(data.home);
// const [reorderedItem] = items.splice(result.source.index, 1);
// items.splice(result.destination.index, 0, reorderedItem);
// // Update state with new data array
// setData({ home: items });
// }

// return (
// <Layout trustUs={trustUs}>
// <div className="container my-6">
// <div className="py-6">
// <DragDropContext onDragEnd={handleOnDragEnd}>
// <Droppable droppableId="data">
// {(provided) => (
// <table {...provided.droppableProps} ref={provided.innerRef}>
// <thead>
// <tr>
// <th>Nazwa</th>
// <th>Typ</th>
// <th>Kolejność</th>
// <th>Akcje</th>
// </tr>
// </thead>
// <tbody>
// {data.home.map((item, index) => (
// <Draggable key={item.id} draggableId={item.id.toString()} index={index}>
// {(provided) => (
// <tr
// {...provided.draggableProps}
// {...provided.dragHandleProps}
// ref={provided.innerRef}
// >
// <td>{item.name}</td>
// <td>{item.type}</td>
// <td>{index}</td>
// <td>
// <button onClick={() => handleEdit(item.id)}>Edytuj</button>
// <button onClick={() => handleDelete(item.id)}>Usuń</button>
// </td>
// </tr>
// )}
// </Draggable>
// ))}
// {provided.placeholder}
// </tbody>
// </table>
// )}
// </Droppable>
// </DragDropContext>
// </div>
// </div>
// </Layout>
// );
// }

// export async function getServerSideProps() {
//     try {
//       const [home, urzadzimy, biznes, oNas, wiedza, bestsellery, galleries, categories] =
//         await axios.all([
//           axiosInstance.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/home'
//           ),
//           axiosInstance.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/urzadzimy'
//           ),
//           axiosInstance.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/biznes'
//           ),
//           axiosInstance.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/o_nas'),
//           axiosInstance.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/wiedza'),
//           axiosInstance.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
//           axiosInstance.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/list'),
//           axiosInstance.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution'),
//         ]);
//       return {
//         props: {
//           homePage: home.data.data,
//           urzadzimyPage: urzadzimy.data.data,
//           biznesPage: biznes.data.data,
//           oNasPage: oNas.data.data,
//           wiedzaPage: wiedza.data.data,
//           bestSellers: bestsellery.data.data,
//           galleryPage: galleries.data.data,
//           categoriesPage: categories.data.data,
//         },
//       };
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
//   export default EditBanners;