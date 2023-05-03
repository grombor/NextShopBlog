import {ErrorMessage, Field, Form, Formik} from 'formik';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';
import Help from '../../../../components/atoms/help';
import Layout from '../../../../components/templates/Layout';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import cmsSectionSchema from '../../../../helpers/cmsSectionSchema';

function newSection() {
  const router = useRouter();
  const target = router.query.target;
  const [percentage, setPercentage] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isUploaded, setIsUploaded] = useState('waiting');
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setIsHidden(false);
  }, []);

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
    const element = document.getElementById(id);
    element.classList.toggle('has-text-danger');
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

  return (
    <Layout>
      <div className="container my-6">
        <div className="py-6">
          <h1 className="title size-3 is-uppercase ml-6 mt-5">
            {target}: nowy wpis
          </h1>
        </div>
        <div>
          <Formik
            initialValues={{
              header: '',
              content: '',
              image: '',
              buttonTitle: '',
              buttonUrl: ''
            }}
            validationSchema={cmsSectionSchema}
            onSubmit={(values) => {
              let percent;
              const config = {
                onUploadProgress: (progressEvent) => {
                  const { loaded, total } = progressEvent;
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

              const url = process.env.NEXT_PUBLIC_API_URL +'' + `/api/cms/section-cms/${target}/section/`;
              const postResponse = axios
                .post(url, values, config)
                .then((response) => {
                  setPercentage(percent),
                    () => {
                      setTimeout(() => {
                        setPercentage(0);
                      }, 1000);
                    };
                })
                .catch((err) => {
                  console.log(err?.response.status);
                });
              postResponse.then(() => {
                setPercentage(percent);
                setIsUploaded('is-success');
                router.push('/cms/panelStrony');
              });
            }}
          >
            {({ handleChange, values, errors, touched, setFieldValue }) => (
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
                    {(msg) => <Help msg={msg} type={'danger'} />}
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
                        style={{ height: '200px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="has-text-centered my-4">
                  <ErrorMessage name="content">
                    {(msg) => <Help msg={msg} type={'danger'} />}
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
                    {(msg) => <Help msg={msg} type={'danger'} />}
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
                    {(msg) => <Help msg={msg} type={'danger'} />}
                  </ErrorMessage>
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
                    {(msg) => <Help msg={msg} type={'danger'} />}
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
        </div>
      </div>
    </Layout>
  );
}

// const handleSubmit = (values, target) => {
//   axios
//     .post(
//       process.env.NEXT_PUBLIC_API_URL +'/api/cms/section-cms/' +
//         target.toLowerCase() +
//         '/section/',
//       values,
//       {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       }
//     )
//     .then((response) => {
//       if (response.status) {
//         console.log(response.status);
//       }
//     })
//     .catch((err) => {
//       console.log(err?.response?.status);
//     });
// };

// export async function getStaticProps(context) {
//   const id = context.params.target;
//   try {
//     return {
//       props: {
//         id: id,
//       },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

export default newSection;
