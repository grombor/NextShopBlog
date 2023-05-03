import HeaderWithButton from '../molecules/HeaderWithButton';
import {Header} from '../atoms/Header';
import {Button} from '../atoms/Button';
import {useRouter} from 'next/router';
import FurnitureCategorySlider from '../molecules/Slider/FurnitureCategorySlider';
import styles from './TheyTrustUs.module.css';


const FurnitureCategory = (categoriesData) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/sklep');
  };

  return (
    <div>
      <HeaderWithButton>
        <Header
          size="2"
          redText="kategorie "
          blackText="meblowe"
          subHeaderSize="4"
          subHeaderText="POZNAJ SZEROKĄ OFERTĘ MEBLI METALOWYCH MARKI MALOW"
        />
        <span className={styles.button}>
          <Button type="danger" onClick={handleClick}>
          Pprzejdź do sklepu
          </Button>
        </span>
      </HeaderWithButton>
      <FurnitureCategorySlider data={categoriesData} />
    </div>
  );
};

export default FurnitureCategory;
