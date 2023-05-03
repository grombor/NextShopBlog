import {useRouter} from 'next/router';
import React, {useState} from 'react';
import EditIcons from './EditIcons';
import axiosWithAuth from "../../axios-config";

function ProductItem({itemData, styles, reload}) {
  const [loading, setLoading] = useState((false))

  const router = useRouter();
  let uuid = itemData.logicName

  async function handleBestsellerRequest() {
    setLoading(true)
    try {
      const response = await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/products-cms/bestseller', {}, {
        params: {
          bestseller: !itemData.bestseller,
          productName: uuid
        }
      });
      if (response.status === 200) {
        reload()
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  async function handleHideRequest() {
    setLoading(true)
    try {
      const response = await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/products-cms/hidden', {}, {
        params: {
          hidden: !itemData.hidden,
          productName: uuid
        }
      });
      if (response.status === 200) {
        reload()
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  async function handleDeleteRequest() {
    setLoading(true)
    try {
      const response = await axiosWithAuth.delete(process.env.NEXT_PUBLIC_API_URL + '/api/products-cms', {params: {productName: uuid}})
      if (response.status === 200) {
        reload()
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false)
  }

  const handleEditItem = () => {
    router.push('/cms/produkty/edycja/' + uuid);
  };


  return (
    <>
      <tr id={`list-item-${uuid}`} name={uuid}>
        <td className={styles}>{itemData.name}</td>
        <td className={styles}>{itemData.category}</td>
        <td className={styles}>{itemData.subcategory}</td>
        <td className={styles}>{itemData.family}</td>
        <td className={styles} style={{width: '160px'}}>
          <EditIcons
            itemData={itemData.uuid}
            bestseller={true}
            handleBestseller={handleBestsellerRequest}
            visibility={true}
            handleVisibility={handleHideRequest}
            edit={true}
            handleEdit={handleEditItem}
            remove={true}
            handleRemove={handleDeleteRequest}
            itemVisibility={!itemData.hidden}
            isBestseller={itemData.bestseller}
            loading={loading}
          />
        </td>
      </tr>
    </>
  );
}

export default ProductItem;
