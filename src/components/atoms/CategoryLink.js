import {FaAngleDown, FaAngleRight} from 'react-icons/fa';
import styles from './CategoryLink.module.css';

function CategoryLink({ children }) {
  return (
    <div className="dropdown is-hoverable">
      <a
        className={styles.button}
        aria-haspopup="true"
        aria-controls="dropdown-menu4"
      >
        <span className="is-uppercase mr-1">{children}</span>
        <span className="icon pb-1" aria-hidden="true">
          <FaAngleDown />
        </span>
      </a>
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className={`dropdown-content ${styles.dropdown_content}`}>
          <div className="columns">
            {/* level 2 */}
            <div className="column">
              <div className="is-flex">
                <a href="#" className={styles.link}>
                  link 1
                </a>
                <span className="icon pt-2">
                  <FaAngleRight />
                </span>
              </div>
            </div>
            {/* level 3 */}
            <div className="column">
              <div className="is-flex">
                <a href="#" className={styles.link}>
                  link 2
                </a>
                <span className="icon pt-2">
                  <FaAngleRight />
                </span>
              </div>
            </div>
            {/* level 4 */}
            <div className="column">
              <div className="is-flex">
                <a href="#" className={styles.link}>
                  link 3
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryLink;
