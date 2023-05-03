import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import SignupSchema from '../../helpers/RegisterSchema';
import Help from '../atoms/help';
import Notification from '../atoms/notification';

import styles from './RegisterTemplate.module.css';
import {FaCheck, FaKey, FaRegEnvelope} from 'react-icons/fa';
import axios from "axios";

function RegisterTemplate({ galleryData, trustUs }) {
  const router = useRouter();
  const [isChecked, setIsChecked] = useState();
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);
  const [backendResponse, setBackendResponse] = useState(false);

  useEffect(() => {
    setIsChecked(false);
  }, []);

  const sendQuery = () => {
    router.push(
      {
        pathname: '/uzytkownik/logowanie',
        query: {
          message: 'success',
        },
      },
      ''
    );
  };

  function registerUser(values) {
    const response = axios.post(process.env.NEXT_PUBLIC_API_URL +'/api/user', {
        email: values.email,
        password: values.password,
        passwordConfirmation: values.passwordConfirmation,
      })
      .then((response) => {
        if (response.status === 200) {
          setBackendResponse(response.data);
          sendQuery();
        } else {
          setBackendResponse(response.data);
          return null;
        }
      })
      .catch((err) => {
        setBackendResponse(err.response.data);
        console.log(err?.response.data);
      });
  }

  const handleSubmit = (values) => {
    if (isChecked) {
      registerUser(values);
    } else {
      setIsCheckboxVisible(true);
    }
  };

  return (
    <section className={styles.section}>
      {backendResponse?.message === 'fail' ? (
        <Notification
          type="danger"
          msg={process.env.NEXT_PUBLIC_REGISTER_FAIL}
        />
      ) : null}
      {backendResponse?.message === 'success' ? (
        <Notification
          type="success"
          msg={process.env.NEXT_PUBLIC_REGISTER_SUCCESS}
        />
      ) : null}
      <div className="my-6">
        <div className="columns pt-6">
          <div className="column is-6-tablet mx-auto">
            <Formik
              initialValues={{
                email: '',
                password: '',
                passwordConfirmation: '',
                terms: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                handleSubmit(values);
              }}
            >
              {({ handleChange, values, errors, touched }) => (
                <Form className={`box is-shadowless ${styles.box}`}>
                  <div className="field">
                    <label className="label">E-mail</label>
                    <div className="control has-icons-left">
                      <Field
                        className={
                          touched.email
                            ? touched.email && !errors.email
                              ? 'input is-success'
                              : 'input is-danger'
                            : 'input'
                        }
                        id="email"
                        name="email"
                        type="email"
                        onChange={handleChange}
                        placeholder="E-mail"
                      />
                      <ErrorMessage name="email">
                        {(msg) => <Help msg={msg} type={'danger'} />}
                      </ErrorMessage>
                      <span className="icon is-small is-left">
                        <FaRegEnvelope />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Hasło</label>
                    <div className="control has-icons-left has-icons-right">
                      <Field
                        className={
                          touched.password
                            ? touched.password && !errors.password
                              ? 'input is-success'
                              : 'input is-danger'
                            : 'input'
                        }
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        placeholder="Hasło"
                        value={values.password}
                      />
                      <ErrorMessage name="password">
                        {(msg) => <Help msg={msg} type={'danger'} />}
                      </ErrorMessage>
                      <span className="icon is-small is-left">
                        <FaKey />
                      </span>
                      <span className="icon is-small is-right">
                        <FaCheck />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Potwierdź hasło</label>
                    <div className="control has-icons-left has-icons-right">
                      <Field
                        className={
                          touched.passwordConfirmation
                            ? touched.passwordConfirmation &&
                              !errors.passwordConfirmation
                              ? 'input is-success'
                              : 'input is-danger'
                            : 'input'
                        }
                        id="passwordConfirmation"
                        name="passwordConfirmation"
                        type="password"
                        onChange={handleChange}
                        placeholder="Hasło"
                        value={values.passwordConfirmation}
                      />
                      <ErrorMessage name="passwordConfirmation">
                        {(msg) => <Help msg={msg} type={'danger'} />}
                      </ErrorMessage>
                      <span className="icon is-small is-left">
                        <FaKey />
                      </span>
                      <span className="icon is-small is-right">
                        <FaCheck />
                      </span>
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <label className="checkbox my-3">
                        <Field
                          type="checkbox"
                          id="terms"
                          name="terms"
                          onClick={() => {
                            if (!isChecked) {
                              setIsChecked(true);
                              setIsCheckboxVisible(false);
                            } else {
                              setIsChecked(false);
                            }
                          }}
                        />
                        <span className="mx-3">
                          Zapoznałem się i zgadzam się z{' '}
                          <a href="#">terms and conditions</a>
                          {isCheckboxVisible ? (
                            <p className={`help is-danger`}>
                              Musisz zaakceptować regulamin.
                            </p>
                          ) : null}
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="field is-grouped my-4">
                    <div className="control mx-auto">
                      <button
                        type="submit"
                        className={`button is-primary ${styles.button}`}
                      >
                        REJESTRUJ
                      </button>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  try {
    const GalleryOfInspirations = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/inspiracje'
    );
    const gallery = GalleryOfInspirations.data.data;
    const theyTrustUs = await axios.get(
      process.env.NEXT_PUBLIC_API_URL + '/api/cms/gallery/zaufali_nam'
    );
    const trustUs = theyTrustUs.data.data;
    return {
      props: {
        galleryData: gallery,
        trustUs: trustUs,
      },revalidate: 5
    };
  } catch (error) {
    console.log(error);
  }
}

export default RegisterTemplate;
