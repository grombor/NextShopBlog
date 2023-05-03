import React from 'react';

import {useRouter} from 'next/router';
import DistributionUnitList from "../../../../components/atoms/DistributionUnitList";
import axiosWithAuth from "../../../../axios-config";

function EditCategory({trustUs, data}) {

  const buildSubUnitLink = (cat) => {
    return `/cms/panelStrony/podkategorie?category=${cat.name}&parent=${cat.uuid}`
  }

  const getListFromData = () => {
    return data ?? []
  }
  const router = useRouter()

  return (
    <DistributionUnitList
      data={getListFromData}
      label={'kategorię'}
      path={`kategorie`}
      buildSubUnitLink={buildSubUnitLink}
    />
  );

  // return (
  //   <Layout trustUs={trustUs}>
  //     <div className="container my-6">
  //       <div className="py-6">
  //         <EditCategoryTemplate data={data} label='kategorie' />
  //       </div>
  //     </div>
  //   </Layout>
  // );
}

export async function getServerSideProps() {
  return {props: {data: (await axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution')).data.data}}
}

export default EditCategory;
