import HeaderWithButton from '../molecules/HeaderWithButton';
import {Header} from '../atoms/Header';
import {Button} from '../atoms/Button';
import {useRouter} from 'next/router';
import BestsellersSlider from '../molecules/Slider/BestsellersSlider';
import styles from './TheyTrustUs.module.css';


const Bestsellers = ({ data }) => {

  const router = useRouter();
  const handleClick = () => {
    router.push('/sklep');
  };

  return (
    <div className='container my-6'>
      <HeaderWithButton>
        <Header
          size="2"
          redText="bestsellery"
          blackText=" i promocje"
          subHeaderSize="4"
          subHeaderText="POZNAJ NAJMODNIEJSZE WYBORY NASZYCH KLIENTÓW"
        />
        <span className={styles.button}>
          <Button type="danger" onClick={handleClick}>
            PRZEJDŹ DO SKLEPU
          </Button>
        </span>
      </HeaderWithButton>
      <BestsellersSlider sliderData={data?.slides} />
    </div>
  );
};

export default Bestsellers;
