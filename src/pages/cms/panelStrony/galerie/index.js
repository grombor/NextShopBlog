import React from 'react';

import Layout from '../../../../components/templates/Layout';
import ProfileLinks from '../../../../components/molecules/ProfileLinks';
import PanelTemplate from '../../../../components/templates/PanelStrony/PanelTemplate';
import H1 from '../../../../components/atoms/CMS/H1';
import GalleryTable from '../../../../components/molecules/GalleryTable';
import {Button} from '../../../../components/atoms/Button';
import {useRouter} from 'next/router';
import axiosWithAuth from "../../../../axios-config";
import axios from "axios";

function EditHome({
  homePage,
}) {

  const label = 'galerie'
  const router = useRouter()

  return (
    <Layout>
      <div className="container">
        <div className="py-4">
          <ProfileLinks isActive="panel" />
          <PanelTemplate>
            <H1>Edytujesz: {label}</H1>
            <p className="mb-6">
              Przeciagnij kafelek, aby ustalić kolejność wyświetlania. Po
              kliknięciu w kafelek przeniesiesz się poziom niżej.
            </p>
            <div className='my-4' onClick={() => {
              router.push('/cms/panelStrony/galerie/nowa')
            }}>
            <Button type='danger'>Stwórz nową galerię</Button>
            </div>
            <GalleryTable data={homePage} label={label} />
          </PanelTemplate>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const [home] =
      await axios.all([
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/list'
        ),
      ]);
    return {
      props: {
        homePage: home.data.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default EditHome;
