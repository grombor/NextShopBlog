import {useFormik} from 'formik';

// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function PasswordRecovery() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container my-6">
      <div className="columns">
        <div className="column is-6-tablet mx-auto">
          <form className="box" onSubmit={formik.handleSubmit}>
            <div className="field">
              <label className="label">Podaj adres e-mail</label>
              <div className="control has-icons-left has-icons-right">
                <input
                  className="input"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                <span className="icon is-small is-left">
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                </span>
              </div>
            </div>
            <div className="field is-grouped my-4">
              <div className="control mx-auto">
                <button className="button is-primary" type="submit">
                  Przypomnij hasło
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PasswordRecovery;
