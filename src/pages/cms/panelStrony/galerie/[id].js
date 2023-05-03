import React, {useEffect, useState} from 'react';

import Image from 'next/image';
import Layout from '../../../../components/templates/Layout';
import EditIcons from '../../../../components/molecules/EditIcons';
import DDList from '../../../../components/atoms/DDList';
import {Button} from '../../../../components/atoms/Button';
import {SpinnerCircularFixed} from 'spinners-react';
import DoubleClickInput from '../../../../components/atoms/DoubleClickInput';
import DragAndDropImagesImporter from '../../../../components/atoms/DragAndDropImagesImporter';
import H1 from '../../../../components/atoms/CMS/H1';
import ProfileLinks from '../../../../components/molecules/ProfileLinks';
import PanelTemplate from '../../../../components/templates/PanelStrony/PanelTemplate';
import {useRouter} from 'next/router';
import axiosWithAuth from "../../../../axios-config";

function EditGalleries({ data }) {
  const [list, setList] = useState(data.images);
  const [requestOrderStatus, setRequestOrderStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [updatingUuid, setUpdatingUuid] = useState();
  const [upload, setUpload] = useState(false);
  const [fileToUpload, setFileToUpload] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setRequestOrderStatus(false);
    let body = {};
    body.galleryName = `${data.name}`;
    body.imagesInOrder = list.map((item) => item.uuid);
    axios
      .put(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/images/order', body)
      .then((result) => {
        if (result.status === 200) {
          setRequestOrderStatus(true);
        }
      });
  }, [list]);

  async function handleDeleteRequest(image) {
    setUpdatingUuid(image.uuid);
    setLoading(true);
    await axiosWithAuth.delete(process.env.NEXT_PUBLIC_API_URL + '' + '/api/cms/gallery/images', {
        params: {
          galleryName: data.name,
          imageUuid: image.uuid,
        },
      })
      .then(async (response) => {
        if (response.status === 200) {
          const updatedList = await getGalleryByName(data.name);
          setList(updatedList.images);
        }
      });
    setLoading(false);
  }

  async function handleUpdateRequest(image, parameterName, parameterValue) {
    setUpdatingUuid(image.uuid);
    setLoading(true);
    await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '' + '/api/cms/gallery/images',
      {[parameterName]: parameterValue},
      {
        params: {
          galleryName: data.name,
          imageUuid: image.uuid,
        },
      }
    )
      .then(async (response) => {
        if (response.status === 200) {
          const updatedList = await getGalleryByName(data.name);
          setList(updatedList.images);
        }
      });
    setLoading(false);
  }

  async function handleHiddenRequest(image) {
    await handleUpdateRequest(image, 'hidden', !image.hidden);
  }

  async function handleImagesButton() {
    setUpload(true);
    let formData = new FormData();

    for (const file of fileToUpload) {
      formData.append('images', file);
    }
    formData.append('galleryName', data.name);
    await axiosWithAuth.put(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/images/new', formData)
      .then(async () => {
        const updatedList = await getGalleryByName(data.name);
        setList(updatedList.images);
      })
      .catch((error) => {
        console.error('Wystąpił błąd podczas przesyłania plików', error);
      });
    setUpload(false);
  }

  function mapFunction(image, index) {
    return (

      <table
        className="table is-fullwidth"
        style={styles.table}
      >
        <tbody>
          <tr key={`img-${index}`}>
            <td
            //  style={{ width: '100px', verticalAlign: 'middle' }}
             >
            <div className='image is-128x128'>
              <Image width={80} height={80} src={image?.expectedImage} />
              </div>
            </td>
            <td style={{ verticalAlign: 'middle' }}>
              <DoubleClickInput
                // height="60px"
                // width="200px"
                defaultValue={image?.title}
                changeValueParrentFunction={handleUpdateRequest}
                objectFromParrent={image}
                parameterName="title"
                style={{ border: '2px solid #082333' }}
              />
            </td>
            <td style={{ verticalAlign: 'middle' }}>
              <DoubleClickInput
                // height="60px"
                // width="600px"
                defaultValue={image?.description}
                changeValueParrentFunction={handleUpdateRequest}
                objectFromParrent={image}
                parameterName="description"
              />
            </td>
            <td
            //  style={{ width: '160px', verticalAlign: 'middle' }}
             >
              <EditIcons
                itemData={image}
                handleRemove={handleDeleteRequest}
                handleVisibility={handleHiddenRequest}
                bestseller={false}
                visibility={true}
                edit={false}
                remove={true}
                loading={loading && image.uuid == updatingUuid}
                itemVisibility={!image.hidden}
              />
            </td>
        </div>
    );
  }

  const label = `${data.header}`;
  return (
    <Layout>
      <div className="container">
        <div className="py-4">
          <ProfileLinks isActive="panel"/>
          <PanelTemplate>
            <H1>Edytujesz: {label}</H1>
            <p className="mb-5">
              Przeciagnij kafelek, aby ustalić kolejność wyświetlania. Po
              kliknięciu w kafelek przeniesiesz się poziom niżej.
            </p>
            <div
              className="my-5"
              onClick={() => {
                router.push('/cms/panelStrony/galerie/nowa');
              }}
            >
              <Button type="danger">Stwórz nowy wpis</Button>
            </div>
            <div className="columns">
            <div className='column'>
              <DDList
                data={list}
                mapFunction={mapFunction}
                parentListUpdateState={setList}
                requestStatusFromParent={requestOrderStatus}
              ></DDList>
            </div>
            </div>
            
            <div>
              <DragAndDropImagesImporter
                filesArray={setFileToUpload}
                cleanSignal={upload}
              />
              <div style={{ marginTop: '20px' }}>
                {upload ? (
                  <SpinnerCircularFixed
                    size={48}
                    thickness={200}
                    speed={120}
                    color="#BC1725"
                    secondaryColor="#082333"
                  />
                ) : (
                  <Button onClick={handleImagesButton}>wyślij</Button>
                )}
              </div>
            </div>
          </PanelTemplate>
        </div>
      </div>
    </Layout>
  );
}

export async function getAllNameGalleries() {
  return await axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/list-name')
    .then((response) => {
      return response?.data.data.map((path) => {
        return {params: {id: path}};
      });
    });
}

export async function getGalleryByName(name) {
  return await axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/to-cms/' + name)
    .then((response) => {
      return response.data.data;
    });
}

export async function getStaticPaths() {
  const paths = await getAllNameGalleries();
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({params}) {
  return {
    props: {
      data: await getGalleryByName(params.id),
    },
    revalidate: 5,
  };
}

export default EditGalleries;
