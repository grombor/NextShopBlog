import BrandLogotype from '../molecules/BrandLogotype';
import NavbarButtons from '../molecules/NavbarButtons';
import NavbarLinks from '../molecules/NavbarLinks';
import UserService from '../../services/UserService';
import {useEffect, useState} from 'react';

function Navbar() {
const [isLoggedIn, setIsLoggedIn] = useState();
const [userRole, setUserRole] = useState();
const [isActive, setIsActive] = useState(null);

useEffect(() => {
  checkIsLoggedIn();
  setIsActive('is-not-active');
}, [])

const checkIsLoggedIn = () => {
  const token = UserService.getToken();
  if (token) {
    setIsLoggedIn(true);
    setUserRole(UserService.getRole())
  } else {
    setIsLoggedIn(false)
  }
}

const handleBurgerButton = (childData) => {
if (childData === 'true') {
  setIsActive('is-active');
} else {
  setIsActive('is-not-active');
}
}

  return (
    <nav
      className={`navbar is-fixed-top is-transparent has-shadow`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className='container'>
      <BrandLogotype handleBurgerButton={handleBurgerButton} />
      <NavbarLinks isActive={isActive} />
      <div className="navbar-menu my-2">
        <div
          className="is-flex is-justify-content-flex-end mr-6"
          style={{ width: '100%' }}
        >
          <NavbarButtons isLoggedIn={isLoggedIn} userRole={userRole} />
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
