import React from 'react';
import {FaCheckSquare, FaLongArrowAltRight, FaShoppingCart, FaTruck, FaUser, FaWallet,} from 'react-icons/fa';
import styles from './BasketTopPanel.module.css';

function BasketTopPanel({
    cart,
    truck,
    user,
    wallet,
    check
}) {
  return (
    <div className={styles.container}>
      <div className={styles.flexbox}>
        <FaShoppingCart className={cart ? styles.active : styles.svg} />
        <FaLongArrowAltRight className={styles.svg} />
        <FaTruck className={truck ? styles.active : styles.svg} />
        <FaLongArrowAltRight className={styles.svg} />
        <FaUser className={user ? styles.active : styles.svg} />
        <FaLongArrowAltRight className={styles.svg} />
        <FaWallet className={wallet ? styles.active : styles.svg} />
        <FaLongArrowAltRight className={styles.svg} />
        <FaCheckSquare className={check ? styles.active : styles.svg} />
      </div>
    </div>
  );
}

export default BasketTopPanel;
