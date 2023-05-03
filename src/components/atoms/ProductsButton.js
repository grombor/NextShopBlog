import styles from './ProductsButton.module.css';
import {FaPlusCircle} from 'react-icons/fa';
import {useRouter} from 'next/router'


function ProductsButton() {
  const router = useRouter()
  return (
    <button className={`button is-danger is-uppercase ${styles.button} my-2`}
    onClick={() => {
      router.push('/cms/produkty/edycja/nowy')
    }}
    >
      <span>dodaj produkt</span>
      <span className="icon-text mb-1 mx-2">
        <FaPlusCircle />
      </span>
    </button>
  );
}

export default ProductsButton;
