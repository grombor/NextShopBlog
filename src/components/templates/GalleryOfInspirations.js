import HeaderWithButton from '../molecules/HeaderWithButton';
import {Header} from '../atoms/Header';
import {Button} from '../atoms/Button';
import {useRouter} from 'next/router';
import GallerySlider from '../molecules/Slider/GallerySlider';
import styles from './TheyTrustUs.module.css';

const GalleryOfInspirations = ({data}) => {
  const router = useRouter();
  return (
    <div className="my-6">
      <HeaderWithButton>
        <Header
          size="2"
          redText={data?.headerRed}
          blackText={data?.headerBlack}
          subHeaderSize="4"
          subHeaderText={data?.subHeader}
        />
        {data?.buttonTitle ? (
          <span className={styles.button}>
            <Button type="danger" onClick={() => {
              router.push(data?.buttonUrl)
            }}>
              {data?.buttonTitle}
            </Button>
          </span>
        ) : null}
      </HeaderWithButton>
      <GallerySlider data={data}/>
    </div>
  );
};

export default GalleryOfInspirations;
