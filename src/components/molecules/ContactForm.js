import Image from 'next/image';
import styles from './ContactForm.module.css';
import Notification from '../atoms/notification'
import {ErrorMessage, Field, Form, Formik} from 'formik';
import ContactSchema from '../../helpers/ContactSchema';
import Help from '../atoms/help';
import {useEffect, useState} from 'react';
import {Header} from '../atoms/Header';
import axiosWithAuth from "../../axios-config";


function ContactForm() {
  const [notification, setNotification] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  
useEffect(() => {
  setIsDisabled(false)
}, [])


  const handleEmail = (values) => {
    axiosWithAuth.post(process.env.NEXT_PUBLIC_API_URL +'/api/contact-form', values)
      .then((response) => {
        if (response.status == 200) {
          setNotification(true);
          setIsDisabled(true);
        }
      })
      .catch((err) => {
        console.log(err?.response?.status);
      });
  };

  const handleNotification = () => {return (
    <span className={styles.notification}>
      <Notification type="success" msg={process.env.NEXT_PUBLIC_CONTACT_FORM_SUCCESS} />
      </span>
    )}

  return (
    <>
    <div className='container'>
      <Header size={2} redText="Formularz" blackText=" Kontaktowy" />
    </div>
    <div className={styles.contact_form}>
      <div>
        <Image
          src="/images/FORMULARZ_KONTAKTOWY.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div style={{ zIndex: '2', position: 'relative' }}>
        <div className="columns">
          <div className="column is-6">
            <Formik
              initialValues={{
                email: '',
                firstName: '',
                lastName: '',
                phoneNumber: '',
                content: '',
              }}
              validationSchema={ContactSchema}
              onSubmit={(values) => {
                handleEmail(values);
              }}
            >
              {({
                isSubmitting,
                getFieldProps,
                handleChange,
                handleBlur,
                values,
                errors,
                touched,
              }) => (
                <Form className="mx-6 mt-4">
                  <div className="columns is-multiline">
                    <div className="column is-full mt-5">
                      <div className="field">
                        <div className="control">
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
                            value={values.email}
                            placeholder="E-mail"
                          />
                          <ErrorMessage name="email">
                            {(msg) => <Help msg={msg} type={'danger'} />}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="column is-half">

                      <div className="field">
                        <div className="control">
                          <Field
                            className={
                              touched.firstName
                                ? touched.firstName && !errors.firstName
                                  ? 'input is-success'
                                  : 'input is-danger'
                                : 'input'
                            }
                            id="firstName"
                            name="firstName"
                            type="text"
                            onChange={handleChange}
                            value={values.firstName}
                            placeholder="Imię"
                          />
                          <ErrorMessage name="firstName">
                            {(msg) => <Help msg={msg} type={'danger'} />}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="column is-half">
                      <div className="field">
                        <div className="control">
                          <Field
                            className={
                              touched.email
                                ? touched.email && !errors.email
                                  ? 'input is-success'
                                  : 'input is-danger'
                                : 'input'
                            }
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                            placeholder="Nazwisko"
                          />
                          <ErrorMessage name="lastName">
                            {(msg) => <Help msg={msg} type={'danger'} />}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="column is-full">
                      <div className="field">
                        <div className="control">
                          <Field
                            className={
                              touched.email
                                ? touched.email && !errors.email
                                  ? 'input is-success'
                                  : 'input is-danger'
                                : 'input'
                            }
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                            onChange={handleChange}
                            value={values.phoneNumber}
                            placeholder="Numer telefonu"
                          />
                          <ErrorMessage name="phoneNumber">
                            {(msg) => <Help msg={msg} type={'danger'} />}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="column is-full">
                      <div className="field">
                        <div className="control">
                          <textarea
                            className={
                              touched.email
                                ? touched.email && !errors.email
                                  ? 'textarea is-success'
                                  : 'textarea is-danger'
                                : 'textarea'
                            }
                            id="content"
                            name="content"
                            onChange={handleChange}
                            value={values.content}
                            placeholder="Wiadomość"
                            style={{"resize": "none"}}
                          />
                          <ErrorMessage name="content">
                            {(msg) => <Help msg={msg} type={'danger'} />}
                          </ErrorMessage>
                        </div>
                      </div>
                    </div>
                    <div className="column is-centered">
                      <div className="field mt-3">
                        <div className="control has-text-centered">
                          <button
                            type="submit"
                            className="button is-primary"
                            style={{ width: '240px' }}
                            id="submitButton"
                            disabled={isDisabled}
                          >
                            Wyślij
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="column is-5 has-text-centered is-hidden-touch">
            <div className='title is-size-2 is-uppercase'>
              <div className={styles.cta}>
              <span className={`content ${styles.has_shadow} has-text-white`}>
              <p>jesteśmy dla ciebie</p>
              <p>tel. 601 262 148</p>
              </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {notification == true ? (handleNotification()) : null}
    </>
  );
}

export default ContactForm;
