import Link from 'next/link';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import LogInSchema from '../../helpers/LogInSchema';
import React, {useState} from 'react';
import Notification from '../atoms/notification';
import {useRouter} from 'next/router';
import styles from './LoginTemplate.module.css';
import {Button} from '../atoms/Button';
import Help from '../atoms/help';
import {FaKey, FaRegUser} from 'react-icons/fa';
import AuthService from '../../services/AuthService';

function LoginTemplate() {
  const router = useRouter();
  const query = router.query.message;
  const [backendResponse, setBackendResponse] = useState();

  return (
    <section className={`my-6 ${styles.section}`}>
      {query === 'success' ? (
        <Notification msg={process.env.NEXT_PUBLIC_LOGIN_INFO} />
      ) : null}

      {backendResponse === 'fail' ? (
        <Notification type="danger" msg={process.env.NEXT_PUBLIC_LOGIN_FAIL} />
      ) : null}

      {backendResponse === 'success' ? (
        <Notification
          type="success"
          msg={process.env.NEXT_PUBLIC_LOGIN_SUCCESS}
        />
      ) : null}
      <div className="container">
        <div className="columns">
          <div className="column is-6-tablet mx-auto my-6">
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={LogInSchema}
              onSubmit={(values) => {
                const response = AuthService.login(values)
                .then (response => {
                  if (response.status === 200) {
                    setTimeout(() => {
                      router.push('/');
                    }, 2500);
                  }
                })
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
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        placeholder="E-mail"
                      />
                      <span className="icon is-small is-left">
                        <FaRegUser />
                      </span>
                      <ErrorMessage name="email">
                        {(msg) => <Help msg={msg} type={'danger'} />}
                      </ErrorMessage>
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
                        placeholder="Hasło"
                        onChange={handleChange}
                        value={values.password}
                      />
                      <span className="icon is-small is-left">
                        <FaKey />
                      </span>
                      <ErrorMessage name="email">
                        {(msg) => <Help msg={msg} type={'danger'} />}
                      </ErrorMessage>
                    </div>
                  </div>
                  <div className="has-text-left is-size-6 mb-6">
                    <Link href="/user/recovery">
                      <a className="block">Zapomniałeś hasła? Kliknij tutaj!</a>
                    </Link>
                  </div>
                  <div className="field is-grouped my-4">
                    <div className="control mx-auto">
                      <button
                        type="submit"
                        className="button is-primary"
                        style={{ width: '240px' }}
                      >
                        ZALOGUJ
                      </button>
                      <p className="block has-text-centered has-text-weight-bold my-3">
                        LUB
                      </p>
                      <Button
                        type="button"
                        onClick={() => {
                          router.push('/uzytkownik/rejestracja');
                        }}
                      >
                        Załóż konto
                      </Button>
                      <p className="block has-text-centered has-text-weight-medium my-3">
                        To zajmuje mniej, niż 5 minut!
                      </p>
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

export default LoginTemplate;
