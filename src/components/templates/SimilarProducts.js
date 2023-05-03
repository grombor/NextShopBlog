import HeaderWithButton from '../molecules/HeaderWithButton';
import {Header} from '../atoms/Header';
import {Button} from '../atoms/Button';
import {useRouter} from 'next/router';
import styles from '../templates/SimilarProducts.module.css'
import BestsellersSlider from '../molecules/Slider/BestsellersSlider'

const SimilarProducts = () => {
  const sliderData = [
    {
      size: '',
      content: 'Szafa aktowa SBM 203 M lx',
      price: '480',
      buttonTitle: 'PRZEJDŹ DO SKLEPU',
      buttonURL: '#',
      imageURL: 'https://via.placeholder.com/220x220.png?text=220x220px'
    },
    {
      size: '',
      content: 'PODSTAWA Z SIEDZISKIEM DO SUM 320',
      price: '480',
      buttonTitle: 'PRZEJDŹ DO SKLEPU',
      buttonURL: '#',
      imageURL: 'https://via.placeholder.com/220x220.png?text=220x220px'
    },
    {
      size: '',
      content: 'COKÓŁ DO SUM 320',
      price: '480',
      buttonTitle: 'PRZEJDŹ DO SKLEPU',
      buttonURL: '#',
      imageURL: 'https://via.placeholder.com/220x220.png?text=220x220px'
    },
    {
      size: '',
      content: 'SZAFA UBRANIOWA SUM 420 W ST',
      price: '480',
      buttonTitle: 'PRZEJDŹ DO SKLEPU',
      buttonURL: '#',
      imageURL: 'https://via.placeholder.com/220x220.png?text=220x220px'
    },
    {
      size: '',
      content: 'SZAFA UBRANIOWA SUM 340 W ST',
      price: '480',
      buttonTitle: 'PRZEJDŹ DO SKLEPU',
      buttonURL: '#',
      imageURL: 'https://via.placeholder.com/220x220.png?text=220x220px'
    },
    {
      size: '',
      content: 'SZAFA UBRANIOWA SUM 340 W ST',
      price: '480',
      buttonTitle: 'PRZEJDŹ DO SKLEPU',
      buttonURL: '#',
      imageURL: 'https://via.placeholder.com/220x220.png?text=220x220px'
    },
  ];

  const router = useRouter();

  const handleClick = () => {
    router.push('/sklep');
  };

  return (
    <div className='container my-6'>
      <HeaderWithButton>
        <Header
          size="2"
          redText="Podobne"
          blackText=" produkty"
          subHeaderSize="4"
          subHeaderText="POZNAJ NAJMODNIEJSZE WYBORY NASZYCH KLIENTÓW"
        />
        <span className={styles.button}>
          <Button type="danger" onClick={handleClick}>
            PRZEJDŹ DO SKLEPU
          </Button>
        </span>
      </HeaderWithButton>
      <BestsellersSlider sliderData={sliderData} />
    </div>
  );
};

export default SimilarProducts;
