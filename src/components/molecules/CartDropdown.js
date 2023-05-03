import {FaShoppingCart} from 'react-icons/fa';
import styles from '../templates/KoszykTemplate.module.css';
import {useState} from 'react';

function CartDropdown({basketsData}) {
  const [isActive, setIsActive] = useState(false);
  const [basketName, setBasketName] = useState('Wybierz koszyk');

  return (
    <div className={`dropdown my-5 ${isActive ? 'is-active' : null}`}>
      <div className="dropdown-trigger">
        <button
          className={`button ${styles.dropdown}`}
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div className="is-flex is-justify-content-flex-end">
            <span className="icon-text mr-4">
            <FaShoppingCart />
            </span>
            <div>
              {basketName}
              </div>
          </div>
        </button>
      </div>
      <div
        className={`dropdown-menu ${styles.dropdown}`}
        id="dropdown-menu"
        role="menu"
      >
        <div className="dropdown-content">
          {basketsData?.map((item) => {
            return (
              <a href="#" className="dropdown-item">
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CartDropdown;
