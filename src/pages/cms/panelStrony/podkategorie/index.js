import React from 'react';
import {useRouter} from 'next/router';
import DistributionUnitList from "../../../../components/atoms/DistributionUnitList";
import axiosWithAuth from "../../../../axios-config";


function index({data}) {
  // parametry
  const router = useRouter();
  let categoryId = router.query.category
  let parentId = router.query.parent

  const buildSubUnitLink = (cat) => {
    return `/cms/panelStrony/rodziny?category=${categoryId}&subcategory=${cat.logicName}&name=${cat.name}&parent=${cat.uuid}`
  }

  const getListFromData = () => {
    return data
        ?.find((cat) => cat.name === categoryId)
        ?.subcategories
      ?? []
  }

  return (
    <DistributionUnitList
      data={getListFromData}
      label={'podkategorię'}
      path={`${categoryId}`}
      buildSubUnitLink={buildSubUnitLink}
      parentId={parentId}
    />
  );
}

export async function getServerSideProps() {
  return {props: {data: (await axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution')).data.data}}
}

export default index;
