import React from 'react';
import {FaPlus} from 'react-icons/fa';
import EditIcons from '../molecules/EditIcons';
import styles from './EditCategoryTemplate.module.css';

function EditCategoryTemplate() {
  return (
    <div>
      <div className="is-size-4 is-uppercase has-text-weight-semibold">
        edytowanie kategorii
      </div>
      <div className="is-size-4 mb-6 mt-5 is-uppercase">lista kategorii</div>
      <div className="columns is-multiline">
        <div className="column is-full is-uppercase mb-6">
          opis funkcji i przestrogi
        </div>

        <table className="table is-fullwidth is-striped is-hoverable">
          <tr>
            <th>
              <button className={`button is-uppercase ${styles.first_column}`}>
                kolejność
              </button>
            </th>
            <th>
              <button className="button is-uppercase ml-3">nazwa</button>
            </th>
          </tr>
          <tbody>
            <tr>
              <td className={styles.first_column}>
                <input type="text" className={`input`} defaultValue={1} />
              </td>
              <td className={styles.second_column}>
                <div className="is-flex">
                  <input
                    type="text"
                    className="input ml-3"
                    defaultValue="BIUROWE (MACIERZYSTA)"
                  />
                  <div className="mt-2 ml-3">
                    <EditIcons />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.first_column}>
                <input type="text" className={`input`} defaultValue={2} />
              </td>
              <td className={styles.second_column}>
                <div className="is-flex">
                  <input
                    type="text"
                    className="input ml-3"
                    defaultValue="SOCJALNE (MACIERZYSTA)"
                  />
                  <div className="mt-2 ml-3">
                    <EditIcons />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.first_column}>
                <input type="text" className={`input`} defaultValue={3} />
              </td>
              <td className={styles.second_column}>
                <div className="is-flex">
                  <input
                    type="text"
                    className="input ml-3"
                    defaultValue="MEDYCZNE (MACIERZYSTA)"
                  />
                  <div className="mt-2 ml-3">
                    <EditIcons />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.first_column}>
                <input type="text" className={`input`} defaultValue={4} />
              </td>
              <td className={styles.second_column}>
                <div className="is-flex">
                  <input
                    type="text"
                    className="input ml-3"
                    defaultValue="WARSZTATOWE (MACIERZYSTA)"
                  />
                  <div className="mt-2 ml-3">
                    <EditIcons />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.first_column}>
                <input type="text" className={`input`} defaultValue={5} />
              </td>
              <td className={styles.second_column}>
                <div className="is-flex">
                  <input
                    type="text"
                    className="input ml-3"
                    defaultValue="SZKOLNE (MACIERZYSTA)"
                  />
                  <div className="mt-2 ml-3">
                    <EditIcons />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className={styles.first_column}></td>
              <td className={styles.second_column}>
                <div className="is-flex">
                  <button
                    className={`button is-primary is-uppercase ml-3 ${styles.button}`}
                  >
                    dodaj kategorię
                  </button>
                  <div className="mt-2 ml-3">
                    <span className="is-size-4">
                      <FaPlus />
                    </span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EditCategoryTemplate;
