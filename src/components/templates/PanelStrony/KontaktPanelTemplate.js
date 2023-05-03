import SideMenu from '../../molecules/Accordion/SideMenu';
import {FaTrash} from 'react-icons/fa';
import styles from './KontaktPanelTemplate.module.css';
import {Button} from '../../atoms/Button';
import {useEffect, useState} from 'react';

import H1 from '../../atoms/CMS/H1';
import H2 from '../../atoms/CMS/H2';
import axiosWithAuth from "../../../axios-config";

function KontaktPanelTemplate({ data, emailData }) {
  // aby dzialalo zamien 'emailData' na 'data'
  const [receivers, setReceivers] = useState(emailData);
  const [reload, setReload] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    try {
      const response = axios
        .get(process.env.NEXT_PUBLIC_API_URL + '/api/contact-form/owner-mails')
        .then((response) => {
          setReceivers(response.data.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [reload]);

  const handleSaveClick = () => {
    const formData = {
      phone: document.getElementById('phone').value,
      address: document.getElementById('address').value,
      email: document.getElementById('email').value,
      nip: document.getElementById('nip').value,
    }
    console.log(formData)
  };

  const handleSendClick = () => {
    const elem = document.getElementById('new_reciver');
    const NewEmailAddress = elem.value;
    addEmail(NewEmailAddress);
  };

  const handleDeleteEmailAddress = (email) => {
    removeEmail(email);
    const newReceivers = [...receivers];
    newReceivers.splice(email, 1);
    setReceivers(newReceivers);
    setReload(!reload);
  };

  async function addEmail(email) {
    try {
      const response = await axiosWithAuth.post(process.env.NEXT_PUBLIC_API_URL + `/api/contact-form/owner-mails/${email}`);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  async function removeEmail(email) {
    try {
      const response = await axiosWithAuth.delete(
        `http://46.41.149.166:9090/api/contact-form/owner-mails/${email}`
      );
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="columns my-6">
      <div className="column is-3 is-offset-1">
        <SideMenu data={data} />
      </div>
      <div className="column is-8">
        <H1>edycja sekcji kontakt</H1>
        <H2>formularz kontaktowy</H2>

        <p>
          Wpisz adres e-mail, który chcesz dołączyc do listy odbiorców
          wiadomości z formularza kontaktowego
        </p>

        <div className="is-flex">
          <input className="input" id="new_reciver" name="new_reciver" />
          <button
            className="button is-primary is-uppercase ml-4"
            onClick={handleSendClick}
          >
            prześlij
          </button>
        </div>

        <table
          className={`table is-hoverable is-bordered is-fullwidth mt-6`}
          id="lista-odbiorcow"
        >
          <thead>
            <tr>
              <td colSpan="2">
                <h2 className="subtitle is-size-5 is-uppercase">
                  lista odbiorców
                </h2>
              </td>
            </tr>
          </thead>
          <tbody>
            {receivers?.map((item, index) => {
              return (
                <tr key={`tr${index}`} id={`tr${index}`}>
                  <td key={`td1${index}`}>
                    <span
                      className={styles.first_cell_content}
                      key={`span${index}`}
                    >
                      {item}
                    </span>
                  </td>
                  <td
                    className={styles.last_cell}
                    onClick={() => handleDeleteEmailAddress(item)}
                    key={`td2${index}`}
                  >
                    <FaTrash />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <h2 className="subtitle is-size-4 is-uppercase mt-6 mb-5">
          dane kontaktowe
        </h2>

        <div className="columns is-multiline">
          <div className="column is-7 is-offset-2">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-uppercase">telefon</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      defaultValue=""
                      id="phone"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-7 is-offset-2">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-uppercase">adres</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      defaultValue=""
                      id="address"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-7 is-offset-2">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-uppercase">e-mail</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      defaultValue=""
                      id="email"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-7 is-offset-2">
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label is-uppercase">nip</label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control">
                    <input
                      className="input"
                      type="text"
                      defaultValue=""
                      id="nip"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 has-text-centered">
          <Button type="danger" onClick={handleSaveClick}>
            zapisz zmiany
          </Button>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await axiosWithAuth.get(
      NEXT_PUBLIC_API_URL + '/api/contact-form/owner-mails'
    );
    return {
      props: {
        emailData: response.data.data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default KontaktPanelTemplate;
