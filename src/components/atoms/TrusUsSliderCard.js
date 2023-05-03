import Image from 'next/image';
import styles from './TrusUsSliderCard.module.css'
import {useRouter} from 'next/router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



function TrusUsSliderCard({ data }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(data.linkURL);
  };

  return (
    <div className={`card ${styles.card}`}>
      <div className="card-image" style={{ position: 'relative' }}>
        <figure className={styles.figure}>
          <Image
            src='https://fakeimg.pl/360x360/?text=360x360px'
            layout="fill"
            objectFit="cover"
            // width='150'
            // height='150'
            // onClick={handleClick}
            alt={data.expectedImage}
          />
        </figure>
      </div>
    </div>
  );
}

export default TrusUsSliderCard;
