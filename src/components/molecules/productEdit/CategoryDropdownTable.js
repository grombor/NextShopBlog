import React from 'react';
import {FaEdit} from 'react-icons/fa';
import styles from './CategoryDropdownTable.module.css';

function CategoryDropdownTable() {
  return (
    <table className="table is-striped is-hoverable is-fullwidth is-bordered">
        <tr>
          <th className={styles.column}>KATEGORIA GŁÓWNA</th>
          <th className={styles.column}>KATEGORIA DODATKOWA 1</th>
          <th className={styles.column}>KATEGORIA DODATKOWA 2</th>
          <th className={styles.column}>EDYTUJ KATEGORIE</th>
        </tr>
      <tbody>
        <tr>
          <td className={styles.column}>PODKATEGORIA</td>
          <td className={styles.column}>PODKATEGORIA</td>
          <td className={styles.column}>PODKATEGORIA</td>
          <td className={styles.last_column}>
            <span className={`icon is-size-4 pb-2`}>
              <FaEdit />
            </span>
          </td>
        </tr>
        <tr>
          <td className={styles.column}>RODZINA</td>
          <td className={styles.column}>RODZINA</td>
          <td className={styles.column}>RODZINA</td>
          <td className={styles.last_column}>
            <span className={`icon is-size-4 pb-2 ${styles.last_column}`}>
              <FaEdit />
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default CategoryDropdownTable;
