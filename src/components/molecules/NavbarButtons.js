import styles from './NavbarButtons.module.css';
import {
  FaPlusCircle,
  FaRegCheckCircle,
  FaRegUser,
  FaShoppingCart,
  FaTrash,
} from 'react-icons/fa';
import UserService from '../../services/UserService';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../../axios-config';
import CartService from '../../services/CartService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SpinnerCircularFixed } from 'spinners-react';

function NavbarButtons({ isLoggedIn, userRole }) {
  const router = useRouter();
  const [carts, setCarts] = useState([]);
  const [selectedItem, setSelectedItem] = useState(0);

  const [isActiveEditModal, setIsActiveEditModal] = useState(false);
  const [requestOrderStatus, setRequestOrderStatus] = useState(true);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    getCarts();
  }, [selectedItem]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const isAdmin = () => {
    return userRole === 'ADMIN';
  };

  const addBasket = () => {
    setIsActiveEditModal(true);
    // console.log('baskets')
    // const newBaskets = [...carts, `koszyk ${carts.length + 2}`]
    // setCarts(newBaskets)
  };

  const handleClick = (uuid) => {
    router.push(
      {
        pathname: '/sklep/koszyk',
        query: { id: uuid },
      },
      undefined,
      { shallow: true }
    );
  };

  // const handleDelete = (index) => {
  //   const newBaskets = [...carts];
  //   newBaskets.splice(index, 1);
  //   setCarts(newBaskets);
  //   setSelectedItem(null);
  // };

  const handleSaveNew = async () => {
    setRequestOrderStatus(false);
    let body = {
      name: inputValue,
      anonymousOwnerId: CartService.getAnonymousUserId(),
    };
    await axiosWithAuth
      .post(process.env.NEXT_PUBLIC_API_URL + '/api/cart', body)
      .then(async (result) => {
        if (result.status === 200) {
          setRequestOrderStatus(true);
          setIsActiveEditModal(false);
          await getCarts();
        }
      });
  };

  const registerButton = (
    <a href="/uzytkownik/rejestracja" className="navbar-item">
      zarejestruj się
    </a>
  );

  const logoutButton = (
    <a
      className="navbar-item"
      onClick={() => {
        UserService.logout();
        router.reload();
      }}
    >
      Wyloguj się
    </a>
  );

  const manageButton = (
    <a href="/cms/panelStrony" className="navbar-item">
      Zarządzanie
    </a>
  );

  const profileButton = (
    <a href="/uzytkownik/profil" className="navbar-item">
      Profil
    </a>
  );

  const loginButton = (
    <a
      className="navbar-item"
      onClick={() => {
        router.push('/uzytkownik/logowanie');
      }}
    >
      Zaloguj się
    </a>
  );

  const getCarts = async () => {
    await axiosWithAuth
      .get(process.env.NEXT_PUBLIC_API_URL + '/api/cart/all', {
        params: { anonymousOwnerId: CartService.getAnonymousUserId() },
      })
      .then((newCartResult) => {
        if (newCartResult.status === 200) {
          console.log(newCartResult.data.data);
          setCarts(newCartResult.data.data);
        }
      });
  };

  const setActive = async (uuid, name) => {
    let body = {
      uuid: uuid,
      anonymousOwnerId: CartService.getAnonymousUserId(),
    };
    await axiosWithAuth
      .put(process.env.NEXT_PUBLIC_API_URL + '/api/cart/active', body)
      .then(async (response) => {
        if (response.status === 200) {
          await getCarts();
          toast.success(
            `Koszyk ${name.toUpperCase()} wybrano jako aktywny. Do niego trafią kolejne produkty`,
            {
              position: toast.POSITION.TOP_LEFT,
            }
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          console.log(error.response.data.data);
          toast.warn(error.response.data.data, {
            position: toast.POSITION.TOP_LEFT,
          });
        } else {
          console.log(error.message);
        }
      });
  };

  const handleDelete = async (uuid, name) => {
    let body = {
      cartId: uuid,
      anonymousOwnerId: CartService.getAnonymousUserId(),
    };
    await axiosWithAuth
      .delete(process.env.NEXT_PUBLIC_API_URL + '/api/cart', { data: body })
      .then(() => {
        getCarts();
        toast.success(`Koszyk ${name.toUpperCase()} został usunięty`, {
          position: toast.POSITION.TOP_LEFT,
        });
      })
      .catch((error) => {
        if (error.response.status === 409) {
          console.log(error.response.data.data);
          toast.warn(error.response.data.data, {
            position: toast.POSITION.TOP_LEFT,
          });
        } else {
          console.log(error.message);
        }
      });
  };

  const modal = (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title is-uppercase">dodaj koszyk</p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => {
              setIsActiveEditModal(false);
            }}
          ></button>
        </header>
        <section className="modal-card-body">
          <input
            type="text"
            className="input"
            placeholder="Podaj nazwę"
            onChange={handleChange}
          />
        </section>
        <footer className="modal-card-foot">
          <button className="button is-success" onClick={handleSaveNew}>
            {!requestOrderStatus ? (
              <SpinnerCircularFixed
                size={24}
                thickness={200}
                speed={120}
                color="#BC1725"
                secondaryColor="#082333"
              />
            ) : (
              'Zapisz'
            )}
          </button>
          <button
            className="button"
            onClick={() => {
              setIsActiveEditModal(false);
            }}
          >
            Anuluj
          </button>
        </footer>
      </div>
    </div>
  );

  const cartWhenUserLoggedIn = (
    <div className={`navbar-item has-dropdown is-hoverable`}>
      <a className={`button navbar-link ${styles.button}`}>
        <span className="icon">
          <FaShoppingCart />
        </span>
      </a>
      <div className="navbar-dropdown is-right is-uppercase">
        <table className="table is-fullwidth">
          <tbody>
            {carts.map((item, index) => (
              <tr key={index}>
                <td style={{ width: '20px' }}>
                  <a
                    className="navbar-item"
                    onClick={() => handleClick(item?.uuid)}
                  >
                    {item?.name}
                  </a>
                </td>
                <td>
                  <span className="icon">
                    {item?.isActive && <FaRegCheckCircle />}
                  </span>
                </td>
                <td style={{ width: '20px' }}>
                  <span
                    className="icon"
                    onClick={() => handleDelete(item?.uuid, item?.name)}
                  >
                    <FaTrash />
                  </span>
                </td>
                <td style={{ width: '20px' }}>
                  <span
                    className="icon"
                    onClick={() => setActive(item?.uuid, item?.name)}
                  >
                    <FaShoppingCart />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className="is-flex is-justify-content-space-between pr-3"
          onClick={addBasket}
        >
          <a className="navbar-item">nowy koszyk</a>
          <span className="icon pt-1">
            <FaPlusCircle />
          </span>
        </div>
        {isActiveEditModal === true ? modal : null}
      </div>
    </div>
  );

  const settingsButton = (
    <a href="/cms/ustawienia" className="navbar-item">
      ustawienia
    </a>
  );

  return (
    <div className="field has-addons">
      <div className="control">
        <nav
          className={`navbar is-transparent ${styles.button}`}
          role="navigation"
          aria-label="dropdown navigation"
        >
          <div className={`navbar-item has-dropdown is-hoverable`}>
            <a className={`button navbar-link ml-6 ${styles.button}`}>
              <span className="icon">
                <FaRegUser />
              </span>
            </a>
            <div className="navbar-dropdown is-uppercase">
              {/* {isLoggedIn ? null : loginButton}
              {!isLoggedIn ? registerButton : null}
              {isLoggedIn ? profileButton : null}
              {isLoggedIn && isAdmin() ? manageButton : null}
              {isLoggedIn && isAdmin() ? settingsButton : null}
              {isLoggedIn ? logoutButton : null} */}
              {profileButton}
              {manageButton}
              {settingsButton}
              {logoutButton}
            </div>
          </div>
          {cartWhenUserLoggedIn}
        </nav>
      </div>
      <ToastContainer />
    </div>
  );
}

export default NavbarButtons;
