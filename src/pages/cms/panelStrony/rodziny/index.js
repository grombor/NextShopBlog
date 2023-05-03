import React from 'react';

import {useRouter} from 'next/router';
import DistributionUnitList from "../../../../components/atoms/DistributionUnitList";
import axiosWithAuth from "../../../../axios-config";

function index({data}) {

  const router = useRouter();
  const categoryId = router.query.category
  const subcategoryId = router.query.subcategory
  const name = router.query.name
  let parentId = router.query.parent

  const getListFromData = () => {
    return data
        ?.find((cat) => cat.name === categoryId)
        ?.subcategories
        ?.find((cat) => cat.logicName === subcategoryId)
        ?.families
      ?? []
  }

  return (
    <DistributionUnitList
      data={getListFromData}
      label={'rodzinę'}
      path={`${categoryId} - ${name}`}
      parentId={parentId}
    />
  );
}

export async function getServerSideProps() {
  return {props: {data: (await axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution')).data.data}}
}

export default index;
