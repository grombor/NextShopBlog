import {useEffect, useState} from 'react';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import Image from 'next/image';
import Help from '../../../../components/atoms/help';
import Layout from '../../../../components/templates/Layout';
import cmsSectionSchema from '../../../../helpers/cmsSectionSchema';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import {useRouter} from 'next/router';
import TrashIconWithConfirmation from "../../../../components/atoms/TrashIconWithConfirmation";
import ProfileLinks from '../../../../components/molecules/ProfileLinks';
import PanelTemplate from '../../../../components/templates/PanelStrony/PanelTemplate';
import H1 from '../../../../components/atoms/CMS/H1';
import axiosWithAuth from "../../../../axios-config";
import axios from "axios";

function EditSection({
  pageData, 
  id,
  homePage,
  urzadzimyPage,
  biznesPage,
  oNasPage,
  wiedzaPage,
  bestSellers,
  galleryPage,
  categoriesPage
}) {
  const router = useRouter();
  const [percentage, setPercentage] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isUploaded, setIsUploaded] = useState('waiting');
  const [isHidden, setIsHidden] = useState();
  const [trashIconMouseoverText, setTrashIconMouseoverText] = useState();

  useEffect(() => {
    setIsHidden(pageData?.hidden);
  }, [pageData]);

  const handleProgressbar = () => {
    return (
      <div className="field is-horizontal my-4">
        <div className="field-label is-normal">
          <label className="label mx-1">
            {isUploaded === 'is-success' ? (
              <p>Zapisano</p>
            ) : (
              <span>{isUploaded === 'is-info' ? <p>Przesyłam</p> : null}</span>
            )}
          </label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="columns is-mobile">
              <div className="column mt-2">
                {isUploaded !== 'waiting' ? (
                  <progress
                    className={`progress is-medium ${isUploaded}`}
                    value={percentage}
                    max="100"
                  >
                    {percentage}%
                  </progress>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleIconFocus = (id) => {
    const content = 'Kliknięcie usunie ten wpis na zawsze.';
    const element = document.getElementById(id);
    element.classList.toggle('has-text-danger');
    if (trashIconMouseoverText === content) {
      setTrashIconMouseoverText(null);
      return;
    }
    if (element.id === 'trash') {
      setTrashIconMouseoverText(content);
    }
  };

  const toggleHidden = () => {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  const handleFaEye = () => {
    return (
      <FaEye
        className="is-size-4 is-clickable"
        id="eye"
        onMouseOver={() => handleIconFocus('eye')}
        onMouseOut={() => handleIconFocus('eye')}
        onClick={() => toggleHidden()}
      />
    );
  };

  const handleFaEyeSlash = () => {
    return (
      <FaEyeSlash
        className="is-size-4 is-clickable"
        id="eye"
        onMouseOver={() => handleIconFocus('eye')}
        onMouseOut={() => handleIconFocus('eye')}
        onClick={() => toggleHidden()}
      />
    );
  };

  const handleDeletePost = () => {
    axiosWithAuth.delete(process.env.NEXT_PUBLIC_API_URL +'/api/cms/section-cms/section/' + id)
      .then((response) => {
        if (response.status === 200) {
          window.location.reload()
        }
      })
      .catch((err) => {
        console.log(err?.response?.status);
      });
  };

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
    <Layout>
    <div className="container">
      <div className="py-4">
        <ProfileLinks isActive="panel" />
        <PanelTemplate data={data}>
          <H1>Edytujesz: {pageData?.headerRed + pageData?.headerBlack}</H1>
          <Formik
            initialValues={{
              header: pageData?.headerRed + pageData?.headerBlack,
              content: pageData?.content,
              image: '',
              buttonTitle: pageData?.buttonTitle,
              buttonUrl: pageData?.buttonURL,
            }}
            validationSchema={cmsSectionSchema}
            onSubmit={(values) => {
              let percent;
              const config = {
                onUploadProgress: (progressEvent) => {
                  const {loaded, total} = progressEvent;
                  percent = Math.floor((loaded * 100) / total);
                  if (percent < 100) {
                    setPercentage(percent);
                    setIsUploaded('is-info');
                  }
                  if (percent > 0) {
                    setIsDisabled(true);
                  }
                },
                headers: {
                  'Content-Type': 'multipart/form-data',
                },
              };

              values.hidden = isHidden;
              const postResponse = axiosWithAuth().put(
                  process.env.NEXT_PUBLIC_API_URL +'/api/cms/section-cms/section/' + id,
                  values,
                  config
                )
                .then(() => {
                  setPercentage(percent),
                    () => {
                      setTimeout(() => {
                        setPercentage(0);
                      }, 1000);
                    };
                })
                .catch((err) => {
                  console.log(err?.response?.status);
                });
              postResponse.then(() => {
                setPercentage(percent);
                setIsUploaded('is-success');
                router.push('/cms/panelStrony');
              });
            }}
          >
            {({handleChange, errors, touched, setFieldValue}) => (
              <Form>
                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label mx-1">Nagłówek</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <Field
                        type="text"
                        name="header"
                        className={
                          touched.header
                            ? touched.header && !errors.header
                              ? 'input is-success'
                              : 'input is-danger'
                            : 'input'
                        }
                        placeholder="Treść nagłówka"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="has-text-centered my-4">
                  <ErrorMessage name="header">
                    {(msg) => <Help msg={msg} type={'danger'}/>}
                  </ErrorMessage>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label mx-1">Treść wpisu</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <Field
                        name="content"
                        className={
                          touched.content
                            ? touched.content && !errors.content
                              ? 'input is-success'
                              : 'input is-danger'
                            : 'input'
                        }
                        placeholder="Treść wpisu"
                        as="textarea"
                        style={{height: '200px'}}
                      />
                    </div>
                  </div>
                </div>
                <div className="has-text-centered my-4">
                  <ErrorMessage name="content">
                    {(msg) => <Help msg={msg} type={'danger'}/>}
                  </ErrorMessage>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label mx-1">Etykieta przycisku</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <Field
                        type="text"
                        name="buttonTitle"
                        className={
                          touched.header
                            ? touched.header && !errors.header
                              ? 'input is-success'
                              : 'input is-danger'
                            : 'input'
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="has-text-centered my-4">
                  <ErrorMessage name="buttonTitle">
                    {(msg) => <Help msg={msg} type={'danger'}/>}
                  </ErrorMessage>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label mx-1">Odnośnik</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <Field
                        type="text"
                        name="buttonUrl"
                        className={
                          touched.header
                            ? touched.header && !errors.header
                              ? 'input is-success'
                              : 'input is-danger'
                            : 'input'
                        }
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="has-text-centered my-4">
                  <ErrorMessage name="buttonUrl">
                    {(msg) => <Help msg={msg} type={'danger'}/>}
                  </ErrorMessage>
                </div>

                <div className="has-text-centered my-4">
                  <ErrorMessage name="postLinkLabel">
                    {(msg) => <Help msg={msg} type={'danger'}/>}
                  </ErrorMessage>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label mx-1">Obecny banner</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <Image
                        src={pageData?.expectedImage}
                        width="1080"
                        height="360"
                      />
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <label className="label mx-1">Ustaw banner</label>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <input
                        type="file"
                        name="image"
                        className={
                          touched.image
                            ? touched.image && !errors.image
                              ? 'input is-success'
                              : 'input is-danger'
                            : 'input'
                        }
                        accept="image/*"
                        placeholder="Grafika na banner"
                        onChange={(e) => {
                          setFieldValue('image', e.target.files?.[0]);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="has-text-centered my-4">
                  <ErrorMessage name="image">
                    {(msg) => <Help msg={msg} type={'danger'}/>}
                  </ErrorMessage>
                </div>

                {percentage > 0 ? handleProgressbar() : null}

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <span className="has-text-weight-bold">Widoczność: </span>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="content">
                        <span className="icon-text mx-1 mt-1">
                          {isHidden ? handleFaEyeSlash() : handleFaEye()}
                          &nbsp; Wpis będzie {isHidden ? 'nie' : null}widoczny
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="field is-horizontal">
                  <div className="field-label is-normal">
                    <span className="has-text-weight-bold">
                      Usunięcie wpisu:{' '}
                    </span>
                  </div>
                  <div className="field-body">
                    <div className="field">
                      <div className="content">
                        <span className="icon-text mx-1">
                          <TrashIconWithConfirmation
                            className="is-size-4 is-clickable"
                            id="trash"
                            onMouseOverFunction={handleIconFocus}
                            onMouseOutFunction={handleIconFocus}
                            deletedFunction={handleDeletePost}
                          />
                        </span>
                        {trashIconMouseoverText}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="control has-text-centered my-6">
                  <button
                    type="submit"
                    className={`button is-primary is-outlined px-6 mb-6`}
                    disabled={isDisabled}
                  >
                    Zapisz
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </PanelTemplate>
      </div>
    </div>
  </Layout>
  );
}

export async function getStaticPaths() {
  const result = await axiosWithAuth.get(
    process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/sections-uuid'
  );
  const sections = result.data.data;
  const paths = sections.map((section) => {
    return {
      params: {
        id: section.toString(),
      },
    };
  });
  return {
    paths: paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  try {
    const [home, urzadzimy, biznes, oNas, wiedza, bestsellery, galleries, categories, sectionData] =
      await axios.all([
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/home'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/urzadzimy'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/biznes'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/o_nas'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/page-demo-cms/wiedza'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/bestseller'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/list'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/distribution'),
        axiosWithAuth.get(process.env.NEXT_PUBLIC_API_URL + '/api/cms/section-data/by-uuid/' + id),
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
        pageData: sectionData.data.data,
      },
    };
  } catch (err) {
    console.log(err);
  }
}

export default EditSection;
