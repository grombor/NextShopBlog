import HeaderWithButton from '../molecules/HeaderWithButton';
import {Header} from '../atoms/Header';
import {Button} from '../atoms/Button';
import {useRouter} from 'next/router';
import BarWithLogotypes from '../molecules/BarWithLogotypes';
import styles from './TheyTrustUs.module.css';


const TheyTrustUs = ({ data }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/galeria/zaufali_nam');
  };

  const redButton = (
    <span className={styles.button}>
          <Button type="danger" onClick={handleClick}>
            { data?.buttonTitle }
          </Button>
        </span>
  )

  return (
    <div className="container py-6">
      <HeaderWithButton>
        <Header
          size="2"
          redText={data?.headerRed}
          blackText={data?.headerBlack}
          subHeaderSize="4"
          subHeaderText={data?.subHeader}
        />
        {data ? redButton : null}
      </HeaderWithButton>
      <BarWithLogotypes data={images} />
    </div>
  );
};

const images = Array.from({length: 11 - 1 + 1}, (_, i) => i + 1)
  .map(number => {
    return(
      `/images/galeria/zaufali_nam/${number}.jpg`
    )
  })

export default TheyTrustUs;
