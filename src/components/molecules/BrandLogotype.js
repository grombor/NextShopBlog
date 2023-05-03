import {useEffect, useState} from 'react';
import BrandLogo from '../atoms/BrandLogo';
import styles from './BrandLogotype.module.css';

function BrandLogotype({ handleBurgerButton }) {
  const [isActive, setIsActive] = useState('false');
  const toggleIsActive = () => {
    if (isActive === 'true') {
      setIsActive('false');
      return isActive
    } else {
      setIsActive('true');
      return isActive
    }
  }

  useEffect(() => {
    toggleIsActive();
  }, [])

  return (
    <div className="navbar-brand">
      <div className="is-flex is-align-content-flex-start is-align-items-start mt-2">
        <BrandLogo />
        <span className={`block is-uppercase ${styles.text} is-hidden-touch mr-6 mt-2`}>
          meble
          <br />
          metalowe
        </span>
      </div>
      <a 
        role="button" 
        className="navbar-burger mr-5" 
        aria-label="menu" 
        aria-expanded="false" 
        data-target="navbarBasicExample"
        onClick={() => {handleBurgerButton(toggleIsActive())}}
      >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
    </div>
  );
}

export default BrandLogotype;
