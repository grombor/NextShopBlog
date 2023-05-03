import Image from "next/image";
import styles from './BrandLogo.module.css';

function BrandLogo() {
  return (
      <a className={`navbar-item px-0 mr-4 ${styles.brand}`} href="/">
        <Image src='https://fakeimg.pl/160x40/?text=Logo' layout="fill" objectFit="contain" alt='brand_logo' priority />
      </a>
  );
}

export default BrandLogo;
