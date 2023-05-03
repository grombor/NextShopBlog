import Image from 'next/image';
import styles from './GallerySliderCard.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderCard({ data }) {
  return (
    <div className={`card ${styles.card}`}>
      <div className="card-image" style={{ position: 'relative' }}>
        <figure className={styles.figure}>
          <Image
            src={data}
            layout="fill"
            objectFit="cover"
            // alt={data.imageAlt}
            priority
          />
        </figure>
      </div>
    </div>
  );
}

export default SliderCard;
